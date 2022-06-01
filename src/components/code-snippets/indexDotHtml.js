import version from '../../lib/stork-cdn-version'

const indexDotHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Federalist Search</title>
    <link 
      rel="stylesheet" 
      href="https://files.stork-search.net/releases/${version}/basic.css" 
    />
  </head>
  <body>
    <div class="stork-wrapper">
      <input data-stork="federalist" class="stork-input" />
      <div data-stork="federalist-output" class="stork-output"></div>
    </div>
      
    <script src="https://files.stork-search.net/releases/${version}/stork.js"></script>
    <script>
      stork.register(
        'federalist',
        'https://files.stork-search.net/releases/${version}/federalist.st'
      )
    </script>
  </body>
</html>`

export default indexDotHtml
