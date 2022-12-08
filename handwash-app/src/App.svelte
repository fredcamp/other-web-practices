<script>
  import Timer from './components/Timer.svelte'
  import HowTo from './components/HowTo.svelte'
</script>

<main class="mt-8 text-white">
  <h1 class="text-center text-4xl font-semibold">Handwashing App</h1>
  <div class="mx-auto mt-5 max-w-xs space-y-4 px-3">
    <Timer />
    <HowTo />
    <div class="flex items-center justify-between">
      <a
        href="https://www.who.int/teams/integrated-health-services/infection-prevention-control"
        class="underline decoration-sky-500 decoration-2 underline-offset-4 hover:decoration-blue-700"
        >Picture Source</a
      >
      <a
        href="https://freesound.org/people/metrostock99/sounds/345086/"
        class="underline decoration-sky-500 decoration-2 underline-offset-4 hover:decoration-blue-700"
        >Sound Source</a
      >
    </div>
  </div>
</main>

<style global lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
