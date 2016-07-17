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
            $('.menucontent').empty();
            menuList.forEach(function(section, i) {

                $('.menucontent').append(`<section id="${menuTitles[i]}"></section>`);
                if (menuTitles[i] != 'veraDesserts') {
                    $('#' + menuTitles[i]).append(`<h3>${menuTitles[i].toUpperCase()}</h3>`);
                }
                section.forEach(function(item) {

                    let nameHold = item.item;
                    if (typeof item.price === 'number') {
                      menuHold.add(itemBuild(item));
                      $('#' + menuTitles[i]).append(`
                        <div class="menuitem" data-id="${item.id}">
                          <div class="firstline">
                            <span class="itemname">${item.item}</span>
                            <span class="itemdescription"> - ${item.description}</span>
                            <span class="itemprice">$${item.price}.00</span>
                          </div>
                          <div class="iconbox">
                          </div>
                          <button type="button" class="order">ADD</button>
                        </div>
                      `);
                    } else {

                      let tempPrice = _.pairs(item.price);
                      tempPrice.forEach(function(pricePair){
                        // console.log(pricePair);
                        item.price = pricePair[1];
                        item.id = item.id + 100;
                        item.item = nameHold + ' ('+ pricePair[0] + ')';
                        menuHold.add(itemBuild(item));
                        $('#' + menuTitles[i]).append(`
                          <div class="menuitem" data-id="${item.id}">
                            <div class="firstline">
                              <span class="itemname">${item.item}</span>
                              <span class="itemdescription"> - ${item.description}</span>
                              <span class="itemprice">$${pricePair[1]}.00</span>
                            </div>
                            <div class="iconbox">
                            </div>
                            <button type="button" class="order">ADD</button>
                          </div>
                        `);
                      });
                    }

                    if (item['local fav'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i class="fa fa-thumbs-up" aria-hidden="true"></i>');
                    }
                    if (item['low sodium'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i class="fa fa-heartbeat" aria-hidden="true"></i>');
                    }
                    if (item['under 500 cals'] === 1) {
                        $(`div[data-id="${item.id}"]`).find('.iconbox').append('<i class="fa fa-leaf" aria-hidden="true"></i>');
                    }
                });

            });

            orderFunction();

        }

    });

}

export default renderMenu;
