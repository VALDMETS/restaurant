import $ from 'jquery';
import Bb from 'backbone';

const menuItem = Bb.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/benscoolorders',
});

export default menuItem;
