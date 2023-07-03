<script>
  import Card from '$lib/components/Card.svelte'
  import Work1 from "$lib/assets/images/mode-screenshot.png"
  import Work2 from "$lib/assets/images/color-chart.png"
  import Work3 from "$lib/assets/images/loading-dock.png"
  import Work4 from "$lib/assets/images/global-nav.png"
  import Work5 from "$lib/assets/images/mode-ds-overview.png"
  import Work6 from "$lib/assets/images/lego.png"
  import P from '$lib/components/P.svelte'
  import ContentSection from '$lib/components/ContentSection.svelte'
</script>

<ContentSection id="work" title="My Work">
  <svelte:fragment slot="top">
    <P>I have worked with many early startups and growth-phase startups, helping drive to higher levels of design excellence, business growth, and product team efficiency. I value easily understood documentation and clear communication, consistency, usability, and inclusion.</P>
    <P>These portfolio pieces are examples of highly successful projects that have driven business results but are punctuated with the challenges that digital products often face, like decision paralysis, resource constraints, scope change, knowledge silos, etc. It's been my privilege to partner with amazing teammates to overcome these challenges.</P>
  </svelte:fragment>
  <section class="work-collection" slot="bottom">
    <Card
      title="Introducing the Mode Design System"
      subtitle="Building a shared experience language at Stitch Fix"
      tags={["Stitch Fix", "Design Systems"]}
      imageUrl={Work1}
      url="https://yorthehunter.medium.com/introducing-the-mode-design-system-b3a64cb916da?sk=7450450ef476290ea72991dc0c0110c8"
    />
    <Card
    title="How We Created an Accessible, Scalable Color Palette"
    subtitle="A case study of how we launched a color palette across all platforms at Modern Health"
    tags={["Modern Health", "Design Systems"]}
    imageUrl={Work2}
    url="https://yorthehunter.medium.com/how-we-created-an-accessible-scalable-color-palette-2ae1242abdcb"
    />

    <Card
    title="Designing a Returns Process that Reflects Reality"
    subtitle="A case study on developing a new returns process at Stitch Fix by mapping the physical space of users to a digital experience"
    tags={["Stitch Fix", "Product Design"]}
    imageUrl={Work3}
    />
    <Card
    title="How we launched a multi-platform global navigation"
    subtitle="A case study on the componentization of navigation in our design system"
    tags={["Modern Health", "Design Systems"]}
    imageUrl={Work4}
    />
    <Card
    title="Introducing a Customer-facing Design System at Stitch Fix"
    subtitle="A case study on creating the Platform Design team and introducing design systems to a rapidly growing product ecosystem"
    tags={["Stitch Fix", "Design Systems"]}
    imageUrl={Work5}
    />
    <Card
    title="Tips for Consistency in a Design System"
    subtitle="A list of tips that I’ve learned over time to maintain consistency"
    tags={["Design Systems"]}
    imageUrl={Work6}
    />
  </section>
</ContentSection>

<style lang="scss">
  .work-collection {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    align-items: start;

    @include small-screen {
      grid-template-columns: repeat(1, minmax(10px, 1fr));
      gap: 0;
    }
  }
</style>