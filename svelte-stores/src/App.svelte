<script lang="ts">
  import Navigation from './layout/Navigation.svelte'
  import TasksProgress from './components/TasksProgress.svelte'
  import Tasks from './components/Tasks.svelte'
  import AddTask from './components/AddTask.svelte'
</script>

<main>
  <Navigation />
  <section>
    <TasksProgress />
    <Tasks />
    <AddTask />
  </section>
</main>

<style>
  section {
    padding: 1rem 2rem;
    max-width: 800px;
    margin: auto;
  }
</style>
