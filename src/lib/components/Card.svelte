<script lang="ts">
  export let imageUrl:string
  export let title:string
  export let subtitle:string
  export let tags:array = []
  export let url:string
  export let buttonLabel:string
  import Tag from '$lib/components/Tag.svelte'
  import Button from '$lib/components/Button.svelte'
</script>

<article class="card">
  {#if url}
    <a href={url} target="_blank">
      <img src={imageUrl} alt={title} />
    </a>
  {:else}
    <img src={imageUrl} alt={title} />
  {/if}
  <div class="tags">
    {#each tags as tag}
      <Tag>{tag}</Tag>
    {/each}
  </div>
  <div class="content">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
  {#if url}
    <Button icon={true} url={url}>{buttonLabel ? buttonLabel : "Read on Medium"}</Button>
  {:else}
    <Button isInactive>Coming Soon</Button>
  {/if}
  <slot />
</article>

<style lang="scss">
  .card {
    padding: 1rem;
    border: 2px solid var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 4px;

    @media only screen and (max-width: 700px) {
      border-left: 0;
      border-right: 0;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      border-top: 0;
      padding-bottom: 4rem;
      margin: 0 -1.5rem;
      padding: 3rem 2rem;
      &:first-child {
        border-top: 2px solid;
      }
    }

    img {
      display: flex;
      transition: opacity 150ms ease-out;
    }

    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.25;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
    }

    a {
      border: none;

      &:hover > img {
        opacity: 0.7;
      }
    }
  }
</style>