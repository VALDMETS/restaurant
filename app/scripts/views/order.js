import $ from 'jquery';
import Bb from 'backbone';

import Order from '../models/ordertemplate';
import menuHold from '../collections/menuhold';
import MenuItem from '../models/menuitem';

function orderFunction () {

  let orderList = new Order();

  $('.order').click(function(){
    let buttonID = $(this).parent().data().id;
    let tempItem = menuHold.get(buttonID);
    orderList.get('items').push({
      id: tempItem.get('id'),
      name: tempItem.get('name'),
      price: tempItem.get('price'),
      quantity: 1,
      special: ''
    });
    orderList.totalCalc(tempItem.get('price'));

    $('.ordercontent').append(`
      <div class="orderitem" data-id="${tempItem.get('id')}">
        <input type="button" name="delete" value="X">
        <span>${tempItem.get('name')}</span>
        <span>$${tempItem.get('price')}.00</span>
      </div>
    `);
    $('.currenttax').text('$' + orderList.get('tax').toFixed(2));
    $('.currenttotal').text('$' + orderList.get('total').toFixed(2));
  });

}

export default orderFunction;
