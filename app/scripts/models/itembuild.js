import $ from 'jquery';
import Bb from 'backbone';

import menuItem from './menuitem';

function itemBuild (item) {

    let currentItem = new menuItem ({
        id    : item.id,
        name  : item.item,
        price : item.price,
    });
    return currentItem;
}

export default itemBuild;
