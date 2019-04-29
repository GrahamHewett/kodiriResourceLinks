import React from 'react';
import Section from '../components/Section';
import ResourceLink from '../components/Link';
import Topic from '../components/Topic';

function Week5() {
	return (
		<Section id='wk5' name='Week 5'>
      <Topic parentId = 'wk5' name='Server Side JavaScript' index='0'>
        <ResourceLink text='Link' href='#'></ResourceLink>
      </Topic>
      <Topic name='Web Application Architecture' parentId='wk5' index='1'>
				<ResourceLink text='Link' href='#'></ResourceLink>
      </Topic>
    </Section>
	)
}

export default Week5;