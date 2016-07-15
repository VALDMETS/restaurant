import $ from 'jquery';
import Bb from 'backbone';
import menuItem from '../models/menuitem';

const MenuList = Bb.Collection.extend({
  model: menuItem,
  url: 'http://tiny-za-server.herokuapp.com/collections/benscoolorders'
});

export default MenuList;
