<script>
  import Button from '$lib/components/Button.svelte'
  import P from '$lib/components/P.svelte'
  import ContentSection from '$lib/components/ContentSection.svelte'
</script>

<ContentSection id="about" title="About Me">
  <svelte:fragment slot="top">
    <P>“Who is Navin R. Johnson?”</P>
    <P>Hey, my name is Brian Cleveland and I'm an unapologetically nostalgic human who fondly reflects on the 80s and 90s. I love watching movies from my childhood, I collect old video games and laser discs, and I love playing <a href="https://en.wikipedia.org/wiki/Fireball_Island" target="_blank">Fireball Island</a> with my kids. In my quote-unquote spare time, I also am a budding home renovation enthusiast who is slowly learning how to DIY home improvement one bathroom tile at a time.</P>
  </svelte:fragment>
  <nav slot="bottom">
    <ul>
      <li>
        <Button icon url="https://docs.google.com/document/d/1AyuuNw0u30vxh8HlWDfZyU2a5A8N4nl_vOzMBexquJQ/edit?usp=sharing">My Resume</Button>
      </li>
      <li>
        <Button icon url="https://www.linkedin.com/in/borudesign/">LinkedIn</Button>
      </li>
      <li>
        <Button icon url="https://medium.com/@yorthehunter">Medium</Button>
      </li>
    </ul>
  </nav>
</ContentSection>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: start;
    justify-content: start;

    @include small-screen {
      flex-direction: column;
    }
  }
</style>