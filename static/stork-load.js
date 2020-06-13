function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function defer(method) {
  if (
    window.stork &&
    document.querySelector('input.stork-input') &&
    document.querySelector('div.stork-output')
  ) {
    method()
  } else {
    setTimeout(function () {
      defer(method)
    }, 500)
  }
}

function load() {
  stork.register('federalist', 'https://files.stork-search.net/federalist.st', {
    printIndexInfo: true,
  })
}

defer(load)
