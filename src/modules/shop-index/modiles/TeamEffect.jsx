import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

import CustomerEffect from './CustomerEffect';
import MoneyEffect from './MoneyEffect';

require('../style/index.less');



const TeamEffect=React.createClass({
	render(){
		return (
           <div className="TeamEffect">
              <h2>合作效果</h2>
               <WingBlank size="lg">
			    <SegmentedControl values={['获客效果', '引流效果']}/>
			   </WingBlank>
			  <div className="default">
                 <CustomerEffect />
			  </div>
           </div>
		)
	}
});

export default TeamEffect;