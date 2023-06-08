<script lang="ts">
  export let url:string = "";
  export let icon:boolean = false;
  export let isInactive:boolean = false;
  export let isAnchor:boolean = false;
  import ArrowRight from "$lib/components/ArrowRight.svelte"
</script>

<style lang="scss" src="./Button.scss" />

{#if isInactive}
  <button class="button inactive">
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
