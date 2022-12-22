<script>
  import { Link } from 'svelte-routing'

  export let isActive

  const changeActive = (e) => {
    const target = e.target.textContent.toLowerCase()

    if (target === 'svelte tutorial') {
      isActive = 'home'
      return
    }

    isActive = target
  }
</script>

<nav class="bg-slate-900">
  <div class="container mx-auto flex items-center justify-between p-4">
    <Link to="/"
      ><button class="text-lg" on:click={changeActive}>Svelte Tutorial</button
      ></Link
    >
    <ul class="flex gap-3">
      <li>
        <Link to="/"
          ><button
            class="rounded-lg px-4 py-2 hover:bg-slate-700 {isActive === 'home'
              ? 'text-yellow-500'
              : ''}"
            on:click={changeActive}>Home</button
          ></Link
        >
      </li>
      <li>
        <Link to="/about"
          ><button
            class="rounded-lg px-4 py-2 hover:bg-slate-700 {isActive === 'about'
              ? 'text-yellow-500'
              : ''}"
            on:click={changeActive}>About</button
          ></Link
        >
      </li>
      <li>
        <Link to="/services"
          ><button
            class="rounded-lg px-4 py-2 hover:bg-slate-700 {isActive ===
            'services'
              ? 'text-yellow-500'
              : ''}"
            on:click={changeActive}>Services</button
          ></Link
        >
      </li>
    </ul>
  </div>
</nav>
