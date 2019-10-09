import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Deployment() {
  return (
    <Section id="deployment" name="Deployment">
      <Topic name="Deployment Options" parentId="deployment" index="0">
      <ResourceLink
          text="GitHub Pages React App Deployment"
          href="https://github.com/gitname/react-gh-pages"
        />
        <ResourceLink
          text="Now React Deployment"
          href="https://zeit.co/guides/deploying-react-with-now-cra"
        />
        <ResourceLink
          text="Heroku Deployment"
          href="https://devcenter.heroku.com/articles/getting-started-with-nodejs"
        />
        <ResourceLink
          text="AWS Deployment"
          href="https://aws.amazon.com/getting-started/tutorials/deploy-react-app-cicd-amplify/"
        />
        <ResourceLink
          text="Firebase Deployment"
          href="https://firebase.google.com/docs/web/setup/"
        />
      </Topic>
    </Section>
  );
}

export default Deployment;
