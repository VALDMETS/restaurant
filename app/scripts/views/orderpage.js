import $ from 'jquery';
import Bb from 'backbone';

import orderFunction from './order';
import router from '../router';

function renderOrder() {

    let orderList = orderFunction();

    $('.overlay').removeClass('hidden');
    $('.orderup').removeClass('hidden');
    $('.confirmbox').empty();
    orderList.get('items').forEach(function(item){
      orderList.totalCalc(item.price);
      $('.confirmbox').append(`
        <div class="orderitem" data-id="${item.id}">
          <span>${item.name}</span>
          <span class="itemtax">$${item.price}.00</span>
        </div>
      `);
    });
    $('.currenttax').text('$' + orderList.get('tax').toFixed(2));
    $('.currenttotal').text('$' + orderList.get('total').toFixed(2));

    $('.orderexit').click(function(){
      $('.overlay').addClass('hidden');
      $('.orderup').addClass('hidden');
      location.hash = 'menu';
    });

    $('#confirmorder').click(function(){
      orderList.set({
        special: $('#special').val()
      });

      // orderList().save(null, {
      //   success: function() {
      //     console.log('order sent');
      //   }
      // });

      router.navigate('order/complete', {trigger: true});

    });
}


export default renderOrder;
