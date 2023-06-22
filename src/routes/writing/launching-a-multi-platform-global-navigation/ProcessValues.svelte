<script>
  import Value from '$lib/components/Value.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import Adoption from '$lib/assets/adoption.svelte'
  import Beta from '$lib/assets/beta.svelte'
  import Development from '$lib/assets/development.svelte'
  import Docs from '$lib/assets/docs.svelte'
  import Exploration from '$lib/assets/exploration.svelte'
  import Qa from '$lib/assets/qa.svelte'
  import Research from '$lib/assets/research.svelte'
  import Review from '$lib/assets/review.svelte'
  import Specs from '$lib/assets/specs.svelte'
  const values = [
    {
      icon: Research,
      title: "Reseach",
      content: "Audit existing patterns, audit external best practices, and develop questions and needs for the components.",
    },
    {
      icon: Exploration,
      title: "Exploration",
      content: "Design Figma mocks to show states, responsive layouts, and contextual compositions. Prototype in Figma to show interaction design.",
    },
    {
      icon: Review,
      title: "Design review",
      content: "Share goal and design with product design team, gather questions, product diverging designs and iterations as necessary.",
    },
    {
      icon: Specs,
      title: "Component specs",
      content: "Refine designs to be in line with design system guidelines. Define the anatomy, props, layout, and other design tokens that will assist in development.",
    },
    {
      icon: Development,
      title: "Development",
      content: "Partner with a Platform engineer to build components in the Vita library. Develop storybook stories to visualize variants.",
    },
    {
      icon: Docs,
      title: "Usage documentation",
      content: "In the Figma library, finalize draft usage documentation, including how to apply variants in component instances. In Storybook, write code best practices and other relevant documentation.",
    },
    {
      icon: Qa,
      title: "Component QA",
      content: "Partner with engineering to identify previously unknown use-cases. Make sure we're using design tokens properly and visuals, naming, and component structure mirror the Figma components.",
    },
    {
      icon: Beta,
      title: "Beta launch",
      content: "Beta components are exported from the Vita library and socialized across channels. Work with product partners on an adoption timeline or a migration plan.",
    },
    {
      icon: Adoption,
      title: "Migration / adoption",
      content: "Once tickets are created and agreed upon, work with teams to either help migrate and test components, or asynchronously assist in their own adoption plan.",
    }
  ]
</script>

<ul>
  {#each values as value}
    <Value>
      <svelte:component this={value.icon} slot="image" />
      <svelte:fragment slot="title">{value.title}</svelte:fragment>
      <svelte:fragment slot="content">{value.content}</svelte:fragment>
    </Value>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include small-screen {
      grid-template-columns: 1fr;
    }
  }
</style>