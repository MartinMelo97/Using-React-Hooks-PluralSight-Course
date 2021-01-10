import { useEffect, useReducer } from 'react';
import speakerReducer from './SpeakersReducer';
import axios from 'axios';

function useSpeakerDataManager() {

  const [{
    isLoading,
    speakerList,
    favoriteClickCount,
    hasErrored,
    error
  }, dispatch] = useReducer(speakerReducer, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    error: null
  });

  const incrementFavoriteClickCount = () => {
    dispatch({ type: 'INCREMENT_FAVORITE_CLICK_COUNT' });
  };

  const toggleSpeakerFavorite = speakerRec => {
    const updateData = async function() {
      await axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRec);
      speakerRec.favorite
        ? dispatch({ type: 'FAVORITE', id: speakerRec.id })
        : dispatch({ type: 'UNFAVORITE', id: speakerRec.id });
    };
    updateData();
  };


  useEffect(() => {
    const fetchData = async function() {
      try {
        let result = await axios.get('http://localhost:4000/speakers');
        dispatch({
          type: 'SET_SPEAKER_LIST',
          data: result.data
        });
      } catch (e) {
        dispatch({ type: 'ERRORED', error: e });
      }
    };
    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
    favoriteClickCount,
    incrementFavoriteClickCount,
    hasErrored,
    error
  };
};

export default useSpeakerDataManager;

