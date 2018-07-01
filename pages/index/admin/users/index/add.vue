<template>
    <div class="pageContent adduser">
        <hr />
        <h3> Add a User </h3>

        <label for="username"> Username </label>
        <input style="width: 20em;" v-model="user.username" />

        <label for="url"> URL </label>
        <input style="width: 20em;" v-model="user.url" />

        <label for="username"> Role </label>
        <select v-model="user.role">
            <option value="admin"> Admin </option>
            <option value="editor"> Editor </option>
            <option value="artist"> Artist </option>
            <option value="user"> User </option>
        </select>
        <div>
            <button ref="submitButton" @click="submitUser"> Submit </button>
            <button @click="clearFields"> Clear </button>
        </div>
        <div v-show="error.didError" class="errorMessage">
            {{ 'Error: ' + error.name }}
        </div>
        <div v-show="success" class="success">
            User successfully added.
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            user: {
                username: '',
                url: '',
                role: ''
            },
            error: {
                didError: false,
                name: ''
            },
            success: false
        }
    },
    methods: {
        clearFields() {
            for (var key in this.user) this.user[key] = '';
            this.clearMessages();
        },
        clearMessages() {
            this.error.didError = false;
            this.error.name = '';
            this.success = false;
        },
        async submitUser() {
            try {
                this.clearMessages();
                this.$refs.submitButton.enabled = false;
                let { user } = await this.$axios.$post('/api/users/add', { user: this.user });
                this.$refs.submitButton.enabled = true;
                this.success = true;
            } catch (err) {
                this.error.didError = true;
                if ('message' in err.response.data) this.error.name = err.response.data['message'];
                this.$refs.submitButton.enabled = true;
            }
            
        }
    }
}

</script>