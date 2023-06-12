<script>
  export const prerender = true
  const myTitle = "Design leader, product design strategy for web and mobile platforms";
  import Button from '$lib/components/Button.svelte'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
  import Me from '$lib/components/brian-cleveland.svelte'
</script>

<svelte:head>
	<meta name="description" content={`Portfolio, links, and contact information for Brian Cleveland: ${myTitle}`}>
  <title>Brian Cleveland: {myTitle}</title>
  <meta name="author"  content="Brian Cleveland">
</svelte:head>

<header>
  <div class="content">
    <a class="name" href="#top"><Me /><span>Brian Cleveland</span></a>
    <nav>
      <ul>
        <li>
          <Button isAnchor url="#work">Work</Button>
        </li>
        <li>
          <Button isAnchor url="#about">About</Button>
        </li>
        <li>
          <Button isAnchor url="#contact">Contact</Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  @use './helpers.scss';

  .name {
    & > span {
      @include helpers.small-screen {
        display: none;
      }
    }

    @include helpers.small-screen {
      max-width: 44px;
      max-height: 44px;
    }

    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    flex: 1;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
  }

  .content,
  ul {
    @include helpers.small-screen {
      gap: 0.5rem;
    }

    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .content {
    @include helpers.small-screen {
      padding: 0.5rem 1.5rem;
    }

    margin: auto;
    padding: 1.5rem;
    max-width: calc(1128px + 3rem);
  }

  header {
    width: 100%;
    border-bottom: 2px solid var(--color-primary);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-bg);
    z-index: 100;
  }

</style>