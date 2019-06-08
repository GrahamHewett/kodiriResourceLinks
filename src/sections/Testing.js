import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Testing() {
  return (
    <Section id="testing" name="Testing">
      <Topic name="TDD" parentId="testing" index="0">
        <ResourceLink
          text="Learn TDD Guide by DWYL"
          href="https://github.com/dwyl/learn-tdd"
        />
        <ResourceLink
          text="2019 Overview of Javascript Testing"
          href="https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a"
        />
        <ResourceLink
          text="Debugging with Chrome Dev Tools"
          href="https://developers.google.com/web/tools/chrome-devtools/javascript/"
        />
        <ResourceLink
          text="Istanbul with Jest"
          href="https://istanbul.js.org/docs/tutorials/jest/"
        />
      </Topic>
      <Topic name="Testing React Components" parentId="testing" index="1">
        <ResourceLink
          text="Unit Testing with Jest and Enzyme"
          href="https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8"
        />
        <ResourceLink
          text="Testing React Components Video"
          href="https://www.youtube.com/watch?v=XUlGzJLZe2Q"
        />
        <ResourceLink text="Jest Documentation" href="https://jestjs.io/" />
        <ResourceLink
          text="Enzyme Documentation"
          href="https://airbnb.io/enzyme/docs/api/"
        />
        <ResourceLink
          text="create-react-app tests"
          href="https://facebook.github.io/create-react-app/docs/running-tests"
        />
        <ResourceLink
          text="Testing React Components"
          href="https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675"
        />
      </Topic>
    </Section>
  );
}

export default Testing;
