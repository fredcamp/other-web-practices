<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let type = 'button'
  export let disabled

  const handleClick = () => {
    dispatch('handle-click')
  }
</script>

<button
  {type}
  class="w-full rounded bg-red-600 p-3 text-lg tracking-widest text-white shadow-md transition-colors duration-300 hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-slate-300 "
  {disabled}
  on:click={handleClick}
>
  <slot />
</button>
