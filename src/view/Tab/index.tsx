import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

const Tab = () => {
  return (
    <div className='tab-root'>
      <div className='tab-wrap'>
        <NavLink to='home/one'>Home</NavLink>
      </div>
    </div>
  );
};

export default Tab;
