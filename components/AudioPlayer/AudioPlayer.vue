<template>
    <div class="audioPlayer">
        
        <div class="audioPlayer--content">
            <div class="audioPlayer--playButton">
                <a v-if="state === 'STOPPED' || state === 'PAUSED'" @mousedown="play()"> <i class="fa fa-play"> </i> </a>
                <a v-else-if="state === 'PLAYING'" @mousedown="pause()"> <i class="fa fa-pause"> </i> </a>
            </div>
            <div class="audioPlayer--audioInfo">
                <div class="audioPlayer--titleBar"> 
                    <div class="audioPlayer--title"> {{ title }} </div> 
                    <div class="audioPlayer--artist"> {{ artist }} </div> 
                </div>
            </div>
            <div class="audioPlayer--waveform" ref="waveform"> 
            </div>
            <div class="audioPlayer--positionDownload">  
                <div> {{ getTime(position) }} / {{ getTime(length) }} </div>
                <a :href="src"> Download </a>
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
    props: ['src', 'title', 'artist'],
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
        },
        audioProcess() {
            this.position = this.wavesurfer.getCurrentTime();
        },
        finish() {
            this.state = 'STOPPED';
            this.wavesurfer.seekTo(0);
        },
        getTime(time) {
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time - (minutes * 60));
            seconds = (seconds.toString().length < 2 ? '0' + seconds.toString() : seconds);
            return `${minutes}:${seconds}`;
        }
    },
    mounted() {
        this.wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform, 
            waveColor: '#555555',
            cursorColor: '#CCCCCC',
            progressColor: '#3d9991', 
            height: '50',
            responsive: true, 
            normalize: true
        });

        this.wavesurfer.load(this.src);

        this.wavesurfer.on('ready', this.ready);
        this.wavesurfer.on('audioprocess', this.audioProcess);
        this.wavesurfer.on('finish', this.finish)

    },
    beforeDestroy() {
        this.wavesurfer.unAll();
    }

 
}

</script>


<style>

    .audioPlayer {
        margin-bottom: 2em;
    }

    .audioPlayer--title {
        color: #3d9991;
        font-size: 14px;
    }

    .audioPlayer--artist {
        font-style: italic;
        font-size: 13px;
        color: #AAA;
    }

    .audioPlayer--titleBar {
        margin: 0 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        height: 50px;
        flex: 1;
    }

    .audioPlayer--positionDownload {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        font-style: italic;
        width: 75px;
        font-size: 12px;
        margin: 0 1em;
    }

    .audioPlayer--content {
        display: flex;
        height: 50px;
        background-color: #F5F5F5;
        flex-direction: row;
        position: relative;
    }

    .audioPlayer--playButton {
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border-right: 1px solid #DDD;
    }


    .audioPlayer--waveform {
        height: 50px;
        flex-grow: 1;
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