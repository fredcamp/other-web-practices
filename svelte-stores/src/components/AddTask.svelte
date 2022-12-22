<script lang="ts">
  import { onMount } from 'svelte'
  import { todos } from '../store'

  let input: HTMLInputElement
  let value: string

  onMount(() => {
    input.focus()
  })
</script>

<section>
  <h3>Add Todo:</h3>

  <form
    on:submit|preventDefault={() => {
      $todos = [...$todos, { name: value, done: false }]
      value = ''
    }}
  >
    <input type="text" bind:value bind:this={input} />
    <button type="submit">Add</button>
  </form>
</section>

<style>
  section {
    margin-top: 3rem;
    background: rgb(53, 53, 53);
    padding: 1rem 1.5rem;
    border-radius: 0.5em;
  }
  input[type='text'] {
    padding: 0.25rem;
  }
  form {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
</style>
