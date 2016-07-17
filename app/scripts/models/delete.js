import $ from 'jquery';
import Bb from 'backbone';
import _ from 'underscore';

import orderFunction from '../views/order';

function deleteFunction(evt) {

  console.log(evt.target);

  let buttonID = $(evt.target).parent().data().id;
  let orderList = orderFunction();

  orderList.removeCost(buttonID);
  $('.currenttax').text('$' + orderList.get('tax').toFixed(2));
  $('.currenttotal').text('$' + orderList.get('total').toFixed(2));
  // console.log(buttonID);
  orderList.set({
    items: orderList.get('items').filter(function(item){
      if (item.id!=buttonID) {
        // console.log('included one');
        return true;
      } else {
        // console.log('excluded one');
        return false;
      }
    })
  });
  // console.log(orderList.get('items'));
  $(evt.target).parent().addClass('hidden');

  return orderList;
}

export default deleteFunction;
