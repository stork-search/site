import { useEffect } from 'react'

const indexUrls = {
  federalist: 'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  'federalist-basic':
    'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  'federalist-dark':
    'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  'federalist-flat':
    'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  'federalist-edible':
    'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  'federalist-edible-dark':
    'https://files.stork-search.net/releases/v1.4.2/federalist.st',
  threeblue: 'https://files.stork-search.net/releases/v1.4.2/3b1b.st',
}

const Stork = ({
  loadedIndexes,
  addLoadedIndex,
  name,
  placeholder,
  wrapperStyles,
  wrapperClassnames,
  inputStyles,
  playerPianoQueries,
}) => {
  if (!indexUrls[name]) {
    throw new Error(`Index ${name} not found in Stork component`)
  }

  if (!loadedIndexes) {
    throw new Error('Set loadedIndexes prop!')
  }
  useEffect(() => {
    const storkOptions = {
      onQueryUpdate: (query, results) => {
        window._paq.push(['trackSiteSearch', query, name, results.length])
      },
      onResultSelected: (query, result) => {
        window._paq.push([
          'trackEvent',
          'searchResultSelected',
          query,
          result.entry.title,
        ])
      },
    }
    if (!loadedIndexes.includes(name)) {
      window.stork.downloadIndex(name, indexUrls[name], storkOptions)
      addLoadedIndex(name)
    }
    window.stork.attach(name)
  }, [])
  return (
    <div className={wrapperClassnames || 'stork-wrapper'} style={wrapperStyles}>
      <input
        data-stork={name}
        className="stork-input"
        placeholder={placeholder}
        style={inputStyles}
      />
      <div data-stork={`${name}-output`} className="stork-output"></div>
    </div>
  )
}

export default Stork
