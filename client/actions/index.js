export function playNewMedia (media) {
  return dispatch => {
    const id = (new Date()).getTime()
    const queueItem = {
      ...media, id
    }
    dispatch(addItemToQueue(queueItem))
    dispatch(setCurrentItemId(id))
  }
}

export function addMediaToQueue (media) {
  return dispatch => {
    const queueItem = {
      ...media,
      id: (new Date()).getTime()
    }
    dispatch(addItemToQueue(queueItem))
  }
}

export function playNextMedia () {
  return (dispatch, getState) => {
    const state = getState()
    let currentIndex = -1
    state.queue.forEach((queueItem, index) => {
      if (state.currentItemId === queueItem.id) {
        currentIndex = index
      }
    })
    if (state.queue[currentIndex + 1]) {
      dispatch(setCurrentItemId(state.queue[currentIndex + 1].id))
    }
  }
}

export function playPreviousMedia () {
  return (dispatch, getState) => {
    const state = getState()
    let currentIndex = -1
    state.queue.forEach((queueItem, index) => {
      if (state.currentItemId === queueItem.id) {
        currentIndex = index
      }
    })
    if (state.queue[currentIndex - 1]) {
      dispatch(setCurrentItemId(state.queue[currentIndex - 1].id))
    }
  }
}

export function setCurrentItemId (id) {
  return {
    type: 'SET_CURRENT_ITEM_ID',
    id
  }
}

export function addItemToQueue (queueItem) {
  return {
    type: 'ADD_ITEM_TO_QUEUE',
    queueItem
  }
}
