import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';

require('../style/index.less');

//广告资源
import AdResource from './AdResource';
//GAG活动
import GagActivity from './GagActivity';
//优惠券活动
import TicketActivity from './TicketActivity';

const AdListData={
	'time':'2016/09/10--2017/10/20',
	'guideTimes':1000,
	'guideShop':{
		'img':'/src/modules/shop-index/images/ad1.png',
		'img':'/src/modules/shop-index/images/ad2.png',
		'img':'/src/modules/shop-index/images/ad3.png',
		'img':'/src/modules/shop-index/images/ad4.png',
		'img':'/src/modules/shop-index/images/ad3.png'
	}
};

const CustomerEffect=React.createClass({
	render(){
		return (
           <div className="CustomerEffect">
             <AdResource title="广告标题广告标题广告标题" titleGuide="广告资源" titleGuideImg='/src/modules/shop-index/images/ad.png' AdListData={AdListData}/>
             <GagActivity />
             <TicketActivity />
           </div>
		)
	}
});

export default CustomerEffect;