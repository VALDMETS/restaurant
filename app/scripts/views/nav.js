import $ from 'jquery';
import Bb from 'backbone';
import router from '../router';


function navFunction() {

  $('.placeorder').click(function(){
    router.navigate('order', {trigger: true});
  });

}

export default navFunction;
