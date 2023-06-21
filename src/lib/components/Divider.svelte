<script lang="ts">
  export let as:string = "" 
</script>

{#if as}
  <svelte:element this={as}>
    <hr />
  </svelte:element>
{:else}
  <hr />
{/if}

<style lang="scss">
  li {
    list-style: none;
  }

  hr {
    border-top: 2px solid var(--color-primary);
    border-left: none;
    border-right: none;
    border-bottom: none;
    height: 2px;
    padding: 0;
    margin: 0;
  }
</style>