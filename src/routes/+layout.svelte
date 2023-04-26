<script>
  import Header from "$lib/components/Header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<footer>
  <nav>
    <a href="https://www.linkedin.com/in/borudesign/" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/yor_the_hunter" target="_blank">Twitter</a>
  </nav>
  <p>
    This site is built with Svelte and Vite.
  </p>
</footer>

<style lang="scss">
  
  :global(body) {
    overflow-x: hidden;
  }


  :global(a) {
    color: currentColor;
    transition: color 0.1s ease-out, text-decoration 0.1s ease-out;

    &:visited {
      color: #51357E;
    }

    &:hover {
      color: #FF2D78;
    }
  }

  footer {
    padding: 4rem;
    color: #242424;

    @media (max-width: 768px) {
      padding: 2rem;
    }

    nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 0.85rem;
      line-height: 1rem;
    }
  }
</style>