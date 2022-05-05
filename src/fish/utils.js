const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

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
    '2016',
    '2021',
    '2022',
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


