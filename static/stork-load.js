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
  const federalistInput = document.querySelectorAll(
    'input[data-stork="federalist"]'
  )
  
  const federalist2Input = document.querySelectorAll(
    'input[data-stork="federalist2"]'
  )

  const threeBlueInput = document.querySelectorAll(
    'input[data-stork="threeblue"]'
  )

  if (federalistInput.length > 0) {
    stork.register(
      'federalist',
      'https://files.stork-search.net/federalist.st',
      {
        printIndexInfo: true,
      }
    )
  }
  
  if (federalistInput.length > 0) {
    stork.register(
      'federalist-2',
      'https://files.stork-search.net/federalist.st',
      {
        printIndexInfo: true,
      }
    )
  }

  if (threeBlueInput.length > 0) {
    stork.register('threeblue', 'https://files.stork-search.net/3b1b.st', {
      printIndexInfo: true,
    })
  }
}

defer(load)
