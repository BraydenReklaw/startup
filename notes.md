# Notes
[README here](README.md)
## Git
Push and pull from the console
***Always make sure you have saved before committing***
## Server (EC2, Route 53)
### Tech Stack
Large roadmap picture of the stuff
React, Caddy 2, Node.JS (renders html/css, runs JavaScript), MongoDB
server - computer computing stuff. services - functionality
DNS - host name (ex: byu.edu)
### AWS EC2
server instance name - cs260-spider-startup  
Domain Names: use .click for cheaper options  
verify the email  
The IP address should be used as http://[IP address]
## HTML
**remember that page 1 is index.html**
<ht /> creates line across page (breaks up the page between header, main, and footer  
***ctrl+shift+i*** opens the developement tools of a website
## CSS
Cascading Style Sheet. Can be applied as a style html tag in the html sheet, an inline attribute, or stored on a separate file. Precedence is important. What is defined above will continue until redefined below. CSS works under a box model (outside -> 
in: Margin, Border, Padding, object), or Pals Before Marriage (inside -> out).
When it comes to fonts, spidernotes should use a more handwriting styled one. Check Google fonts for free samples.  
meta (element) determines if the code or browser determines display size and rendering (name = "viewport" content="width=device-width, initial-scale=1")
float:  allows text/element wrapping (use it on ui tools and the picture on about)
display: none(don't display) block(full width used) inline(only use width as needed) grid (rows/columns dependent upon rendering size) flex(allows flexible elements depending on rendering size, affecting the children of the parent element (footer is child of body))   
media queries - alter what style of rendering depending on display size (such as hiding an element if screen gets too small)  
## JavaScript
always interpreting. You won't find an executable anywhere.  use .js files
console.log() -> print, stdout, etc
script src="index.js" inside a script tag
button onclick="sayHello()"   runs the javascript function on click  
=== for equality (***not ==***)
in the developemental tools, f12 open, f8 step over, f10 step into  
'0' == 0 is true (typecasting). '0' === 0 is false (str =/= int)  
pay attention to the arrow functions pages (lambdas)  
closure - calling a constructor on a function, returning a function with pre-specified parameters and scope  
use let to define variables
**pay attention to the JS pages on the site, especially the later half of them!!!**  
Asynchronous functions are important for "interupting" processes or running multiple things at once. Use Promises  
pay attention to the pizza example for promises
