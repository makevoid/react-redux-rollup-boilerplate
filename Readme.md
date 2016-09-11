# React + Redux Boilerplate bundled with Rollup


### Setup:

    npm install

    npm install -g rollup

### Bundle:

trigger rollup manually:

    rollup -c config/rollup.js

or automatically with guard-shell

    guard

(you need to `gem install guard-shell` before)


##### TODO:

- add grunt/whatchify other than guard
- add react router

to update deps:

- clean the package json ( `{}` )

    npm i --save react react-dom react-redux redux

    npm i --save-dev babel babel-preset-react babel-preset-es2015 rollup rollup-plugin-npm rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-replace
