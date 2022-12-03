<script>
  import Card from './Card.svelte'
  import { FeedbackStore } from '../stores'

  export let feedback

  const deleteFeedback = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id !== itemId)
    })
  }
</script>

<Card>
  <span
    class="absolute -top-4 -left-4 h-12 w-12 rounded-[50%] border border-pink-50 bg-pink-500 p-2 text-center text-lg font-semibold text-pink-50"
    >{feedback.rating}</span
  >
  <button
    class="absolute top-0 right-2 cursor-pointer select-none px-2 py-1 text-lg font-semibold hover:text-pink-500"
    on:click={deleteFeedback(feedback.id)}>x</button
  >
  <p>
    {feedback.text}
  </p>
</Card>
