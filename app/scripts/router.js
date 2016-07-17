import $ from 'jquery';
import Bb from 'backbone';

import renderMenu from './views/menu';
import renderOrder from './views/orderpage';
import renderThankYou from './views/thankyou';

const Router = Bb.Router.extend({

  routes: {
    'menu'           : 'menuFunction',
    'order'          : 'orderFunction',
    'order/complete' : 'orderComplete'
  },
  menuFunction: function() {
    renderMenu();
  },
  orderFunction: function() {
    renderOrder();
  },
  orderComplete: function() {
    renderThankYou();
  }
});

const router = new Router();

export default router;
