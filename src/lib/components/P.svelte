<script lang="ts">
  export let size = "large"
</script>

<p class={size}><slot /></p>

<style lang="scss">
  p {
    font-size: 1.75rem;
    line-height: 3rem;
    max-width: 936px;
  }

  :global(p + p) {
    margin-top: 1rem;
  }

  .large {
    font-size: 1.75rem;
    line-height: 3rem;
  }

  .small {
    font-size: 18px;
    line-height: 1.5;
  }
</style>