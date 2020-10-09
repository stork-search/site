import React from 'react'
import { FilenameBlock, CodeBlockCodeTag } from '../../codeblock'

const StorkPostsNunjucks = () => {
  return (
    <div className="popout">
      <FilenameBlock>stork-posts.njk</FilenameBlock>

      <pre style={{ marginTop: `0`, padding: `0` }}>
        <CodeBlockCodeTag>
          {`---
permalink: "stork-posts.toml",
eleventyExcludeFromCollections: true
---

[input]
url_prefix = "https://jameslittle.me"

{%- for post in collections.post %}
{% set absolutePostUrl %}{{ post.url | url | absoluteUrl(metadata.url) }}{% endset %}
[[input.files]]
path = "{{post.inputPath}}"
url = "{{absolutePostUrl}}"
title = "{{post.data.title | safe}}"

{%- endfor %}

[output]
filename = "_site/stork-posts.st"`}
        </CodeBlockCodeTag>
      </pre>
    </div>
  )
}

export default StorkPostsNunjucks
