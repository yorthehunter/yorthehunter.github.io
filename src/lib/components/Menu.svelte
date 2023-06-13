<script>
  import Hamburger from '$lib/components/hamburger.svelte'
  export let menuOpen;
</script>
<button on:click class="button">
  <Hamburger />
</button>
<style lang="scss" src="./Button.scss" />