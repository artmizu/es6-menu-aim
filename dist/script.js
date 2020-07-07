"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const es6_menu_aim_1 = require("./es6-menu-aim");
new es6_menu_aim_1.MenuAim(document.querySelector('.list'), {
    activate(row) {
        row.classList.add('list__el_active');
    },
    deactivate(row) {
        console.log('deactivation');
        row.classList.remove('list__el_active');
    },
    exitMenu(instance) {
        console.log('exit from the menu');
        return true;
    },
    rowSelector: '> .list__el_nested'
});
