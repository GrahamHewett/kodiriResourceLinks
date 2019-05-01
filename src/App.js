import React from "react";
import Section from "./components/Section";
import ResourceLink from "./components/Link";
import Topic from "./components/Topic";
import "./index.css";
import Week1 from "./weeks/Week1";
import Week2 from "./weeks/Week2";
import Week3 from "./weeks/Week3";
import Week4 from "./weeks/Week4";
import Week5 from "./weeks/Week5";
import Week6 from "./weeks/Week6";
import Week7 from "./weeks/Week7";
import Week8 from "./weeks/Week8";
import Week9 from "./weeks/Week9";

export default () => (
  <>
    <Section id="javascript" name="JavaScript">
      <Topic name="Online Documentation and Tutorials" parentId="javascript" index="0">
        <ResourceLink text="JavaScript.info" href="https://javascript.info/" />
        <ResourceLink text="Computing Philosophy Debate" href="https://www.youtube.com/watch?v=njos57IJf-0" />
        <ResourceLink text="Mozilla Developer Network" href="https://developer.mozilla.org/en-US/"/>
        <ResourceLink text="Hackr.io" href="https://hackr.io/"/>
        <ResourceLink text="W3 Schools" href="https://www.w3schools.com/"/>
        <ResourceLink text="Egghead.io" href="https://egghead.io/"/>
      </Topic>
      <Topic name="Books" parentId="javascript" index="1">
        <ResourceLink text="Eloquent JavaScript" href="https://eloquentjavascript.net/"/>
        <ResourceLink text="You Don't Know JS" href="https://github.com/getify/You-Dont-Know-JS/find/master"/>
        <ResourceLink text="JavaScript The Good Parts" href="http://shop.oreilly.com/product/9780596517748"/>
        <ResourceLink text="JS Design Patterns" href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"/>
        <ResourceLink text="Douglas Crockford Talk" href="https://www.youtube.com/watch?reload=9&v=v2ifWcnQs6M"/>
      </Topic>
      <Topic name="YouTube Channels" parentId="javascript" index="2">
        <ResourceLink text="Kodiri" href="https://www.youtube.com/kodiri"/>
        <ResourceLink text="Traversy Media" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"/>
        <ResourceLink text="Tony Alicea - Understanding the Weird Parts" href="https://www.youtube.com/watch?v=Bv_5Zv5c-Ts"/>
        <ResourceLink text="Academind" href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"/>
        <ResourceLink text="Tech Sith" href="https://www.youtube.com/user/techSithTube"/>
        <ResourceLink text="Fireship.io" href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"/>
        <ResourceLink text="freeCodeCamp" href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"/>
        <ResourceLink text="Udemy Tech" href="https://www.youtube.com/channel/UCU6e4MJtvlcX5DBLP1cq8hQ"/>
        <ResourceLink text="Fun Fun Function MPJ" href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"/>
      </Topic>

      <Topic name="Under the Hood" parentId="javascript" index="3">
        <ResourceLink text="The Event Loop Video" href="https://www.youtube.com/watch?v=cCOL7MC4Pl0"/>
        <ResourceLink text="V8 Engine" href="https://v8.dev/"/>
        <ResourceLink text="V8 to machine code" href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964"/>
        </Topic>
    </Section>

    <Section id="react" name="React">
      <Topic name="Official Docs" parentId="react" index="0">
        <ResourceLink text="ReactJS.org" href="https://reactjs.org/"/>
        <ResourceLink text="create-react-app" href="https://github.com/facebook/create-react-app"/>
      </Topic>
      <Topic name="Tutorials and Guides" parentId="react" index="1">
        <ResourceLink text="Scrimba React Tutorial" href="https://scrimba.com/g/glearnreact"/>
        <ResourceLink text="Egghead start learning react" href="https://egghead.io/courses/start-learning-react"/>
        <ResourceLink text="Awesome React" href="https://github.com/enaqx/awesome-react"/>
        <ResourceLink text="Front End Masters Learn React" href="https://frontendmasters.com/books/front-end-handbook/2018/learning/react.html"/>
        <ResourceLink text="React Bits" href="https://vasanthk.gitbooks.io/react-bits/"/>
        <ResourceLink text="Don't Watch!" href="https://www.youtube.com/watch?v=oHg5SJYRHA0"/>
        {/* https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6
        https://hackr.io/tutorials/learn-react
        http://buildwithreact.com/
        https://survivejs.com/react/getting-started/introduction-to-react/ */}
        <ResourceLink text="React antiPatterns to avoid" href="https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd"/>
      </Topic>
      <Topic name="State" parentId="react" index="2">
        <ResourceLink text="State FAQ" href="https://reactjs.org/docs/faq-state.html"/>
        <ResourceLink text="Fundamentals of State in React" href="https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f"/>
        <ResourceLink text="Become a pro with setState" href="https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781"/>
      </Topic>
      <Topic name="LifeCycle Methods" parentId="react" index="3">
        <ResourceLink text="Component LifeCycle Explained" href="http://busypeoples.github.io/post/react-component-lifecycle/"/>
        <ResourceLink text="LifeCycle Methods Diagram" href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"/>
        {/* https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
        https://programmingwithmosh.com/javascript/react-lifecycle-methods/ */}
        <ResourceLink text="Where to Fetch Data" href="https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount"/>
        {/* https://reactjs.org/docs/reconciliation.html */}
        <ResourceLink text="How to fetch Data in react" href="https://www.robinwieruch.de/react-fetching-data/"/>
      </Topic>
      <Topic name="Hooks" parentId="react" index="4">
        <ResourceLink text="Official Hooks Intro" href="https://reactjs.org/docs/hooks-intro.html"/>
        <ResourceLink text="Auth0 Overview of React Hooks" href="https://auth0.com/blog/overview-of-react-hooks/"/>
        <ResourceLink text="90% cleaner with Hooks Video" href="https://www.youtube.com/watch?v=dpw9EHDh2bM"/>
        <ResourceLink text="WebCodeGeeks React Hooks" href="https://www.webcodegeeks.com/javascript/react-js/react-hooks/"/>
        {/* 
        https://medium.freecodecamp.org/an-introduction-to-react-hooks-12843fcd2fd9
        https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components
        https://overreacted.io/a-complete-guide-to-useeffect/
        https://overreacted.io/how-are-function-components-different-from-classes/ 
        https://medium.freecodecamp.org/yeah-hooks-are-good-but-have-you-tried-faster-react-components-e698a8db468c*/}
      </Topic>
    </Section>

    <Section id="css" name="CSS">
      <Topic name="flexbox" parentId="css" index="0">
        <ResourceLink text="CSS Tricks Guide to Flexbox" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
        <ResourceLink text="Flexbox Froggy" href="https://flexboxfroggy.com/" />
        <ResourceLink text="Flexbox Zombies" href="https://mastery.games/p/flexbox-zombies" />
      </Topic>
      <Topic name="grid" parentId="css" index="1">
        <ResourceLink text="CSS Tricks Guide to Grid" href="https://css-tricks.com/snippets/css/complete-guide-grid/" />
        <ResourceLink text="Grid Critters" href="https://gridcritters.com/" />
        <ResourceLink text="Grid Tile Layouts" href="https://gedd.ski/post/tile-layouts/" />
      </Topic>
      <Topic name="books" parentId="css" index="2">
        <ResourceLink text="SMACSS" href="http://smacss.com/" />
      </Topic>
      <Topic name="preprocessors and frameworks" parentId="css" index="3">
        <ResourceLink text="SASS" href="https://sass-lang.com/" />
        <ResourceLink text="LESS" href="http://lesscss.org/" />
        <ResourceLink text="Bootstrap" href="https://getbootstrap.com/" />
        <ResourceLink text="Bulma" href="https://bulma.io/" />
      </Topic>
    </Section>
    <Section id="eveningTeam" name="Evening Team">
      <Topic name="Project Proposals" parentId="eveningTeam" index="0">
        <ResourceLink text="Wonder Present Selector based on Social Media" href="#"/>
        <ResourceLink text="Fit App" href="#"/>
        <ResourceLink text="Hotel Booking App" href="#"/>
        <ResourceLink text="Fashion Hub" href="#"/>     
      </Topic>
      <Topic name="General" parentId="eveningTeam" index="1">
      </Topic>
    </Section>
    <Section id="git" name="Git">
      <Topic name="Docs and Tutorials" parentId="git" index="0">
        <ResourceLink text="Adrian GitHub" href="https://github.com/adrian23221"/>
        <ResourceLink text="git SCM" href="https://git-scm.com/"/>
        <ResourceLink text="Official help" href="https://help.github.com/"/>
        <ResourceLink text="Atlassian Tutorials" href="https://www.atlassian.com/git/tutorials"/>
        <ResourceLink text="Git Immersion" href="http://gitimmersion.com/index.html"/>
      </Topic>
      <Topic name="Git Commands" parentId="git" index="1">
        <ResourceLink text="Simple Overview" href="https://rogerdudler.github.io/git-guide/"/>
        <ResourceLink text="Learn git Branching" href="https://learngitbranching.js.org/"/>
        <ResourceLink text="Adrian Command" href="#"/>
        <ResourceLink text="Using Branches" href="https://backlog.com/git-tutorial/using-branches/"/>
      </Topic>
      <Topic name="GitHub Collaboration" parentId="git" index="2">
        <ResourceLink text="Connecting with SSH" href="https://help.github.com/articles/connecting-to-github-with-ssh/"/>
        <ResourceLink text="Forking and Pull Requests" href="https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request"/>
        <ResourceLink text="Track a branch" href="https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch"/>
      </Topic>
    </Section>

    <Section id="testing" name="Testing">
      <Topic name="TDD" parentId="testing" index="0">
        <ResourceLink text="Learn TDD Guide by DWYL" href="https://github.com/dwyl/learn-tdd"/>
        <ResourceLink text="2019 Overview of Javascript Testing" href="https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a"/>
        <ResourceLink text="Debugging with Chrome Dev Tools" href="https://developers.google.com/web/tools/chrome-devtools/javascript/"/>
        <ResourceLink text="Istanbul with Jest" href="https://istanbul.js.org/docs/tutorials/jest/"/>
      </Topic>
      <Topic name="Testing React Components" parentId="testing" index="1">
        <ResourceLink text="Unit Testing with Jest and Enzyme" href="https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8"/>
        <ResourceLink text="Testing React Components Video" href="https://www.youtube.com/watch?v=XUlGzJLZe2Q"/>
        <ResourceLink text="Jest Documentation" href="https://jestjs.io/"/>
        <ResourceLink text="Enzyme Documentation" href="https://airbnb.io/enzyme/docs/api/"/>
        <ResourceLink text="create-react-app tests" href="https://facebook.github.io/create-react-app/docs/running-tests"/>
        <ResourceLink text="Testing React Components" href="https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675"/>
      </Topic>
    </Section>
    <Section id="deployment" name="Deployment">
      <Topic name="Deployment Options" parentId="deployment" index="0">
        <ResourceLink text="Now React Deployment" href="https://zeit.co/guides/deploying-react-with-now-cra"/>
        <ResourceLink text="Heroku Deployment" href="https://devcenter.heroku.com/articles/getting-started-with-nodejs"/>
        <ResourceLink text="AWS Deployment" href=""/>
        <ResourceLink text="Firebase Deployment" href=""/>
      </Topic>
    </Section>
    <Section id="utilities" name="Utilities">
      <Topic name="Code checking tool" parentId="utilities" index="0">
        <ResourceLink text="Diffchecker" href="https://www.diffchecker.com/"/>
              
      </Topic>
    </Section>
    <Week1/><Week2/><Week3/><Week4/>

    <Week5/>

    <Week6/><Week7/><Week8/><Week9/>
  </>
);
