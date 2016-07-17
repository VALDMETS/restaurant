import $ from 'jquery';
import Bb from 'backbone';

const Order = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolorders',
  defaults: {
    items: [],
    total: 0,
    tax: 0,
    special: ''
  },
  totalCalc: function (newCost) {
    let newTax = newCost*0.0825;
    this.set({
      tax: (this.get('tax') + newTax)
    });
    this.set({
      total: (this.get('total') + (newCost + newTax))
    });
  },
  removeCost: function(deletedCostID) {
    // console.log(deletedCostID);
    // console.log(this.get('items'));
    let deletableItem = this.get('items').filter(function(item){
      if (item.id === deletedCostID) {
        // console.log('found the right one');
        return true;
      } else {
        // console.log('found a wrong one');
        return false;
      }
    });
    let newTax = Number(deletableItem[0].price)*0.0825;
    this.set({
      tax: Number(this.get('tax')) - newTax,
      total: Number(this.get('total')) - Number(deletableItem[0].price + newTax)
    });
  }
});

export default Order;
