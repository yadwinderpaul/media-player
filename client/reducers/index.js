const BASE_URL = 'https://perform-content.airtel.tv/'
const uris = [
  '/010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
  '/010618-EN-PERFORM-FERNANDINHO-CITY-2_1527838654210_1726.mp4',
  '/310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
  '/300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
  '/060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4'
]
const mediaList = uris.map((uri, index) => {
  return {
    id: index,
    type: 'video',
    src: `${BASE_URL}${uri}`,
    title: `Video ${index + 1}`,
    subTitle: `Video ${index + 1} subtitle`
  }
})

const initialState = {
  currentMedia: null,
  queue: [],
  playlists: [],
  mediaList
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_NEW':
      return {
        ...state,
        currentMedia: action.media
      }
    case 'ADD_TO_QUEUE':
      let newQueue = state.queue.slice()
      newQueue.push(action.media)
      return {
        ...state,
        queue: newQueue
      }
    default:
      return state
  }
}

export default store
