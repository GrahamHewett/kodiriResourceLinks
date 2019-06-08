import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function ReactLinks() {
  return (
    <Section id="react" name="React">
      <Topic name="Official Docs" parentId="react" index="0">
        <ResourceLink text="ReactJS.org" href="https://reactjs.org/" />
        <ResourceLink
          text="create-react-app"
          href="https://github.com/facebook/create-react-app"
        />
      </Topic>
      <Topic name="Tutorials and Guides" parentId="react" index="1">
        <ResourceLink
          text="Scrimba React Tutorial"
          href="https://scrimba.com/g/glearnreact"
        />
        <ResourceLink
          text="Egghead start learning react"
          href="https://egghead.io/courses/start-learning-react"
        />
        <ResourceLink
          text="Awesome React"
          href="https://github.com/enaqx/awesome-react"
        />
        <ResourceLink
          text="Front End Masters Learn React"
          href="https://frontendmasters.com/books/front-end-handbook/2018/learning/react.html"
        />
        <ResourceLink
          text="React Bits"
          href="https://vasanthk.gitbooks.io/react-bits/"
        />
        {/* https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6
  https://hackr.io/tutorials/learn-react
  http://buildwithreact.com/
  https://survivejs.com/react/getting-started/introduction-to-react/ */}
        <ResourceLink
          text="React antiPatterns to avoid"
          href="https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd"
        />
      </Topic>
      <Topic name="State" parentId="react" index="2">
        <ResourceLink
          text="State FAQ"
          href="https://reactjs.org/docs/faq-state.html"
        />
        <ResourceLink
          text="Fundamentals of State in React"
          href="https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f"
        />
        <ResourceLink
          text="Become a pro with setState"
          href="https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781"
        />
      </Topic>
      <Topic name="LifeCycle Methods" parentId="react" index="3">
        <ResourceLink
          text="Component LifeCycle Explained"
          href="http://busypeoples.github.io/post/react-component-lifecycle/"
        />
        <ResourceLink
          text="LifeCycle Methods Diagram"
          href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
        />
        {/* https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
  https://programmingwithmosh.com/javascript/react-lifecycle-methods/ */}
        <ResourceLink
          text="Where to Fetch Data"
          href="https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount"
        />
        {/* https://reactjs.org/docs/reconciliation.html */}
      </Topic>
      <Topic name="Hooks" parentId="react" index="4">
        <ResourceLink
          text="Official Hooks Intro"
          href="https://reactjs.org/docs/hooks-intro.html"
        />
        <ResourceLink
          text="Auth0 Overview of React Hooks"
          href="https://auth0.com/blog/overview-of-react-hooks/"
        />
        <ResourceLink
          text="90% cleaner with Hooks Video"
          href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
        />
        <ResourceLink
          text="WebCodeGeeks React Hooks"
          href="https://www.webcodegeeks.com/javascript/react-js/react-hooks/"
        />
        {/* 
  https://medium.freecodecamp.org/an-introduction-to-react-hooks-12843fcd2fd9
  https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components
  https://overreacted.io/a-complete-guide-to-useeffect/
  https://overreacted.io/how-are-function-components-different-from-classes/ 
  https://medium.freecodecamp.org/yeah-hooks-are-good-but-have-you-tried-faster-react-components-e698a8db468c*/}
      </Topic>
    </Section>
  );
}

export default ReactLinks;
