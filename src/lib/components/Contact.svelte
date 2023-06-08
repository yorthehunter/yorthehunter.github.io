<script>
  import Divider from '$lib/components/Divider.svelte'
  import Button from '$lib/components/Button.svelte'
  import P from '$lib/components/P.svelte'
  import ContentSection from '$lib/components/ContentSection.svelte'
</script>

<ContentSection id="contact" title="Contact">
  <svelte:fragment slot="top">
    <P>Are you interested in my work? Curious to learn more about design systems? Seeking a partner in product strategy or design systems?</P>
    <P>Please reach out if you think we can work together in any way.</P>
  </svelte:fragment>
  <nav slot="bottom">
    <ul>
      <li>
        <Button label="Email Me" url="mailto:boru.design@gmail.com" />
      </li>
    </ul>
  </nav>
</ContentSection>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: start;
  }
</style>