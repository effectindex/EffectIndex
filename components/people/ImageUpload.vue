<template>
  <div>
    <form @submit.prevent="upload">
      <input 
        type="file"
        @change="handleFileInputChange"
      >
      <cropper
        v-if="imageUrl"
        :src="imageUrl"
        :stencil-props="{
          aspectRatio: 1/1,
        }"
        @change="cropperChanged"
      />
      <div
        v-show="result.image"
        class="imageUploadPreview"
      >
        <h4> Profile Image Preview </h4>
        <preview
          
          :height="300"
          :width="300"
          :image="result.image"
          :coordinates="result.coordinates"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { Cropper, Preview } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
  components: {
    Cropper,
    Preview
  },
  props: {
    personId: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      imageUrl: undefined,
      uploadStatus: "",
      errorMessage: "",
      result: {
        coordinates: null,
        image: null,
        height: null,
        width: null
      }
    };
  },
  methods: {
    cropperChanged({ coordinates, image, canvas}) {
			this.result = {
				coordinates,
				image,
        height: canvas.height,
        width: canvas.width
			};
    },
    processFullImage(e) {
      this.processImage(e, "full");
    },
    processCroppedImage(e) {
      this.processImage(e, "cropped");
    },
    async handleFileInputChange(e) {
      this.imageUrl = undefined;
      let input = e.target;
      if (input.files && input.files[0]) {
        const formData = new FormData();
        formData.append("image", input.files[0]);
        formData.append("personId", this.personId);

        try { 
          this.uploadStatus = "Uploading..";

          const { imageUrl } = await this.$axios.$post('/api/persons/imageUpload', formData);
          if (imageUrl) {
            const { protocol, hostname, port } = window.location;
            const url = `${protocol}//${hostname}${port ? ':' + port : ''}/${imageUrl}`;
            this.uploadStatus = 'Uploaded!';
            this.imageUrl = url;
          }
        } catch (error) {
          this.uploadStatus = 'Error.';
          console.log(error);
        }

      }
    },
    // async upload() {
    //   let fullImageData = this.full.file ? this.full.file : undefined;
    //   let croppedImageData = this.cropped.file ? this.cropped.file : undefined;

    //   let formData = new FormData();

    //   formData.append("username", this.username);
    //   if (fullImageData) formData.append("fullImageData", fullImageData);
    //   if (croppedImageData)
    //     formData.append("croppedImageData", croppedImageData);

    //   try {
    //     this.uploadStatus = "Uploading...";
    //     let response = await this.$axios.$post(
    //       "/api/profiles/upload",
    //       formData
    //     );
    //     if (response) this.uploadStatus = "Uploaded!";
    //   } catch (error) {
    //     this.uploadStatus = "Error!";
    //     if ('response' in error) {
    //       if ('data' in error.response) {
    //         this.uploadStatus = this.uploadStatus + " " + error.response.data.error.message;
    //       }
    //     }
    //   }
    // }
  },
};
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