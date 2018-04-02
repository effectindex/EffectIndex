<template>
    <div class="imageDetailsContainer">
        <h3 class="title"> {{ title }} </h3>
        <h4 class="artist"> by 
            <a :href="artistWebpage" target="_blank">
                {{ artist }}
            </a>
        </h4>
    </div>
</template>

<script>
    export default {
        props: ['title', 'artist', 'artist-webpage']
    }
</script>

