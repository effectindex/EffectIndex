<template>
    <div class="relatedSubstances">
        <p> Compounds which may cause this effect commonly include: </p>
        <div class="relatedSubstances__list">
            <span v-for="(substance, index) in substanceList" :key="substance"
            >{{ formatSubstance(substance, index) }}</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        formatSubstance(substance, index) {
            return substance + ((index < (this.substanceList.length - 1)) ? ', ' : ''); 
        }
    },
    props: ['substanceList']
}
</script>

<style>

.relatedSubstances p {
    margin: 1em 0;
}

.relatedSubstances__list {
   color: rgb(100, 100, 100);
   padding-left: 1em;
}

</style>