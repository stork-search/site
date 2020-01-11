export default {
  render(createElement) {
    const code = createElement(
      'code',
      { class: [`lang-${this.lang}`] },
      this.html
    )
    return createElement('pre', { attrs: { 'data-filename': this.filename } }, [
      code
    ])
  },
  data() {
    return {
      html: this.asset
    }
  },
  props: {
    asset: {
      type: String,
      required: false
    },
    lang: {
      type: String,
      required: false
    },
    filename: {
      type: String,
      required: false
    }
  }
}
