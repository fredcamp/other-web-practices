<script>
  import FeedbackItem from './FeedbackItem.svelte'
  import { fade, scale } from 'svelte/transition'
  import { FeedbackStore } from '../stores'
</script>

<section class="mt-6 space-y-9">
  {#each $FeedbackStore as feedback (feedback.id)}
    <article in:scale={{ duration: 500 }} out:fade>
      <FeedbackItem {feedback} />
    </article>
  {/each}
</section>
