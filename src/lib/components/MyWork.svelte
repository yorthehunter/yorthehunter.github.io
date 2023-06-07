<script>
  import Divider from '$lib/components/Divider.svelte'
  import Card from '$lib/components/Card.svelte'
  import Button from '$lib/components/Button.svelte'
  import Work1 from "$lib/assets/mode-screenshot.png"
  import Work2 from "$lib/assets/color-chart.png"
  import Work3 from "$lib/assets/loading-dock.png"
  import Work4 from "$lib/assets/global-nav.png"
  import Work5 from "$lib/assets/mode-ds-overview.png"
  import Work6 from "$lib/assets/lego.png"

</script>

<article id="my-work">
  <h2>My Work</h2>
  <Divider />
  <p>I have worked with many early startups and growth-phase startups, helping drive us to higher levels of design excellence, business growth, and product team effectiveness. I value easily understood documentation and clear communication, consistency, usability, and inclusion.</p>
  <p>These portfolio pieces are examples of highly successful projects that have driven business results but are punctuated with the challenges that digital products often face: decision paralysis, resource constraints & scope changes, strategic pivots, knowledge silos, etc. In my experience, I’ve been privileged to partner with amazing people to overcome these challenges and push our collective work to new levels.
  </p>
  <Divider />
  <section class="work-collection">
    <Card
      title="Introducing the Mode Design System"
      subtitle="Building a shared experience language at Stitch Fix"
      tag="Stitch Fix"
      imageUrl={Work1}
    ><Button icon={true} url="https://yorthehunter.medium.com/introducing-the-mode-design-system-b3a64cb916da?sk=7450450ef476290ea72991dc0c0110c8" label="Read on Medium" /></Card>
    <Card
    title="How We Created an Accessible, Scalable Color Palette"
    subtitle="A case study of how we launched a color palette across all platforms at Modern Health"
    tag="Modern Health"
    imageUrl={Work2}
    ><Button icon={true} url="https://yorthehunter.medium.com/how-we-created-an-accessible-scalable-color-palette-2ae1242abdcb" label="Read on Medium" /></Card>
    <Card
    title="Designing a Returns Process that Reflects Reality"
    subtitle="A case study on developing a new returns process at Stitch Fix by mapping the physical space of users to a digital experience"
    tag="Stitch Fix"
    imageUrl={Work3}
    ><Button isInactive label="Coming Soon" /></Card>
    <Card
    title="How we launched a multi-platform global navigation"
    subtitle="A case study on the componentization of navigation in our design system"
    tag="Modern Health"
    imageUrl={Work4}
    ><Button isInactive label="Coming Soon" /></Card>
    <Card
    title="Introducing a Customer-facing Design System at Stitch Fix"
    subtitle="A case study on creating the Platform Design team and introducing design systems to a rapidly growing product ecosystem"
    tag="Stitch Fix"
    imageUrl={Work5}
    ><Button isInactive label="Coming Soon" /></Card>
    <Card
    title="Tips for Consistency in a Design System"
    subtitle="A list of tips that I’ve learned over time to maintain consistency"
    tag="Design Systems"
    imageUrl={Work6}
    ><Button isInactive label="Coming Soon" /></Card>
  </section>
</article>

<style lang="scss">
  article {
    max-width: 1128px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .work-collection {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    align-items: start;

    @media only screen and (max-width: 700px) {
      grid-template-columns: repeat(1, minmax(10px, 1fr));
    }
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.75rem;
    line-height: 4.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  p {
    font-size: 1.75rem;
    line-height: 3rem;

    & + p {
      margin-top: 1rem;
    }
  }
</style>