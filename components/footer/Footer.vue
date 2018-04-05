<template>
    <footer>
        <div class="footer__social">
            <img src="/sm-icon-reddit.svg" height="32" width="32" />
            <img src="/sm-icon-youtube.svg" height="32" width="32" />
            <img src="/sm-icon-instagram.svg" height="32" width="32" />
            <img src="/sm-icon-spotify.svg" height="32" width="32" />
        </div>
        <div class="footer__secret">
        <p> disregardeverythingisay@gmail.com </p>
        <p class="memorium"> In loving memory of Phillip Edmunds. </p>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #1f1f1f;
        text-align: center;
        color: #666;
        font-family: Titillium Web;
        font-size: 18px;
    }

    .footer__social {
        background-color: #2e2e2e;
        padding: 2em;
    }

    .footer__social img {
        margin: 0.3em;
    }

    .footer__secret {
        padding: 1em 0;
    }

    p {
        padding: 2em 0;
    } 

    .memorium {
        font-style: italic;
        color: #1f1f1f;
        padding: 0;
    }
</style>