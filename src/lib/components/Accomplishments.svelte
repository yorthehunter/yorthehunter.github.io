<script>
  import Button from '$lib/components/Button.svelte'
  import P from '$lib/components/P.svelte'
  import ContentSection from '$lib/components/ContentSection.svelte'
</script>

<section>
  <h2 class="title">Accomplishments</h2>
  <article>
    <h3 class="subtitle">Helped a team of 20 grow into a $2 billion dollar styling experience at Stitch Fix</h3>
    <ul>
      <li>As the first designer, helped grow the design team to 15+ product designers and researchers</li>
      <li>As the first front-end engineer, built multiple internal UI libraries for expert-use systems</li>
      <li>Worked across all user-facing functions in operations, styling, merchandising, customer support, and customer-facing</li>
      <li>Designed for responsive web, mobile web, mobile native, and other native platforms to contribute to a massive cohesive experience</li>
    </ul>
  </article>
  <article>
    <h3 class="subtitle">Built and led the design strategy of the first front-end platform team at Stitch Fix</h3>
    <ul>
      <li>Created the first front-end platform design team</li>
      <li>Created and launched the Mode design system which unified the visual experience of all customer-facing products</li>
      <li>Led the rebranding effort, resulting in a technical solution that supported two branded UIs that could be toggled on or off through the design system, creating a seamless transition for users</li>
    </ul>
  </article>
  <article>
    <h3 class="subtitle">Created the first online custom wedding dress experience at Anomalie </h3>
    <ul>
      <li>As the head of design, created a unique experience, blending user-input, stylist touches, and algorithmic learning to deliver completely one-of-a-kind dresses to users</li>
      <li>Launched new brand guidelines, which unified the visual identity for all Anomalie products</li>
      <li>Led design-thinking sessions with product and engineering to enable everyone to build elegant products</li>
    </ul>
  </article>
  <article>
    <h3 class="subtitle">Launched the first design system at Modern Health</h3>
    <ul>
      <li>Designed, helped develop, and launched the Vita design system, serving all our user-facing platforms with a single-source coded UI library, documentation, and design assets</li>
      <li>Created and led the Design System Guild, responsible for distributing information, unblocking product teams, and elevating the design and implementation of the design system</li>
      <li>Mentored others in systems design, component composition, and usability guidelines</li>
      <li>Built with accessibility and international language support as primary objectives</li>
    </ul>
  </article>
  <article>
    <h3 class="subtitle">Designed UI patterns for expert-use financial systems at Built Technologies</h3>
    <ul>
      <li>Designed within a massive UI library and guided the design direction, visuals, and documentation for all applications at Built</li>
      <li>Developed processes for enabling decision-making at scale, making systems changes easier and more accessible for designers and engineers</li>
    </ul>
  </article>
</section>

<style lang="scss">
  section {
    margin: 4rem 0;
  }

  article {
    padding: 1rem 0;
  }

  ul {
    @include unordered-list;
  }
  
  .title {
    @include subsection-heading;
  }

  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 1rem;
  }

</style>