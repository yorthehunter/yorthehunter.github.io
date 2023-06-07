<script>
  import Header from "$lib/components/Header.svelte"
  import Divider from "$lib/components/Divider.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<Header />
<Divider />
<main>
  <slot />
</main>
<Divider />
<Footer />

<style lang="scss">
  
  :global(:root) {
    --color-raspberry: #FF2D78;
  }

  :global(body) { 
    overflow-x: hidden;
    color: black;
  }

  :global(a) {
    color: currentColor;
    text-decoration: none;
    transition: color 0.15s ease-out, border-bottom 0.15s ease-out;
    border-bottom: 2px solid currentColor;

    &:visited {
      color: currentColor;
    }

    &:hover {
      color: var(--color-raspberry);
      border-bottom-width: 0;
    }
  }
</style>