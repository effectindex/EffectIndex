import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faEye, faVolumeUp, faHandPaper, faUnlink, faUtensils, faCogs, faUser,
  faChild, faFrown, faArrowUp, faArrowDown, faLightbulb, faUserCog, faInfinity,
  faEdit, faTimes, faAngleDoubleUp, faTimesCircle, faChevronDoubleLeft, faChevronDoubleRight,
  faPlay, faPause, faImage, faHeart, faTrash, faUsers, faEnvelope, faQuestion, faHeartRate,
  faSitemap, faImages, faListAlt, faFileSignature, faSearch, faExternalLink, faBookOpen,
  faFlask, faSun, faComment, faMoon, faCapsules } from '@fortawesome/pro-regular-svg-icons';

import { faChartLine as fasChartLine} from '@fortawesome/pro-solid-svg-icons';

import { faDiscord, faFacebook, faReddit, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEye, faVolumeUp, faHandPaper, faUnlink, faUtensils, faCogs, faUser,
  faChild, faFrown, faArrowUp, faArrowDown, faLightbulb, faUserCog, faInfinity,
  faEdit, faTimes, faAngleDoubleUp, faTimesCircle, faChevronDoubleLeft, faChevronDoubleRight,
  faPlay, faPause, faImage, faHeart, faTrash, faEnvelope, faUsers, faQuestion, faHeartRate,
  faSitemap, faImages, faListAlt, faFileSignature, faFlask, faSearch, faExternalLink, faBookOpen,
  faSun, faComment, faMoon, faCapsules);

library.add(fasChartLine);

library.add(faDiscord, faFacebook, faReddit, faYoutube, faGithub);

config.autoAddCss = false;

Vue.component('fa', FontAwesomeIcon);
