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
        <ResourceLink text="Mozilla Developer Network" href="https://developer.mozilla.org/en-US/"/>
        <ResourceLink text="Hackr.io" href="https://hackr.io/"/>
        <ResourceLink text="W3 Schools" href="https://www.w3schools.com/"/>
        <ResourceLink text="Egghead.io" href="https://egghead.io/"/>

      </Topic>
      <Topic name="Books" parentId="javascript" index="1" />
      <Topic name="YouTube Channels" parentId="javascript" index="2" />
      <Topic name="Under the Hood" parentId="javascript" index="3" />
    </Section>

    <Section id="react" name="React">
      <Topic name="State" parentId="react" index="0">
        <ResourceLink text="Scrimba React Tutorial" href="https://scrimba.com/g/glearnreact"/>
      </Topic>
      <Topic name="Props" parentId="react" index="1">
        <ResourceLink text="Scrimba React Tutorial" href="https://scrimba.com/g/glearnreact"/>
      </Topic>
      <Topic name="LifeCycle Methods" parentId="react" index="2">
        <ResourceLink text="Where to Fetch Data" href="https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount"/>
      </Topic>
      <Topic name="Hooks" parentId="react" index="3">
        <ResourceLink text="Scrimba React Tutorial" href="https://scrimba.com/g/glearnreact"/>
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
    </Section>

    <Section id="git" name="Git">
      <Topic name="Docs and Tutorials" parentId="git" index="0">
        <ResourceLink text="git SCM" href="https://git-scm.com/"/>
        <ResourceLink text="Official help" href="https://help.github.com/"/>
        <ResourceLink text="Atlassian Tutorials" href="https://www.atlassian.com/git/tutorials"/>
        <ResourceLink text="Git Immersion" href="http://gitimmersion.com/index.html"/>
      </Topic>
      <Topic name="Git Commands" parentId="git" index="1">
        <ResourceLink text="Simple Overview" href="https://rogerdudler.github.io/git-guide/"/>
        <ResourceLink text="Learn git Branching" href="https://learngitbranching.js.org/"/>
        <ResourceLink text="Using Branches" href="https://backlog.com/git-tutorial/using-branches/"/>
      </Topic>
      <Topic name="GitHub Collaboration" parentId="git" index="2">
        <ResourceLink text="Connecting with SSH" href="https://help.github.com/articles/connecting-to-github-with-ssh/"/>
        <ResourceLink text="Forking and Pull Requests" href="https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request"/>
        <ResourceLink text="Track a branch" href="https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch"/>
      </Topic>
    </Section>

    <Section id="testing" name="Testing">
      <Topic name="TDD" parentId="testing" index="0" />
      <Topic name="Testing React Components" parentId="testing" index="1" />
      <Topic name="Jest and Jasmine" parentId="testing" index="2" />
      <Topic name="Enzyme" parentId="testing" index="3" />
    </Section>

    <Section id="deployment" name="Deployment" />

    <Week1 /><Week2 /><Week3 /><Week4 />

    <Week5 />

    <Week6 /><Week7 /><Week8 /><Week9 />
  </>
);
