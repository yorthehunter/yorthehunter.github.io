<script lang="ts">
  import Divider from '$lib/components/Divider.svelte'
  const mhUrl = "https://www.modernhealth.com/";
  const anomalieUrl = "https://www.dressanomalie.com/";
  const sfUrl = "https://www.stitchfix.com/home";
  const mediumArticle = "https://yorthehunter.medium.com/introducing-the-mode-design-system-b3a64cb916da";
  const link = (text:string, url:string) => `<a href="${url}" target="_blank">${text}</a>`;
  import P from '$lib/components/P.svelte'
  import Button from '$lib/components/Button.svelte'
  import Values from '$lib/components/Values.svelte'
	import { heroValues } from './heroValues';
  export const uiDevTools = [ "React", "Svelte", "HTML + Sass/CSS", "UI frameworks", "Rails", "React Native" ]
  export const dsTools = [ "Figma", "Notion", "Confluence", "Principle", "Style Dictionary", "Storybook", "Zeroheight" ]
  export const designStrategyTools = [ "Google suite", "Product Plan", "Asana", "Jira", "Slack", "MixPanel", "DataDog", "Looker" ]
</script>

<article>
  <header>
    <h1>Brian Cleveland</h1>
    <h2>Design leader, product design strategy for web and mobile platforms</h2>
  </header>
  <Divider />
  <section>
    <P>My most recent role was staff product designer leading design systems at {@html link("Modern Health", mhUrl)}.</P>
    <P>Previously, I was the head of design at {@html link("Anomalie", anomalieUrl)} (acquired by
      David&rsquo;s Bridal) and the first designer at {@html link("Stitch Fix", sfUrl)} (and later,
      their first front-end engineer), launching the platform design team and {@html link("the Mode design system", mediumArticle)}.
    </P>
    <nav>
      <ul class="nav-links">
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
  </section>
  <Divider />
  <Values values={heroValues} twoCol={false} />
</article>

<style lang="scss">
  article {
    max-width: 1128px;
    padding: 4rem 0;

    header {
      display: flex;
      flex-direction: column;
      padding: 2rem 0 6rem;
      gap: 2rem;
    }
    
    section {
      padding: 4rem 0;
    }
  }

  h1 {
    @include font-title;
  }

  h2 {
    @include font-subtitle;
  }

  h2 {
    max-width: 936px;
  }

  .values {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .nav-links {
    margin-top: 4rem;
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
