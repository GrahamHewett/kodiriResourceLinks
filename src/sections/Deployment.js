import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Deployment() {
  return (
    <Section id="deployment" name="Deployment">
      <Topic name="Deployment Options" parentId="deployment" index="0">
        <ResourceLink
          text="Now React Deployment"
          href="https://zeit.co/guides/ deploying-react-with-now-cra"
        />
        <ResourceLink text="Heroku Deployment" href="" />
        <ResourceLink text="AWS Deployment" href="" />
        <ResourceLink text="Firebase Deployment" href="" />
      </Topic>
    </Section>
  );
}

export default Deployment;
