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

export function playNextMedia () {
  return (dispatch, getState) => {
    const state = getState()
    let currentIndex = -1
    state.queue.forEach((queueItem, index) => {
      if (state.currentMedia &&
        state.currentMedia.id === queueItem.id) {
        currentIndex = index
      }
    })
    if (state.queue[currentIndex + 1]) {
      dispatch(setCurrentMedia(state.queue[currentIndex + 1]))
    }
  }
}

export function playPreviousMedia () {
  return (dispatch, getState) => {
    const state = getState()
    let currentIndex = -1
    state.queue.forEach((queueItem, index) => {
      if (state.currentMedia &&
        state.currentMedia.id === queueItem.id) {
        currentIndex = index
      }
    })
    if (state.queue[currentIndex - 1]) {
      dispatch(setCurrentMedia(state.queue[currentIndex - 1]))
    }
  }
}

export function setCurrentMedia (queueItem) {
  return {
    type: 'SET_CURRENT',
    queueItem
  }
}

export function addToQueue (media) {
  const queueItem = {
    ...media,
    id: (new Date()).getTime()
  }
  return {
    type: 'ADD_TO_QUEUE',
    queueItem
  }
}
