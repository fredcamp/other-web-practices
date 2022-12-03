<script>
  import { FeedbackStore, uuid } from '../stores'
  import { onMount } from 'svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  let id = uuid
  let formInput
  let rating = 10
  let text = ''
  const min = 10

  $: disabled = text.trim().length > min ? false : true

  onMount(() => formInput.focus())

  const addFeedback = () => {
    const newFeedback = { id: ++id, rating, text }

    FeedbackStore.update((currentFeedback) => {
      return [newFeedback, ...currentFeedback]
    })
    rating = 10
    text = ''
  }
</script>

<form
  class="rounded-lg bg-pink-50 p-6 text-black"
  on:submit|preventDefault={addFeedback}
>
  <h1 class="mx-auto max-w-xs text-center text-xl font-bold">
    How would you rate your service with us?
  </h1>
  <RatingSelect bind:selected={rating} />
  <div
    class="flex w-full space-x-1 overflow-hidden rounded-lg border border-slate-400 p-1 focus-within:ring-2 focus-within:ring-sky-500/50"
  >
    <input
      type="text"
      placeholder="Tell us something that keeps you coming back"
      class="flex-1 bg-transparent px-1 focus:outline-none"
      bind:value={text}
      bind:this={formInput}
    />
    <Button type="submit" {disabled}>Send</Button>
  </div>
  {#if disabled}
    <p class="mt-2 text-center text-red-400">
      Input should be more than {min} characters
    </p>
  {/if}
</form>
