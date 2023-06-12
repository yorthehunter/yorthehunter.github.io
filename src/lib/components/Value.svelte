<script lang="ts">
  import P from '$lib/components/P.svelte'
</script>

<div class="value">
  <div class="image">
    <slot name="image" />
  </div>
  <div class="content">
    <h2 class="title"><slot name="title" /></h2>
    <P size="small"><slot name="content" /></P>
    <P size="small"><slot name="tools" /></P>
  </div>
</div>

<style lang="scss">
  @use './helpers.scss';

  .value {
    display: flex;
    gap: 1rem;
    align-items: center;

    @include helpers.small-screen {
      flex-direction: column;
    }
  }

  .content {
    padding: 1rem 0;
  }

  .image {
    min-width: 168px;
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @include helpers.small-screen {
      text-align: center;
    }
  }

  :global(svg) {
    max-width: 100%;
  }
</style>