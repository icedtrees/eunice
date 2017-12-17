var historicalQuotes = [
  `
blog review:
fail whale.
Author: Happy Apple/Eunice
Theme: Grey text on various shades of green. Peaceful green wheat-pictured background.
Followers: AEreas, Crystal, littlemishsunshine, btan, icedtrees, Sweet(:, Ophelia, Bitter ^^, Elisa, Beccie Tsao, Renee, Joanna, delete12, Riku, we're nothing like you, Daniel W, Srisha's bloog, Neku Sakuraba, kiss_bliss_butterfly, Harvard, JB-HI5, Cookie Dough, ~dandelion*, Aarun, human.jukebox, Average, JM
Unique aspects: Recent comments! Haven't seen that in any other blogs. A nice followers tab! Maybe I'll put this in my followers tab. Happy Apple tips and facts!
Review: Bright theme makes posts seem brighter when you're reading them and thinking about them. The posts themselves are pretty happy as well. "Happy Apple" really seems to suit her - happy because of the aura she exudes both in public and on her blog, and Apple because it reminds me of "an apple a day" - consistent dedication to personal health and also a responsible dedication to study. Posts daily, and always provides something interesting to read. Excited/enthusiastic perspective on everything that happens. Admirable dedication to medicine. Can't find a better word to describe it than "nice".
`,
  'you are further down than the guy up there!',
  '10/10 would do again',
  'The tree is our next goal!',
  `the davy of 2014, while working on this website project: "But I kind of feel like it is my responsibility as a friend to do all I can for her. She is my inspiration, one of my favourite friends, and for me, she represents everything good I discovered when changing schools - kind people, my own potential, doing things for others, and what it truly means to be happy. I guess I feel like, for someone like that, I owe them my world, it is the least I can do to help someone who is trying her hardest."`
];

var chibirdImages = [
  {
    'name': 'rainbow.jpg',
    'caption': `life is really hard sometimes. me, most of the time i sit in my house wasting my time doing nothing. ive spent months and months just playing games (not even good games), reading reddit, watching youtube, and basically making a waste out of my life. but once in a blue moon i feel motivated, and i feel like life is back to being something worth fighting for. i'd better make the most of this. tbh maybe being unmotivated is the default state. i know u feel unmotivated sometimes. i think it's fine to just chill and do things u like and hang with people u like until u feel ready to fight again. eunice hwaiting!`,
  },
  {
    'name': 'stronger-life.jpg',
    'caption': `yeah, and ur life has been getting harder ever since. not only did you have to deal with your ed, u had to perform perfectly in the hsc, get into med, pass radiography, get into med again, and pass med exams - all while dealing with a ton of shit. what a life man. u never signed up for any of this. except med i guess, u signed yourself up for that. congrats again on getting into med! maybe one day u'll find something else worth fighting for.`,
  },
  {
    'name': 'rain-sunshine-rainbow.jpg',
    'caption': `i feel like some of the best parts of my life have been transitions from things like my junior high school to baulko. only way is up, right?`
  }
];

function nextImage() {
  var chibirdImage = randomElement(chibirdImages);
  var img = document.createElement('img');
  img.setAttribute('src', `resources/chibird/${chibirdImage.name}`);
  img.setAttribute('alt', chibirdImage.caption);
  img.className = 'image-content';
  return img;
}

