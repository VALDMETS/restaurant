import $ from 'jquery';
import Bb from 'backbone';

import orderFunction from './order';

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

    console.log(orderFunction());
    // use this to run on 'confirm order button'
    // console.log(orderFunction());
    // orderFunction().save(null, {
    //   success: function() {
    //     console.log('order sent');
    //   }
    // });

}


export default renderOrder;
