import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Week2() {
  return (
    <Section id="wk2" name="Week 2">
      <Topic parentId="wk2" name="Useful Array Methods Part 2" index="0">
        <ResourceLink
          text="Array Object MDN"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        />
        <ResourceLink
          text="map() vs. forEach()"
          href="https://codeburst.io/javascript-map-vs-foreach-f38111822c0f"
        />
        <ResourceLink text="Array.reduce()" href="#" />
      </Topic>
      <Topic name="Routing in React" parentId="wk2" index="1">
        <ResourceLink
          text="React-Router-DOM"
          href="https://reacttraining.com/react-router/"
        />
        <ResourceLink
          text="React-Router-DOM NPM"
          href="https://reacttraining.com/react-router/"
        />
      </Topic>
      <Topic name="React State" parentId="wk2" index="2">
        <ResourceLink
          text="Official ReactJS Docs"
          href="https://reactjs.org/docs/faq-state.html"
        />
        <ResourceLink
          text="Fundamentals of State Article"
          href="https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f"
        />
        <ResourceLink
          text="State Example"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        />
      </Topic>
      <Topic parentId="wk2" name="CSS" index="3">
        <ResourceLink text="Specificity" href="#" />
        <ResourceLink
          text="Flexbox"
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        />
        <ResourceLink
          text="Grid"
          href="https://css-tricks.com/snippets/css/complete-guide-grid/"
        />
      </Topic>
      <Topic parentId="wk2" name="ES6" index="4">
        <ResourceLink
          text="const"
          href="https://mathiasbynens.be/notes/es6-const"
        />
        <ResourceLink
          text="ES6 features immutability"
          href="http://es6-features.org/#Constants"
        />
        <ResourceLink
          text="primitive and non-primitives"
          href="http://2ality.com/2011/03/javascript-values-not-everything-is.html"
        />
        <ResourceLink
          text="Rest and Spread"
          href="https://www.eventbrite.com/engineering/learning-es6-rest-spread-operators/"
        />
        <ResourceLink
          text="Uses of Rest and Spread"
          href="https://davidwalsh.name/spread-operator"
        />
        <ResourceLink text="Modules" href="" />
      </Topic>
      <Topic name="Board Challenge Functional Array Methods" parentId="wk2" index="5">
        <ResourceLink
          text="Array.map()"
          href=""
        />
        <ResourceLink
          text="Array.reduce() Sum and average"
          href=""
        />
      </Topic>
    </Section>
  );
}

export default Week2;
