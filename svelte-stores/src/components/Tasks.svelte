<script lang="ts">
  import { todos, notifications } from '../store'
  import { wait } from '../utils/wait'
</script>

<article>
  {#each $todos as todo}
    <div>
      <label>
        <input type="checkbox" checked={todo.done} disabled />
        {todo.name}

        {#if todo.loading}
          (Loading...)
        {/if}
      </label>

      {#if !todo.done}
        <button
          disabled={todo.loading}
          on:click={async () => {
            todo.loading = true

            await wait(3000)
            todo.done = true
            $notifications = [
              {
                name: `Done '${todo.name}' task`,
              },
              ...$notifications,
            ]
            todo.loading = false
          }}>Done</button
        >
      {/if}
      <button
        disabled={todo.loading}
        on:click={async () => {
          todo.loading = true

          await wait(3000)
          const index = $todos.findIndex((item) => item === todo)
          $todos = $todos.filter((_, i) => i !== index)
          $notifications = [
            {
              name: `Deleted '${todo.name}' task`,
            },
            ...$notifications,
          ]
          todo.loading = false
        }}>Delete</button
      >
    </div>
  {/each}
</article>

<style>
  article {
    margin-top: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
</style>
