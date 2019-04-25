import React from 'react';
import Section from './components/Section'
import ResourceLink from './components/Link'
import Topic from './components/Topic'
import './index.css'

export default () => (
  <>
    <Section id='wk1' name='Week 1'>
      <Topic parentId = 'wk1' name='Logical Operator Board Challenge' index='0'>
        <ResourceLink text='Operator Precedence' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table'></ResourceLink>
        <ResourceLink text='Chaining Logical Operators' href='https://www.javatpoint.com/javascript-operators'></ResourceLink>
      </Topic>
      <Topic name='Routing in React' parentId='wk1' index='1'>
        <ResourceLink text='React-Router-DOM' href='https://reacttraining.com/react-router/'></ResourceLink>
        <ResourceLink text='React-Router-DOM NPM' href='https://reacttraining.com/react-router/'></ResourceLink>
      </Topic>
    </Section>
    <Section id='react' name='React'>
      <Topic></Topic>
    </Section>
    
    <Section id='testing' name='Testing'>
    <Topic name='TDD' parentId='testing' index='0'></Topic>
    <Topic name='Testing React Components' parentId='testing' index='1'></Topic>
    <Topic name='Jest and Jasmine' parentId='testing' index='2'></Topic>
    <Topic name='Enzyme' parentId='testing' index='3'></Topic>
    </Section>
    
    <Section id='deployment' name='Deployment'/>
    
    <Section id='javascript' name='JavaScript'>
    <Topic name='Online Documentation and Tutorials' parentId='javascript' index='0'>
    <ResourceLink text='JavaScript.info' href=' https://javascript.info/'></ResourceLink>   
    </Topic>
    <Topic name='Books' parentId='javascript' index='1'></Topic>
    <Topic name='YouTube Channels' parentId='javascript' index='2'></Topic>
    <Topic name='Under the Hood' parentId='javascript' index='3'></Topic>

    </Section>
    <Section id='css' name='CSS'>
      <Topic name='flexbox' parentId='css' index='0'>
        <ResourceLink text='Flexbox Frogger' href=' https://javascript.info/'></ResourceLink>   
      </Topic>
    </Section>




  </>
);
