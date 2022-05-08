<script>
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
          transform: ${transform} scale(${t});
          opacity: ${t};
        `,
      };
    },
  });

  let uid = 1;

  let todos = [
    { id: uid++, done: true, text: "learn css" },
    { id: uid++, done: false, text: "learn javascript" },
    { id: uid++, done: false, text: "learn a framework" },
    { id: uid++, done: false, text: "practice coding" },
    { id: uid++, done: false, text: "apply a job" },
    { id: uid++, done: false, text: "contribute to open source" },
  ];

  function add(input) {
    const todo = { id: uid++, done: false, text: input.value };
    todos = [todo, ...todos];
    input.value = "";
  }

  function remove(task) {
    todos = todos.filter((t) => t !== task);
  }

  function mark(task, done) {
    task.done = done;
    remove(task);
    todos = todos.concat(task);
  }

  $: console.log(todos);
</script>

<div
  class="max-w-xl mx-auto p-4 mt-10 text-base sm:grid sm:gap-10 sm:grid-cols-2"
>
  <input
    type="text"
    name="text"
    placeholder="Insert a Todo task..."
    class="w-full bg-slate-800 text-slate-200 rounded p-2 shadow-highlight col-span-2 focus:outline-none focus:ring-1 focus:ring-slate-200"
    on:keydown={(e) => e.key === "Enter" && add(e.target)}
  />

  <div class="mt-4">
    <h2 class="text-4xl text-slate-200 font-light mb-4">todo</h2>
    {#each todos.filter((t) => !t.done) as todo (todo.id)}
      <label
        class="block bg-slate-800 text-slate-200 rounded shadow-highlight p-2 my-2 relative group hover:bg-slate-800/90"
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
        animate:flip={{duration: 200}}
      >
        <input
          type="checkbox"
          class="accent-violet-700"
          on:change={() => mark(todo, true)}
        />
        <span>{todo.text}</span>
        <button
          class="bg-slate-500 text-[10px] text-white rounded-full w-5 h-5 absolute top-1/2 right-2 -translate-y-1/2 group-hover:flex justify-center items-center hidden hover:bg-slate-600"
          on:click={remove(todo)}>🗑️</button
        >
      </label>
    {/each}
  </div>

  <div class="mt-4">
    <h2 class="text-4xl text-slate-200 font-light mb-4">done</h2>
    {#each todos.filter((t) => t.done) as todo (todo.id)}
      <label
        class="block bg-slate-700 text-slate-200 rounded shadow-highlight p-2 my-2 relative group hover:bg-slate-700/90"
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
        animate:flip={{duration: 200}}
      >
        <input
          type="checkbox"
          checked={todo.done}
          on:change={() => mark(todo, false)}
          class="accent-violet-700"
        />
        <span>{todo.text}</span>
        <button
          class="bg-slate-500 text-[10px] text-white rounded-full w-5 h-5 absolute top-1/2 right-2 -translate-y-1/2 group-hover:flex justify-center items-center hidden hover:bg-slate-600"
          on:click={remove(todo)}>🗑️</button
        >
      </label>
    {/each}
  </div>
</div>
