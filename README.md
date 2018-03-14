# Hypearapp Responsive Admin

A [Hyperapp](https://github.com/hyperapp/hyperapp) based responsive admin app with simple graphql integration for login management.  Based on a W3.css template.

* [GraphQL](https://graphql.org) is used to manage user accounts each with a list of todos
* [W3.CSS](https://www.w3schools.com/w3css) is used to provide a responsive layout
* Secure calls are based on an Authorization header
* Routing for both public and secure routes (using [hyperapp/router](https://github.com/hyperapp/router))
* A simple modal dialog mechanism
* A suggested organization for source code (an attempt at clear separation of concerns)

## Installation

````bash
    $ git clone https://github.com/jdh2550/hyperapp-responsive-admin.git

    $ cd hyperapp-responsive-admin

    $ yarn

    $ yarn start
````

AND

````bash
    $ cd hyperapp-responsive-admin/server

    $ npm install

    $ npm start
````

Open up the application at http://localhost:4500/ in your browser

The GraphiQL interactive explorer is available at http://localhost:4501/graphiql

## Getting Started

When launched the app shows a public summary page.  If you create an account (top left of page) then when logged in the app also displays the secure "Todo List" route.

Todos can be created, updated and deleted.  Todos are implemented with a simple GraphQL server which stores all data in a simple JSON file on disk.

## Overview

This is a bare bones admin app based on "slicing up and converting to hyperapp" a pre-existing W3.css template.  It has small (mobile), medium and large responsive layouts.  This was then merged with marcusasplund's todo client - but no attempt was made to make the styles match!

It offers simple user authentication and demonstrates the use of @hyperapp/router and a simple modal dialog pattern.  To see the authentication in action go ahead and create a new account (top left on the sidebar).  You can then add todos which are saved by the server rather than local storage.

It also implements a very simple graphQL server to demonstrate making graphQL calls - the server uses apollo-server-express.  Note that I tried to use apollo-client but couldn't get it to play nicely with buble.  So I fell back to using the much simpler (but less capable) graphql-request.


## Credits

* The rollup and taskr config is based on https://github.com/tzellman/hyperapp-boilerplate
* The todo app is based on https://github.com/marcusasplund/hyperapp-todo-simple
* The admin template and responsive layout is based on https://www.w3schools.com/w3css/tryw3css_templates_analytics.htm
* The graphql server implementation is based on https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035
