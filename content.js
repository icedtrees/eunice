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
    'name': 'awesome-day.jpg',
    'caption': 'tbh its pretty hard when every day feels like shit tho. man i wish i could have an awesome day some day. maybe next year. maybe when i get my motivation back and i dont feel like shit half the time. hopefully the same for you.'
  },
  {
    'name': 'balloon-bunny.gif',
    'caption': 'eunice u are best smile'
  },
  {
    'name': 'balloon-gift.jpg',
    'caption': 'i think u deserve to be happy more than anyone else i know. youve done your fair share of living for other peoples sake and sacrificing yourself for other people. unfortunately life isnt fair so making yourself happy ends up being your job once again.'
  },
  {
    'name': 'beautiful-insecurities.jpg',
    'caption': 'dont ever forget who u are and where u came from. u were the baulkos angel for a reason.'
  },
  {
    'name': 'believe-yourself2.jpg',
    'caption': 'and that means telling people trying to blame u for shit to fuck off'
  },
  {
    'name': 'believe.jpg',
    'caption': 'trust your own judgement! youre the one who knows your mind better than anyone else, and u know what is right for you.'
  },
  {
    'name': 'bent-not-broken.jpg',
    'caption': 'can someone have too much character? idk. maybe youll be able to tell me that after a few more years of depression and ed. youll be like the lord of having character'
  },
  {
    'name': 'brighten.jpg',
    'caption': 'i associate u with bright colours because u made me happy a lot'
  },
  {
    'name': 'bunny-cute.jpg',
    'caption': 'this is true'
  },
  {
    'name': 'care-yourself.jpg',
    'caption': 'this is eunice in a nutshell. u deserve to be taken care of, dont forget that'
  },
  {
    'name': 'cat-fight.jpg',
    'caption': 'sometimes its fine to ask for help and let other people fight your inner demons for a change. youre never really alone.'
  },
  {
    'name': 'challenges-life.jpg',
    'caption': 'u could be living off the dole right now but u decided to try to study medicine while trying to fix ed and depression at the same time. what a hero.'
  },
  {
    'name': 'chick-control.gif',
    'caption': 'do what u need to do to be happy!'
  },
  {
    'name': 'christmas-cats.gif',
    'caption': 'man i hate christmas. gotta prepare all these presents. id much rather just spontaneously do nice things for people rather than get overloaded with social obligations at the worst times. Merry christmas!! Remember that time we had the christmas event at naras house and i got sick lol. My mum drove me in so i could drop off the presents. What did i get u again?'
  },
  {
    'name': 'comfort-bunny.gif',
    'caption': 'although hard to believe often, i still feel like this is true. humans have a way of working things out for the better.'
  },
  {
    'name': 'compliments.png',
    'caption': 'reminds me of all the positivity u used to spread back in hs. remember gradelove?'
  },
  {
    'name': 'constant-sadness.jpg',
    'caption': 'its ok to be sad! no worries mate'
  },
  {
    'name': 'cool-penguin.jpg',
    'caption': 'my mum once said u had a good qi or something. i still dont know what that really means'
  },
  {
    'name': 'criticism.jpg',
    'caption': 'very true i think'
  },
  {
    'name': 'dandelion-flower.gif',
    'caption': 'would u wish for an easier life? i dont think i would. my life and my hardships are too well-defined in who i am. would you wish that you had done something differently? would u be happier?'
  },
  {
    'name': 'deadlines.png',
    'caption': 'sometimes its really hard for me to motivate myself to get out of bed in the morning. those days pass. theyre not too bad, though. not bad to do nothing every once in awhile.'
  },
  {
    'name': 'december-wonderful.gif',
    'caption': 'december has a long way to catch up to you'
  },
  {
    'name': 'destination.jpg',
    'caption': 'like honestly, do u even know what u want to do with your life? i certainly dont. theres so much room left to explore and so much room to discover what we want from life!'
  },
  {
    'name': 'done-with-life.jpg',
    'caption': 'reminded me of you haha. hope u are not 100% done with life yet.'
  },
  {
    'name': 'easy-hard.jpg',
    'caption': 'u honestly have some of the hardest challenges of life ahead of you. you have to somehow beat two mental disorders and fight your parents at the same time, with no boyfriend and only a little support from each of your friends, who are busy with their own lives.'
  },
  {
    'name': 'emotions-good.jpg',
    'caption': 'your feelings sometimes help u do what u want and sometimes stop u from doing what u want. i guess sometimes its fine to wait for them to turn in your favour.'
  },
  {
    'name': 'encouraging-chick.gif',
    'caption': 'sometimes u just gotta keep living i guess. some days not giving up is the biggest accomplishment u do all day. one day i went to work and gave up and skived off work to sleep. i guess my biggest accomplishment that day was going to sleep, i was pretty glad i could catch up on sleep.'
  },
  {
    'name': 'fall-getup.jpg',
    'caption': 'if u lie there on the ground long enough people will start worrying and force you to get back up. i guess theres no real choice here'
  },
  {
    'name': 'feel-well.gif',
    'caption': 'youve gotten up at 4am every day for years on end. youve pushed yourself to crazy lengths, dont forget to have some days to take care of yourself'
  },
  {
    'name': 'flawed-diamond.jpg',
    'caption': 'i think youre the diamond with the flaw. lots of people go through life doing nothing remarkable but i think u have the potential to really shine in the face of crazy hardships'
  },
  {
    'name': 'friend-bunny.jpg',
    'caption': 'dont forget to msg or skype me sometimes! i might take forever to reply because im shit but at least u can say u tried'
  },
  {
    'name': 'good-every-day.jpg',
    'caption': 'its super cool that u find something to be grateful for in every day. im not sure i have enough positive energy for that.'
  },
  {
    'name': 'great-week.gif',
    'caption': 'u deserve the best weeks! hope a great one comes your way eventually'
  },
  {
    'name': 'happy-difficult.gif',
    'caption': 'life is honestly really hard.'
  },
  {
    'name': 'happy-meter-push.gif',
    'caption': 'hope you can find your happiness'
  },
  {
    'name': 'happy-sad.gif',
    'caption': 'life is honestly really hard.'
  },
  {
    'name': 'happy-yourself.jpg',
    'caption': 'sometimes u just have to go for your happiness'
  },
  {
    'name': 'hard-happy.gif',
    'caption': 'its a struggle but its gonna worth it sometime down the line.'
  },
  {
    'name': 'hope-happy.jpg',
    'caption': 'its a struggle but its gonna worth it sometime down the line.'
  },
  {
    'name': 'imperfect.gif',
    'caption': 'you managed to make so many friends who care about you. thats an achievement if there ever was one'
  },
  {
    'name': 'important-rabbit.jpg',
    'caption': 'a lot of people will come in to show you support over the next few days/weeks. dont forget youre important to all these people.'
  },
  {
    'name': 'infnite-energy.png',
    'caption': 'might be worth chilling out once in awhile. you try pretty freaking hard at everything.'
  },
  {
    'name': 'irreplaceable-bunny.jpg',
    'caption': 'i dont think ive ever met anyone quite like you. youre a very unique person in your ability to find positive things out of the smallest events, your fun-loving adventurous approach to life, and your remarkable ability to care about others (maybe a little too much at times, haha)'
  },
  {
    'name': 'life-anchors.jpg',
    'caption': 'but you somehow manage to make it through every day coming out the other side mostly sane. well done, eunice!'
  },
  {
    'name': 'life-paths.jpg',
    'caption': 'life will find a way somehow. or maybe god will find a way. heck if i know, im not christian'
  },
  {
    'name': 'listen.jpg',
    'caption': 'hit me up bro'
  },
  {
    'name': 'loneliest.jpg',
    'caption': 'explains why u are so compassionate i guess'
  },
  {
    'name': 'love-activity.jpg',
    'caption': 'i hope u can find something u enjoy that lights up your days. maybe for u that is being a doctor'
  },
  {
    'name': 'love-jar.gif',
    'caption': 'this website is a little token of care from me. please enjoy it!'
  },
  {
    'name': 'motivational-1.jpg',
    'caption': 'youre not just eunice, youre 7 year ed and depression survivor eunice'
  },
  {
    'name': 'no-blame.png',
    'caption': 'its honestly not your fault. im pretty sure u have always been doing what you felt was right under the circumstances. And you cant ever blame someone for feeling the way they did, feelings are something u cant really help.'
  },
  {
    'name': 'not-weak.jpg',
    'caption': 'go seize a happier life for yourself eunice. you deserve it.'
  },
  {
    'name': 'online-friends.gif',
    'caption': 'im your online friend now i guess. lol'
  },
  {
    'name': 'optimism.jpg',
    'caption': 'man days seem to be getting harder and harder as we grow older. lets do our best to survive this'
  },
  {
    'name': 'positive-penguin.gif',
    'caption': 'life seems to enjoy shitting on you. unfortunately. hang in there!'
  },
  {
    'name': 'pretend-happy.jpg',
    'caption': 'im really glad youre sharing your feelings on your blog and reaching out for the support you need'
  },
  {
    'name': 'rabbit-lovely.jpg',
    'caption': 'are you sick of getting tea for gifts yet? lol'
  },
  {
    'name': 'rain-sunshine-rainbow.jpg',
    'caption': `i feel like some of the best parts of my life have been transitions from things like my junior high school to baulko. only way is up, right?`
  },
  {
    'name': 'rainbow.jpg',
    'caption': `life is really hard sometimes. me, most of the time i sit in my house wasting my time doing nothing. ive spent months and months just playing games (not even good games), reading reddit, watching youtube, and basically making a waste out of my life. but once in a blue moon i feel motivated, and i feel like life is back to being something worth fighting for. i'd better make the most of this. tbh maybe being unmotivated is the default state. i know u feel unmotivated sometimes. i think it's fine to just chill and do things u like and hang with people u like until u feel ready to fight again. eunice hwaiting!`,
  },
  {
    'name': 'recoveryfrog.png',
    'caption': 'tbh if people recover faster than you its probably because they had an easier time of it. no one is going to get any recovery done in your shoes'
  },
  {
    'name': 'rose-awards.jpg',
    'caption': 'you deserve the best of the world!'
  },
  {
    'name': 'sad-flower.jpg',
    'caption': 'your friends are here for you'
  },
  {
    'name': 'self-esteem-penguin.gif',
    'caption': 'its all true'
  },
  {
    'name': 'slow-change.png',
    'caption': 'you conquered gamsat with ed and depression. theres no fucking way u wont be able to seize the life you want in the future'
  },
  {
    'name': 'star-wish.gif',
    'caption': 'u can save this wish for when i take over the world'
  },
  {
    'name': 'strength.jpg',
    'caption': 'dont forget the tens or hundreds of letters from people who you made enough of an impact on to spend an hour writing a letter to you'
  },
  {
    'name': 'stress-drink.jpg',
    'caption': 'also bathe in some tea since u have so much of it. worth trying at least once am i right'
  },
  {
    'name': 'stronger-life.gif',
    'caption': `yeah, and ur life has been getting harder ever since. not only did you have to deal with your ed, u had to perform perfectly in the hsc, get into med, pass radiography, get into med again, and pass med exams - all while dealing with a ton of shit. what a life man. u never signed up for any of this. except med i guess, u signed yourself up for that. congrats again on getting into med! maybe one day u'll find something else worth fighting for.`,
  },
  {
    'name': 'tired-sad.jpg',
    'caption': 'hang in there!'
  },
  {
    'name': 'try-everything.jpg',
    'caption': 'on the topic of falling we should go rock climbing sometime. nothing like a bit of good falling to give you the feeling of youth'
  },
  {
    'name': 'weekly-cheer.gif',
    'caption': 'i am always cheering eunice hwaiting from the sidelines!'
  },
  {
    'name': 'work-bunny.jpg',
    'caption': 'i see the efforts you are putting in to try to balance your parents expectations with your own feelings which is really hard.'
  },
  {
    'name': 'you-awesome.jpg',
    'caption': 'you make a lot of people happy'
  },
  {
    'name': 'you-got-this.gif',
    'caption': 'go get those sick initials after your name! youll have the longest name ever'
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
  'congrats again on getting into med'
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

