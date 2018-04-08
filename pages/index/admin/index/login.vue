<template>

<div>

<h2> Login </h2>
<div class="login__formContainer">
    <div>  
        <label> Username </label> <input v-model="username" />
    </div>
    <div> 
        <label> Password </label> <input v-model="password" type="password" />
    </div>
    <button @click="login()"> Login </button>
</div>

</div>

</template>

<script>
export default {
    methods: {
        login () {
            this.$auth.loginWith('local', {
                data: {
                    username: this.username,
                    password: this.password
                }
            })
        }
    },

    data () {
        return {
            username: undefined,
            password: undefined
        }
    }
}
</script>

<style scoped>

label {
    display: block;
    width: 100px;
}

.login__formContainer {
    padding: 1em 0;
}

input {
    margin-bottom: 1em;
    height: 30px;
    border: 1px solid #AAA;
    padding: 10px;
}

button {
    height: 30px;
    width: 100px;
    font-size: 18px;
}

</style>