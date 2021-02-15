import { FullWidth, grayBackground, Column, VerticalSpacer } from '../utils'
import { MetaText } from '../text'
import Stork from '../stork'

const Demo = ({ loadedIndexes, addLoadedIndex }) => {
  return (
    <FullWidth background={grayBackground}>
      <MetaText>
        Search the{' '}
        <a href="https://www.youtube.com/watch?v=DPgE7PNzXag">
          Federalist Papers
        </a>
        *:
      </MetaText>
      <Stork
        loadedIndexes={loadedIndexes}
        addLoadedIndex={addLoadedIndex}
        name="federalist"
        placeholder="liberty"
        inputStyles={{ fontSize: '1.3em' }}
        playerPianoQueries={[
          'liberty',
          'united states',
          'territories',
          'products',
          'iPhone',
        ]}
      />
      <p style={{ fontSize: '0.8em' }}>*Well, just the first twenty.</p>
    </FullWidth>
  )
}

export default Demo
