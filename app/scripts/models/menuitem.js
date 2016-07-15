import $ from 'jquery';
import Bb from 'backbone';

const menuItem = Bb.Model.extend({
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/benscoolorders',
  defaults: {
    quantity: 1,
    special: ''
}
});

export default menuItem;
