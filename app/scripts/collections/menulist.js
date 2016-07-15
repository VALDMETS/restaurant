import $ from 'jquery';
import Bb from 'backbone';
import menuItem from '../models/menuitem';

const menuList = Bb.Collection.extend({
  model: menuItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json'
});

export default menuList;
