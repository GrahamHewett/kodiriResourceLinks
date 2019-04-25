import React from 'react'

function resourceLink(props) {
	return (
		<li>
			<h4><a href={props.href}>{props.text}</a></h4>
		</li>
	)
}

export default resourceLink;
