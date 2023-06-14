<script lang="ts">
  import Tag from '$lib/components/Tag.svelte'
  export let tagList: string[] = [];
</script>

<div class="tags">
  {#each tagList as tag}
    <Tag>{tag}</Tag>
  {/each}
</div>

<style lang="scss">
  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>