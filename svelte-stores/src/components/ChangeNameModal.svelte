<script lang="ts">
  import { user, notifications } from '../store'
  import { onMount } from 'svelte'

  export let show: boolean
  let value: string
  let input: HTMLInputElement

  onMount(() => {
    input.focus()
  })
</script>

<div>
  <form
    on:submit|preventDefault={() => {
      $user.name = value
      $notifications = [
        { name: `Changed Name to '${value}'` },
        ...$notifications,
      ]
      show = !show
    }}
  >
    <label>
      Change Name:
      <input type="text" bind:value bind:this={input} />
    </label>
    <button type="submit">Confirm</button>
  </form>
  <button
    type="button"
    on:click={() => {
      document.body.style.overflow = 'auto'
      show = !show
    }}>❌</button
  >
</div>

<style>
  div {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem 1.5rem;
    background-color: rgb(128, 128, 128);
    border: 5px solid rgba(255, 255, 255, 0.5);
    border-radius: 1em;
  }
  label {
    color: black;
  }
  input[type='text'] {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    background: white;
    color: black;
    border: none;
    border-radius: 0.25em;
  }
  button[type='button'] {
    position: absolute;
    top: 10%;
    right: 5%;
    font-size: 2.5rem;
    background: none;
  }
</style>
