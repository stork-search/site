<template>
  <section>
    <p>
      If you're on a Mac, you can use <a href="https://brew.sh">Homebrew</a> to
      download Stork:
    </p>

    <pre
      class="normal-width"
    ><code>$ brew install jameslittle230/stork-tap/stork</code></pre>

    <p>The executable will be compiled and moved into your path.</p>

    <p>
      If you're not on a Mac, or if you don't want to use Homebrew, you can
      manually install Stork.
    </p>

    <ul>
      <li>
        Stork is built with Rust; make sure you have
        <a href="https://github.com/rust-lang/cargo/">Cargo</a> installed.
      </li>

      <li>
        View the
        <a href="https://github.com/jameslittle230/stork/releases"
          >latest release on Github</a
        >.
      </li>
      <li>
        Download the source code bundle (either the Zipfile or the Tarball) and
        uncompress it.
      </li>
      <li>
        From the project directory, run <code>$ cargo build --release</code>
      </li>
      <li>
        Optional: Copy the executable from
        <code>./target/release/stork</code> into your path
      </li>
      <li>
        Now when you run <code>$ stork</code> from your command line, you should
        see the project information and help text.
      </li>
    </ul>
    <p>
      If this doesn't work for you,
      <a href="https://github.com/jameslittle230/stork/issues/new"
        >open a Github issue</a
      >
      and let me know.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
