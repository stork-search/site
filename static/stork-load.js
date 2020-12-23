function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function defer(method) {
  setTimeout(function () {
    if (
      window.stork &&
      document.querySelector('input.stork-input') &&
      document.querySelector('div.stork-output')
    ) {
      method()
    } else {
      defer(method)
    }
  }, 250)
}

function load() {
  const data = [
    {
      name: 'federalist',
      url: 'https://files.stork-search.net/federalist.st',
    },
    {
      name: 'federalist-2',
      url: 'https://files.stork-search.net/federalist.st',
    },
    {
      name: 'threeblue',
      url: 'https://files.stork-search.net/3b1b.st',
    },
  ]

  for ({ name, url } of data) {
    try {
      stork.register(name, url, { printIndexInfo: true })
    } catch (e) {
      // console.log(`${name} not available on this page`)
    }
  }
}

defer(load)
