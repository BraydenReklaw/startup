# NOTES

README [here](startup/README.md)

MDN WebDocs (go to html documentation)

W3Schools.com

code pen assignments : Fork the main assignment and work on the forked pen

check out escape character syntax

ventura@cs.byu.edu

## Git

use `git commit -am "message here"` to add message in commit command

Always pull before doing anything

## Service

ip: 52.45.118.7

## HTML

html is building a tree (DOM - document object model - describes the structure of the tree)

pay attention to broad tags (header, main, nav, body, footer, etc)

`<a href a="address">link name<\a>` to create links

`<title>` determines what is desplayed on the tab lable on the browser bar 

`<hr \>` adds a dividing line to the page in the abscence of css. Note that because it is self contained, you don't need a closing tag

class : identifier for css or java that multiple objects can  (broad)

id : identifier for css or java that only a single object may have (specific)

pay attention to how simon-html sets up for elements that will be edited later with code, like player name on play.html

## CSS

'*'{} -  this is a universal styling guide that can be overridden (ignore the '')

rules -->  p (selecter for paragraphs) {
    Color(property): green(value);
}

can be encapsulated in a style tag in html header, a style attribute in the element, or separately on a css page via `<link rel="stylesheet href="styles.css" />`

`font-family:` often give a list of fonts in priority, allowing for browsers to display the font they can

precedence : attribute, style tag, referenced stylesheet

selectors: element ('div', 'p', etc.), ID ('#root', style for this only applies to the element with id='root'), class ('.highlight', syle for this will apply to any elements with class='highlight'), element class ('p.highlight', will apply to any p with class='highlight'), list ('div, body', the style will apply to both these selectors), descendent ('body section', style will apply to any section within the body tags), child ('section > p', only apply if a p is the immediate child of a section), psuedo ('p:hover' state based styling rules that will only apply if conditions are met, such as the mouse hovering over the element)

box model (out to in): margin, border, padding, content

supplying a custom font:
`@font-face{font-family: 'quicksand'; src: url(url.com);}`

importing a font:
`@import url(fonturl.com);`

check out animations. need `animation-name: sample;` and `animation-duration` and `@keyframes sample` which involve setting up stages of of the animation.

`display: None` tell the selector to not be viewerable by user (for utility or viewability of screen). None can also be Block, Inline, Flex, Grid. Block fills screen width, Inline fills content width, flex and grid are variable

check out media queries (define rules for what happens for different view sizes and associated animations)

check out flex

USE BOOTSTRAP!!!!!!

## Java

behavior and computing. Manipulating the DOM using Node

`console.log('Hello' + ' ' + 'world')` - a print statement. `function name(stuff) {stuff used and return}`

`<script src="file"></script>`

`<button onclick="sayHello()>hello</button>` apply a function to a button

check out the script tag on this [website](https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html). use the debugger. press the button with sources opened and breakpoint assigned to where you want. `debugger` creates a breakpoint automatically.

Promises and Async/Await. Pay attention to the Codepen examples. these allow code to run asynchronously.

Kahoot Notes For Midterm and Studying

- code to load in fonts from google
- text orientaiton code with flex : column-reversed will flip content order
- box model - MBPC
- java execution
- hmtl elements (<div> is division element)
- regex
- java arrays
- dom oriented java code

Node.js - I have run through the node.js stuff and have an example of it in codeplay folder

Don't push modules to Github, only need package and package-lock pushed. use a .gitignore file

`fetch("https://localhost:8080")` `app.listen(8080)` an example, also in codeplay (pull from 0ct 17 slides), of a service that listens and responds to a request. run `node listen.js` in terminal to make the service live. go to local host 8080 to then see the effect

## Frameworks

react [experiments](https://codepen.io/BrayDenWalker/pen/JjgrOxK?editors=1010).

`a = {food:"apple"}; a.food` and `{food} = a` is an example of destructering (pull value of food out of object a)

`import React from "https://cdn.skypack.dev/react"` `import ReactDOM from "https://cdn.skypack.dev/react-dom"`

hooks
- useState - allows you change states in html using variables
- useEffect - a function that is run whenever a component is re-rendered

React mixes html and javascript - components are the building blocks. JSX mixes json and html

router - affects the header currently being used. This will require placing each page into a subdirectory. Pay attention to simon.

toolchain `npm run build`. 
