<template>
  <div class="audioPlayer">

    <div class="audioPlayer__content">
      <div class="audioPlayer__playButton">
        <a
          v-if="state === 'UNREADY'">
          <img
            class="spinner" 
            src="/spinner.svg"> 
        </a>
        <a
          v-else-if="state === 'STOPPED' || state === 'PAUSED'"
          @mousedown="play()">
          <fa
            :icon="['far', 'play']"
            class="fa" /> 
        </a>
        <a
          v-else-if="state === 'PLAYING'"
          @mousedown="pause()">
          <fa
            :icon="['far', 'pause']"
            class="fa" /> 
        </a>
      </div>
      <div class="audioPlayer__audioInfo">
        <div class="audioPlayer__titleBar">
          <div class="audioPlayer__title"> {{ title }} </div>
          <div class="audioPlayer__artist"> {{ artist }} </div>
        </div>
      </div>
      <div
        ref="waveform"
        class="audioPlayer__waveform" />
      <div class="audioPlayer__positionDownload">
        <div> {{ getTime(position) }} / {{ getTime(length) }} </div>
        <a
          :href="src"
          target="_blank"> Download </a>
      </div>
    </div>
  </div>
</template>

<script>
let WaveSurfer = undefined;
if (process.browser) WaveSurfer = require("wavesurfer.js");

export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    artist: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      state: "UNREADY",
      id: null,
      length: 0,
      position: 0,
      wavesurfer: undefined
    };
  },
  watch: {
    src: function(val) {
      this.wavesurfer.load(val);
    }
  },
  beforeDestroy() {
    this.pause();
    this.wavesurfer.unAll();
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: this.$refs.waveform,
      waveColor: "#555555",
      cursorColor: "#CCCCCC",
      progressColor: "#3d9991",
      height: "50",
      hideScrollbar: true,
      partialRender: true,
      closeAudioContext: true,
      responsive: true,
      normalize: true
    });

    this.wavesurfer.load(this.src);

    this.wavesurfer.on("ready", this.ready);
    this.wavesurfer.on("audioprocess", this.audioProcess);
    this.wavesurfer.on("finish", this.finish);
  },
  methods: {
    play() {
      this.state = "PLAYING";
      this.wavesurfer.play();
    },
    pause() {
      this.state = "PAUSED";
      this.wavesurfer.pause();
    },
    ready() {
      this.state = "STOPPED";
      this.length = this.wavesurfer.getDuration();
    },
    audioProcess() {
      this.position = this.wavesurfer.getCurrentTime();
    },
    finish() {
      this.state = "STOPPED";
      this.wavesurfer.seekTo(0);
    },
    getTime(time) {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time - minutes * 60);
      seconds =
        seconds.toString().length < 2 ? "0" + seconds.toString() : seconds;
      return `${minutes}:${seconds}`;
    }
  }
};
</script>


<style>

.spinner {
  color: black;
}

.audioPlayer {
  margin-bottom: 2em;
}

.audioPlayer__content {
  display: flex;
  height: 50px;
  background-color: #f5f5f5;
  flex-direction: row;
  position: relative;
}

.audioPlayer__titleBar {
  display: flex;
  height: 50px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 0 1em;
}

@media(max-width: 500px) {
  .audioPlayer__titleBar {
    display: none;
  }
}

.audioPlayer__title {
  color: #3d9991;
  font-size: 14px;
}

.audioPlayer__artist {
  font-style: italic;
  font-size: 13px;
  color: #aaa;
}

.audioPlayer__playButton {
  height: 50px;
  width: 50px;
  border-right: 1px solid #ddd;
  font-size: 20px;

}

.audioPlayer__playButton a {
  display: flex;
  color: #777;
  width: 50px;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease;
}

.audioPlayer__playButton a:hover {
  background-color: #d6d6d6;
}

.audioPlayer__positionDownload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  font-style: italic;
  width: 75px;
  font-size: 12px;
  margin: 0 1em;
}

.audioPlayer__waveform {
  height: 50px;
  flex-grow: 1;
}
</style>