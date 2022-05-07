import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeCommentDate = (commentDate) => dayjs(commentDate).format('YYYY/MM/DD HH:mm');

const humanizeFilmDate = (date) => dayjs(date).format('DD MMMM YYYY');


export {getRandomInteger, humanizeFilmDate,humanizeCommentDate};

export const generateTitle = () => {
  const titles = [
    'Main Hero',
    'War Dogs',
    'Kick-Ass',
    'Train to Busan',
    'Resident Evil',
  ];

  const randomIndex = getRandomInteger(0,titles.length - 1);

  return titles[randomIndex];
};

export const generateRating = () => {
  const ratings = [
    '7.4',
    '6.9',
    '3.7',
    '8.9',
    '9.7',
  ];

  const randomIndex = getRandomInteger(0,ratings.length - 1);

  return ratings[randomIndex];
};

export const generateRelease = () => {
  const releases = [
    '5 april 2016',
    '11 november 2021',
    '1 may 2022',
  ];

  const randomIndex = getRandomInteger(0,releases.length - 1);

  return releases[randomIndex];
};

export const generateValue = () => {
  const values = [
    '1h.37m.',
    '1h.55m',
    '1h.54m',
    '1h.58m',
    '1h.57m',
  ];

  const randomIndex = getRandomInteger(0,values.length - 1);

  return values[randomIndex];
};

export const generateGenre = () => {
  const genres = [
    'Комедия/Боевик',
    'Ужасы/Боевик',
  ];

  const randomIndex = getRandomInteger(0,genres.length - 1);

  return genres[randomIndex];
};

export const generatePoster = () => {
  const posters = [
    './popeye-meets-sinbad.png',
    './the-dance-of-life.jpg',
    './the-great-flamarion.jpg',
    './sagebrush-trail.jpg',
    './made-for-each-other.png',
  ];


  const randomIndex = getRandomInteger(0,posters.length - 1);

  return posters[randomIndex];
};

export const generateDescription = () => {
  const descriptions = [
    'Реальная история о приятелях-планокурах из Майами, умудрившихся выбить в Пентагоне контракт на 300 миллионов долларов на поставку оружия.',
    'У сотрудника крупного банка всё идёт по накатанной, пока он однажды не выясняет, что окружающий его мир — часть огромной видеоигры, где игроки могут делать всё, что захотят. И только он может спасти этот мир от окончательного уничтожения.',
    'Главный герой — школьник Дэйв Лизевски, который, вырядившись в костюм супергероя, пытается бороться с преступниками, хотя не обладает для этого никакими способностями. Параллельно два персонажа — 11-летняя девочка, которая крошит гангстеров мечом, и сынок гангстера, ведущий собственное расследование, пытаются выяснить личность Дэйва…',
    'У маленькой Су-ан день рождения. Девочка живет с отцом в Сеуле и очень хочет отправиться к маме в Пусан. По дороге случается непредвиденное, и на страну обрушивается загадочный вирус. Пассажирам поезда в Пусан — единственного города, отразившего атаки вируса- придется бороться за выживание. 442 километра в пути. Добро пожаловать на борт и помните — в этой гонке недостаточно выжить, чтобы остаться человеком.',
    'Раккун-Сити, где когда-то располагался фармацевтический гигант Umbrella и вовсю бурлила жизнь, превратился в город-призрак. Компания давно переехала, но на ее месте глубоко под землей набирает силу великое зло. Когда оно вырвется на свободу, единственный шанс выжить уцелевшей горстке людей — сплотиться и узнать всю правду о корпорации Umbrellа.',
  ];

  const randomIndex = getRandomInteger(0,descriptions.length - 1);

  return descriptions[randomIndex];
};

export const generateDirector = ()  => {
  const directors = [
    'Shawn Levy',
    'Todd Phillips',
    'Matthew Vaughn',
    'Yeon Sang-ho',
    'Johannes Roberts',
  ];
  const randomIndex = getRandomInteger(0,directors.length - 1);

  return directors[randomIndex];
};
export const generateWriter = ()  => {
  const writers =  [
    'Matt Lieberman',
    'Todd Phillips',
    'Mark Millar',
    'Joo-Suk Park',
    'Johannes Roberts',
  ];
  const randomIndex = getRandomInteger(0,writers.length - 1);

  return writers[randomIndex];
};
export const generateActor = () => {
  const actors = [
    'Ryan Reynolds',
    'Jodie Comer',
    'Lil Rel Howery',
    'Miles Teller',
    'Jonah Hill',
    'Dave Lizewski',
    'Mindy Macread',
    'Seok-woo',
    'Sang-hwa',
    'Claire Redfield',
    'Chris Redfield',
  ];
  const randomIndex = getRandomInteger(0,actors.length - 1);

  return actors[randomIndex];
};
export const generateCountry = () => {
  const country = [
    'USA',
    'Russia',
    'Japan',
    'Canada',
    'China',
    'Italy',
    'Germany',
    'France',
    'Africa',
    'Poland',
  ];
  const randomIndex = getRandomInteger(0,country.length - 1);

  return country[randomIndex];
};

export const generateRate = () => {
  const rates = [
    '0+',
    '18',
    '6+',
    '12+',
    '16+',
  ];
  const randomIndex = getRandomInteger(0,rates.length - 1);

  return rates[randomIndex];
};
export const filmDescritptionGeneral = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

export const emojiNames = [
  'smile',
  'sleeping',
  'puke',
  'angry'
];

export const FILMS_COUNT = 5;
