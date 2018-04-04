<template>
    <div class="pageContent">
        <h1> Auditory Effect Replications </h1>

        <audio-player 
            src="/audio/Auditory Hallucinations - Distorted Forest.mp3"
            title="Trippy Forest"
            artist="EmEx"
             />

        <audio-player 
            src="/audio/Auditory Hallucinations - DMT Drone.mp3"
            title="DMT Drone"
            artist="EmEx"
             />

        <audio-player 
            src="/audio/Auditory Hallucinations - Math Lecture.ogg"
            title="Math Lecture"
            artist="EmEx"
             />

        <audio-player 
            src="/audio/Auditory Hallucinations - Normal vs Suppressed.ogg"
            title="Normal vs Suppressed"
            artist="EmEx"
             />

        <audio-player 
            src="/audio/Auditory Hallucinations - Paranoid Voices.mp3"
            title="Paranoid Voices"
            artist="EmEx"
             />                  
    </div>
</template>

<script>

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue';

export default {
    components: {
        AudioPlayer
    }
}

</script>