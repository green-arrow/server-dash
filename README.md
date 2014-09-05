# server-dash

A customizable dashboard to monitor your Linux server.

Base application / template taken from https://github.com/green-arrow/ember-sails

## Prerequisites

To use this application, you need to have NodeJS, Sails, and MongoDB installed.

### Homebrew

If you're running on a Mac, Homebrew is a great package manager that will really help you through this installation process.

Visit http://brew.sh/ for instructions on downloading and installing.

Before running any of these ``brew install`` commands, make sure to do a ``brew doctor`` and ``brew update``.

NOTE: This step is completely optional and mostly meant for developers. You can download and install all of the below 
packages without Homebrew (and you'll need to if you're running this on your Linux server, which is exactly where 
this project is meant to run).

### NodeJS

To install NodeJS, visit http://nodejs.org/ and follow the install instructions. 
If you're running on a Mac with Homebrew installed, you can install NodeJS like this:

```
brew install node
```

### Sails

After you have NodeJS installed, you can use the node package manager (``npm``) to globally install Sails:

```
npm install -g sails
```

### MongoDB

Visit the MongoDB website (http://www.mongodb.org/) and follow the install instructions. If you're running this in a
production environment on your Linux server, make sure to follow the instructions to have MongoDB start when your
server boots (``chkconfig`` or something similar).

Again, if you're running on a Mac with Homebrew installed, you can install like this:

```
brew install mongodb
```

## Getting Started

Clone the application

```
git clone git@github.com:green-arrow/server-dash.git
```

Install dependencies

```
cd server-dash
npm install
bower install
```

Run the application (by default this will be located at ``http://localhost:1337/``)

NOTE: It is important to use the following command. ``app.js`` has been modified to
run a setup script that auto-generates necessary database records.

```
node app.js
```