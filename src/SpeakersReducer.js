const speakerReducer = (state, action) => {

  function updateFavorite(favoriteValue) {
    return state.speakerList.map(item => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      };
      return item;
    });
  }

  switch (action.type) {
  case 'SET_SPEAKER_LIST': {
    return { ...state, speakerList: action.data, isLoading: false, hasErrored: false };
  }
  case 'FAVORITE': {
    return { ...state, speakerList: updateFavorite(true) };
  }
  case 'UNFAVORITE': {
    return { ...state, speakerList: updateFavorite(false) };
  }
  case 'INCREMENT_FAVORITE_CLICK_COUNT': {
    return { ...state, favoriteClickCount: state.favoriteClickCount + 1 };
  }
  case 'ERRORED': {
    return { ...state, hasErrored: true, error: action.error };
  }
  default:
    return state;
  }
};

export default speakerReducer;