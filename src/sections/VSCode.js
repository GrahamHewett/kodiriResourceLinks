import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function VSCode() {
  return (
    <Section id="vsc" name="Visual Studio Code">
      <Topic name="General" parentId="vsc" index="0">
        <ResourceLink
          text="Offical resources"
          href="https://code.visualstudio.com/docs"
        />
      </Topic>
      <Topic name="Shortcuts" parentId="vsc" index="1">
        <ResourceLink
          text="OSX"
          href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"
        />
        <ResourceLink
          text="Windows"
          href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"
        />
        <ResourceLink
          text="Linux"
          href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf"
        />
      </Topic>
      <Topic name="Plugins" parentId="vsc" index="2">
        <ResourceLink
          text="Debugger for Chrome"
          href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"
        />
        <ResourceLink
          text="Browser preview"
          href="https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview"
        />
      </Topic>
    </Section>
  );
}

export default VSCode;
