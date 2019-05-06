<template>
  <nuxt/>
</template>

<style>
@font-face {
  font-family: 'Proxima Nova';
  font-display: swap;
  src: url('/fonts/proxima-nova-medium.woff2');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #1f1f1f;
}

.body--noscroll {
  overflow: hidden;
}

/* Container Styling */

.content {
  display: flex;
  position: relative;
  flex-direction: row;
}

.modal-active {
  overflow: hidden;
}

.notifications {
  display: block;
  position: fixed;
  z-index: 5000;
}

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

}

.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.vue-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}

.vue-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}

.sectionContainer {
  transition: margin-left 0.25s ease-out;
  z-index: 3;
  min-height: 100vh;
  width: 100%;
  background-color: white;
}

.page {
  margin: 0 auto;
  padding: 96px 32px;
  max-width: 1000px;
  min-height: 100vh;
}

@media (max-width: 1100px) {
  .sectionContainerPulledout {
    margin-left: -220px;
  }

  .page {
    padding: 32px 16px;
  }
}

.fa {
  height: 1em;
}

@media (max-width: 400px) {
  .page {
    padding: 8px;
  }
}

/* Generic Components */
.column {
  flex: 1;
  min-width: 300px;
}

.column:not(:last-child) {
  margin-right: 1em;
  margin-bottom: 1em;
}

.columns {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 650px) {
  .column:not(:last-child) {
    margin-right: 0em;
  }
}

/* Page Content Styling */

.pageContent {
  padding-bottom: 50px;
  font-size: 18px;
  flex: 3;
  color: #333;
}

.pageContent .categoryIcon {
  float: right;
  font-size: 35px;
  opacity: 0.6;
  margin: 5px 0px 0px 15px;
}

.pageContent p {
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  line-height: 28.8px;
  margin: 0 0 1em 0;
}

.pageContent .bold {
  font-weight: bold;
}

.pageContent .underline {
  text-decoration: underline;
}

.pageContent a {
  color: #3d9991;
  text-decoration: none;
}

.pageContent a:hover {
  color: #27635d;
}

.pageContent .blackButton {
  display: block;
  border: 0;
  cursor: pointer;
  font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 125px;
  margin: 1em 0;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #272727;
  opacity: 1;
  padding: 13px 15px;
  transition: opacity 100ms linear;
}

.pageContent .whiteButton {
  display: block;
  position: relative;
  width: 125px;
  z-index: 5;
  border: 1px solid #ddd;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5em;
  opacity: 0.5;
  color: #000;
  cursor: pointer;
  font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12pt;
}

.pageContent .whiteButton:hover {
  opacity: 0.8;
}

.pageContent h1 {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 15px;
}

.pageContent h3,
.pageContent h4 {
  text-transform: uppercase;
  font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 400;
  color: rgb(74, 74, 74);
  margin: 1em 0;
}

.pageContent ul {
  padding: 0;
  padding-left: 2em;
  margin-bottom: 1em;
  color: #666;
}

.pageContent h4 {
  font-size: 18px;
}

.pageContent hr {
  margin: 50px 0;
  border: 0;
  border-top: 1px solid #ccc;
}

/* Formatted Documents */

.formattedDocument {
  overflow: hidden;
}

.formattedDocument ul,
.formattedDocument ol {
  margin: 0;
  white-space: normal;
}

.formattedDocument p {
  margin: 0;
  padding: 0;
  white-space: normal;
}

.formattedDocument ul li,
.formattedDocument ol li {
  color: black;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
}

.formattedDocument ul li:last-of-type,
.formattedDocument ol li:last-of-type {
  margin-bottom: 0;
}

.formattedDocument p {
  color: black;
}

.formattedDocument .bullet {
  padding-left: 3em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.formattedDocument .bullet::before {
  content: '●';
  padding-right: 1em;
}

/* Effect Categories */

.effectCategories .actionDescription {
  padding: 1em;
  border: 1px solid #eee;
  background-color: #f4f4f4;
}

.effectCategories .effectsContainer {
  margin-bottom: 3em;
}

.effectCategories .titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.effectCategories .actionIcon {
  margin-left: 1em;
}

.effectCategories hr {
  clear: both;
}

.effectCategories h3 {
  font-size: 18pt;
}

.effectCategories .effectsContainer:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

/* Search */

.searchResult {
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  background-color: rgba(252, 252, 252);
}

.searchResult h3 {
  margin: 0;
  margin-bottom: 12px;
}

.searchResult .topContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.searchResult .titleAuthor h3 {
  margin: 0;
  flex: 1;
}

.searchResult .author {
  font-size: 12pt;
}

.searchResult .substanceDose {
  text-align: right;
  flex: 1;
  max-width: 300px;
}

@media (max-width: 650px) {
  .searchResult .topContainer {
    flex-direction: column;
  }

  .searchResult .substanceDose {
    margin: 1em 0;
    text-align: left;
  }
}

.searchResult .substance {
  font-size: 18pt;
  line-height: 1;
}

.searchResult .dose {
  font-size: 12pt;
  color: #888;
}
</style>
