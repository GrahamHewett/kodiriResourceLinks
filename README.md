# Kodiri Resource Links

This 'work in progress' will be a collection of carefully selected resource links that have helped members of the Kodiri Coding Community to develop and master important software development skills.

## How to Add a new Link

Phase 1 : The long winded way. To practice creating new instances of defined components and passing them props.

```
<ResourceLink text='Name of link to display on the page' href='url of the link'/>
```
Create a new ResourceLink tag with a text and a href prop.
The text prop refers to how you want the link to look on the page and the href prop is the actual url to naviagte to.

If a suitable `Section` and `Topic` do not exist for your link then please create them as per the example below.

```
<Section id='react' name='React'>
    <Topic name='State' parentId='react' index='0'>
        <ResourceLink text='Scrimba React Tutorial' href='https://scrimba.com/g/glearnreact'/>
    </Topic>
</Section>
```
Section requires two props; id and name.
Topic requires 3 props currently; name, parentId and index.
parentId must match the Section id to which it belongs.
index must be 1 greater than the previous topic. 0 based index. 

Excuse the currently horrible design and please contribute to help improve it.
Many Thanks

### Goals and Aims

1.
2.
3.
4.
5.

## How to deploy a simple create-react-app with Now

Install the Now CLI.
The following method only works with now CLI 13.0.0 or above.

The easiest way to create and deploy a new project with CRA is to use the ready-to-deploy example templates provided by the ZEIT.

`now init`
> Select example: (Use arrow keys)
apollo
bash
❯ create-react-app
now init will give you a list of projects you can choose, for this guide we're using the create-react-app example

To learn more about what's included in this premade project, read this guide from the start
https://zeit.co/guides/deploying-react-with-now-cra

Run `now` from the root of the project and you'll get a link to the deployed project.

Visit the link to see your page in action.