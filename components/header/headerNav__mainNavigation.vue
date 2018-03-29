<template>
    <div class="headerNav__mainNavigation">
        <menu-item location="/" value="Home" />
        <menu-item location="/" value="Effects" :subMenuItems="subMenuItems.effects" />
        <menu-item location="/" value="Replications" :subMenuItems="subMenuItems.replications" />
        <menu-item location="/" value="Reports" />        
        <menu-item location="/" value="Project" :subMenuItems="subMenuItems.project" />
        <menu-item location="/" value="Community" :subMenuItems="subMenuItems.community" />
        <donate-button />
    </div>
</template>

<script>

import MenuItem from '@/components/header/headerNav__menuItem';
import DonateButton from '@/components/header/headerNav__donateButton';

export default {
    components: {
        MenuItem,
        DonateButton
    },
    data() {
        return {
            subMenuItems: {
                effects: [
                    { name: 'All', location: '/' },
                    { name: 'Sensory', location: '/sensory/' },
                    { name: 'Cognitive', location: '/cognitive/' },
                    { name: 'Physical', location: '/physical/' },
                    { name: 'Psychedelics', location: '/psychedelics/' },
                    { name: 'Dissociatives', location: '/dissociatives/' },
                    { name: 'Deliriants', location: '/deliriants/' }
                ],
                replications: [
                    { name: 'Gallery', location: '/gallery' },
                    { name: 'Audio', location: '/audio' },
                    { name: 'Tutorials', location: '/tutorials' },
                    { name: 'Artists', location: '/artists' }
                ],
                project: [
                    { name: 'Blog', location: '/blog/' },
                    { name: 'Search', location: '/search' },
                    { name: 'Contact', location: '/contact' },
                    { name: 'About', location: '/about' },
                    { name: 'Github',
                        location: 'https://github.com/GabrielMorris/effect-index',
                        external: true
                    },
                    { name: 'Form', 
                        location: 'https://docs.google.com/forms/u/0/d/1VdkmHgkng78fPrpqIFd7qDti5B7ml_oD8ZFiHbid8w0/edit?usp=forms_home&ths=true',
                        external: true
                    }
                ],
                community: [
                    { name: 'Discord', location: '/discord-chat/' },
                    { name: 'Subreddit', location: 'http://reddit.com/r/replications', external: true }
                ]
            }
        }
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
</style>