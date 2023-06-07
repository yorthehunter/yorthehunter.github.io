<script>
  export let url;
  export let label;
  export let icon = false;
  export let isInactive = false;
  export let isAnchor = false;
  import ArrowRight from "$lib/components/ArrowRight.svelte"
</script>

{#if isInactive}
  <button class="button inactive">
    {label}
    {#if icon}
      <ArrowRight />
    {/if}
  </button>
{/if}
{#if !isInactive}
  <a
    href={url}
    class="button"
    target={isAnchor ? '' : '_blank'}
  >
    {label}
    {#if icon}
      <ArrowRight />
    {/if}
  </a>
{/if}


<style lang="scss">
  .button {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    align-self: start;
    justify-content: center;
    gap: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    border: none;
    margin: none;
    padding: calc(1rem - 4px) 1.5rem;
    background-color: black;
    color: white;
    border-radius: 255px;
    transition: background-color 0.15s ease-out;
    border: 2px solid black;

    &.inactive {
      background-color: white;
      color: black;

      &:hover,
      &:active {
        background-color: white;
      }
    }

    &:hover {
      background-color: var(--color-raspberry);
    }

    &:active {
      background-color: black;
    }
  }
</style>