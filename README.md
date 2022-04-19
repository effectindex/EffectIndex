# effectindex

> A nuxt.js-based content management system designed for https://effectindex.com

## Installation

1. Install Git, Node and MongoDB
2. Run `sudo mongod --dbpath="$HOME"/.config/mongodb`. Feel free to edit this path, this is where the database will be stored.
3. `git clone https://github.com/effectindex/EffectIndex`
4. `cd EffectIndex`
5. `npm install`
6. (optional) Create a `.env` file in the `EffectIndex` directory with the following contents:
```bash
# URL of the server 
BASE_URL=http://localhost:3000/
# Base URL for Axios ('/' unless running in some directory)
BROWSER_BASE_URL=/
# A secret for the JSON Web Tokens
jwtSecret=change_this_to_something_other_than_this
```
5. (optional) Download a [dump of the database](https://effectindex.com/dump-2022-04-18.tgz) and use the MongoDB mongorestore utility to restore it. Make sure there are no trailing spaces, as this causes issues.
  - Extract the zip file to a folder
  - `cd` to said folder (eg, inside the `dump` folder, make sure it contains an `effectindex` folder)
  - `sudo mongorestore --db effectindex "$HOME/.config/mongodb"`
6. Use `npm run dev` to run the development server, `npm run build` to build the production site, and `npm run start` to start the production site.
