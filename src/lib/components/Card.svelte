<script lang="ts">
  export let tag:string
  export let imageUrl:string
  export let title:string
  export let subtitle:string
  import Tag from '$lib/components/Tag.svelte'
</script>

<article class="card">
  <img src={imageUrl} alt={title} />
  <Tag>{tag}</Tag>
  <div class="content">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
  <slot />
</article>

<style lang="scss">
  .card {
    padding: 1rem;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4px;

    img {
      display: block;
    }

    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    p {
      font-size: 18px;
      line-height: 1;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>