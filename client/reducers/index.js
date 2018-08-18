const BASE_URL = 'https://perform-content.airtel.tv/'
const uris = [
  '/010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
  '/010618-EN-PERFORM-FERNANDINHO-CITY-2_1527838654210_1726.mp4',
  '/310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
  '/300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
  '/060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4'
]

const initialState = {
  currentMedia: null,
  isPlaying: false,
  volumePercentage: 100,
  queue: [],
  playlists: [],
  mediaList: uris.map(uri => {
    return { type: 'video', url: `${BASE_URL}${uri}` }
  })
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_CURRENT':
      return {
        ...state,
        isPlaying: true
      }
    case 'PAUSE_CURRENT':
      return {
        ...state,
        isPlaying: true
      }
    case 'PLAY_NEW':
      return {
        ...state,
        currentMedia: action.media,
        isPlaying: true
      }
    default:
      return state
  }
}

export default store
