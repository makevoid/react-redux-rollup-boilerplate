import babel from 'rollup-plugin-babel';

export default {
  entry: 'app.js',
  plugins: [ babel() ],
  dest: 'dist/bundle.js',
  format: 'umd'
};
