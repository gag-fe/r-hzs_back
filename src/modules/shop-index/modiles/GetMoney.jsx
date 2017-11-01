import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';

require('../style/index.less');


const GetMoney=React.createClass({
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
		return (
         <div className="GetData">
            <h2><icon style={{marginRight:'.2rem'}}>+</icon>引流赚佣</h2>
            <div>
               累计成功引流<span>{data.guideNum}</span>次 / 菜单曝光量<span>{data.menuNum}</span>次/日
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
            <p style={{clear:'both',padding:'1rem 0 .8rem 0'}}>最受欢迎合作商</p>
            <div className='popular'>
              <div className="popularWrap" >
                 <div className="bg">
                    <div className="titleBox">
                      <span style={{left:'-22%'}}></span>
                      <h2 style={{fontSize:'1.4rem',fontWeight:'normal'}}>标题待定</h2>
                      <p style={{opacity:'.6',fontSize:'1rem',lineHeight:'2.4rem'}}>副标题副标题待定</p>
                      <span style={{right:'-22%'}}></span>
                    </div>
                 </div>
              </div>
              <div className="popularWrap" style={{float:'right'}}>
                <div className="bg">
                    <div className="titleBox">
                      <span style={{left:'-22%'}}></span>
                      <h2 style={{fontSize:'1.4rem',fontWeight:'normal'}}>标题待定</h2>
                      <p style={{opacity:'.6',fontSize:'1rem',lineHeight:'2.4rem'}}>副标题副标题待定</p>
                      <span style={{right:'-22%'}}></span>
                    </div>
                 </div>
              </div>
            </div>
         </div>
		)
	}
});

export default GetMoney;