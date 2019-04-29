import React from 'react';
import Section from '../components/Section';
import ResourceLink from '../components/Link';
import Topic from '../components/Topic';

function Week5() {
	return (
		<Section id='wk5' name='Week 5'>
      <Topic parentId = 'wk5' name='Server Side JavaScript' index='0'>
        <ResourceLink text='Link' href='#'></ResourceLink>
				https://spin.atomicobject.com/2015/04/06/web-app-client-side-server-side/
				https://nodejs.org/en/about/
				https://www.tutorialspoint.com/nodejs/index.htm
				https://www.coursera.org/learn/server-side-nodejs
				http://expressjs.com/
				https://www.totaljs.com/
      </Topic>
      <Topic name='Web Application Architecture' parentId='wk5' index='1'>
				<ResourceLink text='Client Side and Server Side Code - High Level Overview' 
				href='https://spin.atomicobject.com/2015/04/06/web-app-client-side-server-side/'></ResourceLink>
				<ResourceLink text='Fundamentals of Web App Architecture' href='https://www.peerbits.com/blog/web-application-architecture.html'></ResourceLink>
				<ResourceLink text='Static and Dynamic Sites' href='https://www.youtube.com/watch?v=Kg0Q_YaQ3Gk'></ResourceLink>
				<ResourceLink text='SPAs and MPAs' href='https://www.youtube.com/watch?v=F_BYg2QGsC0'>
				</ResourceLink>
      </Topic>

			<Topic name='Event Listeners and Handlers' parentId='wk5' index='1'>
				<ResourceLink text='MDN Event Handlers' href='https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers'></ResourceLink>
				<ResourceLink text='React OnClick' href='https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd'></ResourceLink>
				{/* https://flaviocopes.com/javascript-events/
				https://www.sitepoint.com/javascript-this-event-handlers/
				https://www.smashingmagazine.com/2015/03/better-browser-input-events/
				https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method */}
      </Topic>
    </Section>
	)
}

export default Week5;