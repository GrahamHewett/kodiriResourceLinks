import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function JavaScript() {
  return (
    <Section id="javascript" name="JavaScript">
      <Topic
        name="Online Documentation and Tutorials"
        parentId="javascript"
        index="0"
      >
        <ResourceLink text="JavaScript.info" href="https://javascript.info/" />
        <ResourceLink
          text="Mozilla Developer Network"
          href="https://developer.mozilla.org/en-US/"
        />
        <ResourceLink text="Hackr.io" href="https://hackr.io/" />
        <ResourceLink text="W3 Schools" href="https://www.w3schools.com/" />
        <ResourceLink text="Egghead.io" href="https://egghead.io/" />
      </Topic>

      <Topic name="YouTube Channels" parentId="javascript" index="1">
        <ResourceLink text="Kodiri" href="https://www.youtube.com/kodiri" />
        <ResourceLink
          text="Traversy Media"
          href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
        />
        <ResourceLink
          text="Tony Alicea - Understanding the Weird Parts"
          href="https://www.youtube.com/watch?v=Bv_5Zv5c-Ts"
        />
        <ResourceLink
          text="Academind"
          href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"
        />
        <ResourceLink
          text="Tech Sith"
          href="https://www.youtube.com/user/techSithTube"
        />
        <ResourceLink
          text="Fireship.io"
          href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"
        />
        <ResourceLink
          text="freeCodeCamp"
          href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
        />
        <ResourceLink
          text="Udemy Tech"
          href="https://www.youtube.com/channel/UCU6e4MJtvlcX5DBLP1cq8hQ"
        />
        <ResourceLink
          text="Fun Fun Function MPJ"
          href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"
        />
      </Topic>

      <Topic name="Under the Hood" parentId="javascript" index="2">
        <ResourceLink
          text="The Event Loop Video"
          href="https://www.youtube.com/watch?v=cCOL7MC4Pl0"
        />
        <ResourceLink text="V8 Engine" href="https://v8.dev/" />
        <ResourceLink
          text="V8 to machine code"
          href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964"
        />
      </Topic>
    </Section>
  );
}

export default JavaScript;
