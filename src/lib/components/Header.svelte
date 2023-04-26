<script>
  export const prerender = true
  import Me from "$lib/assets/brian_cleveland_simpsons.png"
  const myTitle = "Design leader focused on product design strategy for web and mobile and design systems";
</script>

<svelte:head>
	<meta name="description" content={`Brian Cleveland: ${myTitle}`}>
</svelte:head>

<header>
  <img src={Me} alt="Me with my cat in the style of the animated show 'The Simpsons'" />
  <h1>Brian Cleveland</h1>
  <h2>{myTitle}</h2>
</header>

<style lang="scss">
  header {
    padding: 0.5rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background: linear-gradient(108.12deg, #aa54ff 0%, rgba(255, 255, 255, 0.227) 91.3%),
    radial-gradient(83.79% 93.52% at 16.74% 85.79%, rgba(199, 185, 149, 0.9) 0%, rgba(247, 226, 172, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(57.88% 59.58% at 83.19% 13.18%, rgba(243, 58, 101, 0.6) 0%, rgba(255, 205, 217, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(46.63% 92.22% at 50% 50%, rgb(168, 255, 193) 0%, rgba(83, 255, 89, 0.197) 76.04%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(0deg, rgba(253, 242, 145, 0.739), rgba(255, 236, 61, 0.899)),
    linear-gradient(144.36deg, rgba(255, 255, 255, 0.7) 20.88%, rgba(129, 252, 208, 0.7) 94.26%);

    // background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(232.72deg, #87c9ff 0%, rgba(125, 177, 255, 0) 38%), radial-gradient(ellipse at 2% 9%, rgba(166, 0, 255, 0.61) 0%, rgba(193, 116, 255, 0) 100%), linear-gradient(212.83deg, rgba(0, 255, 48, 0) 31%, #00ffa2 100%), radial-gradient(ellipse at 95% 86%, #FF0055 0%, rgba(255, 0, 4, 0) 100%);
  }
  
  h1, h2 {
    padding: 0 0.5rem;
    text-align: center;
  }

  h1 {
    font-size: 1.75rem;
    line-height: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding: 0 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  </style>