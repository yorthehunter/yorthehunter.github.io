<script lang="ts">
  import ArrowRight from "$lib/components/ArrowRight.svelte"
  export let url:string = "";
  export let icon:boolean = false;
  export let isInactive:boolean = false;
  export let isAnchor:boolean = false;
</script>

{#if isInactive}
  <button type="button" class="button inactive" aria-disabled>
    <slot />
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
    <slot />
    {#if icon}
      <ArrowRight />
    {/if}
  </a>
{/if}

<style lang="scss">
  @import '$lib/assets/Button.scss';
</style>