const speakerReducer = (state, action) => {

  function updateFavorite(favoriteValue) {
    return state.map(item => {
      if (item.id === action.sessionId) {
        return { ...item, favorite: favoriteValue };
      };
      return item;
    });
  }

  switch (action.type) {
  case 'SET_SPEAKER_LIST': {
    return action.data;
  }
  case 'FAVORITE': {
    return updateFavorite(true);
  }
  case 'UNFAVORITE': {
    return updateFavorite(false);
  }
  default:
    return state;
  }
};

export default speakerReducer;