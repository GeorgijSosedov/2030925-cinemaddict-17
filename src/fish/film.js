import { generateActor, generateCountry, generateDescription, generateDirector, generateRate, generateWriter} from './utils';
import { generateTitle } from './utils';
import { generateValue } from './utils';
import { generateGenre } from './utils';
import { generatePoster } from './utils';
import { generateRating } from './utils';
import { generateRelease } from './utils';
import { comment } from './comments';
import generalDescription from './utils.js';

export const film = {
  id: 1,
  poster: generatePoster,
  title: generateTitle,
  rating: generateRating,
  release: generateRelease,
  value: generateValue,
  genre: generateGenre,
  description: generateDescription,
  rate: generateRate ,
  country: generateCountry,
  writers: generateWriter ,
  directors: generateDirector,
  actors: generateActor ,
  generalDescription: generalDescription,
  comments: [comment.id1,comment.id2,comment.id3,comment.id4],
};
