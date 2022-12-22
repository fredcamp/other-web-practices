<script>
  import { Router, Route } from 'svelte-routing'

  import Navbar from './layout/Navbar.svelte'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Services from './pages/Services.svelte'

  let isActive = 'home'
</script>

<Router>
  <Navbar {isActive} />

  <main class="container mx-auto p-4">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
  </main>
</Router>

<style lang="postcss">
  :global(body) {
    @apply bg-slate-800 text-white;
  }
</style>
