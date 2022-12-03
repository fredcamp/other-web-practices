<script>
  import { FeedbackStore } from '../stores'

  $: count = $FeedbackStore.length
  $: rating =
    $FeedbackStore.reduce((acc, { rating }) => acc + rating, 0) /
    $FeedbackStore.length
</script>

<div class="mt-7 flex items-center justify-between font-semibold text-white">
  <span>{count} {count > 1 ? 'Reviews' : 'Review'}</span>
  <span>Average Rating: {isNaN(rating) ? 0 : rating.toFixed(1)}</span>
</div>
