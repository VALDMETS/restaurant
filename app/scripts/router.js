import $ from 'jquery';
import Bb from 'backbone';

import renderMenu from './views/menu';
import renderOrder from './views/orderpage';

const Router = Bb.Router.extend({

  routes: {
    'menu'           : 'menuFunction',
    'order'          : 'orderFunction',
    'order/complete' : 'orderComplete'
  },
  menuFunction: function() {
    console.log('make menu');
    renderMenu();
  },
  orderFunction: function() {
    renderOrder();
  },
  orderComplete: function() {
    console.log('make final page');
  }
});

const router = new Router();

export default router;
