import React from 'react'
import './card-list-component.css';

import { Card } from '../Card/card-component';

export const CardList  = (props) => ( 
<div className='Card-List'> 
 {props.monsters.map(monster => ( 
 <Card key = {monster.id} monster={monster} />
 ))};
 </div>
);