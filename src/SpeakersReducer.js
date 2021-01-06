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
    return { ...state, speakerList: action.data, isLoading: false };
  }
  case 'FAVORITE': {
    return { ...state, speakerList: updateFavorite(true) };
  }
  case 'UNFAVORITE': {
    return { ...state, speakerList: updateFavorite(false) };
  }
  default:
    return state;
  }
};

export default speakerReducer;