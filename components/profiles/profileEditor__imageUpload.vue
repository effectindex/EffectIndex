<template>
    <div>
        <h4> Full </h4>
        <input type="file" @change="processFullImage" />
        <img class="fullImage" width="400" v-show="full.content" :src="full.content" />
       
        <h4> Cropped </h4>
        <input type="file" @change="processCroppedImage" />
        <img class="croppedImage" width="250"  v-show="cropped.content" :src="cropped.content" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            full: {
                file: undefined,
                content: undefined
            },
            cropped: {
                file: undefined,
                content: undefined
            }
        }
    },
    methods: {
        processFullImage(e) { this.processImage(e, 'full'); },
        processCroppedImage(e) { this.processImage(e, 'cropped'); },
        processImage(e, type) {
            let input = e.target;
            if (input.files && input.files[0]) {
                let file = input.files[0];
                let reader = new FileReader();

                this[type].file = file;
                reader.onload = (e) => this[type].content = e.target.result;
                reader.readAsDataURL(file);
            }
        }
    },
    updated() {
        this.$emit('input', { full: this.full.file, cropped: this.cropped.file });
    }
}
</script>

<style scoped>
img {
    margin: 2em auto;
}

</style>