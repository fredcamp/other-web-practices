<script lang="ts">
  import ChangeNameModal from './ChangeNameModal.svelte'

  let show = false
</script>

<button
  on:click={() => {
    document.body.style.overflow = 'hidden'
    show = !show
  }}
>
  <span>⚙</span>
</button>

{#if show}
  <ChangeNameModal bind:show />
{/if}

<style>
  button {
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
</style>
