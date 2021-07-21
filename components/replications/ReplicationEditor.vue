<template>
  <div>
    <div>
      <label> Title: </label>
      <input 
        v-model="title"
        class="input__singleLine"
      >
    </div>
    <div>
      <label> Artist (Person): </label>
      <person-input v-model="person" />
    </div>
    <div>
      <label> Artist (Freetext): </label>
      <input 
        v-model="artist"
        class="input__singleLine"
      >
    </div>
    <div>
      <label> Artist Webpage: </label>
      <input 
        v-model="artist_url"
        class="input__singleLine"
      >
    </div>
    <div>
      <label> Associated Effects: </label>
      <ul class="effectList">
        <li 
          v-for="effect in $store.state.effects"
          :key="effect.id"
        >
          <input
            :id="effect.name"
            v-model="associated_effects"
            :value="effect._id"
            type="checkbox"
            class="effectList__checkbox"
          > {{ effect.name }}
        </li>
      </ul>
    </div>
    <div>
      <label> Description: </label>
      <textarea 
        v-model="description"
        class="input__textarea"
      />
    </div>
    <div>
      <label> Date: </label>
      <input
        v-model="date" 
        class="input__singleLine"
      >
    </div>
    <div class="input__typeSelector">
      <label> Type: </label>
      <input 
        id="radioButton__image" 
        v-model="type"
        type="radio"
        value="image" 
      >
      <label for="radioButton__image"> Image </label>
      <input 
        id="radioButton__gfycat" 
        v-model="type"
        type="radio" 
        value="gfycat" 
      >
      <label for="radioButton__image"> Gfycat </label>
      <input 
        id="radioButton__audio" 
        v-model="type"
        type="radio" 
        value="audio" 
      >
      <label for="radioButton__image"> Audio </label>
    </div>

    <div>
      <label> {{ type === 'gfycat' ? 'Gfycat ID' : 'Filename' }}: </label>
      <input 
        v-model="resource"
        class="input__singleLine"
      >
    </div>
    <div v-show="(type === 'gfycat')">
      <label> Thumbnail: </label>
      <input
        v-model="thumbnail"
        class="input__singleLine"
      >
    </div>

    <div 
      v-if="(type === 'image')" 
      class="replicationEditor__imagePreview"
    >
      <img
        v-show="resource"
        :src="'/img/gallery/' + resource"
        height="200"
      >
      <img 
        v-show="resource"
        :src="'/img/gallery/thumbnails/' + resource"
      >
    </div>

    <div 
      v-else-if="(type === 'gfycat')"
      class="replicationEditor__gfycatPreview"
    >
      <iframe 
        :src="'https://gfycat.com/ifr/' + resource"
        frameborder="0" 
        scrolling="no" 
        height="200" 
      />
      <img 
        v-show="thumbnail || (type === 'gfycat')" 
        :src="thumbnail ?
          ('/img/gallery/thumbnails/' + thumbnail) : 'https://thumbs.gfycat.com/' + resource + '-mobile.jpg'" 
        style="max-width: 300px;"
      >
    </div>

    <div 
      v-else-if="(type === 'audio')"
    >
      <audio-player
        :src="'/audio/' + resource"
        :title="title"
        :artist="artist"
      />
    </div>

    <div>
      <label for="featured">
        Featured 
        <input 
          id="featured"
          v-model="featured"
          type="checkbox"
        >
      </label>
    </div>

    <div>
      <label> Associated Effects: </label>
      <ul class="effectList">
        <li 
          v-for="effect in effects"
          :key="effect.id"
        >
          <input
            :id="effect.name"
            v-model="associated_effects"
            :value="effect._id"
            type="checkbox"
            class="effectList__checkbox"
          > {{ effect.name }}
        </li>
      </ul>
    </div>
    <div>
      <label> Description: </label>
      <textarea 
        v-model="description"
        class="input__textarea"
      />
    </div>
    <div>
      <label> Date: </label>
      <input
        v-model="date" 
        class="input__singleLine"
      >
    </div>
    

    <div class="replication__buttons">
      <button @click="submitReplication()">
        Save
      </button>
      <nuxt-link 
        to="/admin/replications"
      >
        <button> Cancel </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "@/components/replications/audio/AudioPlayer.vue";
import PersonInput from "@/components/people/PersonInput";

export default {
  components: {
    AudioPlayer,
    PersonInput
  },
  props: {
    replication: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      id: this.replication ? this.replication._id : "",
      resource: this.replication ? this.replication.resource : "",
      thumbnail: this.replication ? this.replication.thumbnail : "",
      type: this.replication ? this.replication.type : "",
      title: this.replication ? this.replication.title : "",
      url: this.replication ? this.replication.url : "",
      person: this.replication ? this.replication.person : undefined,
      artist: this.replication ? this.replication.artist : "",
      artist_url: this.replication ? this.replication.artist_url : "",
      description: this.replication ? this.replication.description : "",
      date: this.replication ? this.replication.date : "",
      associated_effects: this.replication
        ? this.replication.associated_effects
        : [],
      featured: this.replication ? this.replication.featured : false,
    };
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  },
  mounted() {
    this.$store.dispatch("effects/get");
  },

  methods: {
    submitReplication() {
      const { id, type, person, resource, thumbnail, title, artist, artist_url, description, date, associated_effects, featured } = this;
      const replication = { id, type, person, resource, thumbnail, title, artist, artist_url, description, date, associated_effects, featured };

      this.$emit(this.replication ? "edit-replication" : "new-replication", replication);
    }
  },
  middleware: ["auth"]
};
</script>

<style scoped>
label {
  display: block;
  margin: 1em 0;
  font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input__typeSelector > label {
  display: inline-block;
  margin: 1em 2em 0 0;
}

.input__typeSelector > input {
  display: inline-block;
  margin-right: 1em;
  cursor: pointer;
}

.input__textarea {
  width: 100%;
  min-height: 250px;
  padding: 1em;
}

.replicationEditor__gfycatPreview {
  padding-top: 1em;
}

.replicationEditor__gfycatPreview img {
  margin-left: 1em;
}

.replicationEditor__imagePreview img {
  margin-top: 1em;
  margin-right: 1em;
}

.replicationEditor__audioPreview {
  padding-top: 1em;
}

.input__singleLine,
textarea {
  font-family: "titillium web", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  border: 1px solid #cccccc;
  padding: 0.5em 1em;
  font-size: 16px;
  width: 100%;
}

.effectEditor__showHide {
  font-size: 14px;
  text-align: right;
  user-select: none;
}

a {
  cursor: pointer;
}

button {
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100px;
  padding: 1em;
  margin-top: 1em;
  opacity: 0.6;
  cursor: pointer;
}

.replication__buttons button {
  margin-right: 1em;
}

button:hover {
  opacity: 1;
}

.effectList {
  list-style: none;
  padding: 0;
  columns: 3;
  font-size: 14px;
}

.effectList li {
  display: flex;
  align-items: center;
  margin: 0.25em 0;
}

.effectList li input {
  margin-right: 1em;
}
</style>