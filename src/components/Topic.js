import React from 'react'
import '../index.css'
import toggleLinks from './toggleLinks'

function Topic(props) {
	return (
		<ul className ='subSection hidden'>
			<li className="split" onClick={() => toggleLinks(props.parentId, props.index)}>
				<h3>{props.name}</h3>
				<h3 className='chevron' aria-hidden='true'>></h3>
			</li>
			<ul className='resourceLink hidden wk1'>
				{props.children}
			</ul>
		</ul>
	)
}

export default Topic;
