### Generate CSS

1. create a CSS file for your page in `/app-css/components`
2. import the CSS file in `/app-css/index.css`

3. Create a tailwind-config file in `/tailwindconfig/tailwind-[page].config.js`

   - I've created different config files for different pages because some font sizes and colors were different.

4. Update `package.json` file scripts: `css:dev` and `css:prod` with the correct path to `/tailwindconfig/tailwind-[page].config.js` and to the css file that will be imported into `<head>`

5. Run `npm run css:dev` or `npm run css:prod` to build the css
   - `npm run css:dev` - watches for file changes and rebuilds the css, is NOT minified
   - `npm run css:prod` - builds and minifies the CSS, without watching for file change
