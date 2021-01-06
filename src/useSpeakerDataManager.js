import { useEffect, useReducer } from 'react';
import speakerReducer from './SpeakersReducer';
import axios from 'axios';

function useSpeakerDataManager() {

  const [{ isLoading, speakerList }, dispatch] = useReducer(speakerReducer, {
    isLoading: true,
    speakerList: []
  });

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
      let result = await axios.get('http://localhost:4000/speakers');
      dispatch({
        type: 'SET_SPEAKER_LIST',
        data: result.data
      });
    };
    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);

  return { isLoading, speakerList, toggleSpeakerFavorite };
};

export default useSpeakerDataManager;

