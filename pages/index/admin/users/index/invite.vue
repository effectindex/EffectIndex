<template>
    <div>
        <hr />
        <h3> Invite Users </h3>
        
        <label for="expiration"> Expiration </label>
        <datepicker v-model="expiration" name="expiration"></datepicker>
        
    </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    components: {
        Datepicker
    }
}

</script>