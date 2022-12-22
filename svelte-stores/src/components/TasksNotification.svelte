<script lang="ts">
  import { todos } from '../store'
  import { derived } from 'svelte/store'

  let todosRemaining = derived(
    todos,
    ($todos) => $todos.filter((todo) => todo.done).length
  )
</script>

<p>
  {$todosRemaining} / {$todos.length}
</p>

<style>
  p {
    background: rgb(86, 1, 1);
    color: white;
    padding: 0.25rem 1rem;
    border-radius: 1em;
  }
</style>
