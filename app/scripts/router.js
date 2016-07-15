import $ from 'jquery';
import Bb from 'backbone';

const Router = Bb.Router.extend({

  routes: {
    menu           : 'menuFunction',
    'order'          : 'orderFunction',
    'order/complete' : 'orderComplete'
  },
  menuFunction: function() {
    console.log('make menu');
  },
  orderFunction: function() {
    console.log('make order');
  },
  orderComplete: function() {
    console.log('make final page');
  }
});

const router = new Router();

export default router;

// const Router = Bb.Router.extend({
//
//   routes: {
//     page1  : 'oneFunction',
//     page2  : 'twoFunction',
//     page3  : 'threeFunction',
//     page4  : 'fourFunction',
//     page5  : 'fiveFunction'
//   },
//   oneFunction: function(){
//     console.log(whatever);
//   },
//   twoFunction: function() {
//     renderPage2();
//   },
//   threeFunction: function() {
//     renderPage3();
//   },
//   fourFunction: function() {
//     renderPage4();
//   },
//   fiveFunction: function() {
//     renderPage5();
//   },
// });
//
// const router = new Router ();
//
// export default router;
