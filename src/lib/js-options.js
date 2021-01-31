const registrationOptionData = [
  {
    key: 'showProgress',
    type: 'Boolean',
    default: 'true',
    description:
      'When true, Stork will display a progress bar in the input field as the index is loading. When false, that progress bar will not be rendered.',
  },
  {
    key: 'printIndexInfo',
    type: 'Boolean',
    default: 'false',
    description:
      'If this is set to true, Stork will print information about the search index to the console when it has successfully loaded.',
  },
  {
    key: 'showScores',
    type: 'Boolean',
    default: 'false',
    description:
      'If this is set to true, Stork will display the scores it computes for each result and excerpt, used for result ordering.',
  },
  {
    key: 'minimumQueryLength',
    type: 'Number',
    default: '3',
    description:
      'The minimum length a query must be to request results from the index. If this is smaller than the `minimum_indexed_substring_length` in your index, Stork will make unnecessary search requests.',
  },
  {
    key: 'onQueryUpdate',
    type: 'Function: `(query, results) => void`',
    default: 'undefined',
    description:
      'A callback function that will be called every time the search query updates and new results are displayed. This function is called with two arguments: the string typed into the search field, and an array of **Result** objects.',
  },
  {
    key: 'onResultSelected',
    type: 'Function: `(query, result) => void`',
    default: 'undefined',
    description:
      'A callback function that will be called every time the search query updates and new results are displayed. This function is called with two arguments: the string typed into the search field, and the **Result** object the user selected. If you return a Promise from this function, Stork will await that promise before changing the window location.',
  },
]

const resultObject = [
  {
    key: 'entry',
    type: 'An **Entry** object',
    description: 'The file represented by the result.',
  },
  {
    key: 'excerpts',
    type: 'Array of **Excerpt** objects',
    description: 'Each excerpt visible to the user in the search interface.',
  },
  {
    key: 'score',
    type: 'Number',
    description:
      'The "relevance" score Stork computed for the given entry. Used to order the results for a given query',
  },
]

const entryObject = [
  {
    key: 'title',
    type: 'String',
    description:
      "The title of the document",
  },
  {
    key: 'url',
    type: 'String',
    description:
      "The URL to where the search result links",
  },
  {
    key: 'fields',
    type: 'Object',
    description:
      'A set of key-value pairs passed through from the file object in the Configuration File. Can be used to pass arbitrary string-based metadata from the index at build time to the JS environment at runtime.',
  },
]

const excerptObject = [
  {
    key: 'text',
    type: 'String',
    description:
      'The excerpt of text from the original file that contains the user\'s search query. Usually displayed in a list',
  },
  {
    key: 'score',
    type: 'Number',
    description:
      'The "relevance" score Stork computed for the given entry. Used to order all excerpts within a given result.',
  },
  {
    key: 'fields',
    type: 'Object',
    default: '5',
    description:
      'A set of key-value pairs passed through from the file object in the Configuration File. Can be used to pass arbitrary string-based metadata from the index at build time to the JS environment at runtime.',
  },
]

export {registrationOptionData, resultObject, entryObject, excerptObject}
