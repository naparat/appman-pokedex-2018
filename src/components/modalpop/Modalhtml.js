import React from 'react';
import './modalpop.scss'
import swal from 'sweetalert2';
import CardList from '../card/CardList';

export const ShowModalHtml=(props)=>{
	return(
		<div>
			<input type="text" onChange={props.handleChange.bind(this)} name="search" className='inputsearch' />
			<CardList cards={props.cards} add={props.add} />
		</div>
	)
}

