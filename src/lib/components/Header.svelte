<script>
  export const prerender = true
  import Me from "$lib/assets/brian_cleveland_simpsons.png"
  const myTitle = "Design leader, product design strategy for web and mobile platforms";
  import Button from '$lib/components/Button.svelte'
</script>

<svelte:head>
	<meta name="description" content={`Brian Cleveland: ${myTitle}`}>
</svelte:head>

<header>
  <span class="name">Brian Cleveland</span>
  <nav>
    <ul>
      <li>
        <Button isAnchor label="My Work" url="#my-work" />
      </li>
      <li>
        <Button isAnchor label="About Me" url="#about-me" />
      </li>
      <li>
        <Button isAnchor label="Contact" url="#contact" />
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  .name {
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
  }

  header {
    margin: auto;
    padding: 1.5rem;
    max-width: calc(1128px + 3rem);
  }

</style>