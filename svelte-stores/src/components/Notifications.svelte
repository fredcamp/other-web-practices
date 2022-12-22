<script lang="ts">
  import { derived } from 'svelte/store'
  import { notifications } from '../store'

  let notificationsLength = derived(
    notifications,
    ($notifications) => $notifications.length
  )

  let show = false
</script>

<div class="container">
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <span on:mouseover={() => (show = true)} on:mouseleave={() => (show = false)}>
    {$notificationsLength}
  </span>

  {#if show && $notificationsLength}
    <div class="notification-box">
      <p>Notifications:</p>
      <ul>
        {#each $notifications as notification}
          <li>{notification.name}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
  }

  span {
    background: rgb(1, 1, 99);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 1em;
    cursor: pointer;
  }

  .notification-box {
    position: absolute;
    background: rgb(145, 145, 145);
    right: 1rem;
    top: 2.5rem;
    width: 20ch;
    color: black;
    border-radius: 0.25em;
  }

  p {
    padding: 0.25rem;
    font-weight: bold;
  }
  ul {
    padding: 0rem 1.25rem;
  }
</style>
