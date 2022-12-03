<script>
  export let type = 'button'
  export let disabled = false
</script>

<button
  class="flex-initial rounded-lg bg-slate-900 px-6 py-2 text-pink-50 transition-colors duration-300 ease-linear hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400/80 disabled:text-black"
  {disabled}
  {type}
>
  <slot />
</button>
