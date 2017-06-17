/**
 * @Author: Iñaki Rodriguez <inaki>
 * @Date:   17-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameEngine.js
 * @Last modified by:   inaki
 * @Last modified time: 17-Jun-2017
 */
export const TOTAL_CHARACTER_TILES = 13;
export const TOTAL_ROUNDS = 3;

// Character details
export const characters = {
  a: {
    img: require('./../../../res/characters/People_1.png'),
    name: 'Aligero',
    id: 1,
    isSelected: false,
  },
  b: {
    img: require('./../../../res/characters/People_2.png'),
    name: 'Beatrice',
    id: 2,
    isSelected: false,
  },
  c: {
    img: require('./../../../res/characters/People_3.png'),
    name: 'Clemente',
    id: 3,
    isSelected: false,
  },
  d: {
    img: require('./../../../res/characters/People_4.png'),
    name: 'Dario',
    id: 4,
    isSelected: false,
  },
  e: {
    img: require('./../../../res/characters/People_5.png'),
    name: 'Ernesto',
    id: 5,
    isSelected: false,
  },
  f: {
    img: require('./../../../res/characters/People_6.png'),
    name: 'Fiorello',
    id: 6,
    isSelected: false,
  },
  g: {
    img: require('./../../../res/characters/People_7.png'),
    name: 'Gavino',
    id: 7,
    isSelected: false,
  },
  i: {
    img: require('./../../../res/characters/People_8.png'),
    name: 'Irma',
    id: 8,
    isSelected: false,
  },
  l: {
    img: require('./../../../res/characters/People_9.png'),
    name: 'Leonardo',
    id: 9,
    isSelected: false,
  },
  n: {
    img: require('./../../../res/characters/People_10.png'),
    name: 'Natale',
    id: 10,
    isSelected: false,
  },
  m: {
    img: require('./../../../res/characters/People_11.png'),
    name: 'Merlino',
    id: 11,
    isSelected: false,
  },
  o: {
    img: require('./../../../res/characters/People_12.png'),
    name: 'Odessa',
    id: 12,
    isSelected: false,
  },
  p: {
    img: require('./../../../res/characters/People_13.png'),
    name: 'Piero',
    id: 13,
    isSelected: false,
  },
};

// Player details
export const players = {
   one: {
     name: 'Mark',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
   two: {
     name: 'Paul',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
   three: {
     name: 'Maria',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
   four: {
     name: 'Laura',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
   five: {
     name: 'Stephen',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
   six: {
     name: 'Romain',
     score_1: 1,
     score_2: 2,
     score_3: 3,
     remainingTilesToSet: 2,
   },
 };

// All possible cards
 export const CARDS = {
    one: {
      character_one: characters.a,
      character_two: characters.b,
      character_three: characters.c,
      character_four: characters.d,
      character_five: characters.g,
      character_six: characters.n,
    },
    two: {
      character_one: characters.a,
      character_two: characters.b,
      character_three: characters.g,
      character_four: characters.i,
      character_five: characters.m,
      character_six: characters.o,
    },
    three: {
      character_one: characters.b,
      character_two: characters.c,
      character_three: characters.i,
      character_four: characters.l,
      character_five: characters.n,
      character_six: characters.p,
    },
};

// TODO
// 4
// Clemente
// Fiorello
// Gavino
// Irma
// Leonardo
// Odessa
//
// 5
// Clemente
// Dario
// Fiorello
// Irma
// Merlino
// Natale
//
// 6
// Beatrice
// Fiorello
// Leonardo
// Merlino
// Natale
// Odessa
//
// 7
// Beatrice
// Ernesto
// Fiorello
// Gavino
// Irma
// Natale
//
// 8
// Aligero
// Dario
// Irma
// Natale
// Odessa
// Piero
//
// 9
// Aligero
// Beatrice
// Dario
// Fiorello
// Irma
// Leonardo
//
// 10
// Aligero
// Beatrice
// Ernesto
// Leonardo
// Odessa
// Piero
//
// 11
// Beatrice
// Clemente
// Ernesto
// Gavino
// Leonardo
// Merlino
//
// 12
// Clemente
// Gavino
// Merlino
// Natale
// Odessa
// Piero
//
// 13
// Dario
// Gavino
// Irma
// Leonardo
// Merlino
// Piero
//
// 14
// Beatrice
// Clemente
// Dario
// Ernesto
// Irma
// Odessa
//
// 15
// Aligero
// Dario
// Ernesto
// Fiorello
// Gavino
// Merlino
//
// 16
// Aligero
// Fiorello
// Gavino
// Leonardo
// Natale
// Piero
//
// 17
// Aligero
// Clemente
// Ernesto
// Gavino
// Irma
// Piero
//
// 18
// Beatrice
// Dario
// Ernesto
// Merlino
// Natale
// Piero
//
// 19
// Dario
// Ernesto
// Gavino
// Leonardo
// Natale
// Odessa
//
// 20
// Aligero
// Clemente
// Ernesto
// Fiorello
// Natale
// Odessa
//
// 21
// Beatrice
// Dario
// Fiorello
// Gavino
// Odessa
// Piero
//
// 22
// Aligero
// Beatrice
// Clemente
// Fiorello
// Merlino
// Piero
//
// 23
// Ernesto
// Fiorello
// Irma
// Merlino
// Odessa
// Piero
//
// 24
// Clemente
// Dario
// Ernesto
// Fiorello
// Leonardo
// Piero
//
// 25
// Aligero
// Ernesto
// Irma
// Leonardo
// Merlino
// Natale
//
// 26
// Aligero
// Clemente
// Dario
// Leonardo
// Merlino
// Odessa
