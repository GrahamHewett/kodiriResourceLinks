# Kodiri Resource Links
This 'work in progress' will be a collection of carefully selected resource links that have helped members of the Kodiri Coding Community to develop and master important software development skills.

### How to fork this or any other GitHub repository(repo)
Fork your chosen repo. This one is located at https://github.com/GrahamHewett/kodiriResourceLinks
Navigate to your fork on GitHub located at (https://github.com/YOURUSERNAME/kodiriResourceLinks)
Navigate to a folder on your machine where you want to clone the project to E.g. /User/projects
`git clone <ssh link to your forked repo>` clones your fork  so you have a local copy on your machine to work on.  
For additional details see https://help.github.com/en/articles/fork-a-repo

### How to keep your personal/local repository in sync with the original project hosted on github
##### One Time Commands
`git remote add --track master upstream git://github.com/grahamhewett/kodiriResourceLinks`  
sets the upstream to the original project

##### Repeatable Commands
`git fetch upstream`  
`git checkout master`  
`git rebase upstream/master` or `git merge upstream master`  
See [this stack overflow article](https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository) for more details.  
Please run the repeatable commands above before submitting a pull request.  
If you are worried about losing your own work you can stash your changes with `git stash` before running the 3 repeatable commands above.  
Then run `git stash pop` when you wish to restore your work.  
https://help.github.com/en/articles/syncing-a-fork  
https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request  

### How to Add a new Link
Phase 1 : The long winded way. To practice creating new instances of defined components and passing them props.  
`git checkout -b <yourName>Link` Creates a new branch called <yourName>Link. Please replace <yourName> with your actual name or initials.

```
<ResourceLink text='Name of link to display on the page' href='url of the link'/>
```
Create a new `<ResourceLink/>` tag with a `text` and a `href` prop.  
The `text` prop refers to how you want the link to look on the page and the `href` prop is the actual url to naviagte to.  
If a suitable `<Section>` and `<Topic>` do not exist for your link then please create them as per the example below.  

```
<Section id='react' name='React'>
    <Topic name='State' parentId='react' index='0'>
        <ResourceLink text='Scrimba React Tutorial' href='https://scrimba.com/g/glearnreact'/>
    </Topic>
</Section>
```
`<Section>` requires two props; `id` and `name`.  
`<Topic>` requires 3 props currently; `name`, `parentId` and `index`.  
`parentId` must match the `<Section>` `id` to which it belongs.  
`index` must be 1 greater than the previous topic. 0 based index.   

Excuse the currently horrible design and please contribute to help improve it.  
Many Thanks

## How to submit a pull request
##### Repeatable Commands
`git push origin <yourName>Link`
Navigate to your GitHub repository and select the <yourName>Link branch   
Click the [Pull Request] button near the top right.  
Then [New Pull Request]  
Set the base branch to the desired branch of the original repo.  
In this case the master branch of GrahamHewett/kodiriResourceLinks  
Set the compare branch to the branch where you have made changes that you want to be incorporated.  
In this case the <yourName>Link branch.  
https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request

## Goals and Aims
1.
2.
3.
4.
5.

## How to deploy a simple create-react-app with Now

##### Install the Now CLI.
The following method only works with now CLI 13.0.0 or above.
The easiest way to create and deploy a new project with CRA is to use the ready-to-deploy example templates provided by the ZEIT.
Use `now init` to select a deployment template.
`now init` will give you a list of projects you can choose, for this guide we're using the create-react-app example
-> Select your desired template using the arrow keys
apollo
bash
-> `create-react-app`

Run `now` from the root of the project and you'll get a link to the deployed project.
Visit the link to see your page in action.
To learn more about what's included in this premade project, read this guide from the start
https://zeit.co/guides/deploying-react-with-now-cra

#### The difference bewteen a fork and a clone
https://github.community/t5/Support-Protips/The-difference-between-forking-and-cloning-a-repository/ba-p/1372

#### The difference bewteen git merge and git rebase
https://github.community/t5/Support-Protips/The-difference-between-forking-and-cloning-a-repository/ba-p/1372

#### To learn more about writing READ.ME's in markdown
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet