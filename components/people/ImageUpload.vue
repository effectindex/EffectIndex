<template>
  <div>
    <form
      v-if="!value"
      @submit.prevent="upload"
    >
      <label class="uploadButton">
        <input 
          type="file"
          name="profileImage"
          @change="handleFileInputChange"
        >
        Upload File
      </label>
      <cropper
        v-if="previewUrl"
        :src="previewUrl"
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
        <button
          class="save"
          @click.prevent="handleSaveCrop"
        >
          Save
        </button>
      </div>
    </form>
    <div
      v-else
      class="savedImageContainer"
    >
      <img
        :src="'/' + value"
        alt="Profile Image"
      >
      <div class="controls">
        <input
          :value="value"
          class="savedImagePath"
          disabled
        >
        <button
          class="clear"
          @click="clearProfileImage"
        >
          Clear
        </button> 
      </div>
    </div>
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
    value: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      preview: {
        path: undefined,
        filename: undefined
      },
      errorMessage: "",
      result: {
        coordinates: null,
        image: null,
        height: null,
        width: null
      }
    };
  },
  computed: {
    previewUrl() {
      const { path, filename } = this.preview;
      return (path && filename) ? '/' + path + filename : undefined;
    }
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
      this.preview.path = undefined;
      this.preview.filename = undefined;
      let input = e.target;
      if (input.files && input.files[0]) {
        const formData = new FormData();
        formData.append("profileImage", input.files[0]);
        formData.append("personId", this.personId);
        try { 
          const { path, filename } = await this.$axios.$post('/api/persons/imageUpload', formData);
          if (path && filename) {
            this.preview.path = path;
            this.preview.filename = filename;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    async handleSaveCrop() {
      try {
        const { path, filename } = await this.$axios.$post('/api/persons/imageCrop', {
          filename: this.preview.filename,
          coordinates: this.result.coordinates
        });
        this.$emit('input', path + filename);
      } catch (error) {
        console.log(error);
      }
    },
    clearProfileImage() {
      this.$emit('input', undefined);
    }
  },
};
</script>

<style scoped>

.savedImageContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.savedImageContainer .savedImagePath {
  margin: 1em 0;
}

.savedImageContainer .controls {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.savedImageContainer .controls input {
  height: 30px;
}

button {
  padding: 0.5em;
}

input[type="file"] {
  display: none;
}

label, button {
  border: 1px solid #CCC;
  padding: 0.25em 0.5em;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  background-color: #EEE;
  margin: 1em 0;
}

button.save {
  background-color: #EFE;
  padding: 0.5em;
}

button.clear {
  height: 30px;
  margin-left: 15px;
}

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