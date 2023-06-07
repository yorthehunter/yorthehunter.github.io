<script lang="ts">
  import Divider from '$lib/components/Divider.svelte'
  const mhUrl = "https://www.modernhealth.com/";
  const anomalieUrl = "https://www.dressanomalie.com/";
  const sfUrl = "https://www.stitchfix.com/home";
  const mediumArticle = "https://yorthehunter.medium.com/introducing-the-mode-design-system-b3a64cb916da";
  const link = (text:string, url:string) => `<a href="${url}" target="_blank">${text}</a>`;

</script>

<article>
  <header>
    <h1>Brian Cleveland</h1>
    <h2>Design leader, product design strategy for web and mobile platforms</h2>
  </header>
  <Divider />
  <section>
    <p>I am a staff product designer leading design systems at {@html link("Modern Health", mhUrl)}.</p>
    <p>Previously, I was the head of design at {@html link("Anomalie", anomalieUrl)} (acquired by
      David&rsquo;s Bridal) and the first designer at {@html link("Stitch Fix", sfUrl)} (and later,
      their first front-end engineer), launching the platform design team and {@html link("the Mode design system", mediumArticle)}.
    </p>
  </section>
  <Divider />
</article>

<style lang="scss">
  article {
    max-width: 1128px;
    padding: 4rem 0;

    header {
      display: flex;
      flex-direction: column;
      padding: 0 0 2rem;
      gap: 2rem;
    }
    
    section {
      padding: 2rem 0;
    }
  }

  h1,
  h2 {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 5rem;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  h2 {
    font-size: 2.75rem;
    line-height: 4rem;
    font-weight: 400;
  }

  h2,
  p {
    max-width: 936px;
  }

  p {
    font-size: 1.75rem;
    line-height: 3rem;

    & + p {
      margin-top: 1rem;
    }
  }
</style>