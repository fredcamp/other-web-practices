import { writable, type Writable } from 'svelte/store'

let todos: Writable<
  {
    name: string
    done: boolean
    loading?: boolean
  }[]
> = writable([
  {
    name: 'Learn Svelte',
    done: false,
  },
])

let notifications: Writable<
  {
    name: string
  }[]
> = writable([])

let user = writable({
  name: 'fred',
})

export { todos, notifications, user }
