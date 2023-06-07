<script>
  export const prerender = true
  const ghUrl = "https://github.com/yorthehunter/yorthehunter.github.io";
</script>

<footer>
  <p>
    This site is built with <a href={ghUrl} target="_blank">Svelte and Vite</a>.
  </p>
</footer>

<style lang="scss">
  footer {
    max-width: calc(1128px + 3rem);
    padding: 4rem 1.5rem;
    margin: auto;
    font-size: 1.25rem;
    line-height: 3rem;
  }
</style>