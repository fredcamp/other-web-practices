import { writable } from 'svelte/store'

export let uuid = 0

export const FeedbackStore = writable([
  {
    id: ++uuid,
    rating: 10,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias deserunt eum exercitationem corrupti. Explicabo?',
  },
  {
    id: ++uuid,
    rating: 9,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias deserunt eum exercitationem corrupti. Explicabo?',
  },
  {
    id: ++uuid,
    rating: 8,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. MinimaLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias deserunt eum exercitationem corrupti',
  },
])
