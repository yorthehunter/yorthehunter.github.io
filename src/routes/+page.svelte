<script>
  import Hero from '$lib/components/Hero.svelte'
  import MyWork from '$lib/components/MyWork.svelte'
  import AboutMe from '$lib/components/AboutMe.svelte'
  import Contact from '$lib/components/Contact.svelte'
</script>

<div class="main-content">
  <Hero />
  <MyWork />
  <AboutMe />
  <Contact />
</div>

<style lang="scss">
  .main-content {
    max-width: calc(1128px + 3rem);
    padding: 0 1.5rem;
    margin: auto;
  }
</style>