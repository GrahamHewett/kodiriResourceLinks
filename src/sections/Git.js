import React from "react";
import Section from "../components/Section";
import Topic from "../components/Topic";
import ResourceLink from "../components/Link";

function Git() {
	return (
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
        <ResourceLink text="GitHub Guide" href="https://github.com/antonykidis/GitHub-guide/blob/master/Git%20and%20GitHub.pdf"/>
      </Topic>
    </Section>
	)
}

export default Git