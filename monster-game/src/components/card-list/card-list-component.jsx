import React from 'react'
import './card-list-component.css';
export const CardList  = (props) => { 
 return <div className='Card-List'>{props.children}</div>;
};