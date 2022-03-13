const indexDotHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Federalist Search</title>
    <link 
      rel="stylesheet" 
      href="https://files.stork-search.net/releases/v1.4.1-rc.5/basic.css" 
    />
  </head>
  <body>
    <div class="stork-wrapper">
      <input data-stork="federalist" class="stork-input" />
      <div data-stork="federalist-output" class="stork-output"></div>
    </div>
      
    <script src="https://files.stork-search.net/releases/v1.4.1-rc.5/stork.js"></script>
    <script>
      stork.register(
        'federalist',
        'https://files.stork-search.net/releases/v1.4.1-rc.5/federalist.st'
      )
    </script>
  </body>
</html>`

export default indexDotHtml
