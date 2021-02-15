const inputOptionData = [
  {
    key: 'base_directory',
    type: 'String',
    required: true,
    default: null,
    description:
      'The directory to which each file path is relative. This file path must also be relative to the working directory.',
  },
  {
    key: 'files',
    type: 'Array of [File objects](#file)',
    default: 'Empty Array',
    description: 'The list of file objects Stork will index.',
  },
  {
    key: 'url_prefix',
    type: 'String',
    default: 'Empty String',
    description:
      "If all your files point to URLs with the same prefix, you can put the prefix here so you don't repeat it in each file object.",
  },
  {
    key: 'title_boost',
    type: 'String',
    default: '"Moderate"',
    description:
      'One of: `Minimal`, `Moderate`, `Large`, and `Ridiculous`. Determines how much a result will be boosted if the search query matches the title.',
  },
  {
    key: 'html_selector',
    type: 'String',
    default: '"main"',
    description:
      'For all HTML files, this will control the container tag where Stork will index content. Expects a CSS selector. [See more](/docs/html/)',
  },
  {
    key: 'frontmatter_handling',
    type: 'String',
    default: '"Omit"',
    description:
      'One of `Ignore`, `Omit`, or `Parse`. If frontmatter is detected in your content, `Ignore` will _not handle the frontmatter in any special way_, effectively including it in the index. `Omit` will parse and remove frontmatter from indexed content. `Parse` does nothing.',
  },
  {
    key: 'stemming',
    type: 'String',
    default: '"English"',
    description:
      'The stemming algorithm the indexer should use while analyzing words. Should be `None` or one of the languages supported by [Snowball Stem](https://snowballstem.org), e.g. `Dutch`.',
  },
  {
    key: 'srt_config',
    type: '[SRT Config Object](#srt-config)',
    default: 'See below',
    description:
      'For all SRT files, this object will describe how Stork will handle the timestamp information embedded in the file. [See more](/docs/srt)',
  },
  {
    key: 'minimum_indexed_substring_length',
    type: 'Integer',
    default: '3',
    description:
      'The minimum substring length that gets indexed and is available to be searched. Setting this too low will make your index file gigantic.',
  },
  {
    key: 'minimum_index_ideographic_substring_length',
    type: 'Integer',
    default: '1',
    description:
      'If a string is made of [CJK Ideographs](https://en.wikipedia.org/wiki/CJK_Unified_Ideographs) , its substrings should be shorter. This defines the minimum indexed substring length when indexing an ideographic string.',
  },
]

const fileOptionData = [
  {
    key: 'title',
    type: 'String',
    required: true,
    default: null,
    description:
      'The document title. Used mainly for display purposes, but search queries with words in the title are given a boost.',
  },
  {
    key: 'url',
    type: 'String',
    required: true,
    default: null,
    description:
      'The location this search result links to online. This value eventually becomes the href of the search result link.',
  },
  {
    key: 'path',
    type: 'Optional String',
    default: 'null',
    description:
      'The location of the document/file on disk, where the indexer can find it. Each file object must have either a `path` or a `contents` field, but not both.',
  },
  {
    key: 'contents',
    type: 'Optional String',
    default: 'null',
    description:
      'The contents of the document, embedded inline in the configuration file. Each file object must have either a `path` or a `contents` field, but not both.',
  },
  {
    key: 'html_selector_override',
    type: 'Optional String',
    default: 'null',
    description:
      'Overrides the global `html_selector` configuration option for this document.',
  },
  {
    key: 'stemming_override',
    type: 'Optional String',
    default: 'null',
    description:
      'Overrides the stemming algorithm used for this document. You will likely set this if this document is written in a different language from the rest of the documents in your corpus.',
  },
  {
    key: 'filetype',
    type: 'Optional String',
    default: 'null',
    description:
      "One of: `PlainText`, `SRTSubtitle`, `HTML`, or `Markdown`. Stork needs to know what kind of file it is indexing so it can parse the file's contents properly. Usually, Stork can determine what kind of file it is looking at based on the file extension. If Stork cannot detect the type of a file, you can manually set the  filetype with this option.",
  },
]

const srtOptionData = [
  {
    key: 'timestamp_linking',
    type: 'Boolean',
    default: 'true',
    description:
      "Determines whether Stork should use the timestamp data embedded in the subtitle file to append the timestamp to the search result's URL. Setting this to false will effectively strip timestamp data from the subtitle files.",
  },
  {
    key: 'timestamp_template_string',
    type: 'String',
    default: '"&t={ts}"',
    description:
      "The string that gets appended to the URL to add timestamp data to the link. `{ts}` gets replaced with the timestamp of that result's excerpt. The default template string is the string used by YouTube.",
  },
  {
    key: 'timestamp_format',
    type: 'String',
    default: '"NumberOfSeconds"',
    description:
      'One of: `NumberOfSeconds`. Determines the format of the timestamp that replaces `{ts}` in the template string. The default format, "number of seconds", is the timestamp format used in YouTube links.',
  },
]

const outputOptionData = [
  {
    key: 'filename',
    type: 'String',
    default: 'output.st',
    description:
      'The filename of the generated index file. Stork will write this file at this location relative to where you run the `stork --build` command.',
  },
  {
    key: 'exerpt_buffer',
    type: 'Integer',
    default: '8',
    description:
      'The number of words that will surround each search term in the displayed search results. Also determines what defines a nearby word when grouping nearby search results into a single match.',
  },
  {
    key: 'excerpts_per_result',
    type: 'Integer',
    default: '5',
    description:
      'Defines the maximum number of excerpts that will be shown for each search result, if multiple excerpts match the search query.',
  },
  {
    key: 'displayed_results_count',
    type: 'Integer',
    default: '10',
    description:
      'Defines the maximum number of search results displayed in the list. Pushing this too high will result in performance issues.',
  },
  {
    key: 'debug',
    type: 'Boolean',
    default: 'false',
    description:
      'When true, Stork will output a pretty-printed JSON representation of the index, instead of the index file. This option should only be used for debugging.',
  },
]

export { inputOptionData, fileOptionData, srtOptionData, outputOptionData }
