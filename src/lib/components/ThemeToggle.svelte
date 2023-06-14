<script lang="ts">
  import Sun from '$lib/assets/sun.svelte'
  import Moon from '$lib/assets/moon.svelte'
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

<style lang="scss">
  @use '../assets/Button.scss';
</style>