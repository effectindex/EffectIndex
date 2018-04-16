    <template>
        <div>
            <h1> {{ (this.effect ? 'Update' : 'Add') }} an Effect </h1>

            <div>
                <label> Name </label>
                <input v-model="name" size="100" />
            </div>

            <div>
                <label> Description </label>
                <textarea class="description" v-model="description"> </textarea>
            </div>

            <button @click="submitEffect"> Submit </button>

        </div>
    </template>

<script>
    export default {
        data () {
            return {
                name: this.effect ? this.effect.name : '',
                description: this.effect ? this.effect.description_formatted : ''
            }
        },
        methods: {
            submitEffect() {
                this.$emit(this.effect ? 'edit-effect': 'new-effect', { name: this.name, description: this.description });
            }
        },
        props: ['effect'],
        middleware: ['auth']
    }
</script>

    <style>
    label {
        display: block;
        font-weight: bold;
        margin: 1em 0;
    }

    .description {
        width: 100%;
        height: 300px;
    }
</style>