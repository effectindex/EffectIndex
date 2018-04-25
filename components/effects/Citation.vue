<template>
    <li @click="$emit('click')" :id="'cite-' + from">
        <div class="citation__contents">
            <a v-if="!no || (Number(no) === 1)" :href="'#ref-' + from"> <i class="fa fa-angle-double-up"> </i> </a>
            <span v-else> 
                <i class="fa fa-angle-double-up"> </i> 
                <a v-for="num in Number(no)" :key="num" :href="'#ref-' + from + '-' + num"> [{{num}}] </a> 
            </span>
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    props: ['from', 'no']
}
</script>