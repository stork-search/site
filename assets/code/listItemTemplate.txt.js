export default `<li class="stork-result">
    <a href="{{entry.url}}">
        <p class="stork-title">{{entry.title}}</p>
        {{#each result.excerpts}}
        <p class="stork-excerpt">
            ...{{ highlight value query_offset @queryLength}}...
        </p>
        {{/each}}
    </a>
</li>`
