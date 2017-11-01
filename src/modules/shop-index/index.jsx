import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createRootContainer } from 'Roof';
//首页导航组件
import AppGuide from './modiles/AppGuide';
//我要获客组件
import GetCustomer from './modiles/GetCustomer';
import GetMoney from './modiles/GetMoney';
//合作效果组件
import TeamEffect from './modiles/TeamEffect';
require('../../common/index.less');

const AppIndex=React.createClass({
  render(){
    return (
     <div>
       <AppGuide />
       <GetCustomer data={{shopNum:'58',guideNum:'298',personNum:'3980'}}/>
       <GetMoney data={{guideNum:'2988',menuNum:'68'}}/>
       <TeamEffect />
     </div>
    )
  }
});
export default AppIndex;