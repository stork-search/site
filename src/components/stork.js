import { useEffect } from 'react'

const indexUrls = {
  federalist: 'https://files.stork-search.net/federalist.st',
  'federalist-2': 'https://files.stork-search.net/federalist.st',
  threeblue: 'https://files.stork-search.net/3b1b.st',
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
  if (!loadedIndexes) {
    throw new Error('Set loadedIndexes prop!')
  }
  useEffect(() => {
    const storkOptions = {
      onQueryUpdate: (query, results) => {
        window._paq.push(['trackSiteSearch', query, name, results.length])
      },
      onResultSelected: (query, result) => {
        window._paq.push(['trackEvent', 'searchResultSelected', query, result.entry.title])
      },
    }
    if (!loadedIndexes.includes(name)) {
      window.stork.downloadIndex(name, indexUrls[name], storkOptions)
      addLoadedIndex(name)
    }
    window.stork.attach(name)
  }, [])
  return (
    <div
      className={['stork-wrapper'].concat(wrapperClassnames).join(' ')}
      style={wrapperStyles}
    >
      <input
        data-stork={name}
        className="stork-input"
        placeholder={placeholder}
        style={inputStyles}
      />
      <div data-stork={`${name}-output`} className="stork-output">
        {' '}
      </div>
    </div>
  )
}

export default Stork
