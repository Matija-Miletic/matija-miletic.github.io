import { motion } from 'https://cdn.skypack.dev/motion'

// Create a new motion instance
const motionInstance = new motion()

// Get the body element
const body = document.querySelector('body')

// Demo animation
motionInstance.animate(
  body,
  { translateX: '100px' },
  { duration: 2000, iterations: Infinity, direction: 'alternate' }
)
