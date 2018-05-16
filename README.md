# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

# run npm install package.json from react_flask/static folder.
# run pip install requirements.txt from react_flask/server folder.

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

.
├── README.md
└── react_flask/
    ├── server/
    └── static/
        ├── css/
        ├── dist/
        ├── images/
        └── js/

#run react from this folder with npm run watch
#react-fredagsmys/react_flask/static

#run server from python3 virtualenv in path below
#/home/anhansson/web/react-fredagsmys/react_flask/server

virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
