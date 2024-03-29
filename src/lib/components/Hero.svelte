<script lang="ts">
  import Divider from '$lib/components/Divider.svelte'
  const mhUrl = "https://www.modernhealth.com/";
  const anomalieUrl = "https://www.retaildive.com/news/davids-bridal-acquires-custom-wedding-dress-startup-anomalie/623973/";
  const sfUrl = "https://www.stitchfix.com/";
  const modClothUrl = "http://www.modcloth.com";
  const builtUrl = "http://www.getBuilt.com";
  const link = (text:string, url:string) => `<a href="${url}" target="_blank">${text}</a>`;
  import P from '$lib/components/P.svelte'
  import Button from '$lib/components/Button.svelte'
  import Values from '$lib/components/Values.svelte'
	import { heroValues } from './heroValues';
	import Description from './Description.svelte';
  export const uiDevTools = [ "React", "Svelte", "HTML + Sass/CSS", "UI frameworks", "Rails", "React Native" ]
  export const dsTools = [ "Figma", "Notion", "Confluence", "Principle", "Style Dictionary", "Storybook", "Zeroheight" ]
  export const designStrategyTools = [ "Google suite", "Product Plan", "Asana", "Jira", "Slack", "MixPanel", "DataDog", "Looker" ]
</script>

<article>
  <header>
    <h1>Brian Cleveland</h1>
    <h2>Experienced design leader, UI developer, and startup strategist</h2>
  </header>
  <Divider />
  <section>
    <P>I have 14 years of design and development experience in product-driven tech companies. I am passionate about helping others actualize their visions and turn ideas into solutions. I have designed and built for a wide variety of platforms, services, and products, but it’s people that are what drive me.</P>
    <P>Staff designer at {@html link("Built Technologies", builtUrl)} and  {@html link("Modern Health", mhUrl)}. Head of design at {@html link("Anomalie", anomalieUrl)} (acquired by David’s Bridal). First designer and later first front-end engineer at {@html link("Stitch Fix", sfUrl)}. Interaction designer at {@html link("ModCloth", modClothUrl)}.</P>
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
  <Description />
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
