<script>
  import Header from "$lib/components/Header.svelte"
  import Divider from "$lib/components/Divider.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<Header />
<main>
  <slot />
</main>
<Divider />
<Footer />

<style lang="scss">
  @import '$lib/assets/styles/helpers.scss';

  :global(:root) {
    --color-raspberry: #FF2D78;
    --color-primary: #0A0A0A;
    --color-secondary: #292929;
    --color-bg: #fff;
  }

  :global(body.dark-mode) {
    --color-primary: #fff;
    --color-bg: #0A0A0A;
    --color-secondary: #dbdbdb;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) { 
    overflow-x: hidden;
    color: var(--color-primary);
    background-color: var(--color-bg)
  }

  :global(a) {
    color: currentColor;
    text-decoration: none;
    border-bottom: 2px solid currentColor;
    transition: color 150ms ease-out;

    &:visited {
      color: currentColor;
    }

    &:hover {
      color: var(--color-raspberry);
    }
  }
</style>