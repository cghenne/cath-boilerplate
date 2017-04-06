import React from 'react';
import { push } from 'react-router-redux';
import { getStore } from 'index';
import cinemaLogo from '../../assets/img/cinema-logo.png';

const Menu = () =>
  (<div className='Menu'>
    <div onClick={ () => getStore().dispatch(push('/')) } >
      <img alt='Logo' src={ cinemaLogo } className='logo' />
    </div>
  </div>);

export default Menu;
