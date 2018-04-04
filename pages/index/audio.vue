<template>
    <div class="pageContent">
        <h1> Auditory Effect Replications </h1>

        <audio-player 
            src="/audio/Auditory Hallucinations - Normal vs Suppressed.ogg"
            title="Trippy Forest (Auditory distortions)"
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