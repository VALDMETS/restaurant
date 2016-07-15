import $ from 'jquery';
import Bb from 'backbone';

const Order = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolorders',
  defaults: {
    items: [],
    total: 0,
    tax: 0
  },
  totalCalc: function (newCost) {
    console.log(this.get('total'));
    console.log(newCost);
    let newTax = newCost*0.0825;
    this.set({
      tax: this.get('tax') + newTax
    });
    this.set({
      total: this.get('total') + (newCost + newTax)
    });
  }
});

export default Order;
