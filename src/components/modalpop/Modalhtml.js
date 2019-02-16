import React from 'react';
import './modalpop.scss'
import swal from 'sweetalert2';
import CardList from '../card/CardList';

export const ShowModalHtml=(props)=>{

	return(
		<div>
			<input type="search" name="search" className='inputsearch' />
			<CardList cards={props.cards} func={props.func} />
		</div>
	)
}

