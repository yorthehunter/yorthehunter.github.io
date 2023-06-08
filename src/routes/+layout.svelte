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
    --color-primary: #000;
    --color-bg: #fff;
  }

  :global(body.dark-mode) {
    --color-primary: #fff;
    --color-bg: #000;
  }

  :global(body) { 
    overflow-x: hidden;
    color: var(--color-primary);
    background-color: var(--color-bg)
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