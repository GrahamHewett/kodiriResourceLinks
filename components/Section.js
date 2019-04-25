import React from 'react'
import '../index.css'
import toggleSubSection from './toggleSubSection'

function Section(props) {
	return (
		<div id={props.id}>
			<div className="section split"  onClick={() => toggleSubSection(props.id)}>
				<h2>{props.name}</h2>
				<h2 className='chevron' aria-hidden="true">></h2>
			</div>
			{props.children}
		</div>
	)
}
export default Section
