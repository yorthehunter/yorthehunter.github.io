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
    <span class="name"><Me />Brian Cleveland</span>
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
    @include helpers.small-screen {
      display: none;
    }

    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    flex: 1;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .content,
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    @include helpers.small-screen {
      gap: 0.5rem;
    }
  }

  .content {
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