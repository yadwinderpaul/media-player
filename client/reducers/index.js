const initialState = {
  queue: [],
  currentItemId: null,
  playlists: [],
  mediaList: getMediaList()
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ITEM_ID':
      return {
        ...state,
        currentItemId: action.id
      }
    case 'ADD_ITEM_TO_QUEUE':
      let newQueue = state.queue.slice()
      newQueue.push(action.queueItem)
      return {
        ...state,
        queue: newQueue
      }
    default:
      return state
  }
}

export default store

function getMediaList () {
  const BASE_URL = 'https://perform-content.airtel.tv/'

  return [
    {
      id: 1,
      src: '/010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
      title: 'CRO-DEN Facts',
      subTitle: 'FIFA World Cup history and previous matchups between teams',
      type: 'video'
    },
    {
      id: 2,
      src: '/010618-EN-PERFORM-FERNANDINHO-CITY-2_1527838654210_1726.mp4',
      title: 'Brazil Update',
      subTitle: 'Interview of the team and responses by seniors player',
      type: 'video'
    },
    {
      id: 3,
      src: '/310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
      title: 'France Status',
      subTitle: 'Interview of the coach and comments by Zidane',
      type: 'video'
    },
    {
      id: 4,
      src: '/300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
      title: 'John Terry',
      subTitle: 'Player history and facts',
      type: 'video'
    },
    {
      id: 5,
      src: '/060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4',
      title: 'Keeper Interview',
      subTitle: 'Thebaut Courtois provides status update in Chelsea',
      type: 'video'
    }
  ].map(detail => {
    return {
      ...detail,
      src: `${BASE_URL}${detail.src}`
    }
  })
}
