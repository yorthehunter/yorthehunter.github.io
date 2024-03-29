<script>
  export const prerender = true
  const ghUrl = "https://github.com/yorthehunter/yorthehunter.github.io";
  import P from '$lib/components/P.svelte'
</script>

<footer>
  <P>
    This site is built with <a href={ghUrl} target="_blank">Svelte and Vite</a>.
  </P>
  <P size="small">Special thanks to Vectors Market for the icons from <a href="https://thenounproject.com/" target="_blank">The Noun Project</a>.</P>
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