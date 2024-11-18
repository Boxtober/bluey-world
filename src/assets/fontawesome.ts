// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDog, faBone, faUser, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; // Cœur rempli
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // Cœur vide

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faUser, fasHeart, farHeart, faDog, faBone);

export default FontAwesomeIcon;
