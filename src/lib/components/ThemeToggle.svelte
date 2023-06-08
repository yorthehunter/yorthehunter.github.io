<script>
  import Button from '$lib/components/Button.svelte'
  import Sun from '$lib/components/Sun.svelte'
  import Moon from '$lib/components/Moon.svelte'
  let isDark = false;
  function toggle() {
    window.document.body.classList.toggle('dark-mode')
    isDark = !isDark;
  }
</script>
<button on:click={toggle}>
  {#if isDark }
	  <Sun />
  {:else}
    <Moon />
  {/if}
</button>

<style lang="scss">
  button {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    align-self: start;
    justify-content: center;
    gap: 0.75rem;
    font-size: 18px;
    line-height: 1.5;
    border: none;
    margin: none;
    padding: calc(1rem - 4px) 1.5rem;
    background-color: var(--color-primary);
    color: var(--color-bg);
    border-radius: 255px;
    transition: background-color 0.15s ease-out;
    border: 2px solid var(--color-primary);

    @media only screen and (max-width: 700px) {
      font-size: 16px;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      background-color: var(--color-raspberry);
    }

    &:active {
      background-color: var(--color-primary);
    }
  }
</style>