<script lang="ts">
  import TasksNotification from '../components/TasksNotification.svelte'
  import Notifications from '../components/Notifications.svelte'
  import Option from '../components/Option.svelte'

  import { user } from '../store'
</script>

<nav>
  <div class="container">
    <h1>Complex Store Example</h1>
    <div class="notif-container">
      <TasksNotification />
      <Notifications />
      <p>{$user.name}</p>
      <Option />
    </div>
  </div>
</nav>

<style>
  nav {
    background: rgb(63, 63, 63);
  }
  .container {
    max-width: 800px;
    margin: auto;
    padding: 1.2rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.2rem;
  }
  .notif-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>
