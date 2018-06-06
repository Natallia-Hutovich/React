import React, { Component } from 'react';
import './notFoundPage.css';

const notFoundPage=()=>(
	<div>
	 	<div className='not-page-wrapper'>
	 		<div className='not-page-img'></div> 
			<div className='not-page-text'>
				<p>Такой страницы нет :-(</p>
				<p>Попробуйте что-нибудь другое</p>
			</div>
		</div>
	 </div>
	);
	


export default notFoundPage;
