<script lang="ts">
  import { derived } from 'svelte/store'

  import { todos } from '../store'

  let todosCompleted = derived(
    todos,
    ($todos) => $todos.filter((todo) => todo.done).length
  )

  let todosLength = derived(todos, ($todos) => $todos.length)
</script>

<div>
  Done:
  {$todosCompleted} / {$todosLength}
</div>

<style>
  div {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
</style>
