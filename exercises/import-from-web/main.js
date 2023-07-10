import { motion } from 'https://cdn.skypack.dev/motion'

const motionInstance = new motion()

const body = document.querySelector('body')

motionInstance.animate(
  body,
  { translateX: '100px' },
  { duration: 2000, iterations: Infinity, direction: 'alternate' }
)
