<script lang="ts">
  import Divider from '$lib/components/Divider.svelte'
  const mhUrl = "https://www.modernhealth.com/";
  const anomalieUrl = "https://www.dressanomalie.com/";
  const sfUrl = "https://www.stitchfix.com/home";
  const mediumArticle = "https://yorthehunter.medium.com/introducing-the-mode-design-system-b3a64cb916da";
  const link = (text:string, url:string) => `<a href="${url}" target="_blank">${text}</a>`;
  import Value1 from '$lib/assets/images/web-mobile.svelte'
  import Value2 from '$lib/assets/images/web-design.svelte'
  import Value3 from '$lib/assets/images/clipboard.svelte'
  import Value4 from '$lib/assets/images/mentor.svelte'
  import P from '$lib/components/P.svelte'
  import Value from '$lib/components/Value.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import TagList from '$lib/components/TagList.svelte'
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
  </section>
  <Divider />
  <ul class="values">
    <Value>
      <Value3 slot="image" />
      <svelte:fragment slot="title">Product design strategy</svelte:fragment>
      <svelte:fragment slot="content">I have 13 years of experience on product teams in UX, interaction, and UI design. More recently, I have led design strategy for major cross-functional products, defined OKRs and managed resourcing, and partnered with other leaders to align business goals across teams.</svelte:fragment>
      <TagList tagList={designStrategyTools} slot="tools" />
    </Value>
    <!-- <Divider as="li" /> -->
    <Value>
      <Value2 slot="image" />
      <svelte:fragment slot="title">Design systems</svelte:fragment>
      <svelte:fragment slot="content">Over the past several years, I have created, directed, and maintained the growth of multiple successful design systems, serving teams of all sizes and elevating the user experience.</svelte:fragment>
      <TagList tagList={dsTools} slot="tools" />
    </Value>
    <!-- <Divider as="li" /> -->
    <Value>
      <Value1 slot="image" />
      <svelte:fragment slot="title">UI development</svelte:fragment>
      <svelte:fragment slot="content">I made my first website in 2000. Since then, I’ve continued to build for web and mobile, created communication channels between design and engineering teams, and defined best practices for accessibility and usability.</svelte:fragment>
      <TagList tagList={uiDevTools} slot="tools" />
    </Value>
    <!-- <Divider as="li" /> -->
    <Value>
      <Value4 slot="image" />
      <svelte:fragment slot="title">Team leadership and mentorship</svelte:fragment>
      <svelte:fragment slot="content">I have created platform teams, led the direction and workloads of teams, and mentored many designers in design systems & component best practices, team code environments & communication with engineering, Figma tools, and more. Elevating the work of others is my truest passion in design.</svelte:fragment>
    </Value>
  </ul>
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
</style>