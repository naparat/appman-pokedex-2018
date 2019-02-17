import React from 'react';
import './modalpop.scss'
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
	ShowModalHtml,
} from './Modalhtml'

export const ShowModal=(data,add,handleChange)=> {
	const reactSwal = withReactContent(swal)
	reactSwal.fire({
		html: <ShowModalHtml cards={data} add={add} handleChange={()=>handleChange()} />,
		customClass: 'container',
		showConfirmButton: false,
		showCloseButton: false,
		// backdrop: 'rgba(255,255,255,0.5)',
		background:'#fff'
	})
}
