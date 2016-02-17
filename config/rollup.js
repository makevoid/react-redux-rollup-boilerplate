import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  plugins: [ babel() ],
  dest: 'dist/bundle.js',
  format: 'umd'
};
