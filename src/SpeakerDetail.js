import { memo, useContext } from 'react';
import { FavoriteClickCounterContext } from './FavoriteClickCountContext';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const SpeakerDetail = memo(({
  speakerRec,
  onHeartFavoriteHandler
}) => {

  const {
    id,
    firstName,
    lastName,
    bio,
    favorite
  } = speakerRec;

  console.log('testito', `id: ${id}, fullName: ${firstName} ${lastName}, favorite: ${favorite}`);

  const { incrementFavoriteClickCount } = useContext(FavoriteClickCounterContext);

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={e => {
              onHeartFavoriteHandler(e, {
                ...speakerRec,
                favorite: !speakerRec.favorite
              });
              incrementFavoriteClickCount();
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
});

export default SpeakerDetail;
