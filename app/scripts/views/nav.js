import $ from 'jquery';
import Bb from 'backbone';
import router from '../router';


function navFunction() {

  $('input').click(function(){
    console.log('whatever');
    router.navigate('menu', {trigger: true});
  });

}

export default navFunction;
