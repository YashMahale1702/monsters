import React from 'react';
import './card-list.style.scss';
import {Card} from '../card/card.component'

export const CardList = (props) => {
	return (<div className="card-list">
        {props.monsters.map((cur) => <Card key={cur.id} monster={cur}></Card>)}
    </div>);
};
