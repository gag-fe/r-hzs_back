// modules
import Pages from '../modules/pages/index';
import Home from '../modules/home/index';

import AppIndex from '../modules/shop-index/index';

const menus = [{
  key: 'home',
  title: '首页',
  component: Home,
  icon: ''
}, {
  key: 'pages',
  title: '页面',
  component: Pages,
  icon: ''
}, {
  key: 'shopIndex',
  title: '店铺首页',
  component: AppIndex,
  icon: ''
}];
export default menus;


window.formatCurrency = function(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
            num = "0";
        var sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        var cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num + '.' + cents);
    };
