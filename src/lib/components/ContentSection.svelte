<script lang="ts">
  import Divider from '$lib/components/Divider.svelte'
  export let title:string;
  export let id:string;
</script>

<article id={id}>
  <h2>{title}</h2>
  <Divider />
  <slot name="top" />
  <slot name="bottom" />
</article>


<style lang="scss">
  article {
    max-width: 1128px;
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.75rem;
    line-height: 4.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
</style>