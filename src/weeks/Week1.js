import React from 'react';
import Section from '../components/Section';
import ResourceLink from '../components/Link';
import Topic from '../components/Topic';

function Week1() {
	return (
		<Section id='wk1' name='Week 1'>
      		<Topic parentId = 'wk1' name='Logical Operator Board Challenge' index='0'>
        		<ResourceLink text='Operator Precedence' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table'></ResourceLink>
        		<ResourceLink text='Chaining Logical Operators' href='https://www.javatpoint.com/javascript-operators'>
				</ResourceLink>
      		</Topic>
      		<Topic name='Routing in React' parentId='wk1' index='1'>
        		<ResourceLink text='React-Router-DOM' href='https://reacttraining.com/react-router/'>
				</ResourceLink>
        		<ResourceLink text='React-Router-DOM NPM' href='https://reacttraining.com/react-router/'>
				</ResourceLink>
	      </Topic>
	    </Section>
	)
}

export default Week1;