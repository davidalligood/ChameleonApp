import {TranscriptionPage} from 'twilio/lib/rest/api/v2010/account/recording/transcription';
import {WebhookContext} from 'twilio/lib/rest/autopilot/v1/assistant/webhook';
import {RoomContext} from 'twilio/lib/rest/insights/v1/room';
import {TrustProductsEvaluationsInstance} from 'twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations';

export interface Category {
  categoryName: string;
  words: string[];
}

export const categories = [
  {
    categoryName: 'Fruits',
    words: [
      'Apple',
      'Banana',
      'Peach',
      'Mango',
      'Watermelon',
      'Pear',
      'Pineapple',
      'Blueberry',
      'Grape',
      'Strawberry',
      'Plum',
      'Tomato',
      'Coconut',
      'Orange',
      'Lemon',
      'Lime',
    ],
  },
  {
    categoryName: 'Movies',
    words: [
      'Jurassic Park',
      'Jaws',
      'Raiders of the Lost Ark',
      'The Avengers',
      'Transformers',
      'Toy Story',
      'Home Alone',
      'Titanic',
      'E.T.',
      'The Wizard of Oz',
      'King Kong',
      'The Matrix',
      'Shrek',
      'The Godfather',
      'Finding Nemo',
      'Avatar',
    ],
  },
  {
    categoryName: 'Games',
    words: [
      'Monopoly',
      'Scrabble',
      'Mouse Trap',
      'Guess Who',
      'Risk',
      'Operation',
      'Twister',
      'Pictionary',
      'Battleship',
      'Backgammon',
      'Cluedo',
      'Chess',
      'Checkers',
      'Trivial',
      'Jenga',
      'Hungry Hungry Hippos',
    ],
  },
  {
    categoryName: 'Musical Instruments',
    words: [
      'Electric Guitar',
      'Piano',
      'Violin',
      'Drums',
      'Bass Guitar',
      'Saxophone',
      'Cello',
      'Flute',
      'Clarinet',
      'Trumpet',
      'Voice',
      'Ukulele',
      'Harp',
      'Bagpipes',
      'Harmonica',
      'Banjo',
    ],
  },
  {
    categoryName: 'Countries',
    words: [
      'UK',
      'Spain',
      'Japan',
      'Brazil',
      'France',
      'USA',
      'Italy',
      'Australia',
      'Germany',
      'Mexico',
      'India',
      'Israel',
      'Canada',
      'China',
      'Russia',
      'Egypt',
    ],
  },
  {
    categoryName: 'Mythical Creatures',
    words: [
      'Cyclops',
      'Pegasus',
      'Medusa',
      'Sphinx',
      'Werewolf',
      'Unicorn',
      'Dragon',
      'Troll',
      'Loch Ness Monster',
      'Mermaid',
      'Phoenix',
      'Vampire',
      'Minotaur',
      'Hydra',
      'Yeti',
      'Centaur',
    ],
  },
  {
    categoryName: 'Film Genres',
    words: [
      'Horror',
      'Action',
      'Thriller',
      'Sci-Fi',
      'Rom-Com',
      'Western',
      'Comedy',
      'Christmas',
      'Gangster',
      'Foreign Language',
      'War',
      'Documentary',
      'Musical',
      'Animation',
      'Zombie',
      'Sports',
    ],
  },
  {
    categoryName: 'Rooms',
    words: [
      'Kitchen',
      'Hallway',
      'Greenhouse',
      'Bedroom',
      'Bathroom',
      'Dining Room',
      'Office',
      'Living Room',
      'Attic',
      'Basement',
      'Porch',
      'Nursery',
      'Den',
      'Bunker',
      'Shed',
      'Garage',
    ],
  },
  {
    categoryName: 'Wedding Anniversaries',
    words: [
      'Wood',
      'China',
      'Paper',
      'Cotton',
      'Bronze',
      'Gold',
      'Ruby',
      'Diamond',
      'Crystal',
      'Flowers',
      'Silk',
      'Leather',
      'Pearl',
      'Coral',
      'Tin',
      'Wool',
    ],
  },
  {
    categoryName: 'Bands',
    words: [
      'The Beatles',
      'The Rolling Stones',
      'AC/DC',
      'Nirvana',
      'Backstreet Boys',
      'One Direction',
      "Guns N' Roses",
      'Queen',
      'The Beach Boys',
      'Red Hot Chili Peppers',
      'KISS',
      'Jackson 5',
      'ABBA',
      'The Eagles',
      'The Who',
      'U2',
    ],
  },
  {
    categoryName: 'Transport',
    words: [
      'Plane',
      'Car',
      'Tank',
      'Helicopter',
      'Cruise Ship',
      'Hovercraft',
      'Motorbike',
      'Bus',
      'Segway',
      'Cable Car',
      'Jet Ski',
      'Hot Air Balloon',
      'Train',
      'Spaceship',
      'Magic Carpet',
      'Broomstick',
    ],
  },
  {
    categoryName: 'Musicals',
    words: [
      'West Side Story',
      'Cats',
      'Jersey Boys',
      'School of Rock',
      'Phantom of the Opera',
      'Les Miserables',
      'Oliver',
      'Hamilton',
      'Chicago',
      '42nd Street',
      'Annie',
      'Book of Mormon',
      'Lion King',
      'Wicked',
      'Hairspray',
      'Mama Mia',
    ],
  },
  {
    categoryName: 'Children’s Books',

    words: [
      'The Hobbit',

      'Peter Pan',

      'The Very Hungry Caterpillar',

      '101 Dalmatians',

      'Matilda',

      'Harry Potter and the Sorcerer’s Stone',

      'Alice in Wonderland',

      'The Lion, the Witch and the Wardrobe',

      'Stuart Little',

      'The Cat in the Hat',

      'Charlie and the Chocolate Factory',

      'Where the Wild Things Are',

      'Winnie-the-Pooh',

      'The Adventures of Tom Sawyer',

      'The Jungle Book',

      'Charlotte’s Web',
    ],
  },

  {
    categoryName: 'World Wonders',

    words: [
      'Pyramids',

      'Eiffel Tower',

      'Statue of Liberty',

      'Big Ben',

      'Stonehenge',

      'Golden Gate Bridge',

      'Colosseum',

      'Sydney Opera House',

      'Christ the Redeemer',

      'Machu Picchu',

      'Taj Mahal',

      'Hoover Dam',

      'Great Wall of China',

      'Mount Rushmore',

      'Empire State Building',

      'Leaning Tower of Pisa',
    ],
  },

  {
    categoryName: 'Civilizations',

    words: [
      'Romans',

      'Egyptians',

      'Mayans',

      'Mongols',

      'Aztecs',

      'Japanese',

      'Persians',

      'Greeks',

      'Turks',

      'Vikings',

      'Incas',

      'Spanish',

      'Zulu',

      'Chinese',

      'Spartans',

      'Aliens',
    ],
  },

  {
    categoryName: 'Cartoon Animals',

    words: [
      'Garfield',

      'Scooby-Doo',

      'Yogi Bear',

      'Bugs Bunny',

      'Mickey Mouse',

      'Goofy',

      'Jiminy Cricket',

      'Kung Fu Panda',

      'Nemo',

      'Tony the Tiger',

      'Snoopy',

      'Bambi',

      'Dumbo',

      'Wile E. Coyote',

      'Simba',

      'Sonic the Hedgehog',
    ],
  },

  {
    categoryName: 'School',

    words: [
      'Math',

      'Chemistry',

      'Physics',

      'Biology',

      'History',

      'Philosophy',

      'Geography',

      'English',

      'Economics',

      'Spanish',

      'Art',

      'Music',

      'Gym',

      'Latin',

      'Religion',

      'Technology',
    ],
  },

  {
    categoryName: 'Sports',

    words: [
      'Football',

      'Soccer',

      'Golf',

      'Baseball',

      'Basketball',

      'Ice Hockey',

      'Sailing',

      'Squash',

      'Tennis',

      'Badminton',

      'Motor Racing',

      'Wrestling',

      'Lacrosse',

      'Volleyball',

      'Triathalon',

      'Cycling',
    ],
  },

  {
    categoryName: 'Hobbies',

    words: [
      'Stamps',

      'Trains',

      'Model Making',

      'Knitting',

      'Fishing',

      'Reading',

      'Painting',

      'Gardening',

      'Sailing',

      'Travel',

      'Walking',

      'Pottery',

      'Cooking',

      'Yoga',

      'Photography',

      'Hiking',
    ],
  },

  {
    categoryName: 'Music',

    words: [
      'Rock',

      'Heavy Metal',

      'Classical',

      'Funk',

      'Hip Hop',

      'Pop',

      'Techno',

      'Blues',

      'Rap',

      'Punk',

      'Indie',

      'Christmas',

      'Country',

      'House',

      'Disco',

      'Reggae',
    ],
  },
  {
    categoryName: 'Inventions',

    words: [
      'Matches',

      'Gunpowder',

      'Wheel',

      'Printing',

      'Computer',

      'Internet',

      'Compass',

      'Plane',

      'TV',

      'Electricity',

      'Writing',

      'Steam Engine',

      'Car',

      'Telephone',

      'Camera',

      'Radio',
    ],
  },

  {
    categoryName: 'Geography',

    words: [
      'Lake',

      'Sea',

      'Valley',

      'Mountain',

      'River',

      'Desert',

      'Ocean',

      'Forest',

      'Jungle',

      'Island',

      'Glacier',

      'Waterfall',

      'Volcano',

      'Cave',

      'Arctic',

      'Swamp',
    ],
  },

  {
    categoryName: 'TV Shows',

    words: [
      'Friends',

      'Sex and the City',

      'Star Trek',

      'The Walking Dead',

      'Breaking Bad',

      'Days of our Lives',

      'Cheers',

      'Lost',

      'Happy Days',

      'The X-Files',

      'General Hospital',

      'Frasier',

      'Mad Men',

      'South Park',

      'Game of Thrones',

      'Golden Girls',
    ],
  },

  {
    categoryName: 'Food',

    words: [
      'Pizza',

      'Potatoes',

      'Fish',

      'Cake',

      'Pasta',

      'Salad',

      'Soup',

      'Bread',

      'Eggs',

      'Cheese',

      'Fruit',

      'Chicken',

      'Sausage',

      'Ice Cream',

      'Chocolate',

      'Beef',
    ],
  },

  {
    categoryName: 'Phobias',

    words: [
      'Ghosts',

      'Spiders',

      'Monsters',

      'Rats',

      'Toilets',

      'Snakes',

      'Germs',

      'Clowns',

      'Needles',

      'Dogs',

      'Birds',

      'Insects',

      'Children',

      'Shadows',

      'Roller Coasters',

      'Planes',
    ],
  },

  {
    categoryName: 'States',

    words: [
      'California',

      'Texas',

      'Alabama',

      'Hawaii',

      'Florida',

      'Montana',

      'Nevada',

      'Mississippi',

      'North Carolina',

      'New York',

      'Kentucky',

      'Tennessee',

      'Colorado',

      'Washington',

      'Illinois',

      'Alaska',
    ],
  },

  {
    categoryName: 'Drinks',

    words: [
      'Coffee',

      'Tea',

      'Lemonade',

      'Coca-Cola',

      'Wine',

      'Beer',

      'Punch',

      'Tequila',

      'Hot Chocolate',

      'Milkshake',

      'Root Beer',

      'Water',

      'Smoothie',

      'Orange Juice',

      'Milk',

      'Champagne',
    ],
  },

  {
    categoryName: 'Artists',

    words: [
      'Damien Hirst',

      'Salvador Dali',

      'Pablo Picasso',

      'Vincent Van Gogh',

      'Claude Monet',

      'Andy Warhol',

      'Leonardo da Vinci',

      'Michelangelo',

      'Bansky',

      'Mark Rothko',

      'Keith Haring',

      'Jeff Koons',

      'Rembrandt',

      'Jackson Pollock',

      'Edward Hopper',

      'Georgia O’Keeffe',
    ],
  },

  {
    categoryName: 'The Arts',

    words: [
      'Painting',

      'Sculpture',

      'Architecture',

      'Dance',

      'Literature',

      'Opera',

      'Stand-up',

      'Comic Books',

      'Illustration',

      'Music',

      'Theatre',

      'Cinema',

      'Video Games',

      'Graffiti',

      'Fashion',

      'Photography',
    ],
  },

  {
    categoryName: 'Sports Stars',

    words: [
      'Tiger Woods',

      'Pelé',

      'Michael Jordan',

      'LeBron James',

      'Michael Phelps',

      'Serena Williams',

      'Muhammad Ali',

      'Tom Brady',

      'Hope Solo',

      'Babe Ruth',

      'Wayne Gretzky',

      'Kelly Slater',

      'Tony Hawk',

      'Michael Johnson',

      'Usain Bolt',

      'Hulk Hogan',
    ],
  },

  {
    categoryName: 'Jobs',

    words: [
      'Fisherman',

      'Lumberjack',

      'Nurse',

      'Waiter',

      'Janitor',

      'Secretary',

      'Accountant',

      'Teacher',

      'Truck Driver',

      'Security Guard',

      'Chef',

      'Architect',

      'Police Officer',

      'Lawyer',

      'Carpenter',

      'Butcher',
    ],
  },

  {
    categoryName: 'Sci-Fi And Fantasy',

    words: [
      'Star Wars',

      'Lord of the Rings',

      'Star Trek',

      'Blade Runner',

      'The Addams Family',

      '2001: A Space Odyssey',

      'Terminator',

      'His Dark Materials',

      'Dune',

      'The Princess Bride',

      'Alice’s Adventures in Wonderland',

      'Gulliver’s Travels',

      'The War of the Worlds',

      'The Martian',

      'WALL-E',

      'Edward Scissorhands',
    ],
  },

  {
    categoryName: 'Fairy Tales',

    words: [
      'Cinderella',

      'Goldilocks',

      'Jack and the Beanstalk',

      'Hare and the Tortoise',

      'Snow White',

      'Rapunzel',

      'Aladdin',

      'Princess and the Pea',

      'Peter Pan',

      'Little Red Riding Hood',

      'Pinocchio',

      'Beauty and the Beast',

      'Sleeping Beauty',

      'Hansel and Gretel',

      'Gingerbread Man',

      'Three Little Pigs',
    ],
  },

  {
    categoryName: 'Presidents',

    words: [
      'Clinton',

      'Reagan',

      'Roosevelt (FDR)',

      'Eisenhower',

      'George W. Bush',

      'George Bush Sr.',

      'Obama',

      'Trump',

      'Kennedy',

      'Lincoln',

      'Washington',

      'Nixon',

      'Teddy Roosevelt',

      'Jefferson',

      'Adams',

      'Carter',
    ],
  },

  {
    categoryName: 'Historical Figures',

    words: [
      'Jesus',

      'Napoleon',

      'Stalin',

      'Hitler',

      'Darwin',

      'Martin Luther King Jr.',

      'Pocahontas',

      'Einstein',

      'Christopher Columbus',

      'Mother Teresa',

      'Ulysses S. Grant',

      'Caesar',

      'Mozart',

      'Cleopatra',

      'Buddha',

      'Chruchill',
    ],
  },

  {
    categoryName: 'Fictional Characters',

    words: [
      'Indiana Jones',

      'Mary Poppins',

      'Spiderman',

      'Catwoman',

      'James Bond',

      'Wonder Woman',

      'Princess Leia',

      'The Little Mermaid',

      'Dracula',

      'Lara Croft',

      'Robin Hood',

      'Hermione Granger',

      'Super Mario',

      'Homer Simpson',

      'Hercules',

      'Katniss Everdeen',
    ],
  },

  {
    categoryName: 'Cities',

    words: [
      'New York City',

      'Moscow',

      'Delhi',

      'London',

      'Paris',

      'Rome',

      'Rio de Janeiro',

      'Sydney',

      'Tokyo',

      'Athens',

      'Cairo',

      'Hong Kong',

      'Chicago',

      'L.A.',

      'San Francisco',

      'Jerusalem',
    ],
  },

  {
    categoryName: 'Zoo',

    words: [
      'Elephant',

      'Giraffe',

      'Koala',

      'Tiger',

      'Lion',

      'Leopard',

      'Meerkat',

      'Buffalo',

      'Ostrich',

      'Owl',

      'Eagle',

      'Parrot',

      'Scorpion',

      'Alligator',

      'Zebra',

      'Gorilla',
    ],
  },

  {
    categoryName: 'Under The Sea',

    words: [
      'Octopus',

      'Starfish',

      'Shark',

      'Jellyfish',

      'Lobster',

      'Seal',

      'Dolphin',

      'Killer Whale',

      'Crab',

      'Giant Squid',

      'Seahorse',

      'Stingray',

      'Sea Turtle',

      'Clownfish',

      'Swordfish',

      'Mermaid',
    ],
  },

  {
    categoryName: 'Authors',

    words: [
      'Shakespeare',

      'Tolkien',

      'C.S. Lewis',

      'J.K. Rowling',

      'Stephen King',

      'Ernest Hemmingway',

      'Edgar Allan Poe',

      'Charles Dickens',

      'T.S. Elliot',

      'Tolstoy',

      'Jane Austen',

      'Mark Twain',

      'Danielle Steel',

      'John Grisham',

      'Dan Brown',

      'Agatha Christie',
    ],
  },

  {
    categoryName: 'Toys',

    words: [
      'Lego',

      'Rocking Horse',

      'Super Soaker',

      'Cabbage Patch Dolls',

      'Rubik’s Cube',

      'Etch a Sketch',

      'Teddy Bear',

      'Play Doh',

      'Yo-yo',

      'Frisbee',

      'Hot Wheels',

      'Barbie',

      'Slinky',

      'G.I. Joe',

      'Hula Hoop',

      'Furby',
    ],
  },

  {
    categoryName: 'Marvel Characters',

    words: [
      'Captain America',

      'Thor',

      'Spiderman',

      'Hulk',

      'Loki',

      'Doctor Strange',

      'Thanos',

      'Iron Man',

      'Black Panther',

      'Vision',

      'Scarlet Witch',

      'Star-Lord',

      'Black Widow',

      'Ant-Man',

      'Hawkeye',

      'Captain Marvel',
    ],
  },

  {
    categoryName: 'DC Characters',

    words: [
      'Batman',

      'Green Lantern',

      'Joker',

      'Superman',

      'Robin',

      'Wonder Woman',

      'Aquaman',

      'Green Arrow',

      'Flash',

      'Harley Quinn',

      'Cyborg',

      'Cat Woman',

      'Martian Manhunter',

      'Lex Luthor',

      'Nightwing',

      'Supergirl',
    ],
  },

  {
    categoryName: 'Nintendo Characters',

    words: [
      'Mario',

      'Kirby',

      'Princess Peach',

      'Link',

      'Luigi',

      'Zelda',

      'Fox',

      'Bowser',

      'Samus',

      'Donkey Kong',

      'Yoshi',

      'Captain Falcon',

      'Ganondorf',

      'Marth',

      'Pikachu',

      'Ness',
    ],
  },

  {
    categoryName: 'Video Games',

    words: [
      'Halo',

      'Tetris',

      'Pokémon',

      'Minecraft',

      'Grand Theft Auto',

      'World of Warcraft',

      'Animal Crossing',

      'Fortnite',

      'League of Legends',

      'Pac-Man',

      'The Legend of Zelda',

      'Super Mario Bros.',

      'Call of Duty',

      'Overwatch',

      'FIFA',

      'Mario Kart',
    ],
  },
];
