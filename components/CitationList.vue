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
    font-weight: bold;
}

.citationList li {
    margin-left: 30px;
    padding: 0.25em 0;
    min-width: 300px;
    hyphens: auto;
    font-weight: bold;
    break-inside: avoid;
}

.citation__contents {
    font-weight: normal;
    margin-left: 5px;
}

.citationList li:target {
    background-color: #E6E6F6;
}

.citationList a:link {
    color: rgb(61, 153, 145);
}

</style>