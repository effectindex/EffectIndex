# effectindex

> A nuxt.js-based content management system designed for https://effectindex.com

## Installation

1. Install Git, Node and MongoDB
2. Run `mongod --dbpath="$HOME"/.config/mongodb`. Feel free to edit this path, this is where the database will be stored.
3. `git clone https://github.com/effectindex/EffectIndex`
4. `cd EffectIndex`
5. `npm install`
6. Create a `.env` file in the `EffectIndex` directory with the following contents:
```bash
# URL of the server
BASE_URL=http://localhost:3000/
# Base URL for Axios ('/' unless running in some directory)
BROWSER_BASE_URL=/
# A secret for the JSON Web Tokens
jwtSecret=change_this_to_something_other_than_this
```
5. (optional) Download a [dump of the database](https://effectindex.com/dump-2022-08-12.tgz) and use the MongoDB `mongorestore` utility to restore it.
  - Extract the zip file to a folder
  - `mongorestore --db effectindex dump/effectindex`
6. Use `npm run dev` to run the development server, `npm run build` to build the production site, and `npm run start` to start the production site.

**Note:** If your computer supports IPv6, you MUST use `--ipv6` when running `mongod`, otherwise EffectIndex will fail to connect to the database.
