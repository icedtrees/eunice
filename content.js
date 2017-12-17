var historicalQuotes = [
  {
    'text': `
"Happy Apple" really seems to suit her - happy because of the aura she exudes both in public and on her blog, and Apple because it reminds me of "an apple a day" - consistent dedication to personal health and also a responsible dedication to study. Posts daily, and always provides something interesting to read. Excited/enthusiastic perspective on everything that happens. Admirable dedication to medicine. Can't find a better word to describe it than "nice".
`,
    'author': 'Davy, blog review 2012'
  },
  {
    'text': 'you are further down than the guy up there!',
    'author': 'Davy, Japan Ski Trip 2015'
  },
  {
    'text': '10/10 would do again',
    'author': 'Davy, Japan Ski Trip 2015'
  },
  {
    'text': 'The tree is our next goal!',
    'author': 'Davy, Japan Ski Trip 2015'
  },
  {
    'text': 'you are further down than the guy up there!',
    'author': 'Davy, Japan Ski Trip 2015'
  },
  {
    'text': 'you are further down than the guy up there!',
    'author': 'Davy, Japan Ski Trip 2015'
  },
  {
    'text': `But I kind of feel like it is my responsibility as a friend to do all I can for her. She is my inspiration, one of my favourite friends, and for me, she represents everything good I discovered when changing schools - kind people, my own potential, doing things for others, and what it truly means to be happy. I guess I feel like, for someone like that, I owe them my world, it is the least I can do to help someone who is trying her hardest.`,
    'author': 'Davy, while planning this project way back in 2014'
  },
  {
    'text': `
    I started this blog post mainly to thank Eunice for the awesome birthday present and Harvard for the awesome letter because I wasn't sure how else to offer thanks. Also, so excited when you said maybe doing nanowrimo this year! Would be excited to read it.

you're my idol eunice
`,
    'author': 'Davy, some blog post in 2012'
  },
  {
    'text': `Going to eunice's house again was kind of a throwback to the old days. The old days where I was excited and I cared a lot. It was a good trip for me.`,
    'author': 'Davy, some blog post in 2015'
  },
  {
    'text': `one last shout out to eunice, who is fighting for her life while i go around enjoying my days like my friend's not having her spirit crushed`,
    'author': 'Davy, while planning this project in 2017'
  },
  {
    'text': `one last shout out to eunice, who is fighting for her life while i go around enjoying my days like my friend's not having her spirit crushed`,
    'author': 'Davy, while planning this project in 2017'
  },
  {
    'text': `I feel moderately tired from relay for life. I was planning to stay up until 4am so I could say good night to eunice when she woke up because I thought it'd be funny. In retrospect maybe it's not that funny.`,
    'author': 'Davy, relay for life 2014'
  },
  {
    'text': `
Iced Trees, Dandelion and Happy Apple were all very supportive of me, even though I don't think I was very responsive to it. You gave me help that I didn't ask for or reciprocate. You made a difference, and I remember it.
`,
    'author': 'Daniel, 2016 blog'
  },
  {
    'text': `
Being around Happy Apple reminds and encourages me to strive towards the person I want to be. I think it's really important to be around people who bring out a you who you like, and Happy Apple is someone who brings out the best in me.
`,
    'author': 'Nara, 2017 blog'
  },
  {
    'text': `
So yesterday evening, I posted that post since I didn't think I'd do anything of note for the rest of the day. But I did!! I went to Happy Apple's and it was the loveliest! Most energy and fun and excitement I've had since I came back. And that's saying a lot because I was so tired before. Man, sometimes you don't realise how much you miss someone until you spend time with them and realise how refreshed you are.
`,
    'author': 'Nara, 2017 blog'
  },
  {
    'text': `
It kind of reminds me of how in the chemistry half yearly I got to this multiple choice about the history of discoveries about acids and then I didn't know which one to pick out of two so I was like "Our Davy is pretty cool, I'll just put Davy. Save my exam, Iced Trees!" and then I got it right.`,
    'author': 'Eunice, way back in 2012'
  },
];

function nextHistoricalQuote() {
  var historicalQuote = randomElement(historicalQuotes);

  var quoteDiv = document.createElement('div');
  quoteDiv.className = 'historical-quote';
  quoteDiv.textContent = '"' + historicalQuote.text + '"';

  var authorDiv = document.createElement('div');
  authorDiv.textContent = '-' + historicalQuote.author;

  var childDiv = document.createElement('div');
  childDiv.appendChild(quoteDiv);
  childDiv.appendChild(authorDiv);

  var parentDiv = document.createElement('div');
  parentDiv.className = 'text-content-wrapper';
  parentDiv.appendChild(childDiv);
  return parentDiv;
}

