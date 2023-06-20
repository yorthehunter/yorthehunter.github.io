<script>
  export const prerender = true
  const myTitle = "Design leader, product design strategy for web and mobile platforms";
  import Button from '$lib/components/Button.svelte'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
  import Me from '$lib/assets/brian-cleveland.svelte'
  import Menu from '$lib/components/Menu.svelte'
  let menuOpen = false;
</script>

<svelte:head>
	<meta name="description" content={`Portfolio, links, and contact information for Brian Cleveland: ${myTitle}`}>
  <title>Brian Cleveland: {myTitle}</title>
  <meta name="author"  content="Brian Cleveland">
</svelte:head>

<header>
  <div class="content">
    <div class="name">
      <a href="/#top"><Me /><span>Brian Cleveland</span></a>
    </div>
    <nav>
      <ul>
        <li class="only-big">
          <Button isAnchor url="/#work">Work</Button>
        </li>
        <li class="only-big">
          <Button isAnchor url="/#about">About</Button>
        </li>
        <li class="only-big">
          <Button isAnchor url="/#contact">Contact</Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
        <li class="only-small">
          <Menu on:click={() => menuOpen = !menuOpen} />
          <div class="menu" class:show={menuOpen}>
            <a href="#work" on:click={() => menuOpen = !menuOpen}>Work</a>
            <a href="#about" on:click={() => menuOpen = !menuOpen}>About</a>
            <a href="#contact" on:click={() => menuOpen = !menuOpen}>Contact</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .name {
    margin-right: auto;

    span {
      @include small-screen {
        display: none;
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      border: 0;
    }

    @include small-screen {
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
  }

  .content,
  ul {
    @include small-screen {
      gap: 0.5rem;
    }

    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .content {
    @include small-screen {
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

  .only-small {
    display: none;

    @include small-screen {
      display: block;
    }
  }

  .only-big {
    display: block;

    @include small-screen {
      display: none;
    }
  }

  .menu {
    display: none;
    position: absolute;
    z-index: 100;
    background-color: var(--color-bg);
    border: 2px solid var(--color-primary);
    padding: 1.5rem;
    left: 1rem;
    right: 1rem;
    top: 4.5rem;

    a {
      color: var(--color-primary);
      font-size: 1.75rem;
      border: 0;
      padding: 1rem 0.5rem;
      transition: color 150ms ease-out;

      &:hover {
        outline: 2px solid var(--color-raspberry);
        color: var(--color-raspberry);
      }
    }

    &.show {
      display: flex;
      flex-direction: column;
    }
  }

</style>