import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';

require('../style/index.less');

const AdResource=React.createClass({
	render(){
		return (
           <div className="AdResource">
             <AdList {...this.props}/>
             <AdPie {...this.props}/>
             <AdEffectPreview {...this.props}/>
           </div>
		)
	}
});
const AdList=React.createClass({
	render(){
		const url=this.props.titleGuideImg;
		const AdListData=this.props.AdListData;
		return (
           <div className="AdList">
             <h2><span className="titleGuide" style={{backgroundImage:'url('+url+')'}}>{this.props.titleGuide}</span>{this.props.title}</h2>
             
           </div>
		)
	}
});
const AdPie=React.createClass({
	render(){
		return (
           <div>
             AdPie 
           </div>
		)
	}
});
const AdEffectPreview=React.createClass({
	render(){
		return (
           <div>
             AdEffectPreview 
           </div>
		)
	}
});

export default AdResource;