import { generateDescription,} from './utils';
import { generateTitle } from './utils';
import { generateValue } from './utils';
import { generateGenre } from './utils';
import { generatePoster } from './utils';
import { generateRating } from './utils';
import { generateRelease } from './utils';
import { comment } from './comments';


export const film = {
  id: 1,
  poster: generatePoster,
  title: generateTitle,
  rating: generateRating,
  release: generateRelease,
  value: generateValue,
  genre: generateGenre,
  description: generateDescription,
  comments: [comment.id1,comment.id2],
};


