import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Week1() {
  return (
    <Section id="wk1" name="Week 1">
      <Topic
        parentId="wk1"
        name="Board Challenge: Manipulating Strings"
        index="0"
      >
        <ResourceLink text="String Literals and Template Literals" href="#" />
        <ResourceLink text="String.split()" href="#" />
        <ResourceLink text="Array.reverse()" href="#" />
        <ResourceLink text="Array.join()" href="#" />
      </Topic>
      <Topic parentId="wk1" name="Useful Array Methods Part 1" index="1">
        <ResourceLink text="Array.find()" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" />
        <ResourceLink text="Array.filter()" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" />
      </Topic>
      <Topic parentId="wk1" name="ReactJS Props" index="2">
        <ResourceLink
          text="props"
          href="https://www.robinwieruch.de/react-pass-props-to-component/"
        />
      </Topic>
      <Topic parentId="wk1" name="Intro to JS" index="3">
        <ResourceLink
          text="data types"
          href="https://webbjocke.com/javascript-check-data-types/"
        />
      </Topic>
      
    </Section>
  );
}

export default Week1;
