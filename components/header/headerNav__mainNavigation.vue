<template>
    <div class="headerNav__mainNavigation">
        <section-item location="/" value="Home" />
        <section-item location="/" value="Effects" />
        <section-item location="/" value="Replications" />
        <section-item location="/" value="Reports" />        
        <section-item location="/" value="Project" />
        <section-item location="/" value="Community" />
        <donate-button />
    </div>
</template>

<script>

import SectionItem from '@/components/header/headerNav__sectionItem';
import DonateButton from '@/components/header/headerNav__donateButton';

export default {
    components: {
        SectionItem,
        DonateButton
    }
}

</script>

<style>
    .headerNav__mainNavigation {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;
        font-family: 'proxima-nova';
        font-size: 13px;
        font-weight: 600;
    }

    .headerNav__mainNavigation a {
        color: white;
        font-weight: 600;
        padding: 10px 0;
        letter-spacing: 2px;
    }

</style>