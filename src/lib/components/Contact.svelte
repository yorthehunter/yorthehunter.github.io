<script>
  import Divider from '$lib/components/Divider.svelte'
  import Button from '$lib/components/Button.svelte'
</script>

<article id="contact">
  <h2>Contact</h2>
  <Divider />
  <p>Are you interested in my work? Curious to learn more about design systems? Seeking a partner in product strategy or design systems?</p>
  <p>Please reach out.</p>
  <Divider />
  <nav>
    <ul>
      <li>
        <Button label="Email Me" url="mailto:boru.design@gmail.com" />
      </li>
    </ul>
  </nav>
</article>

<style lang="scss">
  article {
    max-width: 1128px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: start;
  }
</style>