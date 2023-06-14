<script lang="ts">
  import Sun from '$lib/components/Sun.svelte'
  import Moon from '$lib/components/Moon.svelte'
  let isDark = false;
  function toggle() {
    window.document.body.classList.toggle('dark-mode')
    isDark = !isDark;
  }
</script>
<button on:click={toggle} class="button">
  {#if isDark }
	  <Sun />
  {:else}
    <Moon />
  {/if}
</button>

<style lang="scss" src="./Button.scss"></style>