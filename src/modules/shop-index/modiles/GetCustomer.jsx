import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';

require('../style/index.less');


const GetCustomer=React.createClass({
	render(){
		return (
         <div className="GetCustomer">
            <GetData {...this.props}/>
            <TourRecommend />
         </div>
		)
	}
});
const GetData=React.createClass({
	render(){
		const data=this.props.data;
		console.log(data.shopNum);
		return (
         <div className="GetData">
            <h2><icon style={{marginRight:'.2rem'}}>+</icon>我要获客</h2>
            <div>
               <span>{data.shopNum}</span>个商家/<span>{data.guideNum}</span>个导流位/<span>{data.personNum}</span>人*次交易次数
            </div>
            <img src="/src/modules/shop-index/images/btnR.png" />
         </div>
		)
	}
});

const TourRecommend=React.createClass({
	render(){
		return (
         <div className="TourRecommend">
            <h2 style={{textAlign:'center'}}><span></span><img src="/src/modules/shop-index/images/arr.png" /><span style={{float:'right'}}></span></h2>
            <p style={{clear:'both',padding:'1rem 0 .8rem 0'}}>导流位推荐</p>
            <div>
              <ul>
                <li>
                  <p>撒哈拉的沙漠</p>
                </li>
                <li style={{margin:'0 5%'}}>
                  <p>撒哈拉的沙漠</p>
                </li>
                <li style={{float:'right'}}>
                  <p>撒哈拉的沙漠</p>
                </li>
              </ul>
            </div>
         </div>
		)
	}
});

export default GetCustomer;