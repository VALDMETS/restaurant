import $ from 'jquery';
import Bb from 'backbone';

import router from './router';
import menuItem from './models/menuitem';
import menuList from './collections/menulist';

console.log(router);
$('input').click(function(){
  console.log('whatever');
  router.navigate('menu', {trigger: true});
});

// $('input').click(function(){
//     router.navigate('page1', {trigger: true});
// });


let menuBuild = new menuList();
console.log(menuBuild);

menuBuild.fetch({
  success: function(response){
    console.log('got em');
    // console.log(response.get('breakfast'));
  }
});

Bb.history.start();
