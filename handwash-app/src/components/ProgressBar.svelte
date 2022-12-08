<script>
  export let progress
</script>

<div class="relative h-10 w-full overflow-hidden rounded bg-slate-600">
  <span class="sr-only">{progress}%</span>
  <span
    class="absolute inset-0 bg-green-500 transition-[width]"
    style="width:{progress}%"
  />
</div>
