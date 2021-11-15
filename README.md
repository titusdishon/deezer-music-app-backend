# Deezer Api

This repo holds the codebase for the Deezer backed.

### Project Structure

```
tree . --filelimit=13

├── README.md
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── app.js.html
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   └── src
│   │       ├── app.js.html
│   │       ├── controllers
│   │       │   ├── index.html
│   │       │   └── tracks.js.html
│   │       ├── index.html
│   │       └── routes
│   │           ├── index.html
│   │           └── routes.js.html
│   └── lcov.info
├── jest.config.json
├── node_modules [396 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
└── src
    ├── __tests__
    │   ├── playlist.test.js
    │   ├── search.test.js
    │   └── tracks.test.js
    ├── app.js
    ├── controllers
    │   └── tracks.js
    ├── index.js
    ├── routes
    │   └── routes.js
    └── tests
        └── setupTests.js

11 directories, 30 files
```

### Techstack

1. Node js
2. Jest
3. Express js

#### Local set up

1. Clone the repo, then run the following commands in order in your Terminal


```bash

cd deezer-music-app-backend
git checkout <branch-of-interest>
npm install
npm run test # to run test coverage

```
Inside the root of your project create a new file ```.env``` and add the following code:
```
NODE_PORT=3001
```
You can change 3001 to your desired port 
Then run:
```
npm start # makes the app available on localhost, port 3001 by default

```

2. Navigate to [http://localhost:3001/](http://localhost:3001/) on postman.
#### Endpoints 
[http://localhost:3001/api/v1/playlists?limit=20&index=1&id=3933641](http://localhost:3001/api/v1/playlists?limit=20&index=1&id=3933641)

You should be able to see a response object
### Sample output
![Tests](https://github.com/titusdishon/deezer-music-app-backend/blob/main/sample-output.png)


By changing the limit param on the endpoint expect to see an array of your expected length
#### Other apis:
[http://localhost:3001/api/v1//api/v1/search-artist?query=a](http://localhost:3001/api/v1/search-artist?query=a)

#### Submit a Pull Request

How to:

1. In Terminal, do this in the root directory of the project

```bash
git checkout -b feature/short-description 
```

##### Branch naming convention\*

Preface you branch name with

- `feature` for branches that introduce new functionality
- `chore` for branches that perform a useful general improvement, not tied to any specific functionality
- `fix` for branches that fix broken functionality
- `tests` for branches that only add developer tests

2. Raise a PR on GitHub, making sure to follow the inbuilt PR template.

3. Your changes will be merged into `main` on condition that:

- they do not break existing functionality
- they do not lower test coverage (unreasonably)
### sample test coverage
![Tests](https://github.com/titusdishon/deezer-music-app-backend/blob/main/testcoverage.png)
