<script lang="ts">
  export let size = "large"
</script>

<p class={size}><slot /></p>

<style lang="scss">
  :global(p + p) {
    margin-top: 1rem;
  }

  .large {
    @include body-copy;
  }

  .small {
    @include body-copy-sm;
  }
</style>