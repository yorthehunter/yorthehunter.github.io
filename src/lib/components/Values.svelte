<script lang="ts">
  import type { ComponentType, SvelteComponentTyped } from 'svelte';
  import Value from '$lib/components/Value.svelte'
  export let values: {icon: ComponentType<SvelteComponentTyped>, title: string, content: string[]}[]
  export let twoCol:boolean = true
</script>

<h2 class="title">Values</h2>
<ul class="values" style="grid-template-columns: {twoCol ? '1fr 1fr': '1fr'}">
  {#each values as value}
    <Value>
      <svelte:component this={value.icon} slot="image" />
      <svelte:fragment slot="title">{value.title}</svelte:fragment>
      <svelte:fragment slot="content">
        <ul class="value-list">
          {#each value.content as item}
            <li>{item}</li>
          {/each}
        </ul>
      </svelte:fragment>
    </Value>
  {/each}
</ul>

<style lang="scss">
  .title {
    @include subsection-heading;

    @include small-screen {
      text-align: center;
    }
  }

  .value-list {
    @include unordered-list;
  }

  .values {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include small-screen {
      grid-template-columns: 1fr;
    }
  }
</style>
