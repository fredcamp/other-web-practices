<script>
  export let selected
</script>

<div class="mx-auto mb-5 mt-8 flex flex-wrap items-center justify-center gap-2">
  {#each Array(10) as _, i}
    <input
      type="radio"
      id="rating{i + 1}"
      value={i + 1}
      checked={selected === i + 1}
      bind:group={selected}
      class="hidden"
    />
    <label
      for="rating{i + 1}"
      class="h-12 w-12 cursor-pointer select-none rounded-full p-3 text-center font-semibold transition-colors duration-300 {selected ===
      i + 1
        ? 'bg-pink-500 text-pink-50'
        : 'bg-gray-400/40 hover:bg-gray-400/80'}">{i + 1}</label
    >
  {/each}
</div>
