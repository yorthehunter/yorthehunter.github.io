<script lang="ts">
  import P from '$lib/components/P.svelte'
</script>

<li class="value">
  <div class="image">
    <slot name="image" />
  </div>
  <div class="content">
    <h2 class="title"><slot name="title" /></h2>
    <P size="small"><slot name="content" /></P>
    {#if $$slots.tools}
      <P size="small"><slot name="tools" /></P>
    {/if}
  </div>
</li>

<style lang="scss">
  .value {
    @include small-screen {
      flex-direction: column;
      align-items: center;
    }

    display: flex;
    align-items: start;
    padding: 2rem 0;
  }

  .content {
    padding: 1rem 0;
  }

  .image {
    padding: 1rem;
    flex-shrink: 0;
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @include small-screen {
      text-align: center;
    }
  }

  :global(svg) {
    max-width: 100%;
  }
</style>