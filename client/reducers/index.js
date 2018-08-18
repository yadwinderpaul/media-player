const initialState = {
  currentMedia: null,
  isPlaying: false,
  volumePercentage: 100,
  queue: [],
  playlists: [],
  mediaList: []
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
