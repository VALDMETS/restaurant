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
    let tempName = tempItem.get('name');
    if (tempName.length >= 27) { tempName = tempName.slice(0, 26) + '...';}
    $('.ordercontent').append(`
      <div class="orderitem" data-id="${tempItem.get('id')}">
        <input type="button" class="delete" value="X">
        <span>${tempName}</span>
        <span class="itemtax">$${tempItem.get('price')}.00</span>
      </div>
    `);
    $('.currenttax').text('$' + orderList.get('tax').toFixed(2));
    $('.currenttotal').text('$' + orderList.get('total').toFixed(2));

    $('.delete').click(function(){
      buttonID = $(this).parent().data().id;
      orderList.removeCost(buttonID);
      $('.currenttax').text('$' + orderList.get('tax').toFixed(2));
      $('.currenttotal').text('$' + orderList.get('total').toFixed(2));
      orderList.set({
        items: orderList.get('items').filter(function(item){
          if (item.id!=buttonID) {
            return true;
          } else {
            return false;
          }
        })
      });
      $(this).parent().addClass('hidden');
    });
  });

  return orderList;
}

export default orderFunction;
