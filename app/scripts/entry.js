import $ from 'jquery';
import Bb from 'backbone';

import navFunction from './views/nav';

location.hash = 'menu';

navFunction();
Bb.history.start();
