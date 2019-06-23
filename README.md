# effectindex

> A nuxt.js-based content management system designed for effectindex.com

## Installation

1. Install Node and MongoDB, get the MongoDB server running.
2. Clone the Repo
3. npm install
4. Create a .env file in the base directory with the following content:
```bash
# URL of the server 
BASE_URL=http://localhost:3000/
# Base URL for Axios ('/' unless running in some directory)
BROWSER_BASE_URL=/
# A secret for the JSON Web Tokens
jwtSecret=change_this_to_something_other_than_this
```
5. (optional) Download a [dump of the database](http://effectindex.com/effectindex.tar) and use the MongoDB mongorestore utility to restore it.
6. use 'npm run dev' to run the development server, 'npm run build' to build the production site, and 'npm run start' to start the production site.
