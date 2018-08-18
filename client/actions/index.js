export function playNewMedia (media) {
  return dispatch => {
    const queueItem = {
      ...media,
      id: (new Date()).getTime()
    }
    dispatch(setCurrentMedia(queueItem))
    dispatch(addToQueue(queueItem))
  }
}

export function setCurrentMedia (queueItem) {
  return {
    type: 'SET_CURRENT',
    queueItem
  }
}

export function addToQueue (queueItem) {
  return {
    type: 'ADD_TO_QUEUE',
    queueItem
  }
}
