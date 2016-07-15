import $ from 'jquery';
import Bb from 'backbone';
import _ from 'underscore';

import itemBuild from '../models/itembuild';
import MenuList from '../collections/menulist';
import menuHold from '../collections/menuhold';
import orderFunction from './order';

function renderMenu(data) {

    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        success: function(data) {
            const menuList = _.toArray(data);
            const menuTitles = _.keys(data);
            menuList.forEach(function(section, i) {

                $('.menucontent').append(`<section id="${menuTitles[i]}"></section>`);
                if (menuTitles[i] != 'veraDesserts') {
                    $('#' + menuTitles[i]).append(`<h3>${menuTitles[i].toUpperCase()}</h3>`);
                }
                section.forEach(function(item) {

                    // console.log(itemBuild(item));
                    menuHold.add(itemBuild(item));
                    $('#' + menuTitles[i]).append(`
                      <div class="menuitem" data-id="${item.id}">
                        <span class="itemname">${item.item}</span>
                        <span class="itemprice">$${item.price}.00</span>
                        <div class="iconbox">
                        </div>
                        <span class="itemdescription">${item.description}</span>
                        <button type="button" class="order">ORDER</button>
                      </div>
                    `);
                    if (item['local fav'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i>faveicon</i>');
                    }
                    if (item['low sodium'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i>hearticon</i>');
                    }
                    if (item['under 500 cals'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i>dieticon</i>');
                    }
                });

            });
            
            orderFunction();
            // console.log(menuHold);
        }

    });

}

export default renderMenu;
