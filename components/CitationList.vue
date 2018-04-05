<template>
<ol class="citationList">
    <slot> </slot>
</ol>
</template>

<style>

.citationList {
    columns: 2;
    column-width: 300px;
    padding-left: 0;
    font-size: 14px;
    font-style: italic;
}

.citationList li {
    margin-left: 30px;
    padding: 0.25em 0;
    min-width: 300px;
    word-break: break-all;
}

.citationList a:target {
    background-color: #F5F5F5;
}

.citationList a {
    color: #333333;
}

.citationList a:link {
    color: rgb(61, 153, 145);
}

</style>