var chibirdImages = [
  {
    'name': 'rain-sunshine-rainbow.jpg',
    'caption': `i feel like some of the best parts of my life have been transitions from things like my junior high school to baulko. only way is up, right?`
  },
  {
    'name': 'rainbow.jpg',
    'caption': `life is really hard sometimes. me, most of the time i sit in my house wasting my time doing nothing. ive spent months and months just playing games (not even good games), reading reddit, watching youtube, and basically making a waste out of my life. but once in a blue moon i feel motivated, and i feel like life is back to being something worth fighting for. i'd better make the most of this. tbh maybe being unmotivated is the default state. i know u feel unmotivated sometimes. i think it's fine to just chill and do things u like and hang with people u like until u feel ready to fight again. eunice hwaiting!`,
  },
  {
    'name': 'stronger-life.gif',
    'caption': `yeah, and ur life has been getting harder ever since. not only did you have to deal with your ed, u had to perform perfectly in the hsc, get into med, pass radiography, get into med again, and pass med exams - all while dealing with a ton of shit. what a life man. u never signed up for any of this. except med i guess, u signed yourself up for that. congrats again on getting into med! maybe one day u'll find something else worth fighting for.`,
  }
];

function nextChibirdImage() {
  var chibirdImage = randomElement(chibirdImages);
  var img = document.createElement('img');
  img.setAttribute('src', `resources/chibird/${chibirdImage.name}`);
  img.className = 'image-content';
  img.title = chibirdImage.caption;
  return img;
}

var personalMessages = [
  'remember that time u printed out all those photos from japan and gave a copy to all us at ippudo? that was some sick stuff. i showed them to my mum and my mum is always asking for photos and she was so happy',
  'https://www.youtube.com/watch?v=HiUGWXe6Yzk',
  'remember that jar u gave me and told me to fill with memories of my 18th year? yeah i took that and filled it up. there are some super good memories in there and i cant even think of what they are bc they were too long ago',
  'remember the church scavenger hunt? we pulled off the coolest piggyback of the event imo',
  'man i have so many letters from you. they will be really good to read when i want to know what kind of person i was a decade ago. Things are so easy to forget so physical mediums are good. Maybe im just saving them for when i really need them.',
  'continuing to live and maintain a normal life absolutely takes perseverance. living crushes the shit out of most people who are u kidding',
  'sorry to hear about ur stay in the psychiatric ward. sounds really shit. also sorry to hear about how ur parents are fucking up ur room and stuff. its unfortunately doing no one any good. one day theyll understand. maybe not today.',
  'u are trying ur best so get some rest dude. chill out for a bit. go do some relaxing things that make u happy.',
  'someday down the line u will have to accept that ur life is harder than anyone elses, and not because of anything you did wrong. no ones feelings are their fault. the world is just a lot of people trying to coexist with their environment. some are unlucky and have to try harder than others.',
  'u are not burden, u are the one and only eunice ling. tbh for the rest of my life i will struggle to find someone who has had more positive impact on my life than you did.',
  'reading u write about ur ed gives me the impression that u know how to deal with your feelings better than anyone else. i think u should trust your own judgement more. u know yourself, u know how to be happy. go fucking be happy u sick nerd baller',
  'trying to force people to want something is the mother of all shit ideas. people know what they want and u cant make them want something they dont want.',
  'i really dont think u have done anything wrong so far. at each point you made the best judgement u could with the limited knowledge and feelings u had. really hard to say anything is ur fault. ',
  'u honestly have one of the hardest lives out of anyone i know, you know that?',
  'sometimes the strain of work girlfriend RSI really takes its toll on me and all i want to do is just move back to sydney and vegetate for a year or so and rest my poor hands. i think ill do that sometime in the next year. what do u think',
  'tbh i cant do enough to support u and it sucks. my free time and energy/motivation levels are all fucked and i used to be a better person but not anymore. im gonna contribute what little i can. ur other friends will too. youll eventually need someone better to rely on for support tho. i hope u find that person.',
  'feel free to msg me anytime u need help. while i am a fucker, im also planning to take over the world. and what shit excuse of a world-ruler cant make time for his friends that need it? for u i will find a way somehow.',
  'lets skype sometime when we get the chance. we never actually got around to scheduling that skype call did we?',
  'congrats again on getting into med',
  '',
];

function nextPersonalMessage() {
  var personalMessage = randomElement(personalMessages);
  var childDiv = document.createElement('div');
  childDiv.textContent = personalMessage;

  var parentDiv = document.createElement('div');
  parentDiv.className = 'text-content-wrapper';
  parentDiv.appendChild(childDiv);
  return parentDiv;
}

