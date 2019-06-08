import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";


function CSS() {
  return (
    <Section id="css" name="CSS">
      <Topic name="flexbox" parentId="css" index="0">
        <ResourceLink
          text="CSS Tricks Guide to Flexbox"
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        />
        <ResourceLink text="Flexbox Froggy" href="https://flexboxfroggy.com/" />
        <ResourceLink
          text="Flexbox Zombies"
          href="https://mastery.games/p/flexbox-zombies"
        />
      </Topic>
      <Topic name="grid" parentId="css" index="1">
        <ResourceLink
          text="CSS Tricks Guide to Grid"
          href="https://css-tricks.com/snippets/css/complete-guide-grid/"
        />
        <ResourceLink text="Grid Critters" href="https://gridcritters.com/" />
        <ResourceLink
          text="Grid Tile Layouts"
          href="https://gedd.ski/post/tile-layouts/"
        />
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
  );
}

export default CSS;