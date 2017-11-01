import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';

require('../style/index.less');

//1.ui-->层级组件
const AppGuide=React.createClass({
  componentDidMount(){
    this.refs.HeadBox.style.height=window.screen.availWidth/10+'rem';
  },
  formatCurrency (num) {
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
        return (((sign) ? '' : '-') + num);
  },
  render(){
    return (
     <div  className='HeadBox' ref="HeadBox">
           <GuideData  DataNum="1000" DataContent={<div>预估客流量<br />曝光率</div>} />
           <GuideData style={{float:'right'}} DataNum="5" DataContent={<div>正在为您导流<br />商户数</div>}/>
           <GuideData money="￥" DataNum={this.formatCurrency(100000)} DataContent={<div>预估获取佣金<br/><b>免费期</b></div>}/>
           <GuideData style={{float:'right'}} DataNum="5" DataContent={<div>正在帮您赚取<br/>佣金的商户</div>}/>
     </div>
    )
  }
});
const GuideData=React.createClass({
  render(){
    return (
     <div className="GuideData">
       <DataNum {...this.props}/>
       <span></span>
       <DataContent {...this.props}/>
     </div>
    )
  }
});
//2.根据逻辑，细化组件
const DataNum=React.createClass({
  render(){
    return (
     <div className='DataNum'>
       <i className="money" style={{fontFamily:'Arial'}}>{this.props.money}</i>{this.props.DataNum}
     </div>
    )
  }
});
const DataContent=React.createClass({
  render(){
    return (
     <div className='DataContent'>
       {this.props.DataContent}
     </div>
    )
  }
});

export default AppGuide;