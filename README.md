# effectindex

> A nuxt.js-based content management system designed for https://effectindex.com

## Installation

1. Install Node and MongoDB, get the MongoDB server running.
2. Clone the Repo
3. `npm install`
4. Create a .env file in the base directory with the following content:
```bash
# URL of the server 
BASE_URL=http://localhost:3000/
# Base URL for Axios ('/' unless running in some directory)
BROWSER_BASE_URL=/
# A secret for the JSON Web Tokens
jwtSecret=change_this_to_something_other_than_this
```
5. (optional) Download a [dump of the database](https://effectindex.com/effectindex-dump.tar.gz) and use the MongoDB mongorestore utility to restore it.
  - Extract the zip file to a folder
  - `sudo mongorestore --db ~/path/to/extracted_db ~/path/to/restore/to`
6. (optional) Run `sudo mongod --dbpath=/path/to/your/restored/db` to start the MongoDB daemon with your extracted database. Make sure to stop the daemon from step 1 if you're doing this.
7. Use 'npm run dev' to run the development server, 'npm run build' to build the production site, and 'npm run start' to start the production site.
