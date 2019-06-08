import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function APIs() {
  return (
    <Section id="api" name="API">
      <Topic name="API" parentId="api" index="0">
        <ResourceLink
          text="What is an API"
          href="https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82"
        />
      </Topic>
    </Section>
  );
}

export default APIs;
