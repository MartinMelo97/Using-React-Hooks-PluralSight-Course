import { createContext } from 'react';
import { FavoriteClickCounterProvider } from './FavoriteClickCountContext';
import { GlobalProvider } from './GlobalState';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <FavoriteClickCounterProvider>
          <div>{pageToShow(pageName)}</div>;
        </FavoriteClickCounterProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
