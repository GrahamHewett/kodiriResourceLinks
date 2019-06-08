import React from 'react';
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Week3() {
	return (
		<Section id='wk3' name='Week 3'>
			<Topic parentId="wk3" name="Logical Operator Board Challenge" index="0">
        <ResourceLink
          text="Operator Precedence"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table"
        />
        <ResourceLink
          text="Chaining Logical Operators"
          href="https://www.javatpoint.com/javascript-operators"
        />
      </Topic>
      <Topic parentId="wk3" name="React" index="1">
        <ResourceLink
          text="Event Handlers"
          href=""
        />
      </Topic>
      <Topic parentId="wk3" name="Node" index="2">
        <ResourceLink
          text="Node and Express basics"
          href=""
        />
      </Topic>
      <Topic parentId="wk3" name="Javascript" index="3">
        <ResourceLink
          text="Higher Order Functions"
          href=""
        />
      </Topic>
      <Topic parentId="wk3" name="CSS" index="4">
        <ResourceLink
          text="Animations"
          href=""
        />
        <ResourceLink
          text="Transitions"
          href=""
        />
      </Topic>
    </Section>
	)
}

export default Week3;