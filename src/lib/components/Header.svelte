<script>
  export const prerender = true
  import Me from "$lib/assets/brian_cleveland_simpsons.png"
  const myTitle = "Design leader, product design strategy for web and mobile platforms";
  import Button from '$lib/components/Button.svelte'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
</script>

<svelte:head>
	<meta name="description" content={`Brian Cleveland: ${myTitle}`}>
</svelte:head>

<header>
  <span class="name">Brian Cleveland</span>
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
</header>

<style lang="scss">
  .name {

    @media only screen and (max-width: 700px) {
      display: none;
    }

    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    flex: 1;
    font-weight: 700;
  }

  header,
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 700px) {
      gap: 0.5rem;
    }
  }

  header {
    margin: auto;
    padding: 1.5rem;
    max-width: calc(1128px + 3rem);
  }

</style>