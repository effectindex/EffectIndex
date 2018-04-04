<template>
    <div class="audioPlayer">
        <div class="audioPlayer--audioInfo">
            <div class="audioPlayer--titleBar"> 
                <span class="audioPlayer--title"> {{ title }} </span> 
                - <span class="audioPlayer--artist"> {{ artist }} </span> </div>
            <div class="audioPlayer--positionBar">  {{ position.toFixed(2) }}/{{ length.toFixed(2) }} </div>

        </div>
        <div class="audioPlayer--content">
            <div class="audioPlayer--playButton">
                <a v-if="state === 'STOPPED' || state === 'PAUSED'" @mousedown="play()"> <i class="fa fa-play"> </i> </a>
                <a v-else-if="state === 'PLAYING'" @mousedown="pause()"> <i class="fa fa-pause"> </i> </a>
            </div>
            <div class="audioPlayer--waveform" ref="waveform"> 
                <div class="audioPlayer--nonwaveform"> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: 'STOPPED',
            id: null,
            length: 0,
            position: 0,
            wavesurfer: undefined
        }
    },
    methods: {
        play() {
            this.state = 'PLAYING';
            this.wavesurfer.play();
        },
        pause() {
            this.state = 'PAUSED';
            this.wavesurfer.pause();
        },
        ready() {
            this.length = this.wavesurfer.getDuration()
        }
    },
    mounted() {
        this.wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform, 
            waveColor: '#555555',
            progressColor: '#3d9991', 
            height: '50',
            responsive: true, 
            normalize: true
        });

        this.wavesurfer.load(this.src);

        this.wavesurfer.on('ready', this.ready);

        this.wavesurfer.on('audioprocess', () => {
            this.position = this.wavesurfer.getCurrentTime();
        })
    },
    props: ['src', 'title', 'artist']
}

</script>


<style>

    .audioPlayer--audioInfo {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .audioPlayer--audioInfo > div {
        flex: 1;
    }

    .audioPlayer--title {
        font-weight: bold;
        color: #3d9991;
    }

    .audioPlayer--artist {
        font-style: italic;
    }

    .audioPlayer--positionBar {
        text-align: right;
    }

    .audioPlayer--content {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .audioPlayer--playButton {
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid #CCC;
    }

    .audioPlayer--nonwaveform {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: 50px;
        width: 100%;
        height: 50px;
    }

    .audioPlayer--waveform {
        height: 50px;
        width: 100%;
        margin: 0 1em;
    }

    .audioPlayer--playButton a {
        color: #555;
        margin: 0;
        padding: 0;
        width: 50px;
        height: 50px;
        display: block;
        cursor: pointer;
    }

</style>