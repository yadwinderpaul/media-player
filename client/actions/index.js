export function playNewMedia (media) {
  return {
    type: 'PLAY_NEW',
    media
  }
}

export function addToQueue (media) {
  return {
    type: 'ADD_TO_QUEUE',
    media
  }
}
