import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";
import nodeInfoGraphic from "../images/nodeInfoGraphic.jpeg"

function Week3() {
  return (
    <Section id="wk3" name="Week 3">
      <Topic parentId="wk3" name="Node and Express" index="0">
        <ResourceLink
          text="Official Node Docs Guide"
          href="https://nodejs.org/en/docs/guides/"
        />
        <ResourceLink
          text="TutorialsPoint NodeJS"
          href="https://www.tutorialspoint.com/nodejs/"
        />
        <ResourceLink
          text="TutorialsPoint ExpressJS"
          href="https://www.tutorialspoint.com/expressjs/"
        />
        <ResourceLink
          text="Express API reference"
          href="http://expressjs.com/en/4x/api.html"
        />
        <ResourceLink
          text="Node API reference"
          href="https://nodejs.org/api/"
        />
        <ResourceLink
          text="Coursera Development with NodeJS"
          href="https://www.coursera.org/learn/server-side-nodejs"
        />
        <ResourceLink
          text="Node Infographic"
          href={nodeInfoGraphic}
        />
      </Topic>
      <Topic parentId="wk3" name="CSS Effects" index="1">
        <ResourceLink
          text="CSS Animations and Transitions: A Detailed Guide"
          href="https://medium.com/engineerbabu/a-detailed-guide-to-css-animations-and-transitions-b544502c089c"
        />
        <ResourceLink
          text="CSS Tricks animation"
          href="https://css-tricks.com/almanac/properties/a/animation/
          "
        />
        <ResourceLink
          text="CSS Tricks transform"
          href="https://css-tricks.com/almanac/properties/t/transform/"
        />
        <ResourceLink
          text="Recreate CSS Animations"
          href="https://www.creativebloq.com/inspiration/css-animation-examples"
        />
        <ResourceLink
          text="MDN Animations"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
        />
        <ResourceLink
          text="MDN Transitions"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions"
        />
        <ResourceLink
          text="Multi Step Effects"
          href="https://css-tricks.com/using-multi-step-animations-transitions/"
        />
      </Topic>
      <Topic parentId="wk3" name="Events" index="2">
        <ResourceLink
          text="MDN Events Guide"
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events"
        />
        <ResourceLink
          text="Flavio Copes Events"
          href="https://flaviocopes.com/javascript-events/"
        />
        <ResourceLink
          text="Property Initialiser Syntax"
          href="https://alligator.io/react/new-way-to-handle-events/"
        />
      </Topic>
      <Topic parentId="wk3" name="Higher Order Functions" index="3">
        <ResourceLink
          text="Higher Order Functions"
          href="https://medium.com/functional-javascript/higher-order-functions-78084829fff4"
        />
        <ResourceLink
          text="HOF Example"
          href="https://www.lullabot.com/articles/higher-order-functions-in-javascript"
        />
      </Topic>
      <Topic parentId="wk3" name="Logical Operator Board Challenge" index="4">
        <ResourceLink
          text="Operator Precedence"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table"
        />
        <ResourceLink
          text="Chaining Logical Operators"
          href="https://www.javatpoint.com/javascript-operators"
        />
      </Topic>
    </Section>
  );
}

export default Week3;