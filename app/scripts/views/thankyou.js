import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import orderFunction from './order';

function renderThankYou(){

    $('.orderup').addClass('hidden');
    $('.orderconfirmed').removeClass('hidden');
    $('.thankexit').click(function(){
      $('.orderconfirmed').addClass('hidden');
      $('.overlay').addClass('hidden');
      $('.ordercontent').empty();
      $('.confirmbox').empty();
      $('.currenttax').text('$0.00');
      $('.currenttotal').text('$0.00');
      let orderList = orderFunction();
      console.log(orderList);
      orderList.items = [];
      console.log(orderList.items);
      router.navigate('menu',{trigger: true});
    });


}

export default renderThankYou;
