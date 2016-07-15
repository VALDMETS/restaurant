import $ from 'jquery';
import Bb from 'backbone';

const menuItem = Bb.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json'
});

export default menuItem;
