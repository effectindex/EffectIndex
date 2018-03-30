<template>
    <div class="pulloutMenu__itemContainer">
        <a v-if="!children" :href="location"> {{ name }} </a>
        <a v-else @click="toggleExpanded()">
            <span v-if="!expanded"> + </span> 
            <span v-else> - </span>
             {{ name }}
        </a>
        <ol v-if="expanded && children">
            <li v-for="child in children" :key="child.name"> 
                <nuxt-link @click.native="togglePullout()" v-if="!child.external" :to="child.location"> {{ child.name }} </nuxt-link>
                <a v-else :href="child.location" target="_blank"> {{ child.name }} </a>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                expanded: false
            }
        },
        methods: {
            toggleExpanded() {
                this.expanded = !this.expanded;
            },
            togglePullout() {
                console.log('doing it');
                this.$store.commit('toggle_navbar');
            }
        },
        props: ['name', 'location', 'children']
    }
</script>

<style>

.pulloutMenu__itemContainer ol {
    list-style: none;
    padding-left: 20px;
    margin-bottom: 30px;
}

.pulloutMenu__itemContainer li {
    margin-top: 0.75em;
}

.pulloutMenu__itemContainer a {
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    transition: 0.25s;
}

.pulloutMenu__itemContainer a:hover {
    color: rgb(128, 226, 221);
}

</style>
