<template>
    <div>
        <form @submit.prevent="upload">
            <h3> Profile Image </h3>

            <h4> Full </h4>
            <input type="file" @change="processFullImage" />
            <img class="imageUpload__croppedImage" width="400" v-show="full.content" :src="full.content" />
        
            <h4> Cropped </h4>
            <input type="file" @change="processCroppedImage" />
            <img class="imageUpload__croppedImage" width="250"  v-show="cropped.content" :src="cropped.content" />
            <br />
            <button type="submit"> Upload </button>
            <div v-show="uploadStatus" class="imageUpload__uploadStatus"> {{ uploadStatus }} </div>
        </form>
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
            },
            uploadStatus: ''
        }
    },
    methods: {
        processFullImage(e) { this.processImage(e, 'full'); },
        processCroppedImage(e) { this.processImage(e, 'cropped'); },
        processImage(e, type) {
            let input = e.target;
            if (input.files && input.files[0]) {
               
                let file = input.files[0];
                this[type].file = file;

                let reader = new FileReader();
                reader.onload = (e) => this[type].content = e.target.result;
                reader.readAsDataURL(file);
            }
        },
        async upload() {
            let fullImageData = (this.full.file ? this.full.file : undefined);
            let croppedImageData = (this.cropped.file ? this.cropped.file : undefined);

            let formData = new FormData();

            formData.append('username', this.username);
            if (fullImageData) formData.append('fullImageData', fullImageData);
            if (croppedImageData) formData.append('croppedImageData', croppedImageData);

            try {
                this.uploadStatus = 'Uploading...';
                let response = await this.$axios.$post('/api/profiles/upload', formData);
                if (response) this.uploadStatus = 'Uploaded!';
            } catch (error) {
                this.uploadStatus = 'Error!';
            }
        }


    },
    updated() {
        this.$emit('input', { full: this.full.file, cropped: this.cropped.file });
    },
    props: ['username']
}
</script>

<style>
    .imageUpload__croppedImage {
        margin: 1em 0;
    }

    .imageUpload__uploadStatus {
        display: inline-block;
        margin: 1em;
        font-style: italic;
        color: #999;
    }
</style>