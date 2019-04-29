import React from 'react'

function resourceLink(props) {
	return (
		<li>
			<h4><a target="_blank" rel="noopener noreferrer" href={props.href}>{props.text}</a></h4>
		</li>
	)
}

export default resourceLink;
