let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix

//////////////
//  styles  //
//////////////

  .sass('src/scss/screen.scss', 'css')
  .sass('src/scss/print.scss', 'css')
  .sass('src/scss/styleie.scss', 'css')

///////////////
//  scripts  //
///////////////

  .js('src/js/app.js', 'js')

///////////////
//  configs  //
///////////////

  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ]
  });
