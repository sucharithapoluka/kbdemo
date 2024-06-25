import { useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { SliderProps } from '@components/onboarding-slider/SliderProps';
import { SyncStatus } from '@models/Enums';
import { HistoryData } from '@models/HistoryData';
import { CompanyData } from '@models/Lot';
import { RootStackParamList } from '@routes/RootStackParam';

export const SCREEN_DIMENSIONS: ScaledSize = Dimensions.get('screen');

export const ONBOARDING_SLIDES: SliderProps[] = [
  {
    id: 1,
    image: require('../assets/onboarding-screens/FindingCustomer.gif'),
    title: 'Finding Customers',
    description:
      'Upload photos and create messages by finding the correct lot and customer.',
  },
  {
    id: 2,
    image: require('../assets/onboarding-screens/UploadingPhotos.gif'),
    title: 'Uploading Photos',
    description:
      'Capture photos with the app, review them for accuracy and tap the upload button.',
  },
  {
    id: 3,
    image: require('../assets/onboarding-screens/PhotoHistory.gif'),
    title: 'Photo History',
    description:
      'Use Photo History to check the status of an upload, or resend the photos if needed.',
  },
  {
    id: 4,
    image: require('../assets/onboarding-screens/CreatingMessage.gif'),
    title: 'Creating Messages',
    description:
      'Create messages with the app, review for accuracy and tap the send button.',
  },
  {
    id: 5,
    image: require('../assets/onboarding-screens/MessageHistory.gif'),
    title: 'Message History',
    description:
      'Use Message History to check the status of a message or view the text that was sent.',
  },
];

export const TAB_NAMES = {
  upload: 'Upload',
  create: 'Create',
  history: 'History',
};

// TODO: Delete this data after Lot Data API Integration
export const SAMPLE_LOT_DATA: CompanyData[] = [
  {
    companyCode: '3022',
    name: 'Riverside County',
    projects: [
      {
        projectCode: '090',
        name: 'Cheyenne at Olivebrook',
        tracts: [
          {
            lots: [
              {
                address: '30784 Vera Cruz Circle,Winchester,92596',
                lot: '  8',
                userName: 'MysticJester',
              },
              {
                address: '30833 Vera Cruz Circle,Winchester,92596',
                lot: ' 17',
                userName: 'SilverShadow',
              },
              {
                address: '30762 Southend Ln,Winchester,92596',
                lot: ' 24',
                userName: 'NeonNinja',
              },
              {
                address: '30798 Southend Ln,Winchester,92596',
                lot: ' 27',
                userName: 'CrimsonWanderer',
              },
              {
                address: '30799 Southend Ln,Winchester,92596',
                lot: ' 38',
                userName: 'MysticMercury',
              },
              {
                address: '29244 Boreham Ln,Winchester,92596',
                lot: ' 43',
                userName: 'Philip Osinski',
              },
              {
                address: '29316 Boreham Ln,Winchester,92596',
                lot: ' 45',
                userName: 'Werner Hermiston',
              },
              {
                address: '29099 Boreham Ln,Winchester,92596',
                lot: ' 54',
                userName: 'Ahmed Purdy',
              },
              {
                address: '29075 Boreham Ln,Winchester,92596',
                lot: ' 55',
                userName: 'Kerry Altenwerth',
              },
              {
                address: '29074 Hondo Ln,Winchester,92596',
                lot: ' 56',
                userName: 'Jan Altenwerth',
              },
            ],
            tract: '36417 - 2',
          },
          {
            lots: [
              {
                address: '30503 Vera Cruz Cir,Winchester,92596',
                lot: ' 12',
                userName: 'Jerome Satterfield',
              },
              {
                address: '30515 Vera Cruz Cir,Winchester,92596',
                lot: ' 13',
                userName: 'Frankie Doyle',
              },
              {
                address: '30527 Vera Cruz Cir,Winchester,92596',
                lot: ' 14',
                userName: 'Kevin Nolan',
              },
              {
                address: '30539 Vera Cruz Cir,Winchester,92596',
                lot: ' 15',
                userName: 'Orlando Von',
              },
              {
                address: '30551 Vera Cruz Cir,Winchester,92596',
                lot: ' 16',
                userName: 'Alfonso McCullough',
              },
              {
                address: '30557 Vera Cruz Cir,Winchester,92596',
                lot: ' 17',
                userName: 'Hubert Strosin',
              },
              {
                address: '29261 Shane Ct,Winchester,92596',
                lot: ' 18',
                userName: 'Neal Brakus',
              },
            ],
            tract: '36417 - 3',
          },
        ],
      },
      {
        projectCode: '094',
        name: 'Lilac at Countryview',
        tracts: [
          {
            lots: [
              {
                address: '30240 CEDAR CREEK WAY,Homeland,92548',
                lot: '  1',
                userName: 'Roosevelt Rosenbaum',
              },
              {
                address: '30348 CEDAR CREEK WAY,Homeland,92548',
                lot: '  6',
                userName: 'Lamar Fadel',
              },
              {
                address: '30396 CEDAR CREEK WAY,Homeland,92548',
                lot: '  8',
                userName: 'Leo Kulas',
              },
              {
                address: '25268 CALAMITY LN,Homeland,92548',
                lot: ' 25',
                userName: 'Clint Hagenes',
              },
              {
                address: '25292 CALAMITY LN,Homeland,92548',
                lot: ' 26',
                userName: 'Francisco Koch',
              },
              {
                address: '30713 CEDAR CREEK WAY,Homeland,92548',
                lot: ' 61',
                userName: 'Brent McClure',
              },
              {
                address: '30349 CEDAR CREEK WAY,Homeland,92548',
                lot: ' 77',
                userName: 'Rodolfo Moore',
              },
              {
                address: '30254 THE VINTAGE DR,Homeland,92548',
                lot: ' 82',
                userName: 'Kerry Pacocha',
              },
            ],
            tract: '37533 - F',
          },
        ],
      },
      {
        projectCode: '095',
        name: 'Poppy at Countryview',
        tracts: [
          {
            lots: [
              {
                address: '25517 BUCKEYE MEADOW LN,Homeland,92548',
                lot: ' 72',
                userName: 'Jermaine Reynolds',
              },
              {
                address: '25469 BUCKEYE MEADOW LN,Homeland,92548',
                lot: ' 74',
                userName: 'Javier Kovacek',
              },
              {
                address: '25445 BUCKEYE MEADOW LN,Homeland,92548',
                lot: ' 75',
                userName: 'Luther Lockman',
              },
              {
                address: '25421 BUCKEYE MEADOW LN,Homeland,92548',
                lot: ' 76',
                userName: 'Eric Koch',
              },
              {
                address: '25397 BUCKEYE MEADOW LN,Homeland,92548',
                lot: ' 77',
                userName: 'Andres Graham',
              },
              {
                address: '30014 THE VINTAGE DR,Homeland,92548',
                lot: ' 78',
                userName: 'Dale Schimmel',
              },
              {
                address: '30026 THE VINTAGE DR,Homeland,92548',
                lot: ' 79',
                userName: 'Erick Glover',
              },
              {
                address: '30038 THE VINTAGE DR,Homeland,92548',
                lot: ' 80',
                userName: 'Casey Dickens',
              },
              {
                address: '30050 THE VINTAGE DR,Homeland,92548',
                lot: ' 81',
                userName: 'Alan Osinski',
              },
              {
                address: '30062 THE VINTAGE DR,Homeland,92548',
                lot: ' 82',
                userName: 'Andy Armstrong',
              },
              {
                address: '30074 THE VINTAGE DR,Homeland,92548',
                lot: ' 83',
                userName: 'Stuart Labadie',
              },
              {
                address: '30086 THE VINTAGE DR,Homeland,92548',
                lot: ' 84',
                userName: 'Clark Auer',
              },
              {
                address: '30098 THE VINTAGE DR,Homeland,92548',
                lot: ' 85',
                userName: 'Pedro Berge',
              },
              {
                address: '30110 THE VINTAGE DR,Homeland,92548',
                lot: ' 86',
                userName: 'Devin Sawayn',
              },
              {
                address: '30122 THE VINTAGE DR,Homeland,92548',
                lot: ' 87',
                userName: 'James Wiza',
              },
            ],
            tract: '37533 - 1',
          },
          {
            lots: [
              {
                address: '25498 CELLARS RANCH RD,Homeland,92548',
                lot: ' 12',
                userName: 'Leonard Ebert',
              },
              {
                address: '25522 CELLARS RANCH RD,Homeland,92548',
                lot: ' 13',
                userName: 'Jason Ebert',
              },
              {
                address: '25546 CELLARS RANCH RD,Homeland,92548',
                lot: ' 14',
                userName: 'Gregory McCullough',
              },
              {
                address: '25545 CELLARS RANCH RD,Homeland,92548',
                lot: ' 31',
                userName: 'Orville Runolfsdottir',
              },
              {
                address: '25521 CELLARS RANCH RD,Homeland,92548',
                lot: ' 32',
                userName: 'Ian Veum',
              },
              {
                address: '25497 CELLARS RANCH RD,Homeland,92548',
                lot: ' 33',
                userName: 'Kenneth Deckow',
              },
              {
                address: '25473 CELLARS RANCH RD,Homeland,92548',
                lot: ' 34',
                userName: 'Dean Schiller',
              },
              {
                address: '30124 ARROWLEAF WAY,Homeland,92548',
                lot: ' 35',
                userName: 'Dean Langosh',
              },
              {
                address: '30136 ARROWLEAF WAY,Homeland,92548',
                lot: ' 36',
                userName: 'Wayne Lang',
              },
              {
                address: '30148 ARROWLEAF WAY,Homeland,92548',
                lot: ' 37',
                userName: 'Nicholas Kemmer',
              },
              {
                address: '30160 ARROWLEAF WAY,Homeland,92548',
                lot: ' 38',
                userName: 'Darrin Leuschke',
              },
              {
                address: '30172 ARROWLEAF WAY,Homeland,92548',
                lot: ' 39',
                userName: 'Jose Witting',
              },
              {
                address: '30184 ARROWLEAF WAY,Homeland,92548',
                lot: ' 40',
                userName: 'Taylor Pacocha',
              },
            ],
            tract: '37533 - 2',
          },
        ],
      },
      {
        projectCode: '096',
        name: 'Sage at Countryview',
        tracts: [
          {
            lots: [
              {
                address: '30311 TIN MINE ST,Homeland,92548',
                lot: '  3',
                userName: 'Pete Lang',
              },
              {
                address: '30335 TIN MINE ST,Homeland,92548',
                lot: '  4',
                userName: 'Enrique Brekke',
              },
              {
                address: '30359 TIN MINE ST,Homeland,92548',
                lot: '  5',
                userName: 'Edward Heathcote',
              },
              {
                address: '30383 TIN MINE ST,Homeland,92548',
                lot: '  6',
                userName: 'Elias Dooley',
              },
              {
                address: '30407 TIN MINE ST,Homeland,92548',
                lot: '  7',
                userName: 'James Kuphal',
              },
              {
                address: '30431 TIN MINE ST,Homeland,92548',
                lot: '  8',
                userName: 'Bryant Moen',
              },
              {
                address: '30455 TIN MINE ST,Homeland,92548',
                lot: '  9',
                userName: 'Scott Rohan',
              },
              {
                address: '30479 TIN MINE ST,Homeland,92548',
                lot: ' 10',
                userName: 'Vernon Lesch',
              },
              {
                address: '30503 TIN MINE ST,Homeland,92548',
                lot: ' 11',
                userName: 'Tom Jakubowski',
              },
              {
                address: '30527 TIN MINE ST,Homeland,92548',
                lot: ' 12',
                userName: 'Dean Will',
              },
              {
                address: '30551 TIN MINE ST,Homeland,92548',
                lot: ' 13',
                userName: 'Rudolph Funk',
              },
              {
                address: '30575 TIN MINE ST,Homeland,92548',
                lot: ' 14',
                userName: 'Gilbert Stokes',
              },
              {
                address: '30599 TIN MINE ST,Homeland,92548',
                lot: ' 15',
                userName: 'Lee Schowalter',
              },
              {
                address: '30623 TIN MINE ST,Homeland,92548',
                lot: ' 16',
                userName: 'Dewey Padberg',
              },
              {
                address: '30647 TIN MINE ST,Homeland,92548',
                lot: ' 17',
                userName: 'Shane Kuhic',
              },
              {
                address: '30671 TIN MINE ST,Homeland,92548',
                lot: ' 18',
                userName: 'Garrett Kirlin',
              },
              {
                address: '30695 TIN MINE ST,Homeland,92548',
                lot: ' 19',
                userName: 'Lucas Kilback',
              },
            ],
            tract: '29322 - F',
          },
        ],
      },
      {
        projectCode: '097',
        name: 'Creekside',
        tracts: [
          {
            lots: [
              {
                address: '13739 Emery Street,Victorville,92392',
                lot: '  8',
                userName: 'Maurice Mohr',
              },
              {
                address: '13727 Emery Street,Victorville,92392',
                lot: '  9',
                userName: 'Kenny Tillman',
              },
              {
                address: '13715 Emery Street,Victorville,92392',
                lot: ' 10',
                userName: 'Earl Powlowski',
              },
              {
                address: '13703 Emery Street,Victorville,92392',
                lot: ' 11',
                userName: 'Leland Schroeder',
              },
              {
                address: '13691 Emery Street,Victorville,92392',
                lot: ' 12',
                userName: 'Ross Cummerata',
              },
              {
                address: '13679 Emery Street,Victorville,92392',
                lot: ' 13',
                userName: 'Joe Sauer',
              },
              {
                address: '13742 Emery Street,Victorville,92392',
                lot: ' 19',
                userName: 'Herman Stroman',
              },
              {
                address: '13743 Eva Court,Victorville,92392',
                lot: ' 20',
                userName: 'Ronnie Bauch',
              },
              {
                address: '13431 Eva Court,Victorville,92392',
                lot: ' 21',
                userName: 'Dallas Ernser',
              },
              {
                address: '13719 Eva Court,Victorville,92392',
                lot: ' 22',
                userName: 'Cory Metz',
              },
              {
                address: '13707 Eva Court,Victorville,92392',
                lot: ' 23',
                userName: 'Barry Marvin',
              },
              {
                address: '13695 Eva Court,Victorville,92392',
                lot: ' 24',
                userName: 'Doyle Gulgowski',
              },
              {
                address: '13771 Asprey Street,Victorville,92392',
                lot: ' 42',
                userName: 'Courtney Metz',
              },
              {
                address: '13759 Asprey Street,Victorville,92392',
                lot: ' 43',
                userName: 'Hubert Trantow',
              },
              {
                address: '13747 Asprey Street,Victorville,92392',
                lot: ' 44',
                userName: 'Joshua Cruickshank',
              },
              {
                address: '13735 Asprey Street,Victorville,92392',
                lot: ' 45',
                userName: 'Nicolas Dach',
              },
            ],
            tract: '20274',
          },
        ],
      },
      {
        projectCode: '098',
        name: 'Crimson Hills',
        tracts: [
          {
            lots: [
              {
                address: '41521 Red Car Drive,Lake Elsinore,92532',
                lot: ' 12',
                userName: 'Jon Murray',
              },
              {
                address: '41523 Red Car Drive,Lake Elsinore,92532',
                lot: ' 13',
                userName: 'Luther Howe',
              },
              {
                address: '41525 Red Car Drive,Lake Elsinore,92532',
                lot: ' 14',
                userName: 'Jerry Wunsch',
              },
              {
                address: '41527 Red Car Drive,Lake Elsinore,92532',
                lot: ' 15',
                userName: 'Jim Marks',
              },
              {
                address: '41529 Red Car Drive,Lake Elsinore,92532',
                lot: ' 16',
                userName: 'Rickey Mitchell',
              },
              {
                address: '41531 Red Car Drive,Lake Elsinore,92532',
                lot: ' 17',
                userName: 'Julius Buckridge',
              },
              {
                address: '41532 Red Car Drive,Lake Elsinore,92532',
                lot: ' 18',
                userName: 'Ron Roberts',
              },
              {
                address: '41530 Red Car Drive,Lake Elsinore,92532',
                lot: ' 19',
                userName: 'Alberto Russel',
              },
              {
                address: '41528 Red Car Drive,Lake Elsinore,92532',
                lot: ' 20',
                userName: 'Levi Miller',
              },
              {
                address: '41526 Red Car Drive,Lake Elsinore,92532',
                lot: ' 21',
                userName: 'Jeffrey Dickens',
              },
              {
                address: '41414 Stork Court,Lake Elsinore,92532',
                lot: ' 58',
                userName: 'Mack Predovic',
              },
              {
                address: '41413 Stork Court,Lake Elsinore,92532',
                lot: ' 62',
                userName: 'Zachary Bartell',
              },
              {
                address: '41411 Stork Court,Lake Elsinore,92532',
                lot: ' 63',
                userName: 'Kyle Prosacco',
              },
              {
                address: '41407 Stork Court,Lake Elsinore,92532',
                lot: ' 65',
                userName: 'Clay Gulgowski',
              },
              {
                address: '41403 Stork Court,Lake Elsinore,92532',
                lot: ' 67',
                userName: 'Randy Gulgowski',
              },
            ],
            tract: '30698  ',
          },
        ],
      },
      {
        projectCode: '099',
        name: 'Driftstone at The Preserve',
        tracts: [
          {
            lots: [
              {
                address: '16597 Trailblazer Ave,Chino,91708',
                lot: ' 67',
                userName: 'Andres White',
              },
            ],
            tract: '20166  ',
          },
        ],
      },
      {
        projectCode: '104',
        name: 'Torrey at Sunset Ranch',
        tracts: [
          {
            lots: [
              {
                address: '4140 AVILA PRIVADO,Ontario,91761',
                lot: ' 13',
                userName: 'Sheldon Abbott',
              },
              {
                address: '4150 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 14',
                userName: 'Andre Hermiston',
              },
              {
                address: '4160 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 15',
                userName: 'Justin Thompson',
              },
              {
                address: '4161 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 17',
                userName: 'Kenneth Schmeler',
              },
              {
                address: '4149 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 19',
                userName: 'Dexter Parisian',
              },
              {
                address: '4143 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 20',
                userName: 'Tyrone Considine',
              },
              {
                address: '4137 E. AVILA PRIVADO,Ontario,91761',
                lot: ' 21',
                userName: 'Jean Turner',
              },
              {
                address: '4131 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 22',
                userName: 'Emilio Welch',
              },
              {
                address: '4125 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 23',
                userName: 'Mike Lemke',
              },
              {
                address: '4119 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 24',
                userName: 'Doug Nitzsche',
              },
              {
                address: '4113 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 25',
                userName: 'Terrence Thompson',
              },
              {
                address: '4107 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 26',
                userName: 'Darren Stark',
              },
              {
                address: '4101 E. LA JOLLA STREET,Ontario,91761',
                lot: ' 27',
                userName: 'Otis Rohan',
              },
              {
                address: '4313 S. MALIBU AVENUE,Ontario,91761',
                lot: ' 28',
                userName: 'Kirk Macejkovic',
              },
            ],
            tract: '20160  ',
          },
        ],
      },
      {
        projectCode: '105',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '16188 ALAMO COURT,Chino,91708',
                lot: '125',
                userName: 'Alonzo Fadel',
              },
              {
                address: '16190 ALAMO COURT,Chino,91708',
                lot: '126',
                userName: 'Joseph Tillman',
              },
              {
                address: '16192 ALAMO COURT,Chino,91708',
                lot: '127',
                userName: 'Roland Mayert',
              },
              {
                address: '16202 ALAMO COURT,Chino,91708',
                lot: '128',
                userName: 'Salvatore Bruen',
              },
              {
                address: '8561 MIDWAY LANE,Chino,91708',
                lot: '129',
                userName: 'Shane Schulist',
              },
              {
                address: '8559 MIDWAY LANE,Chino,91708',
                lot: '130',
                userName: 'Nelson Gerlach',
              },
              {
                address: '8557 MIDWAY LANE,Chino,91708',
                lot: '131',
                userName: 'Austin Lubowitz',
              },
              {
                address: '8555 MIDWAY LANE,Chino,91708',
                lot: '132',
                userName: 'Andre Walter',
              },
              {
                address: '8537 MIDWAY LANE,Chino,91708',
                lot: '133',
                userName: 'Perry Stiedemann',
              },
              {
                address: '8539 MIDWAY LANE,Chino,91708',
                lot: '134',
                userName: 'Vernon Lang',
              },
              {
                address: '8541 MIDWAY LANE,Chino,91708',
                lot: '135',
                userName: 'Dennis Abbott',
              },
              {
                address: '8543 MIDWAY LANE,Chino,91708',
                lot: '136',
                userName: 'Christopher Mann',
              },
              {
                address: '8545 MIDWAY LANE,Chino,91708',
                lot: '137',
                userName: 'Jermaine Rippin',
              },
              {
                address: '8547 MIDWAY LANE,Chino,91708',
                lot: '138',
                userName: 'Abraham Metz',
              },
              {
                address: '8549 MIDWAY LANE,Chino,91708',
                lot: '139',
                userName: 'Earl Rolfson',
              },
              {
                address: '8535 MIDWAY LANE,Chino,91708',
                lot: '140',
                userName: 'Gabriel Connelly',
              },
              {
                address: '8533 MIDWAY LANE,Chino,91708',
                lot: '141',
                userName: 'Loren Zieme',
              },
              {
                address: '8531 MIDWAY LANE,Chino,91708',
                lot: '142',
                userName: 'Maurice Hegmann',
              },
              {
                address: '8529 MIDWAY LANE,Chino,91708',
                lot: '143',
                userName: 'Levi Pacocha',
              },
            ],
            tract: '20369  ',
          },
        ],
      },
      {
        projectCode: '110',
        name: 'Lily at the Seasons',
        tracts: [
          {
            lots: [
              {
                address: '7349 Beryl Lane,Chino,91708',
                lot: 'Frankie Fadel',
                userName: 'Frankie Fadel',
              },
              {
                address: '16067 Aventurine Lane,Chino,91708',
                lot: 'Abel Sanford',
                userName: 'Abel Sanford',
              },
              {
                address: '7338 Beryl Lane,Chino,91708',
                lot: 'Sammy Kuvalis',
                userName: 'Sammy Kuvalis',
              },
            ],
            tract: '20247  ',
          },
        ],
      },
    ],
  },
  {
    companyCode: '3013',
    name: 'Raleigh / Durham / Chapel Hill',
    projects: [
      {
        projectCode: '029 - Belterra',
        name: 'Belterra',
        tracts: [
          {
            lots: [
              {
                address: '3343 Belterra Point Drive,New Hill,27562',
                lot: ' 22',
                userName: 'Guy Boehm',
              },
              {
                address: '3312 Olancha Court,New Hill,27562',
                lot: '004',
                userName: 'Marcus Hoeger',
              },
              {
                address: '3321 Olancha Court,New Hill,27562',
                lot: '005',
                userName: 'Angel Gutmann',
              },
              {
                address: '3317 Olancha Court,New Hill,27562',
                lot: '006',
                userName: 'Clay Huels',
              },
              {
                address: '3406 Writt Court,New Hill,27562',
                lot: '134',
                userName: 'Paul Wuckert',
              },
            ],
            tract: '1',
          },
        ],
      },
      {
        projectCode: '030',
        name: 'Birchwood Grove',
        tracts: [
          {
            lots: [
              {
                address: '139 Saint Clair Drive,Fuquay Varina,27526',
                lot: ' 77',
                userName: 'Juan Vandervort',
              },
              {
                address: '424 John Stark Drive,Fuquay Varina,27526',
                lot: '021',
                userName: 'Andy Greenfelder',
              },
              {
                address: '454 John Stark Drive,Fuquay Varina,27526',
                lot: '022',
                userName: 'Jason Marquardt',
              },
              {
                address: '445 Thomas Gage Drive,Fuquay Varina,27526',
                lot: '027',
                userName: 'Clifford Blick',
              },
              {
                address: '415 Thomas Gage Drive,Fuquay Varina,27526',
                lot: '028',
                userName: 'Horace Koss',
              },
              {
                address: '424 Thomas Gage Drive,Fuquay Varina,27526',
                lot: '029',
                userName: 'Kelvin Kulas',
              },
              {
                address: '194 Robert Howe Drive,Fuquay Varina,27526',
                lot: '053',
                userName: 'Winston Nolan',
              },
              {
                address: '214 Robert Howe Drive,Fuquay Varina,27526',
                lot: '054',
                userName: 'Bruce Hickle',
              },
              {
                address: '234 Robert Howe Drive,Fuquay Varina,27526',
                lot: '055',
                userName: 'Willard Watsica',
              },
              {
                address: '256 Robert Howe Drive,Fuquay Varina,27526',
                lot: '056',
                userName: 'Bradley Kilback',
              },
              {
                address: '296 Robert Howe Drive,Fuquay Varina,27526',
                lot: '058',
                userName: 'Ruben Mosciski',
              },
              {
                address: 'TBD Robert Howe Drive,Fuquay Varina,27526',
                lot: '059',
                userName: 'Cameron Casper',
              },
              {
                address: '338 Robert Howe Drive,Fuquay Varina,27526',
                lot: '060',
                userName: 'Enrique Gorczany',
              },
              {
                address: '358 Robert Howe Drive,Fuquay Varina,27526',
                lot: '061',
                userName: 'Max Franecki',
              },
              {
                address: '483 Saint Clair Drive,Fuquay Varina,27526',
                lot: '062',
                userName: 'Moses Schneider',
              },
              {
                address: 'TBD Saint Clair Drive,Fuquay Varina,27526',
                lot: '065',
                userName: 'Alex Jast',
              },
              {
                address: '218 Tarleton Drive,Fuquay Varina,27526',
                lot: '132',
                userName: 'Jan OHara',
              },
              {
                address: '53 Putnam Street,Fuquay Varina,27526',
                lot: '133',
                userName: 'Gabriel Lubowitz',
              },
              {
                address: '35 Putnam Street,Fuquay Varina,27526',
                lot: '134',
                userName: 'Nick Emard',
              },
              {
                address: '15 Putnam Street,Fuquay Varina,27526',
                lot: '135',
                userName: 'Ian Kreiger',
              },
              {
                address: '451 John Stark Drive,Fuquay Varina,27526',
                lot: '136',
                userName: 'Christopher Tillman',
              },
              {
                address: '467 John Stark Drive,Fuquay Varina,27526',
                lot: '137',
                userName: 'Pablo Greenholt',
              },
            ],
            tract: '159',
          },
        ],
      },
      {
        projectCode: '033',
        name: 'Freeman Farms',
        tracts: [
          {
            lots: [
              {
                address: '715 Purple Aster St.,Youngsville,27596',
                lot: ' 30',
                userName: ' Wayne Abernathy',
              },
              {
                address: '695 Purple Aster St.,Youngsville,27596',
                lot: ' 32',
                userName: 'Rick Bauch',
              },
              {
                address: '360 Purple Aster Street,Youngsville,27596',
                lot: '089',
                userName: 'Jody Rohan',
              },
              {
                address: '350 Purple Aster Street,Youngsville,27596',
                lot: '090',
                userName: 'Lucas Goodwin',
              },
              {
                address: '340 Purple Aster Street,Youngsville,27596',
                lot: '091',
                userName: 'Julio Doyle',
              },
              {
                address: '140 Shooting Star Trail,Youngsville,27596',
                lot: '121',
                userName: 'Elias Farrell',
              },
              {
                address: '130 Shooting Star Trail,Youngsville,27596',
                lot: '122',
                userName: 'Franklin Streich',
              },
              {
                address: '120 Shooting Star Trail,Youngsville,27596',
                lot: '123',
                userName: 'Jaime Cartwright',
              },
              {
                address: '110 Shooting Star Trail,Youngsville,27596',
                lot: '124',
                userName: 'Gary Donnelly',
              },
              {
                address: '45 Shooting Star Trail,Youngsville,27596',
                lot: '138',
                userName: 'Danny Schamberger',
              },
              {
                address: '55 Shooting Star Trail,Youngsville,27596',
                lot: '139',
                userName: 'Alan Hartmann',
              },
              {
                address: '65 Shooting Star Trail,Youngsville,27596',
                lot: '140',
                userName: 'Merle Morissette',
              },
              {
                address: '75 Shooting Star Trail,Youngsville,27596',
                lot: '141',
                userName: 'Hugo Wyman',
              },
              {
                address: '85 Shooting Star Trail,Youngsville,27596',
                lot: '142',
                userName: 'Dale Haley',
              },
              {
                address: '95 Shooting Star Trail,Youngsville,27596',
                lot: '143',
                userName: 'Daniel Fay',
              },
              {
                address: '105 Shooting Star Trail,Youngsville,27596',
                lot: '144',
                userName: 'Jermaine Sauer',
              },
              {
                address: '115 Shooting Star Trail,Youngsville,27596',
                lot: '145',
                userName: 'Andrew Swift',
              },
              {
                address: '125 Shooting Star Trail,Youngsville,27596',
                lot: '146',
                userName: 'Elmer Raynor',
              },
              {
                address: '135 Shooting Star Trail,Youngsville,27596',
                lot: '147',
                userName: 'Loren Hilll',
              },
              {
                address: '130 Buttonbush Lane,Youngsville,27596',
                lot: '148',
                userName: 'Willard Hermann',
              },
              {
                address: '120 Buttonbush Lane,Youngsville,27596',
                lot: '149',
                userName: 'Samuel Schmitt',
              },
              {
                address: '110 Buttonbush Lane,Youngsville,27596',
                lot: '150',
                userName: 'Max Steuber',
              },
              {
                address: '105 Buttonbush Lane,Youngsville,27596',
                lot: '170',
                userName: 'Santos Willms',
              },
              {
                address: '115 Buttonbush Lane,Youngsville,27596',
                lot: '171',
                userName: 'Michael DAmore',
              },
              {
                address: '125 Buttonbush Lane,Youngsville,27596',
                lot: '172',
                userName: 'Mathew Thiel',
              },
            ],
            tract: '1      ',
          },
        ],
      },
      {
        projectCode: '036',
        name: 'Liberty Station',
        tracts: [
          {
            lots: [
              {
                address: '585 Hacksaw Trail,Raleigh,27610',
                lot: '  3',
                userName: 'Ron Monahan',
              },
              {
                address: '583 Hacksaw Trail,Raleigh,27610',
                lot: '  4',
                userName: 'Guillermo Collins',
              },
              {
                address: '581 Hacksaw Trail,Raleigh,27610',
                lot: '  5',
                userName: 'Alfredo Larson',
              },
              {
                address: '579 Hacksaw Trail,Raleigh,27610',
                lot: '  6',
                userName: 'Mike Wilkinson',
              },
            ],
            tract: '1',
          },
          {
            lots: [
              {
                address: '311 Hacksaw Trl,Raleigh,27610',
                lot: '095',
                userName: 'Jerome Thiel',
              },
            ],
            tract: '13',
          },
          {
            lots: [
              {
                address: '305 Hacksaw Trl,Raleigh,27610',
                lot: '097',
                userName: 'Ian McLaughlin',
              },
              {
                address: '303 Hacksaw Trl,Raleigh,27610',
                lot: '098',
                userName: 'Luther Blick',
              },
              {
                address: '301 Hacksaw Trl,Raleigh,27610',
                lot: '099',
                userName: 'Randolph Nolan',
              },
            ],
            tract: '14',
          },
          {
            lots: [
              {
                address: '3000 Spline Cir,Raleigh,27610',
                lot: '100',
                userName: 'Brandon Anderson',
              },
              {
                address: '3002 Spline Cir,Raleigh,27610',
                lot: '101',
                userName: 'Van Blick',
              },
              {
                address: '3004 Spline Cir,Raleigh,27610',
                lot: '102',
                userName: 'Caleb Wolff',
              },
            ],
            tract: '15',
          },
          {
            lots: [
              {
                address: '3124 Garner Rd,Raleigh,27610',
                lot: '058',
                userName: 'Carlos Mayer',
              },
              {
                address: '3126 Garner Rd,Raleigh,27610',
                lot: '059',
                userName: 'Pete Ward',
              },
              {
                address: '3128 Garner Rd,Raleigh,27610',
                lot: '060',
                userName: 'Leo Oberbrunner',
              },
            ],
            tract: '36',
          },
          {
            lots: [
              {
                address: '3118 Garner Rd,Raleigh,27610',
                lot: '001',
                userName: 'Laurence Gusikowski',
              },
              {
                address: '3120 Garner Rd,Raleigh,27610',
                lot: '002',
                userName: 'Noel Becker',
              },
            ],
            tract: '37 ',
          },
        ],
      },
      {
        projectCode: '039',
        name: 'Heron Bay',
        tracts: [
          {
            lots: [
              {
                address: '837 Emmer Street,Rolesville,27571',
                lot: '006',
                userName: '',
              },
              {
                address: '833 Emmer Street,Rolesville,27571',
                lot: '007',
                userName: '',
              },
              {
                address: '829 Emmer Street,Rolesville,27571',
                lot: '008',
                userName: '',
              },
              {
                address: '825 Emmer Street,Rolesville,27571',
                lot: '009',
                userName: '',
              },
              {
                address: '821 Emmer Street,Rolesville,27571',
                lot: '010',
                userName: '',
              },
              {
                address: '813 Emmer Street,Rolesville,27571',
                lot: '012',
                userName: '',
              },
              {
                address: '809 Emmer Street,Rolesville,27571',
                lot: '013',
                userName: '',
              },
              {
                address: '805 Emmer Street,Rolesville,27571',
                lot: '014',
                userName: '',
              },
              {
                address: '801 Emmer Street,Rolesville,27571',
                lot: '015',
                userName: '',
              },
              {
                address: '769 Emmer Street,Rolesville,27571',
                lot: '016',
                userName: '',
              },
              {
                address: '765 Emmer Street,Rolesville,27571',
                lot: '017',
                userName: '',
              },
              {
                address: '753 Emmer Street,Rolesville,27571',
                lot: '020',
                userName: '',
              },
              {
                address: '737 Emmer Street,Rolesville,27571',
                lot: '024',
                userName: '',
              },
              {
                address: '733 Emmer Street,Rolesville,27571',
                lot: '025',
                userName: '',
              },
              {
                address: '729 Emmer Street,Rolesville,27571',
                lot: '026',
                userName: '',
              },
              {
                address: '625 Emmer Street,Rolesville,27571',
                lot: '035',
                userName: '',
              },
              {
                address: '204 Windsor Mill Road,Rolesville,27571',
                lot: '046',
                userName: '',
              },
              {
                address: '208 Windsor Mill Road,Rolesville,27571',
                lot: '047',
                userName: '',
              },
              {
                address: '212 Windsor Mill Road,Rolesville,27571',
                lot: '048',
                userName: '',
              },
              {
                address: '216 Windsor Mill Road,Rolesville,27571',
                lot: '049',
                userName: '',
              },
              {
                address: '220 Windsor Mill Road,Rolesville,27571',
                lot: '050',
                userName: '',
              },
              {
                address: '224 Windsor Mill Road,Rolesville,27571',
                lot: '051',
                userName: '',
              },
              {
                address: '248 Windsor Mill Road,Rolesville,27571',
                lot: '057',
                userName: '',
              },
              {
                address: '249 Windsor Mill Road,Rolesville,27571',
                lot: '062',
                userName: '',
              },
              {
                address: '245 Windsor Mill Road,Rolesville,27571',
                lot: '063',
                userName: '',
              },
              {
                address: '241 Windsor Mill Road,Rolesville,27571',
                lot: '064',
                userName: '',
              },
              {
                address: '237 Windsor Mill Road,Rolesville,27571',
                lot: '065',
                userName: '',
              },
              {
                address: '193 Shadowdale Lane,Rolesville,27571',
                lot: '070',
                userName: '',
              },
              {
                address: '177 Shadowdale Lane,Rolesville,27571',
                lot: '074',
                userName: '',
              },
              {
                address: '173 Shadowdale Lane,Rolesville,27571',
                lot: '075',
                userName: '',
              },
              {
                address: '113 Shadowdale Lane,Rolesville,27571',
                lot: '090',
                userName: '',
              },
            ],
            tract: '198',
          },
        ],
      },
      {
        projectCode: '045',
        name: 'Sauls Glen',
        tracts: [
          {
            lots: [
              {
                address: '504 Thorny Branch Drive,Raleigh,27603',
                lot: '014',
                userName: '504 Thorny Branch Drive',
              },
              {
                address: '457 Thorny Branch Drive,Raleigh,27603',
                lot: '029',
                userName: '457 Thorny Branch Drive',
              },
              {
                address: '433 Thorny Branch Drive,Raleigh,27603',
                lot: '032',
                userName: '433 Thorny Branch Drive',
              },
              {
                address: '425 Thorny Branch Drive,Raleigh,27603',
                lot: '033',
                userName: '425 Thorny Branch Drive',
              },
              {
                address: '420 Thorny Branch Drive,Raleigh,27603',
                lot: '046',
                userName: '420 Thorny Branch Drive',
              },
              {
                address: '452 Thorny Branch Drive,Raleigh,27603',
                lot: '052',
                userName: '452 Thorny Branch Drive',
              },
              {
                address: '456 Thorny Branch Drive,Raleigh,27603',
                lot: '053',
                userName: '456 Thorny Branch Drive',
              },
              {
                address: '476 Thorny Branch Drive,Raleigh,27603',
                lot: '058',
                userName: '476 Thorny Branch Drive',
              },
              {
                address: '6125 Oak Passage Drive,Raleigh,27603',
                lot: '076',
                userName: '6125 Oak Passage Drive',
              },
              {
                address: '6121 Oak Passage Drive,Raleigh,27603',
                lot: '077',
                userName: '6121 Oak Passage Drive',
              },
              {
                address: '6117 Oak Passage Drive,Raleigh,27603',
                lot: '078',
                userName: '6117 Oak Passage Drive',
              },
              {
                address: '6113 Oak Passage Drive,Raleigh,27603',
                lot: '079',
                userName: '6113 Oak Passage Drive',
              },
            ],
            tract: '1      ',
          },
        ],
      },
      {
        projectCode: '047',
        name: 'Bridgepoint',
        tracts: [
          {
            lots: [
              {
                address: '100 Golden Gate Lane,Chapel Hill,27516',
                lot: '010',
                userName: '100 Golden Gate Lane',
              },
              {
                address: '104 Golden Gate Lane,Chapel Hill,27516',
                lot: '012',
                userName: '104 Golden Gate Lane',
              },
              {
                address: '106 Golden Gate Lane,Chapel Hill,27516',
                lot: '013',
                userName: '106 Golden Gate Lane',
              },
            ],
            tract: '1      ',
          },
          {
            lots: [
              {
                address: '102 Golden Gate Lane,Chapel Hill,27516',
                lot: '011',
                userName: '102 Golden Gate Lane',
              },
            ],
            tract: 'ADULOW ',
          },
        ],
      },
      {
        projectCode: '048',
        name: 'Olive Grove',
        tracts: [
          {
            lots: [
              {
                address: '1100 Bellpit Road,Durham,27703',
                lot: '005',
                userName: '1100 Bellpit Road',
              },
              {
                address: '809 Doggard Lane,Durham,27703',
                lot: '009',
                userName: '809 Doggard Lane',
              },
              {
                address: '805 Doggard Lane,Durham,27703',
                lot: '010',
                userName: '805 Doggard Lane',
              },
              {
                address: '801 Doggard Lane,Durham,27703',
                lot: '011',
                userName: '801 Doggard Lane',
              },
              {
                address: '2213 Rockface Way,Durham,27703',
                lot: '013',
                userName: '2213 Rockface Way',
              },
              {
                address: '2209 Rockface Way,Durham,27703',
                lot: '014',
                userName: '2209 Rockface Way',
              },
              {
                address: '2205 Rockface Way,Durham,27703',
                lot: '015',
                userName: '2205 Rockface Way',
              },
              {
                address: '2201 Rockface Way,Durham,27703',
                lot: '016',
                userName: '2201 Rockface Way',
              },
              {
                address: '2126 Rockface Way,Durham,27703',
                lot: '051',
                userName: '2126 Rockface Way',
              },
              {
                address: '2130 Rockface Way,Durham,27703',
                lot: '052',
                userName: '2130 Rockface Way',
              },
              {
                address: '2134 Rockface Way,Durham,27703',
                lot: '053',
                userName: '2134 Rockface Way',
              },
              {
                address: '2138 Rockface Way,Durham,27703',
                lot: '054',
                userName: '2138 Rockface Way',
              },
              {
                address: '2142 Rockface Way,Durham,27703',
                lot: '055',
                userName: '2142 Rockface Way',
              },
              {
                address: '2146 Rockface Way,Durham,27703',
                lot: '056',
                userName: '2146 Rockface Way',
              },
              {
                address: '1504 Underbrush Drive,Durham,27703',
                lot: '058',
                userName: '1504 Underbrush Drive',
              },
              {
                address: '1512 Underbrush Drive,Durham,27703',
                lot: '060',
                userName: '1512 Underbrush Drive',
              },
              {
                address: '1536 Underbrush Drive,Durham,27703',
                lot: '066',
                userName: '1536 Underbrush Drive',
              },
              {
                address: '1540 Underbrush Drive,Durham,27703',
                lot: '067',
                userName: '1540 Underbrush Drive',
              },
              {
                address: '1544 Underbrush Drive,Durham,27703',
                lot: '068',
                userName: '1544 Underbrush Drive',
              },
              {
                address: '1548 Underbrush Drive,Durham,27703',
                lot: '069',
                userName: '1548 Underbrush Drive',
              },
              {
                address: '1552 Underbrush Drive,Durham,27703',
                lot: '070',
                userName: '1552 Underbrush Drive',
              },
              {
                address: '1600 Underbrush Drive,Durham,27703',
                lot: '071',
                userName: '1600 Underbrush Drive',
              },
              {
                address: '1604 Underbrush Drive,Durham,27703',
                lot: '072',
                userName: '1604 Underbrush Drive',
              },
              {
                address: '1608 Underbrush Drive,Durham,27703',
                lot: '073',
                userName: '1608 Underbrush Drive',
              },
              {
                address: '1533 Underbrush Drive,Durham,27703',
                lot: '079',
                userName: '1533 Underbrush Drive',
              },
              {
                address: '1529 Underbrush Drive,Durham,27703',
                lot: '080',
                userName: '1529 Underbrush Drive',
              },
              {
                address: '1525 Underbrush Drive,Durham,27703',
                lot: '081',
                userName: '1525 Underbrush Drive',
              },
              {
                address: '1521 Underbrush Drive,Durham,27703',
                lot: '082',
                userName: '1521 Underbrush Drive',
              },
              {
                address: '1517 Underbrush Drive,Durham,27703',
                lot: '083',
                userName: '1517 Underbrush Drive',
              },
              {
                address: '1513 Underbrush Drive,Durham,27703',
                lot: '084',
                userName: '1513 Underbrush Drive',
              },
              {
                address: '1509 Underbrush Drive,Durham,27703',
                lot: '085',
                userName: '1509 Underbrush Drive',
              },
              {
                address: '1505 Underbrush Drive,Durham,27703',
                lot: '086',
                userName: '1505 Underbrush Drive',
              },
              {
                address: '1501 Underbrush Drive,Durham,27703',
                lot: '087',
                userName: '1501 Underbrush Drive',
              },
              {
                address: '1421 Underbrush Drive,Durham,27703',
                lot: '088',
                userName: '1421 Underbrush Drive',
              },
              {
                address: '1417 Underbrush Drive,Durham,27703',
                lot: '089',
                userName: '1417 Underbrush Drive',
              },
              {
                address: '1409 Underbrush Drive,Durham,27703',
                lot: '091',
                userName: '1409 Underbrush Drive',
              },
              {
                address: '1357 Underbrush Drive,Durham,27703',
                lot: '094',
                userName: '1357 Underbrush Drive',
              },
            ],
            tract: '1      ',
          },
        ],
      },
      {
        projectCode: '049',
        name: 'Olive Grove TH',
        tracts: [
          {
            lots: [
              {
                address: '2115 Rockface Way,Durham,27703',
                lot: '017',
                userName: '2115 Rockface Way',
              },
              {
                address: '2113 Rockface Way,Durham,27703',
                lot: '018',
                userName: '2113 Rockface Way',
              },
              {
                address: '2111 Rockface Way,Durham,27703',
                lot: '019',
                userName: '2111 Rockface Way',
              },
              {
                address: '2109 Rockface Way,Durham,27703',
                lot: '020',
                userName: '2109 Rockface Way',
              },
              {
                address: '2107 Rockface Way,Durham,27703',
                lot: '021',
                userName: '2107 Rockface Way',
              },
              {
                address: '2105 Rockface Way,Durham,27703',
                lot: '022',
                userName: '2105 Rockface Way',
              },
              {
                address: '2103 Rockface Way,Durham,27703',
                lot: '023',
                userName: '2103 Rockface Way',
              },
              {
                address: '2101 Rockface Way,Durham,27703',
                lot: '024',
                userName: '2101 Rockface Way',
              },
              {
                address: '2025 Rockface Way,Durham,27703',
                lot: '025',
                userName: '2025 Rockface Way',
              },
              {
                address: '2023 Rockface Way,Durham,27703',
                lot: '026',
                userName: '2023 Rockface Way',
              },
              {
                address: '2021 Rockface Way,Durham,27703',
                lot: '027',
                userName: '2021 Rockface Way',
              },
              {
                address: '2019 Rockface Way,Durham,27703',
                lot: '028',
                userName: '2019 Rockface Way',
              },
              {
                address: '2015 Rockface Way,Durham,27703',
                lot: '029',
                userName: '2015 Rockface Way',
              },
              {
                address: '2013 Rockface Way,Durham,27703',
                lot: '030',
                userName: '2013 Rockface Way',
              },
              {
                address: '2011 Rockface Way,Durham,27703',
                lot: '031',
                userName: '2011 Rockface Way',
              },
              {
                address: '2009 Rockface Way,Durham,27703',
                lot: '032',
                userName: '2009 Rockface Way',
              },
              {
                address: '2007 Rockface Way,Durham,27703',
                lot: '033',
                userName: '2007 Rockface Way',
              },
              {
                address: '2005 Rockface Way,Durham,27703',
                lot: '034',
                userName: '2005 Rockface Way',
              },
              {
                address: '2102 Rockface Way,Durham,27703',
                lot: '039',
                userName: '2102 Rockface Way',
              },
              {
                address: '2104 Rockface Way,Durham,27703',
                lot: '040',
                userName: '2104 Rockface Way',
              },
              {
                address: '2106 Rockface Way,Durham,27703',
                lot: '041',
                userName: '2106 Rockface Way',
              },
              {
                address: '2108 Rockface Way,Durham,27703',
                lot: '042',
                userName: '2108 Rockface Way',
              },
              {
                address: '2110 Rockface Way,Durham,27703',
                lot: '043',
                userName: '2110 Rockface Way',
              },
              {
                address: '2112 Rockface Way,Durham,27703',
                lot: '044',
                userName: '2112 Rockface Way',
              },
              {
                address: '2114 Rockface Way,Durham,27703',
                lot: '045',
                userName: '2114 Rockface Way',
              },
              {
                address: '2116 Rockface Way,Durham,27703',
                lot: '046',
                userName: '2116 Rockface Way',
              },
              {
                address: '2118 Rockface Way,Durham,27703',
                lot: '047',
                userName: '2118 Rockface Way',
              },
              {
                address: '2120 Rockface Way,Durham,27703',
                lot: '048',
                userName: '2120 Rockface Way',
              },
              {
                address: '2122 Rockface Way,Durham,27703',
                lot: '049',
                userName: '2122 Rockface Way',
              },
              {
                address: '2124 Rockface Way,Durham,27703',
                lot: '050',
                userName: '2124 Rockface Way',
              },
            ],
            tract: '1      ',
          },
        ],
      },
      {
        projectCode: '057',
        name: 'Willow Landing',
        tracts: [
          {
            lots: [
              {
                address: '1404 Willow Landing Way,Willow Spring,27592',
                lot: '001',
                userName: '1404 Willow Landing Way',
              },
              {
                address: '1408 Willow Landing Way,Willow Spring,27592',
                lot: '002',
                userName: '1408 Willow Landing Way',
              },
              {
                address: '1412 Willow Landing Way,Willow Spring,27592',
                lot: '003',
                userName: '1412 Willow Landing Way',
              },
              {
                address: '1420 Willow Landing Way,Willow Spring,27592',
                lot: '004',
                userName: '1420 Willow Landing Way',
              },
              {
                address: '7509 Frasier Fir Place,Willow Spring,27592',
                lot: '008',
                userName: '7509 Frasier Fir Place',
              },
              {
                address: '7600 Redwood Ridge Way,Willow Spring,27592',
                lot: '014',
                userName: '7600 Redwood Ridge Way',
              },
              {
                address: '7632 Redwood Ridge Way,Willow Spring,27592',
                lot: '021',
                userName: '7632 Redwood Ridge Way',
              },
              {
                address: '7636 Redwood Ridge Way,Willow Spring,27592',
                lot: '022',
                userName: '7636 Redwood Ridge Way',
              },
              {
                address: '7640 Redwood Ridge Way,Willow Spring,27592',
                lot: '023',
                userName: '7640 Redwood Ridge Way',
              },
              {
                address: '7644 Redwood Ridge Way,Willow Spring,27592',
                lot: '024',
                userName: '7644 Redwood Ridge Way',
              },
              {
                address: '7648 Redwood Ridge Way,Willow Spring,27592',
                lot: '025',
                userName: '7648 Redwood Ridge Way',
              },
              {
                address: '7652 Redwood Ridge Way,Willow Spring,27592',
                lot: '026',
                userName: '7652 Redwood Ridge Way',
              },
              {
                address: '1620 Willow Landing Way,Willow Spring,27592',
                lot: '027',
                userName: '1620 Willow Landing Way',
              },
              {
                address: '1616 Willow Landing Way,Willow Spring,27592',
                lot: '028',
                userName: '1616 Willow Landing Way',
              },
              {
                address: '1612 Willow Landing Way,Willow Spring,27592',
                lot: '029',
                userName: '1612 Willow Landing Way',
              },
              {
                address: '1604 Willow Landing Way,Willow Spring,27592',
                lot: '031',
                userName: '1604 Willow Landing Way',
              },
              {
                address: '1600 Willow Landing Way,Willow Spring,27592',
                lot: '032',
                userName: '1600 Willow Landing Way',
              },
              {
                address: '7633 Redwood Ridge Way,Willow Spring,27592',
                lot: '037',
                userName: '7633 Redwood Ridge Way',
              },
              {
                address: '7637 Redwood Ridge Way,Willow Spring,27592',
                lot: '038',
                userName: '7637 Redwood Ridge Way',
              },
              {
                address: '7717 Chestnut Creek Court,Willow Spring,27592',
                lot: '039',
                userName: '7717 Chestnut Creek Court',
              },
              {
                address: '7713 Chestnut Creek Court,Willow Spring,27592',
                lot: '040',
                userName: '7713 Chestnut Creek Court',
              },
              {
                address: '7705 Chestnut Creek Court,Willow Spring,27592',
                lot: '041',
                userName: '7705 Chestnut Creek Court',
              },
            ],
            tract: '115',
          },
        ],
      },
    ],
  },
  {
    companyCode: '3016',
    name: 'Dallas / Fort Worth',
    projects: [
      {
        projectCode: '017',
        name: 'Creeks of Legacy',
        tracts: [
          {
            lots: [
              {
                address: '3409 Keechi Creek Dr (SC),Celina,75078',
                lot: ' 14',
                userName: 'Percy Volkman',
              },
            ],
            tract: 'F - 1',
          },
        ],
      },
      {
        projectCode: '020',
        name: 'Princeton Estates',
        tracts: [
          {
            lots: [
              {
                address: '621 Windsor Dr,Princeton,75407',
                lot: '001',
                userName: 'Travis Ferry',
              },
              {
                address: '635 Windsor Dr,Princeton,75407',
                lot: '002',
                userName: 'Steven Murphy',
              },
              {
                address: '663 Windsor Dr,Princeton,75407',
                lot: '004',
                userName: 'Sylvester Swaniawski',
              },
              {
                address: '677 Windsor Dr,Princeton,75407',
                lot: '005',
                userName: 'Dominic Ledner',
              },
              {
                address: '691 Windsor Dr,Princeton,75407',
                lot: '006',
                userName: 'Rodolfo Kunze',
              },
              {
                address: '692 Jupe Way,Princeton,75407',
                lot: '025',
                userName: 'Joseph Klocko',
              },
              {
                address: '678 Jupe Way,Princeton,75407',
                lot: '026',
                userName: '678 Jupe Way',
              },
              {
                address: '664 Jupe Way,Princeton,75407',
                lot: '027',
                userName: 'Roland Hauck',
              },
              {
                address: '650 Jupe Way,Princeton,75407',
                lot: '028',
                userName: 'Juan Price',
              },
              {
                address: '636 Jupe Way,Princeton,75407',
                lot: '029',
                userName: 'Ismael Ankunding',
              },
              {
                address: '622 Jupe Way,Princeton,75407',
                lot: '030',
                userName: 'Garrett Rosenbaum',
              },
            ],
            tract: '1 0 -',
          },
          {
            lots: [
              {
                address: '1444 Kingsbridge Dr,Princeton,75407',
                lot: '008',
                userName: 'Hector Funk',
              },
              {
                address: '1426 Kingsbridge Dr,Princeton,75407',
                lot: '009',
                userName: 'Lester Doyle',
              },
              {
                address: '1408 Kingsbridge Dr,Princeton,75407',
                lot: '010',
                userName: 'Loren Lebsack',
              },
              {
                address: '1382 Kingsbridge Dr,Princeton,75407',
                lot: '011',
                userName: 'Dale Wisozk',
              },
              {
                address: '1364 Kingsbridge Dr,Princeton,75407',
                lot: '012',
                userName: 'Terrell Walter',
              },
              {
                address: '1346 Kingsbridge Dr,Princeton,75407',
                lot: '013',
                userName: 'Andy Murazik',
              },
              {
                address: '358 Boroughbridge Dr,Princeton,75407',
                lot: '016',
                userName: 'Derrick Effertz',
              },
              {
                address: '370 Boroughbridge Dr,Princeton,75407',
                lot: '017',
                userName: 'Ernest Champlin',
              },
              {
                address: '382 Boroughbridge Dr,Princeton,75407',
                lot: '018',
                userName: 'Marcus Kling',
              },
              {
                address: '394 Boroughbridge Dr,Princeton,75407',
                lot: '019',
                userName: 'Barry Nicolas',
              },
              {
                address: '406 Boroughbridge Dr,Princeton,75407',
                lot: '020',
                userName: 'Russell Yundt',
              },
              {
                address: '418 Boroughbridge Dr,Princeton,75407',
                lot: '021',
                userName: 'Pete Wiegand',
              },
              {
                address: '440 Boroughbridge Dr,Princeton,75407',
                lot: '022',
                userName: 'Neal Roberts',
              },
              {
                address: '452 Boroughbridge Dr,Princeton,75407',
                lot: '023',
                userName: 'Jose Turner',
              },
              {
                address: '464 Boroughbridge Dr,Princeton,75407',
                lot: '024',
                userName: 'Jim Zemlak',
              },
              {
                address: '476 Boroughbridge Dr,Princeton,75407',
                lot: '025',
                userName: 'Santiago Runte',
              },
              {
                address: '488 Boroughbridge Dr,Princeton,75407',
                lot: '026',
                userName: 'Al Metz',
              },
            ],
            tract: '1 - 1',
          },
          {
            lots: [
              {
                address: '1443 Kingsbridge Dr,Princeton,75407',
                lot: '004',
                userName: 'Matthew Bauch',
              },
              {
                address: '1425 Kingsbridge,Princeton,75407',
                lot: '005',
                userName: 'Thomas Sipes',
              },
              {
                address: '1407 Kingsbridge Dr,Princeton,75407',
                lot: '006',
                userName: 'Jay Wolff',
              },
              {
                address: '1381 Kingsbridge Dr,Princeton,75407',
                lot: '007',
                userName: 'Gregory Batz',
              },
              {
                address: '365 Boroughbridge Dr,Princeton,75407',
                lot: '008',
                userName: 'Todd Mosciski',
              },
              {
                address: '383 Boroughbridge Dr,Princeton,75407',
                lot: '009',
                userName: 'Wilson Wilderman',
              },
              {
                address: '395 Boroughbridge Dr,Princeton,75407',
                lot: '010',
                userName: 'Ricardo Kautzer',
              },
              {
                address: '409 Boroughbridge Dr,Princeton,75407',
                lot: '011',
                userName: 'Mitchell Bechtelar',
              },
              {
                address: '421 Boroughbridge Dr,Princeton,75407',
                lot: '012',
                userName: 'Lewis Greenfelder',
              },
              {
                address: '424 Princewood Dr,Princeton,75407',
                lot: '013',
                userName: 'Mitchell Bechtelar',
              },
              {
                address: '412 Princewood Dr,Princeton,75407',
                lot: '014',
                userName: 'Lewis Greenfelder',
              },
              {
                address: '400 Princewood Dr,Princeton,75407',
                lot: '015',
                userName: 'Alex Herzog',
              },
            ],
            tract: '2 - 1',
          },
          {
            lots: [
              {
                address: '353 Princewood Dr,Princeton,75407',
                lot: '003',
                userName: 'Salvatore Quigley',
              },
              {
                address: '365 Princewood Dr,Princeton,75407',
                lot: '004',
                userName: 'Hector Moen',
              },
              {
                address: '377 Princewood Dr,Princeton,75407',
                lot: '005',
                userName: 'Francis Hand',
              },
              {
                address: '389 Princewood Dr,Princeton,75407',
                lot: '006',
                userName: 'Marty Kovacek',
              },
              {
                address: '401 Princewood Dr,Princeton,75407',
                lot: '007',
                userName: 'Gerard Vandervort',
              },
              {
                address: '413 Princewood Dr,Princeton,75407',
                lot: '008',
                userName: 'Jerry Satterfield',
              },
              {
                address: '425 Princewood Dr,Princeton,75407',
                lot: '009',
                userName: 'Ray Witting',
              },
              {
                address: '437 Princewood Dr,Princeton,75407',
                lot: '010',
                userName: 'Joey Schamberger',
              },
              {
                address: '449 Princewood Dr,Princeton,75407',
                lot: '011',
                userName: 'Gerardo Hagenes',
              },
              {
                address: '461 Princewood Dr,Princeton,75407',
                lot: '012',
                userName: 'Edward Macejkovic',
              },
              {
                address: '473 Princewood Dr,Princeton,75407',
                lot: '013',
                userName: 'Jesus Pacocha',
              },
              {
                address: '485 Princewood Dr,Princeton,75407',
                lot: '014',
                userName: 'Erik Haley',
              },
            ],
            tract: '3 - 1',
          },
          {
            lots: [
              {
                address: '621 Jupe Way,Princeton,75407',
                lot: '059',
                userName: 'Angelo Von',
              },
              {
                address: '635 Jupe Way,Princeton,75407',
                lot: '060',
                userName: 'Neil Cassin',
              },
              {
                address: '649 Jupe Way,Princeton,75407',
                lot: '061',
                userName: 'Salvador Robel',
              },
              {
                address: '663 Jupe Way,Princeton,75407',
                lot: '062',
                userName: 'Jason Skiles',
              },
            ],
            tract: '4 - 1',
          },
          {
            lots: [
              {
                address: '692 Windsor Dr,Princeton,75407',
                lot: '025',
                userName: 'Arnold Mante',
              },
              {
                address: '678 Windsor Dr,Princeton,75407',
                lot: '026',
                userName: 'Kirk Heaney',
              },
              {
                address: '664 Windsor Dr,Princeton,75407',
                lot: '027',
                userName: 'Alfredo Ruecker',
              },
              {
                address: '650 Windsor Dr,Princeton,75407',
                lot: '028',
                userName: 'Charles Ryan',
              },
              {
                address: '636 Windsor Dr,Princeton,75407',
                lot: '029',
                userName: 'Bradley Auer',
              },
              {
                address: '622 Windsor Dr,Princeton,75407',
                lot: '030',
                userName: 'Salvatore Miller',
              },
            ],
            tract: '9 - 1',
          },
        ],
      },
      {
        projectCode: '034',
        name: 'Winn Ridge III',
        tracts: [
          {
            lots: [
              {
                address: '952 Adair Dr,Aubrey,76227',
                lot: ' 38',
                userName: 'Bradley Auer',
              },
              {
                address: '968 Adair Dr,Aubrey,76227',
                lot: ' 42',
                userName: 'Salvatore Miller',
              },
              {
                address: '984 Adair Dr,Aubrey,76227',
                lot: ' 46',
                userName: 'Leo Dibbert',
              },
              {
                address: '2300 Wheeler Ave,Aubrey,76227',
                lot: ' 48',
                userName: 'Wallace Hirthe',
              },
              {
                address: '2304 Wheeler Ave,Aubrey,76227',
                lot: ' 49',
                userName: 'Bryan DuBuque',
              },
              {
                address: '2308 Wheeler Ave,Aubrey,76227',
                lot: ' 50',
                userName: 'Matt Metz',
              },
            ],
            tract: 'AAA - 3B1',
          },
          {
            lots: [
              {
                address: '912 Burnett Dr,Aubrey,76227',
                lot: '  4',
                userName: 'Jimmy Kihn',
              },
              {
                address: '920 Burnett Dr,Aubrey,76227',
                lot: '  6',
                userName: 'Darnell McCullough',
              },
              {
                address: '924 Burnett Dr,Aubrey,76227',
                lot: '  7',
                userName: 'Johnathan Shanahan',
              },
              {
                address: '932 Burnett Dr,Aubrey,76227',
                lot: '  9',
                userName: 'Earnest Wisozk',
              },
              {
                address: '940 Burnett Dr,Aubrey,76227',
                lot: ' 11',
                userName: 'Ernesto Prohaska',
              },
              {
                address: '944 Burnett Dr,Aubrey,76227',
                lot: ' 12',
                userName: 'Don Roob',
              },
              {
                address: '948 Burnett Dr,Aubrey,76227',
                lot: ' 13',
                userName: 'Sylvester Stiedemann',
              },
              {
                address: '956 Burnett Dr,Aubrey,76227',
                lot: ' 15',
                userName: 'Jorge Bayer',
              },
              {
                address: '960 Burnett Dr,Aubrey,76227',
                lot: ' 16',
                userName: 'Dwight Schmitt',
              },
              {
                address: '964 Burnett Dr,Aubrey,76227',
                lot: ' 17',
                userName: 'Abraham Bechtelar',
              },
              {
                address: '976 Burnett Dr,Aubrey,76227',
                lot: ' 20',
                userName: 'Julio Zulauf',
              },
              {
                address: '980 Burnett Dr,Aubrey,76227',
                lot: ' 21',
                userName: 'Jake Ebert',
              },
              {
                address: '977 Brock Dr,Aubrey,76227',
                lot: ' 25',
                userName: 'Justin Nitzsche',
              },
              {
                address: '965 Brock Dr,Aubrey,76227',
                lot: ' 28',
                userName: 'Jackie McGlynn',
              },
              {
                address: '953 Brock Dr,Aubrey,76227',
                lot: ' 31',
                userName: 'Roman Heidenreich',
              },
              {
                address: '945 Brock Dr,Aubrey,76227',
                lot: ' 33',
                userName: 'Spencer Heidenreich',
              },
              {
                address: '933 Brock Dr,Aubrey,76227',
                lot: ' 36',
                userName: 'Cody Ullrich',
              },
              {
                address: '929 Brock Dr,Aubrey,76227',
                lot: ' 37',
                userName: 'Percy Walker',
              },
            ],
            tract: 'BBB - 3B1',
          },
          {
            lots: [
              {
                address: '928 Brock Dr,Aubrey,76227',
                lot: "  8'Hara",
                userName: "Fred O'Hara",
              },
              {
                address: '944 Brock Dr,Aubrey,76227',
                lot: ' 12',
                userName: 'Sean Bosco',
              },
              {
                address: '968 Brock Dr,Aubrey,76227',
                lot: ' 18',
                userName: 'Frankie Grimes',
              },
              {
                address: '961 Adair Dr,Aubrey,76227',
                lot: ' 29',
                userName: 'Mack Kuhlman',
              },
              {
                address: '949 Adair Dr,Aubrey,76227',
                lot: ' 32',
                userName: 'Isaac Hilll',
              },
            ],
            tract: 'DDD - 3B1',
          },
          {
            lots: [
              {
                address: '1845 Aslynn Cr,Aubrey,76227',
                lot: ' 11',
                userName: 'Winston Cummings',
              },
            ],
            tract: 'E - 3B1  ',
          },
          {
            lots: [
              {
                address: '1842 Aslynn Cr,Aubrey,76227',
                lot: ' 43',
                userName: 'Marcus Denesik',
              },
              {
                address: '1846 Aslynn Cr,Aubrey,76227',
                lot: ' 44',
                userName: 'Aaron Koch',
              },
              {
                address: '3012 Aslynn Cr - cnr,Aubrey,76227',
                lot: ' 52',
                userName: 'Ron Lockman',
              },
            ],
            tract: 'F - 3B1  ',
          },
          {
            lots: [
              {
                address: '2525 Warren Ln - cnr,Aubrey,76227',
                lot: '  8',
                userName: 'Guy Kiehn',
              },
              {
                address: '2521 Warren Ln,Aubrey,76227',
                lot: '  9',
                userName: 'Irving Langosh',
              },
              {
                address: '2517 Warren Ln,Aubrey,76227',
                lot: ' 10',
                userName: "Derek D'Amore",
              },
              {
                address: '2513 Warren Ln,Aubrey,76227',
                lot: ' 11',
                userName: 'Evan Hilll',
              },
              {
                address: '2509 Warren Ln,Aubrey,76227',
                lot: ' 12',
                userName: 'Dallas Wilkinson',
              },
              {
                address: '2505 Warren Ln,Aubrey,76227',
                lot: ' 13',
                userName: 'Leon Spinka',
              },
              {
                address: '2501 Warren Ln - cnr,Aubrey,76227',
                lot: ' 14',
                userName: 'Homer Kassulke',
              },
            ],
            tract: 'VV - 3B1 ',
          },
          {
            lots: [
              {
                address: '2500 Warren Ln - cnr,Aubrey,76227',
                lot: '  1',
                userName: 'Ian Huels',
              },
              {
                address: '2504 Warren Ln,Aubrey,76227',
                lot: '  2',
                userName: 'Bennie McDermott',
              },
              {
                address: '2508 Warren Ln,Aubrey,76227',
                lot: '  3',
                userName: 'Abel Adams',
              },
              {
                address: '2512 Warren Ln,Aubrey,76227',
                lot: '  4',
                userName: 'Benjamin Bechtelar',
              },
              {
                address: '2516 Warren Ln,Aubrey,76227',
                lot: '  5',
                userName: 'Peter Spencer',
              },
              {
                address: '2524 Warren Ln ',
                lot: '  7',
                userName: 'Claude White',
              },
              {
                address: '2521 Wayne Ave,Aubrey,76227',
                lot: '  9',
                userName: 'Raul Jenkins',
              },
              {
                address: '2513 Wayne Ave,Aubrey,76227',
                lot: ' 11',
                userName: 'Felipe Olson',
              },
              {
                address: '2509 Wayne Ave,Aubrey,76227',
                lot: ' 12',
                userName: 'Felipe Olson',
              },
              {
                address: '2505 Wayne Ave,Aubrey,76227',
                lot: ' 13',
                userName: 'Homer Keeling',
              },
              {
                address: '2501 Wayne Ave - cnr,Aubrey,76227',
                lot: ' 14',
                userName: 'Jimmy Parker',
              },
            ],
            tract: 'WW - 3B1 ',
          },
          {
            lots: [
              {
                address: '2500 Wayne Ave - cnr,Aubrey,76227',
                lot: '  1',
                userName: 'Neil Fahey',
              },
              {
                address: '2504 Wayne Ave,Aubrey,76227',
                lot: '  2',
                userName: 'Clifton Marvin',
              },
              {
                address: '2508 Wayne Ave,Aubrey,76227',
                lot: '  3',
                userName: 'Trevor Cartwright',
              },
              {
                address: '2512 Wayne Ave,Aubrey,76227',
                lot: '  4',
                userName: 'Timothy Bruen',
              },
              {
                address: '2516 Wayne Ave,Aubrey,76227',
                lot: '  5',
                userName: 'Darnell Nitzsche',
              },
              {
                address: '2520 Wayne Ave,Aubrey,76227',
                lot: '  6',
                userName: 'Lewis Block',
              },
              {
                address: '2524 Wayne Ave - cnr,Aubrey,76227',
                lot: '  7',
                userName: 'John Rodriguez',
              },
              {
                address: '2521 Wesley Ave,Aubrey,76227',
                lot: '  9',
                userName: 'Dexter Gutmann',
              },
              {
                address: '2517 Wesley Ave,Aubrey,76227',
                lot: ' 10',
                userName: 'Glen Parker',
              },
              {
                address: '2513 Wesley Ave,Aubrey,76227',
                lot: ' 11',
                userName: 'Wilson Lebsack',
              },
              {
                address: '2509 Wesley Ave,Aubrey,76227',
                lot: ' 12',
                userName: 'Jeremiah Cremin',
              },
              {
                address: '2505 Wesley Ave,Aubrey,76227',
                lot: " 13'Connell",
                userName: "Jack O'Connell",
              },
              {
                address: '2501 Wesley Ave - cnr,Aubrey,76227',
                lot: ' 14',
                userName: ' Ken Champlin',
              },
            ],
            tract: 'XX - 3B1 ',
          },
          {
            lots: [
              {
                address: '2500 Wesley Ave - cnr,Aubrey,76227',
                lot: '  1',
                userName: 'Stephen Kuhn',
              },
              {
                address: '2504 Wesley Ave,Aubrey,76227',
                lot: '  2',
                userName: 'Abraham Kerluke',
              },
              {
                address: '2508 Wesley Ave,Aubrey,76227',
                lot: '  3',
                userName: 'Geoffrey Greenfelder',
              },
              {
                address: '2512 Wesley Ave,Aubrey,76227',
                lot: '  4',
                userName: 'Jack Cremin',
              },
              {
                address: '2516 Wesley Ave,Aubrey,76227',
                lot: '  5',
                userName: 'Nick Grant',
              },
              {
                address: '2520 Wesley Ave,Aubrey,76227',
                lot: '  6',
                userName: 'Tracy Paucek',
              },
              {
                address: '2524 Wesley Ave - cnr,Aubrey,76227',
                lot: '  7',
                userName: 'Anthony Trantow',
              },
              {
                address: '2525 Wheeler Ave - cnr,Aubrey,76227',
                lot: '  8',
                userName: ' Marion Gottlieb',
              },
              {
                address: '2517 Wheeler Ave,Aubrey,76227',
                lot: ' 10',
                userName: 'Randal Feil',
              },
              {
                address: '2513 Wheeler Ave,Aubrey,76227',
                lot: ' 11',
                userName: 'Alexander Little',
              },
              {
                address: '2509 Wheeler Ave,Aubrey,76227',
                lot: ' 12',
                userName: 'Willis Fahey',
              },
              {
                address: '2505 Wheeler Ave,Aubrey,76227',
                lot: ' 13',
                userName: 'Santos Koepp',
              },
              {
                address: '2501 Wheeler Ave - cnr,Aubrey,76227',
                lot: ' 14',
                userName: 'Herman Braun',
              },
            ],
            tract: 'YY - 3B1 ',
          },
          {
            lots: [
              {
                address: '2524 Wheeler Ave - cnr,Aubrey,76227',
                lot: '  1',
                userName: 'Rafael Doyle',
              },
              {
                address: '2516 Wheeler Ave,Aubrey,76227',
                lot: '  3',
                userName: 'Jorge Konopelski',
              },
              {
                address: '2508 Wheeler Ave,Aubrey,76227',
                lot: '  5',
                userName: 'Stewart Jast',
              },
              {
                address: '2504 Wheeler Ave,Aubrey,76227',
                lot: '  6',
                userName: 'Michael Hahn',
              },
              {
                address: '2416 Wheeler Ave,Aubrey,76227',
                lot: '  8',
                userName: 'John Quitzon',
              },
            ],
            tract: 'ZZ - 3B1 ',
          },
        ],
      },
      {
        projectCode: '035',
        name: 'The Preserve Estates',
        tracts: [
          {
            lots: [
              {
                address: '513 Turner Lane,Justin,76247',
                lot: '  3',
                userName: 'Hubert Kirlin',
              },
              {
                address: '515 Turner Lane,Justin,76247',
                lot: '  4',
                userName: 'Merle Heidenreich',
              },
              {
                address: '517 Turner Lane,Justin,76247',
                lot: '  5',
                userName: 'Philip Smith',
              },
              {
                address: '408 Eaton Drive,Justin,76247',
                lot: '  6',
                userName: 'Clarence Legros',
              },
              {
                address: '406 Eaton Drive,Justin,76247',
                lot: '  7',
                userName: 'Eddie Herzog',
              },
            ],
            tract: '1 - 0',
          },
          {
            lots: [
              {
                address: '205 Peckham Drive,Justin,76247',
                lot: ' 29-Santiago Fritsch',
                userName: 'Santiago Fritsch',
              },
              {
                address: '210 Colvin Lane,Justin,76247',
                lot: ' 36-Julius Lang',
                userName: 'Julius Lang',
              },
              {
                address: '212 Colvin Lane,Justin,76247',
                lot: ' 37-Myron Schoen',
                userName: '',
              },
              {
                address: '214 Colvin Lane,Justin,76247',
                lot: ' 38-Myron Schoen',
                userName: 'Myron Schoen',
              },
              {
                address: '222 Colvin Lane,Justin,76247',
                lot: ' 42-Jerome Gerlach',
                userName: 'Jerome Gerlach',
              },
              {
                address: '224 Colvin Lane,Justin,76247',
                lot: ' 43-Alfredo Stracke',
                userName: 'Alfredo Stracke',
              },
            ],
            tract: '7 - -',
          },
          {
            lots: [
              {
                address: '307 Laurel Drive,Justin,76247',
                lot: '  4',
                userName: 'Alfredo Muller',
              },
              {
                address: '309 Laurel Drive,Justin,76247',
                lot: '  5',
                userName: 'Clarence Lind',
              },
            ],
            tract: '8 - -',
          },
          {
            lots: [
              {
                address: '401 Eaton Drive,Justin,76247',
                lot: '  1',
                userName: 'Jeffery Gulgowski',
              },
              {
                address: '403 Eaton Drive,Justin,76247',
                lot: '  2',
                userName: 'Winston Harris',
              },
              {
                address: '405 Eaton Drive,Justin,76247',
                lot: '  3',
                userName: 'Nicolas Jakubowski',
              },
              {
                address: '304 Laurel Drive,Justin,76247',
                lot: '  8',
                userName: 'Clifford Watsica',
              },
              {
                address: '302 Laurel Drive,Justin,76247',
                lot: '  9',
                userName: 'Cary Robel',
              },
              {
                address: '300 Laurel Drive,Justin,76247',
                lot: ' 10',
                userName: 'Clarence Graham',
              },
            ],
            tract: '9 - -',
          },
        ],
      },
      {
        projectCode: '036',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '210 Grace Lane,Justin,76247',
                lot: ' 17',
                userName: 'Wilbur Gibson',
              },
              {
                address: '212 Grace Lane,Justin,76247',
                lot: ' 18',
                userName: 'Shane Stoltenberg',
              },
              {
                address: '214 Grace Lane,Justin,76247',
                lot: ' 19',
                userName: 'Joey Wiza',
              },
              {
                address: '1200 Lancaster Drive,Justin,76247',
                lot: ' 23',
                userName: 'Rolando Gislason',
              },
              {
                address: '1202 Lancaster Drive,Justin,76247',
                lot: ' 24',
                userName: 'Ross Howell',
              },
              {
                address: '1204 Lancaster Drive,Justin,76247',
                lot: ' 25',
                userName: 'Warren Rogahn',
              },
            ],
            tract: '1 - -',
          },
          {
            lots: [
              {
                address: '506 Claremont Drive,Justin,76247',
                lot: ' 12',
                userName: 'William Pfeffer',
              },
              {
                address: '508 Claremont Drive,Justin,76247',
                lot: ' 13',
                userName: 'Jan Renner',
              },
              {
                address: '510 Claremont Drive,Justin,76247',
                lot: ' 14',
                userName: 'Kim Doyle',
              },
              {
                address: '518 Claremont Drive,Justin,76247',
                lot: ' 18',
                userName: 'Lance Steuber',
              },
              {
                address: '520 Claremont Drive,Justin,76247',
                lot: ' 19',
                userName: 'Marco Barrows',
              },
            ],
            tract: '1 - 1',
          },
          {
            lots: [
              {
                address: '906 Wilson Drive,Justin,76247',
                lot: '  4',
                userName: 'Geoffrey Goodwin',
              },
              {
                address: '908 Wilson Drive,Justin,76247',
                lot: '  5',
                userName: 'Leslie Hoeger',
              },
              {
                address: '910 Wilson Drive,Justin,76247',
                lot: '  6',
                userName: 'Darryl Jacobson',
              },
              {
                address: '521 Claremont Drive,Justin,76247',
                lot: '  9',
                userName: 'Tim Pouros',
              },
              {
                address: '519 Claremont Drive,Justin,76247',
                lot: ' 10',
                userName: 'Jonathon Wisozk',
              },
              {
                address: '517 Claremont Drive,Justin,76247',
                lot: ' 11',
                userName: 'Peter Goodwin',
              },
              {
                address: '507 Claremont Drive,Justin,76247',
                lot: ' 16',
                userName: 'Bradford Wehner',
              },
              {
                address: '505 Claremont Drive,Justin,76247',
                lot: ' 17',
                userName: 'Maurice Schamberger',
              },
              {
                address: '503 Claremont Drive,Justin,76247',
                lot: ' 18',
                userName: 'Sean Daniel',
              },
              {
                address: '501 Claremont Drive,Justin,76247',
                lot: ' 19',
                userName: 'Thomas Heathcote',
              },
            ],
            tract: '12 - 1   ',
          },
          {
            lots: [
              {
                address: '1205 Lancaster Drive,Justin,76247',
                lot: '  3',
                userName: 'Francisco Larkin',
              },
              {
                address: '1207 Lancaster Drive,Justin,76247',
                lot: '  4',
                userName: 'Lonnie Lang',
              },
              {
                address: '1209 Lancaster Drive,Justin,76247',
                lot: '  5',
                userName: 'Eugene Wiza',
              },
              {
                address: '1114 Linwood Drive,Justin,76247',
                lot: ' 16',
                userName: 'Kelly Russel',
              },
              {
                address: '1112 Linwood Drive,Justin,76247',
                lot: ' 17',
                userName: 'Henry Klocko',
              },
              {
                address: '1110 Linwood Drive,Justin,76247',
                lot: ' 18',
                userName: '',
              },
            ],
            tract: '2 - 1    ',
          },
        ],
      },
      {
        projectCode: '039',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '3918 Belleview Place,Forney,75126',
                lot: ' 14',
                userName: 'Courtney Littel',
              },
              {
                address: '3922 Belleview Place,Forney,75126',
                lot: ' 15',
                userName: 'Jeremiah Hartmann',
              },
              {
                address: '3926 Belleview Place,Forney,75126',
                lot: ' 16',
                userName: 'Ronald Raynor',
              },
              {
                address: '3930 Belleview Place,Forney,75126',
                lot: ' 17',
                userName: 'Brandon Cormier',
              },
            ],
            tract: '2 - 21   ',
          },
          {
            lots: [
              {
                address: '3800 Parsons Street,Forney,75126',
                lot: '  1',
                userName: 'Rudy Torphy',
              },
              {
                address: '3804 Parsons Street,Forney,75126',
                lot: '  2',
                userName: 'Saul Runolfsson',
              },
              {
                address: '3808 Parsons Street,Forney,75126',
                lot: '  3',
                userName: 'Jimmie Turcotte',
              },
              {
                address: '3812 Parsons Street,Forney,75126',
                lot: '  4',
                userName: 'Clifford Denesik',
              },
              {
                address: '3801 Belleview Place,Forney,75126',
                lot: ' 11',
                userName: 'Gerald Roberts',
              },
              {
                address: '3805 Belleview Place,Forney,75126',
                lot: ' 12',
                userName: 'Chad Feest',
              },
              {
                address: '3809 Belleview Place,Forney,75126',
                lot: ' 13',
                userName: 'Cedric Wintheiser',
              },
              {
                address: '3813 Belleview Place,Forney,75126',
                lot: ' 14',
                userName: 'Ron Mosciski',
              },
              {
                address: '3817 Belleview Place,Forney,75126',
                lot: ' 15',
                userName: 'Leonard Towne',
              },
              {
                address: '3821 Belleview Place,Forney,75126',
                lot: ' 16',
                userName: 'Randolph Stroman',
              },
              {
                address: '3825 Belleview Place,Forney,75126',
                lot: ' 17',
                userName: 'Mario Pfannerstill',
              },
              {
                address: '3829 Belleview Place,Forney,75126',
                lot: ' 18',
                userName: 'Pat Jacobson',
              },
              {
                address: '3833 Belleview Place,Forney,75126',
                lot: ' 19',
                userName: 'Arthur Stracke',
              },
            ],
            tract: '3 - 21   ',
          },
          {
            lots: [
              {
                address: '3901 Belleview Place,Forney,75126',
                lot: ' 15',
                userName: 'Ron Toy',
              },
              {
                address: '3905 Belleview Place,Forney,75126',
                lot: ' 16',
                userName: 'Frankie Lockman',
              },
              {
                address: '3909 Belleview Place,Forney,75126',
                lot: ' 17',
                userName: 'Merle Heathcote',
              },
              {
                address: '3913 Belleview Place,Forney,75126',
                lot: ' 18',
                userName: 'Bill Hamill',
              },
              {
                address: '3917 Belleview Place,Forney,75126',
                lot: ' 19',
                userName: 'Alonzo Volkman',
              },
            ],
            tract: '4 - 21   ',
          },
          {
            lots: [
              {
                address: '4022 Bedford Drive,Forney,75126',
                lot: ' 12',
                userName: 'Gary Lueilwitz',
              },
              {
                address: '4026 Bedford Drive,Forney,75126',
                lot: ' 13',
                userName: 'Juan Mills',
              },
            ],
            tract: '5 - 21   ',
          },
        ],
      },
      {
        projectCode: '041',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '1041 Auburn Drive,Justin,76247',
                lot: ' 31',
                userName: 'Joseph Brown',
              },
              {
                address: '1039 Auburn Drive,Justin,76247',
                lot: ' 32',
                userName: 'Caleb Gleason',
              },
              {
                address: '1033 Auburn Drive,Justin,76247',
                lot: ' 35',
                userName: 'Javier Jacobi',
              },
              {
                address: '1031 Auburn Drive,Justin,76247',
                lot: ' 36',
                userName: 'Cody Toy',
              },
            ],
            tract: '17 - 1   ',
          },
          {
            lots: [
              {
                address: '1024 Auburn Drive,Justin,76247',
                lot: ' 26',
                userName: 'Duane Dare',
              },
              {
                address: '1022 Auburn Drive,Justin,76247',
                lot: ' 27',
                userName: 'Henry Shields',
              },
              {
                address: '1014 Auburn Drive,Justin,76247',
                lot: ' 31',
                userName: 'Spencer Kub',
              },
            ],
            tract: '3 - 1    ',
          },
          {
            lots: [
              {
                address: '1015 Auburn Drive,Justin,76247',
                lot: ' 11',
                userName: 'Gordon Dickens',
              },
              {
                address: '1017 Auburn Drive,Justin,76247',
                lot: ' 12',
                userName: 'Ross Block',
              },
              {
                address: '1019 Auburn Drive,Justin,76247',
                lot: ' 13',
                userName: 'Jonathan Tromp',
              },
            ],
            tract: '4 - 1    ',
          },
        ],
      },
    ],
  },
  {
    companyCode: '3005',
    name: 'Denver and Northern Colorado ',
    projects: [
      {
        projectCode: '049',
        name: 'Azure Villas at The Meadows',
        tracts: [
          {
            lots: [
              {
                address: '210 Felicity Loop,Castle Rock,80109',
                lot: ' 17',
                userName: 'Chad Rutherford',
              },
              {
                address: '188 Felicity Loop,Castle Rock,80109',
                lot: ' 18',
                userName: 'Melvin Schultz',
              },
            ],
            tract: '3F.16P8',
          },
        ],
      },
      {
        projectCode: '065',
        name: 'Painted Prairie',
        tracts: [
          {
            lots: [
              {
                address: '21538 E. 61st Drive,Aurora,80019',
                lot: ' 01',
                userName: 'Kerry Powlowski',
              },
              {
                address: '6093 N. Perth Street,Aurora,80019',
                lot: ' 04',
                userName: 'Gustavo Schumm',
              },
              {
                address: '6094 N. Orleans Street,Aurora,80019',
                lot: ' 09',
                userName: 'Lloyd Greenholt',
              },
            ],
            tract: '10 F.1 ',
          },
        ],
      },
      {
        projectCode: '066',
        name: 'Painted Prairie Villas',
        tracts: [
          {
            lots: [
              {
                address: '6360 N MALAYA ST,Aurora,80019',
                lot: '002',
                userName: 'Bryan Brown',
              },
              {
                address: '6372 N MALAYA ST,Aurora,80019',
                lot: '005',
                userName: 'Mitchell Johnson',
              },
              {
                address: '21101 E 63RD DR,Aurora,80019',
                lot: '017',
                userName: 'George Sawayn',
              },
              {
                address: '21103 E 63RD DR,Aurora,80019',
                lot: '018',
                userName: 'Tyrone Raynor',
              },
              {
                address: '21111 E 63RD DR,Aurora,80019',
                lot: '019',
                userName: 'Gordon Tremblay',
              },
              {
                address: '21113 E 63RD DR,Aurora,80019',
                lot: '020',
                userName: 'Dustin Mante',
              },
              {
                address: '21121 E 63RD DR,Aurora,80019',
                lot: '021',
                userName: 'Terry Gleason',
              },
              {
                address: '21123 E 63RD DR,Aurora,80019',
                lot: '022',
                userName: 'Domingo Buckridge',
              },
              {
                address: '21131 E 63RD DR,Aurora,80019',
                lot: '023',
                userName: 'Joseph Upton',
              },
              {
                address: '21133 E 63RD DR,Aurora,80019',
                lot: '024',
                userName: 'Gerard Cronin',
              },
              {
                address: '21141 E 63RD DR,Aurora,80019',
                lot: '025',
                userName: 'Walter Langworth',
              },
              {
                address: '21143 E 63RD DR,Aurora,80019',
                lot: '026',
                userName: 'Irvin Abbott',
              },
              {
                address: '21233 E 63RD DR,Aurora,80019',
                lot: '041',
                userName: 'Everett Roob',
              },
              {
                address: '21253 E 63RD DR,Aurora,80019',
                lot: '043',
                userName: 'Leslie Bergstrom',
              },
              {
                address: '21263 E 63RD DR,Aurora,80019',
                lot: '044',
                userName: 'Rudy Pouros',
              },
              {
                address: '21273 E 63RD DR,Aurora,80019',
                lot: '045',
                userName: 'Van Emmerich',
              },
            ],
            tract: '02 F.3 ',
          },
          {
            lots: [
              {
                address: '6223 N LIVERPOOL ST,Aurora,80019',
                lot: '005',
                userName: 'Douglas Hyatt',
              },
            ],
            tract: '04 F.3 ',
          },
          {
            lots: [
              {
                address: '6123 N. Orleans Street,Aurora,80019',
                lot: ' 39',
                userName: 'Amos Ankunding',
              },
            ],
            tract: '09 F.1 ',
          },
          {
            lots: [
              {
                address: '6290 N NEPAL CT,Aurora,80019',
                lot: '005',
                userName: 'Irving Tromp',
              },
            ],
            tract: '09 F.3 ',
          },
        ],
      },
      {
        projectCode: '067',
        name: 'The Villages at Prairie Center',
        tracts: [
          {
            lots: [
              {
                address: '1992 Griffin Drive,Brighton,80601',
                lot: ' 03',
                userName: 'Tommy Orn',
              },
            ],
            tract: '10     ',
          },
        ],
      },
      {
        projectCode: '071',
        name: 'Sky Ranch Villas',
        tracts: [
          {
            lots: [
              {
                address: '28472  E. 6th Place,Watkins,80137',
                lot: '030',
                userName: 'Clifton Hane',
              },
              {
                address: '658 North Bersshine Court,Watkins,80137',
                lot: '038',
                userName: 'Henry Gerhold',
              },
              {
                address: '639 N. Bently Street,Watkins,80137',
                lot: '042',
                userName: 'Marty Hegmann',
              },
            ],
            tract: '04 F.4 ',
          },
        ],
      },
      {
        projectCode: '073',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '3142 Sweetgrass Pkwy,Dacono,80514',
                lot: ' 01',
                userName: 'Jimmy Volkman',
              },
              {
                address: '3162 Sweetgrass Pkwy,Dacono,80514',
                lot: ' 03',
                userName: 'Donnie Nolan',
              },
            ],
            tract: '01 F.01',
          },
        ],
      },
      {
        projectCode: '074',
        name: 'Sweetgrass',
        tracts: [
          {
            lots: [
              {
                address: '3152 Sweetgrass Pkwy,Dacono,80514',
                lot: ' 02',
                userName: 'Rickey Schneider',
              },
              {
                address: '3172 Sweetgrass Pkwy,Dacono,80514',
                lot: ' 04',
                userName: 'Randolph Davis',
              },
            ],
            tract: '01 F.01',
          },
          {
            lots: [
              {
                address: '3471 Bluestem Street,Dacono,80514',
                lot: ' 02',
                userName: 'Allen Torp',
              },
              {
                address: '3461 Bluestem Street,Dacono,80514',
                lot: ' 03',
                userName: 'Keith Wolf',
              },
              {
                address: '3451 Bluestem Street,Dacono,80514',
                lot: ' 04',
                userName: 'Manuel Gusikowski',
              },
              {
                address: '3441 Bluestem Street,Dacono,80514',
                lot: ' 05',
                userName: 'Alfonso Ritchie',
              },
              {
                address: '3431 Bluestem Street,Dacono,80514',
                lot: ' 06',
                userName: 'Mack Schumm',
              },
              {
                address: '3421 Bluestem Street,Dacono,80514',
                lot: ' 07',
                userName: 'Noel Hackett',
              },
              {
                address: '3411 Bluestem Street,Dacono,80514',
                lot: ' 08',
                userName: 'Timothy Cruickshank',
              },
            ],
            tract: '01F4   ',
          },
          {
            lots: [
              {
                address: '3451 Switchgrass Street,Dacono,80514',
                lot: ' 04',
                userName: 'Marc Bartell',
              },
              {
                address: '3403 Switchgrass Street,Dacono,80514',
                lot: ' 08',
                userName: 'Dustin Bayer',
              },
              {
                address: '3412 Bluestem Street,Dacono,80514',
                lot: ' 09',
                userName: 'Melvin Senger',
              },
              {
                address: '3422 Bluestem Street,Dacono,80514',
                lot: ' 10',
                userName: 'Melvin Senger',
              },
              {
                address: '3432 Bluestem Street,Dacono,80514',
                lot: ' 11',
                userName: 'Rickey Boyer',
              },
              {
                address: '3442 Bluestem Street,Dacono,80514',
                lot: ' 12',
                userName: 'Guadalupe Lubowitz',
              },
              {
                address: '3452 Bluestem Street,Dacono,80514',
                lot: ' 13',
                userName: 'Oliver Hermann',
              },
              {
                address: '3462 Bluestem Street,Dacono,80514',
                lot: ' 14',
                userName: 'Johnnie Kling',
              },
              {
                address: '3472 Bluestem Street,Dacono,80514',
                lot: ' 15',
                userName: 'Noah Heller',
              },
            ],
            tract: '02F4   ',
          },
          {
            lots: [
              {
                address: '3488 Switchgrass Street,Dacono,80514',
                lot: ' 03',
                userName: 'Nick Daugherty',
              },
            ],
            tract: '03F4   ',
          },
          {
            lots: [
              {
                address: '3358 Bluestem Street,Dacono,80514',
                lot: ' 17',
                userName: 'Micheal Bailey',
              },
            ],
            tract: '05F4   ',
          },
          {
            lots: [
              {
                address: '4570 Meadow Drive,Dacono,80514',
                lot: ' 05',
                userName: 'Andrew Willms',
              },
            ],
            tract: '08F4   ',
          },
        ],
      },
      {
        projectCode: '077',
        name: 'Trails at Crowfoot Villas',
        tracts: [
          {
            lots: [
              {
                address: '17510 Alpine Lily Ave.,Parker,80134',
                lot: ' 13',
                userName: 'Gene Bernier',
              },
            ],
            tract: '02 F.16',
          },
        ],
      },
      {
        projectCode: '078',
        name: 'Windsong',
        tracts: [
          {
            lots: [
              {
                address: '5984 East 154TH Place,Thornton,80602',
                lot: '001',
                userName: 'Travis Robel',
              },
              {
                address: '5944 East 154TH Place,Thornton,80602',
                lot: '003',
                userName: 'Jeremiah Walter',
              },
              {
                address: '5924 East 154TH Place,Thornton,80602',
                lot: '004',
                userName: 'Kyle Jenkins',
              },
              {
                address: '5925 East 154TH Place,Thornton,80602',
                lot: '009',
                userName: 'Edward Ernser',
              },
              {
                address: '5945 East 154TH Place,Thornton,80602',
                lot: '010',
                userName: 'Guy Schmidt',
              },
              {
                address: '6025 East 154TH Place,Thornton,80602',
                lot: '014',
                userName: 'Marco Thompson',
              },
              {
                address: '15419 Kearney Street,Thornton,80602',
                lot: '017',
                userName: '15419 Kearney Street',
              },
              {
                address: '15429 Kearney Street,Thornton,80602',
                lot: '018',
                userName: '15429 Kearney Street',
              },
              {
                address: '15449 Kearney Street,Thornton,80602',
                lot: '019',
                userName: '15449 Kearney Street',
              },
              {
                address: '15459 Kearney Street,Thornton,80602',
                lot: '020',
                userName: '15459 Kearney Street',
              },
              {
                address: '15469 Kearney Street,Thornton,80602',
                lot: '021',
                userName: '15469 Kearney Street',
              },
              {
                address: '6227 East 155TH Place,Thornton,80602',
                lot: '030',
                userName: '6227 East 155TH Place',
              },
              {
                address: '6247 East 155TH Place,Thornton,80602',
                lot: '031',
                userName: '6247 East 155TH Place',
              },
              {
                address: '6267 East 155TH Place,Thornton,80602',
                lot: '032',
                userName: '6267 East 155TH Place',
              },
              {
                address: '6287 East 155TH Place,Thornton,80602',
                lot: '033',
                userName: '6287 East 155TH Place',
              },
              {
                address: '6307 East 155TH Place,Thornton,80602',
                lot: '034',
                userName: '6307 East 155TH Place',
              },
              {
                address: '6327 East 155TH Place,Thornton,80602',
                lot: '035',
                userName: '6327 East 155TH Place',
              },
              {
                address: '6347 East 155TH Place,Thornton,80602',
                lot: '036',
                userName: '6347 East 155TH Place',
              },
              {
                address: '6367 East 155TH Place,Thornton,80602',
                lot: '037',
                userName: '6367 East 155TH Place',
              },
              {
                address: '6387 East 155th Place,Thornton,80602',
                lot: '038',
                userName: '6387 East 155th Place',
              },
              {
                address: '15490 Locust Street,Thornton,80602',
                lot: '039',
                userName: '15490 Locust Street',
              },
            ],
            tract: '01 F.1 ',
          },
          {
            lots: [
              {
                address: '15418 Kearney Street,Thornton,80602',
                lot: '001',
                userName: '15418 Kearney Street',
              },
              {
                address: '15428 Kearney Street,Thornton,80602',
                lot: '002',
                userName: '15428 Kearney Street',
              },
              {
                address: '15438 Kearney Street,Thornton,80602',
                lot: '003',
                userName: '15438 Kearney Street',
              },
              {
                address: '15448 Kearney Street,Thornton,80602',
                lot: '004',
                userName: '15448 Kearney Street',
              },
            ],
            tract: '02 F.1 ',
          },
          {
            lots: [
              {
                address: '6004 East 154th Place,Thornton,80602',
                lot: '001',
                userName: '6004 East 154th Place',
              },
              {
                address: '6044 East 154th Place,Thornton,80602',
                lot: '003',
                userName: '6044 East 154th Place',
              },
              {
                address: '6064 East 154th Place,Thornton,80602',
                lot: '004',
                userName: '6064 East 154th Place',
              },
              {
                address: '6084 East 154th Place,Thornton,80602',
                lot: '005',
                userName: '6084 East 154th Place',
              },
              {
                address: '6104 East 154th Place,Thornton,80602',
                lot: '006',
                userName: '6104 East 154th Place',
              },
              {
                address: '6124 East 154th Place,Thornton,80602',
                lot: '007',
                userName: '6124 East 154th Place',
              },
              {
                address: '6144 East 154th Place,Thornton,80602',
                lot: '008',
                userName: '6144 East 154th Place',
              },
              {
                address: '6204 East 154th Place,Thornton,80602',
                lot: '011',
                userName: '6204 East 154th Place',
              },
              {
                address: '6224 East 154th Place,Thornton,80602',
                lot: '012',
                userName: '6224 East 154th Place',
              },
              {
                address: '6244 East 154th Place,Thornton,80602',
                lot: '013',
                userName: '6244 East 154th Place',
              },
              {
                address: '6264 East 154th Place,Thornton,80602',
                lot: '014',
                userName: '6264 East 154th Place',
              },
              {
                address: '6284 East 154th Place,Thornton,80602',
                lot: '015',
                userName: '6284 East 154th Place',
              },
            ],
            tract: '05 F.1 ',
          },
          {
            lots: [
              {
                address: '15375 Ivy Street,Thornton,80602',
                lot: '003',
                userName: '15375 Ivy Street',
              },
              {
                address: '5780 East 153RD Place,Thornton,80602',
                lot: '020',
                userName: '5780 East 153RD Place',
              },
              {
                address: '5800 East 153RD Place,Thornton,80602',
                lot: '021',
                userName: '5800 East 153RD Place',
              },
              {
                address: '5820 East 153RD Place,Thornton,80602',
                lot: '022',
                userName: '5820 East 153RD Place',
              },
              {
                address: '5860 East 153RD Place,Thornton,80602',
                lot: '024',
                userName: '5860 East 153RD Place',
              },
              {
                address: '5920 East 153RD Place,Thornton,80602',
                lot: '027',
                userName: '5920 East 153RD Place',
              },
              {
                address: '15360 Jasmine Street,Thornton,80602',
                lot: '030',
                userName: '15360 Jasmine Street',
              },
              {
                address: '15390 Jasmine Street,Thornton,80602',
                lot: '033',
                userName: '15390 Jasmine Street',
              },
            ],
            tract: '06 F.1 ',
          },
          {
            lots: [
              {
                address: '15373 Jersey Court,Thornton,80602',
                lot: '008',
                userName: '15373 Jersey Court',
              },
              {
                address: '15383 Jersey Court,Thornton,80602',
                lot: '009',
                userName: '15383 Jersey Court',
              },
              {
                address: '15393 Jersey Court,Thornton,80602',
                lot: '010',
                userName: '15393 Jersey Court',
              },
            ],
            tract: '07 F.1 ',
          },
        ],
      },
      {
        projectCode: '081',
        name: 'Terrain Oak Valley',
        tracts: [
          {
            lots: [
              {
                address: '1939 Water Birch Way,Castle Rock,80108',
                lot: '001',
                userName: '1939 Water Birch Way',
              },
              {
                address: '1923 Water Birch Way,Castle Rock,80108',
                lot: '002',
                userName: '1923 Water Birch Way',
              },
              {
                address: '1905 Water Birch Way,Castle Rock,80108',
                lot: '003',
                userName: '1905 Water Birch Way',
              },
              {
                address: '1889 Water Birch Way,Castle Rock,80108',
                lot: '004',
                userName: '1889 Water Birch Way',
              },
              {
                address: '1871 Water Birch Way,Castle Rock,80108',
                lot: '005',
                userName: '1871 Water Birch Way',
              },
              {
                address: '1853 Water Birch Way,Castle Rock,80108',
                lot: '006',
                userName: '1853 Water Birch Way',
              },
              {
                address: '1837 Water Birch Way,Castle Rock,80108',
                lot: '007',
                userName: '1837 Water Birch Way',
              },
              {
                address: '1821 Water Birch Way,Castle Rock,80108',
                lot: '008',
                userName: '1821 Water Birch Way',
              },
              {
                address: '1805 Water Birch Way,Castle Rock,80108',
                lot: '009',
                userName: '1805 Water Birch Way',
              },
              {
                address: '1787 Water Birch Way,Castle Rock,80108',
                lot: '010',
                userName: '1787 Water Birch Way',
              },
              {
                address: '1771 Water Birch Way,Castle Rock,80108',
                lot: '011',
                userName: '1771 Water Birch Way',
              },
              {
                address: '1822 Water Birch Way,Castle Rock,80108',
                lot: '013',
                userName: '1822 Water Birch Way',
              },
              {
                address: '1838 Water Birch Way,Castle Rock,80108',
                lot: '014',
                userName: '1838 Water Birch Way',
              },
              {
                address: '1854 Water Birch Way,Castle Rock,80108',
                lot: '015',
                userName: '1854 Water Birch Way',
              },
              {
                address: '1870 Water Birch Way,Castle Rock,80108',
                lot: '016',
                userName: '1870 Water Birch Way',
              },
              {
                address: '1888 Water Birch Way,Castle Rock,80108',
                lot: '017',
                userName: '1888 Water Birch Way',
              },
              {
                address: '1904 Water Birch Way,Castle Rock,80108',
                lot: '018',
                userName: '1904 Water Birch Way',
              },
              {
                address: '1920 Water Birch Way,Castle Rock,80108',
                lot: '019',
                userName: '1920 Water Birch Way',
              },
              {
                address: '1938 Water Birch Way,Castle Rock,80108',
                lot: '020',
                userName: '1938 Water Birch Way',
              },
            ],
            tract: '01 F.1 ',
          },
          {
            lots: [
              {
                address: '2036 Peachleaf Loop,Castle Rock,80108',
                lot: '005',
                userName: '2036 Peachleaf Loop',
              },
              {
                address: '2058 Peachleaf Loop,Castle Rock,80108',
                lot: '008',
                userName: '2058 Peachleaf Loop',
              },
              {
                address: '2098 Peachleaf Loop,Castle Rock,80108',
                lot: '013',
                userName: '2098 Peachleaf Loop',
              },
              {
                address: '2114 Peachleaf Loop,Castle Rock,80108',
                lot: '014',
                userName: '2114 Peachleaf Loop',
              },
              {
                address: '2182 Peachleaf Loop,Castle Rock,80108',
                lot: '023',
                userName: '2182 Peachleaf Loop',
              },
              {
                address: '2194 Peachleaf Loop,Castle Rock,80108',
                lot: '024',
                userName: '2194 Peachleaf Loop',
              },
              {
                address: '2063 Peachleaf Loop,Castle Rock,80108',
                lot: '028',
                userName: '2063 Peachleaf Loop',
              },
            ],
            tract: '02 F.1 ',
          },
          {
            lots: [
              {
                address: '4425 Soapberry Place,Castle Rock,80108',
                lot: '001',
                userName: '4425 Soapberry Place',
              },
              {
                address: '4439 Soapberry Place,Castle Rock,80108',
                lot: '002',
                userName: '4439 Soapberry Place',
              },
              {
                address: '4451 Soapberry Place,Castle Rock,80108',
                lot: '003',
                userName: '4451 Soapberry Place',
              },
              {
                address: '4469 Soapberry Place,Castle Rock,80108',
                lot: '004',
                userName: '4469 Soapberry Place',
              },
              {
                address: '4478 Soapberry Place,Castle Rock,80108',
                lot: '005',
                userName: '4478 Soapberry Place',
              },
              {
                address: '4466 Soapberry Place,Castle Rock,80108',
                lot: '006',
                userName: '4466 Soapberry Place',
              },
              {
                address: '4458 Soapberry Place,Castle Rock,80108',
                lot: '007',
                userName: '4458 Soapberry Place',
              },
              {
                address: '4450 Soapberry Place,Castle Rock,80108',
                lot: '008',
                userName: '4450 Soapberry Place',
              },
              {
                address: '4438 Soapberry Place,Castle Rock,80108',
                lot: '009',
                userName: '4438 Soapberry Place',
              },
              {
                address: '4426 Soapberry Place,Castle Rock,80108',
                lot: '010',
                userName: '4426 Soapberry Place',
              },
              {
                address: '4418 Soapberry Place,Castle Rock,80108',
                lot: '011',
                userName: '4418 Soapberry Place',
              },
              {
                address: '4406 Soapberry Place,Castle Rock,80108',
                lot: '012',
                userName: '4406 Soapberry Place',
              },
              {
                address: '4398 Soapberry Place,Castle Rock,80108',
                lot: '013',
                userName: '4398 Soapberry Place',
              },
              {
                address: '4390 Soapberry Place,Castle Rock,80108',
                lot: '014',
                userName: '4390 Soapberry Place',
              },
              {
                address: '4378 Soapberry Place,Castle Rock,80108',
                lot: '015',
                userName: '4378 Soapberry Place',
              },
              {
                address: '4370 Soapberry Place,Castle Rock,80108',
                lot: '016',
                userName: '4370 Soapberry Place',
              },
              {
                address: '4359 Soapberry Place,Castle Rock,80108',
                lot: '028',
                userName: '4359 Soapberry Place',
              },
              {
                address: '4371 Soapberry Place,Castle Rock,80108',
                lot: '029',
                userName: '4371 Soapberry Place',
              },
            ],
            tract: '03 F.1 ',
          },
        ],
      },
      {
        projectCode: '082',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '3266 Boral Owl Drive,Brighton,80601',
                lot: '023',
                userName: '3266 Boral Owl Drive',
              },
              {
                address: '3278 Boral Owl Drive,Brighton,80601',
                lot: '024',
                userName: '3278 Boral Owl Drive',
              },
              {
                address: '3352 Boral Owl Drive,Brighton,80601',
                lot: '031',
                userName: '3352 Boral Owl Drive',
              },
              {
                address: '3366 Boral Owl Drive,Brighton,80601',
                lot: '032',
                userName: '3366 Boral Owl Drive',
              },
              {
                address: '3382 Boral Owl Drive,Brighton,80601',
                lot: '034',
                userName: '3382 Boral Owl Drive',
              },
              {
                address: '3388 Boral Owl Drive,Brighton,80601',
                lot: '035',
                userName: '3388 Boral Owl Drive',
              },
              {
                address: '3378 Grey Owl Place,Brighton,80601',
                lot: '037',
                userName: '3378 Grey Owl Place',
              },
            ],
            tract: '12     ',
          },
          {
            lots: [
              {
                address: '1933 Spotted Owl Court,Brighton,80601',
                lot: '008',
                userName: '1933 Spotted Owl Court',
              },
              {
                address: '1921 Spotted Owl Court,Brighton,80601',
                lot: '009',
                userName: '1921 Spotted Owl Court',
              },
              {
                address: '1897 Spotted Owl Court,Brighton,80601',
                lot: '011',
                userName: '1897 Spotted Owl Court',
              },
              {
                address: '1885 Spotted Owl Court,Brighton,80601',
                lot: '012',
                userName: '1885 Spotted Owl Court',
              },
              {
                address: '1873 Spotted Owl Court,Brighton,80601',
                lot: '013',
                userName: '1873 Spotted Owl Court',
              },
            ],
            tract: '14     ',
          },
          {
            lots: [
              {
                address: '3354 Grey Owl Place,Brighton,80601',
                lot: '001',
                userName: '3354 Grey Owl Place',
              },
              {
                address: '3342 Grey Owl Place,Brighton,80601',
                lot: '002',
                userName: '3342 Grey Owl Place',
              },
              {
                address: '3330 Grey Owl Place,Brighton,80601',
                lot: '003',
                userName: '3330 Grey Owl Place',
              },
              {
                address: '3318 Grey Owl Place,Brighton,80601',
                lot: '004',
                userName: '3318 Grey Owl Place',
              },
              {
                address: '3306 Grey Owl Place,Brighton,80601',
                lot: '005',
                userName: '3306 Grey Owl Place',
              },
              {
                address: '1870 Spotted Owl Court,Brighton,80601',
                lot: '007',
                userName: '1870 Spotted Owl Court',
              },
              {
                address: '1894 Spotted Owl Court,Brighton,80601',
                lot: '009',
                userName: '1894 Spotted Owl Court',
              },
              {
                address: '1906 Spotted Owl Court,Brighton,80601',
                lot: '010',
                userName: '1906 Spotted Owl Court',
              },
              {
                address: '1930 Spotted Owl Court,Brighton,80601',
                lot: '012',
                userName: '1930 Spotted Owl Court',
              },
              {
                address: '3337 Boral Owl Drive,Brighton,80601',
                lot: '013',
                userName: '3337 Boral Owl Drive',
              },
              {
                address: '3351 Boral Owl Drive,Brighton,80601',
                lot: '014',
                userName: '3351 Boral Owl Drive',
              },
              {
                address: '3369 Boral Owl Drive,Brighton,80601',
                lot: '015',
                userName: '3369 Boral Owl Drive',
              },
              {
                address: '3387 Boral Owl Drive,Brighton,80601',
                lot: '017',
                userName: '3387 Boral Owl Drive',
              },
            ],
            tract: '15     ',
          },
        ],
      },
      {
        projectCode: '083',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '20570 E 58TH AVE,Aurora,80019',
                lot: '001',
                userName: '20570 E 58TH AVE',
              },
              {
                address: '20590 E 58TH AVE,Aurora,80019',
                lot: '002',
                userName: '20590 E 58TH AVE',
              },
              {
                address: '20610 E 58TH AVE,Aurora,80019',
                lot: '003',
                userName: '20610 E 58TH AVE',
              },
              {
                address: '20630 E 58TH AVE,Aurora,80019',
                lot: '004',
                userName: '20630 E 58TH AVE',
              },
              {
                address: '5787 N KILLARNEY WAY,Aurora,80019',
                lot: '005',
                userName: '5787 N KILLARNEY WAY',
              },
              {
                address: '5779 N KILLARNEY WAY,Aurora,80019',
                lot: '006',
                userName: '5779 N KILLARNEY WAY',
              },
              {
                address: '5777 N KILLARNEY WAY,Aurora,80019',
                lot: '007',
                userName: '5777 N KILLARNEY WAY',
              },
              {
                address: '5769 N KILLARNEY WAY,Aurora,80019',
                lot: '008',
                userName: '5769 N KILLARNEY WAY',
              },
              {
                address: '5759 N KILLARNEY WAY,Aurora,80019',
                lot: '009',
                userName: '5759 N KILLARNEY WAY',
              },
              {
                address: '20633 E 57TH AVE,Aurora,80019',
                lot: '010',
                userName: '20633 E 57TH AVE',
              },
              {
                address: '20623 E 57TH AVE,Aurora,80019',
                lot: '011',
                userName: '20623 E 57TH AVE',
              },
              {
                address: '5742 N JEBEL WAY,Aurora,80019',
                lot: '012',
                userName: '5742 N JEBEL WAY',
              },
              {
                address: '5744 N JEBEL WAY,Aurora,80019',
                lot: '013',
                userName: '5744 N JEBEL WAY',
              },
              {
                address: '5746 N JEBEL WAY,Aurora,80019',
                lot: '014',
                userName: '5746 N JEBEL WAY',
              },
              {
                address: '5756 N JERICHO WAY,Aurora,80019',
                lot: '016',
                userName: '5756 N JERICHO WAY',
              },
              {
                address: '5764 N JERICHO WAY,Aurora,80019',
                lot: '017',
                userName: '5764 N JERICHO WAY',
              },
              {
                address: '5766 N JERICHO WAY,Aurora,80019',
                lot: '018',
                userName: '5766 N JERICHO WAY',
              },
              {
                address: '5776 N JERICHO WAY,Aurora,80019',
                lot: '019',
                userName: '5776 N JERICHO WAY',
              },
              {
                address: '5786 N JERICHO WAY,Aurora,80019',
                lot: '020',
                userName: '5786 N JERICHO WAY',
              },
            ],
            tract: '2      ',
          },
        ],
      },
      {
        projectCode: '100',
        name: 'Turnberry Villas',
        tracts: [
          {
            lots: [
              {
                address: '13589 E 111th Avenue,Commerce City,80022',
                lot: '027',
                userName: '13589 E 111th Avenue',
              },
              {
                address: '13599 E 111th Avenue,Commerce City,80022',
                lot: '028',
                userName: '13599 E 111th Avenue',
              },
            ],
            tract: '06 F.8 ',
          },
          {
            lots: [
              {
                address: '13598 E 111th Avenue,Commerce City,80022',
                lot: '001',
                userName: '13598 E 111th Avenue',
              },
              {
                address: '13588 E 111th Avenue,Commerce City,80022',
                lot: '002',
                userName: '13588 E 111th Avenue',
              },
              {
                address: '13568 E 111th Avenue,Commerce City,80022',
                lot: '003',
                userName: '13568 E 111th Avenue',
              },
              {
                address: '13558 E 111th Avenue,Commerce City,80022',
                lot: '004',
                userName: '13558 E 111th Avenue',
              },
              {
                address: '13548 E 111th Avenue,Commerce City,80022',
                lot: '005',
                userName: '13548 E 111th Avenue',
              },
              {
                address: '13538 E 111th Avenue,Commerce City,80022',
                lot: '006',
                userName: '13538 E 111th Avenue',
              },
              {
                address: '13528 E 111th Avenue,Commerce City,80022',
                lot: '007',
                userName: '13528 E 111th Avenue',
              },
              {
                address: '13518 E 111th Avenue,Commerce City,80022',
                lot: '008',
                userName: '13518 E 111th Avenue',
              },
              {
                address: '13508 E 111th Avenue,Commerce City,80022',
                lot: '009',
                userName: '13508 E 111th Avenue',
              },
              {
                address: '13498 E 111th Avenue,Commerce City,80022',
                lot: '010',
                userName: '13498 E 111th Avenue',
              },
              {
                address: '13488 E 111th Avenue,Commerce City,80022',
                lot: '011',
                userName: '13488 E 111th Avenue',
              },
              {
                address: '13478 E 111th Avenue,Commerce City,80022',
                lot: '012',
                userName: '13478 E 111th Avenue',
              },
              {
                address: '13468 E 111th Avenue,Commerce City,80022',
                lot: '013',
                userName: '13468 E 111th Avenue',
              },
              {
                address: '13458 E 111th Avenue,Commerce City,80022',
                lot: '014',
                userName: '13458 E 111th Avenue',
              },
              {
                address: '13457 E 110th Drive,Commerce City,80022',
                lot: '015',
                userName: '13457 E 110th Drive',
              },
              {
                address: '13467 E 110th Drive,Commerce City,80022',
                lot: '016',
                userName: '13467 E 110th Drive',
              },
              {
                address: '13477 E 110th Drive,Commerce City,80022',
                lot: '017',
                userName: '13477 E 110th Drive',
              },
              {
                address: '13487 E 110th Drive,Commerce City,80022',
                lot: '018',
                userName: '13487 E 110th Drive',
              },
              {
                address: '13497 E 110th Drive,Commerce City,80022',
                lot: '019',
                userName: '13497 E 110th Drive',
              },
              {
                address: '13507 E 110th Drive,Commerce City,80022',
                lot: '020',
                userName: '13507 E 110th Drive',
              },
              {
                address: '13517 E 110th Drive,Commerce City,80022',
                lot: '021',
                userName: '13517 E 110th Drive',
              },
              {
                address: '13527 E 110th Drive,Commerce City,80022',
                lot: '022',
                userName: '13527 E 110th Drive',
              },
              {
                address: '13537 E 110th Drive,Commerce City,80022',
                lot: '023',
                userName: '13537 E 110th Drive',
              },
              {
                address: '13547 E 110th Drive,Commerce City,80022',
                lot: '024',
                userName: '13547 E 110th Drive',
              },
              {
                address: '13557 E 110th Drive,Commerce City,80022',
                lot: '025',
                userName: '13557 E 110th Drive',
              },
              {
                address: '13567 E 110th Drive,Commerce City,80022',
                lot: '026',
                userName: '13567 E 110th Drive',
              },
              {
                address: '13587 E 110th Drive,Commerce City,80022',
                lot: '027',
                userName: '13587 E 110th Drive',
              },
              {
                address: '13597 E 110th Drive,Commerce City,80022',
                lot: '028',
                userName: '13597 E 110th Drive',
              },
            ],
            tract: '07 F.8 ',
          },
        ],
      },
      {
        projectCode: '104',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '9384 Bahama Ct,Commerce City,80022',
                lot: '002',
                userName: '9384 Bahama Ct',
              },
              {
                address: '9374 Bahama Ct,Commerce City,80022',
                lot: '003',
                userName: '9374 Bahama Ct',
              },
              {
                address: '9360 Bahama Ct,Commerce City,80022',
                lot: '004',
                userName: '9360 Bahama Ct',
              },
              {
                address: '9350 Bahama Ct,Commerce City,80022',
                lot: '005',
                userName: '9350 Bahama Ct',
              },
              {
                address: '9342 Bahama Ct,Commerce City,80022',
                lot: '006',
                userName: '9342 Bahama Ct',
              },
              {
                address: '9340 Bahama Ct,Commerce City,80022',
                lot: '007',
                userName: '9340 Bahama Ct',
              },
              {
                address: '9332 Bahama Ct,Commerce City,80022',
                lot: '008',
                userName: '9332 Bahama Ct',
              },
              {
                address: '9330 Bahama Ct,Commerce City,80022',
                lot: '009',
                userName: '9330 Bahama Ct',
              },
              {
                address: '9320 Bahama Ct,Commerce City,80022',
                lot: '010',
                userName: '9320 Bahama Ct',
              },
              {
                address: '9310 Bahama Ct,Commerce City,80022',
                lot: '011',
                userName: '9310 Bahama Ct',
              },
              {
                address: '9300 Bahama Ct,Commerce City,80022',
                lot: '012',
                userName: '9300 Bahama Ct',
              },
              {
                address: '9290 Bahama Ct,Commerce City,80022',
                lot: '013',
                userName: '9290 Bahama Ct',
              },
              {
                address: '9280 Bahama Ct,Commerce City,80022',
                lot: '014',
                userName: '9280 Bahama Ct',
              },
              {
                address: '9270 Bahama Ct,Commerce City,80022',
                lot: '015',
                userName: '9270 Bahama Ct',
              },
              {
                address: '9283 Biscay St,Commerce City,80022',
                lot: '022',
                userName: '9283 Biscay St',
              },
              {
                address: '9293 Biscay St,Commerce City,80022',
                lot: '023',
                userName: '9293 Biscay St',
              },
              {
                address: '9303 Biscay St,Commerce City,80022',
                lot: '024',
                userName: '9303 Biscay St',
              },
              {
                address: '9313 Biscay St,Commerce City,80022',
                lot: '025',
                userName: '9313 Biscay St',
              },
              {
                address: '9323 Biscay St,Commerce City,80022',
                lot: '026',
                userName: '9323 Biscay St',
              },
              {
                address: '9333 Biscay St,Commerce City,80022',
                lot: '027',
                userName: '9333 Biscay St',
              },
              {
                address: '9343 Biscay St,Commerce City,80022',
                lot: '028',
                userName: '9343 Biscay St',
              },
              {
                address: '9353 Biscay St,Commerce City,80022',
                lot: '029',
                userName: '9353 Biscay St',
              },
              {
                address: '9363 Biscay St,Commerce City,80022',
                lot: '030',
                userName: '9363 Biscay St',
              },
              {
                address: '9373 Biscay St,Commerce City,80022',
                lot: '031',
                userName: '9373 Biscay St',
              },
            ],
            tract: '1      ',
          },
          {
            lots: [
              {
                address: '9354 Biscay St,Commerce City,80022',
                lot: '002',
                userName: '9354 Biscay St',
              },
              {
                address: '9344 Biscay St,Commerce City,80022',
                lot: '003',
                userName: '9344 Biscay St',
              },
              {
                address: '9334 Biscay St,Commerce City,80022',
                lot: '004',
                userName: '9334 Biscay St',
              },
              {
                address: '9324 Biscay St,Commerce City,80022',
                lot: '005',
                userName: '9324 Biscay St',
              },
              {
                address: '9314 Biscay St,Commerce City,80022',
                lot: '006',
                userName: '9314 Biscay St',
              },
              {
                address: '9304 Biscay St,Commerce City,80022',
                lot: '007',
                userName: '9304 Biscay St',
              },
              {
                address: '9294 Biscay St,Commerce City,80022',
                lot: '008',
                userName: '9294 Biscay St',
              },
              {
                address: '9284 Biscay St,Commerce City,80022',
                lot: '009',
                userName: '9284 Biscay St',
              },
              {
                address: '9274 Biscay St,Commerce City,80022',
                lot: '010',
                userName: '9274 Biscay St',
              },
              {
                address: '9264 Biscay St,Commerce City,80022',
                lot: '011',
                userName: '9264 Biscay St',
              },
              {
                address: '9254 Biscay St,Commerce City,80022',
                lot: '012',
                userName: '9254 Biscay St',
              },
            ],
            tract: '2      ',
          },
        ],
      },
      {
        projectCode: '105',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '3102 Sweetgrass Parkway,Dacono,80514',
                lot: '007',
                userName: '3102 Sweetgrass Parkway',
              },
              {
                address: '3112 Sweetgrass Parkway,Dacono,80514',
                lot: '008',
                userName: '3112 Sweetgrass Parkway',
              },
              {
                address: '3122 Sweetgrass Parkway,Dacono,80514',
                lot: '009',
                userName: '3122 Sweetgrass Parkway',
              },
              {
                address: '3132 Sweetgrass Parkway,Dacono,80514',
                lot: '010',
                userName: '3132 Sweetgrass Parkway',
              },
            ],
            tract: '3 F.1  ',
          },
        ],
      },
      {
        projectCode: '107',
        name: 'Turnberry',
        tracts: [
          {
            lots: [
              {
                address: '13594 E 110th Lane,Commerce City,80022',
                lot: '005',
                userName: '13594 E 110th Lane',
              },
              {
                address: '11094 Xanadu Street,Commerce City,80022',
                lot: '006',
                userName: '11094 Xanadu Street',
              },
              {
                address: '11102 Xanadu Street,Commerce City,80022',
                lot: '007',
                userName: '11102 Xanadu Street',
              },
              {
                address: '11104 Xanadu Street,Commerce City,80022',
                lot: '008',
                userName: '11104 Xanadu Street',
              },
              {
                address: '11112 Xanadu Street,Commerce City,80022',
                lot: '009',
                userName: '11112 Xanadu Street',
              },
              {
                address: '11114 Xanadu Street,Commerce City,80022',
                lot: '010',
                userName: '11114 Xanadu Street',
              },
            ],
            tract: '01 F.8 ',
          },
          {
            lots: [
              {
                address: '11049 Ursula Street,Commerce City,80022',
                lot: '001',
                userName: '11049 Ursula Street',
              },
              {
                address: '11045 Ursula Street,Commerce City,80022',
                lot: '002',
                userName: '11045 Ursula Street',
              },
              {
                address: '11039 Ursula Street,Commerce City,80022',
                lot: '003',
                userName: '11039 Ursula Street',
              },
            ],
            tract: '04 F.8 ',
          },
          {
            lots: [
              {
                address: '13302 E 110th Way,Commerce City,80022',
                lot: '001',
                userName: '13302 E 110th Way',
              },
              {
                address: '13312 E 110th Way,Commerce City,80022',
                lot: '002',
                userName: '13312 E 110th Way',
              },
              {
                address: '13322 E 110th Way,Commerce City,80022',
                lot: '003',
                userName: '13322 E 110th Way',
              },
              {
                address: '13332 E 110th Way,Commerce City,80022',
                lot: '004',
                userName: '13332 E 110th Way',
              },
              {
                address: '13342 E 110th Way,Commerce City,80022',
                lot: '005',
                userName: '13342 E 110th Way',
              },
              {
                address: '13352 E 110th Way,Commerce City,80022',
                lot: '006',
                userName: '13352 E 110th Way',
              },
              {
                address: '13372 E 110th Way,Commerce City,80022',
                lot: '007',
                userName: '13372 E 110th Way',
              },
              {
                address: '13382 E 110th Way,Commerce City,80022',
                lot: '008',
                userName: '13382 E 110th Way',
              },
              {
                address: '13392 E 110th Way,Commerce City,80022',
                lot: '009',
                userName: '13392 E 110th Way',
              },
              {
                address: '13402 E 110th Way,Commerce City,80022',
                lot: '010',
                userName: '13402 E 110th Way',
              },
              {
                address: '13412 E 110th Way,Commerce City,80022',
                lot: '011',
                userName: '13412 E 110th Way',
              },
              {
                address: '13422 E 110th Way,Commerce City,80022',
                lot: '012',
                userName: '13422 E 110th Way',
              },
              {
                address: '13432 E 110th Way,Commerce City,80022',
                lot: '013',
                userName: '13432 E 110th Way',
              },
              {
                address: '13442 E 110th Way,Commerce City,80022',
                lot: '014',
                userName: '13442 E 110th Way',
              },
            ],
            tract: '05 F.8 ',
          },
          {
            lots: [
              {
                address: '13596 E 110th Drive,Commerce City,80022',
                lot: '001',
                userName: '13596 E 110th Drive',
              },
              {
                address: '13586 E 110th Drive,Commerce City,80022',
                lot: '002',
                userName: '13586 E 110th Drive',
              },
              {
                address: '13576 E 110th Drive,Commerce City,80022',
                lot: '003',
                userName: '13576 E 110th Drive',
              },
              {
                address: '13566 E 110th Drive,Commerce City,80022',
                lot: '004',
                userName: '13566 E 110th Drive',
              },
              {
                address: '13565 E 110th Lane,Commerce City,80022',
                lot: '021',
                userName: '13565 E 110th Lane',
              },
              {
                address: '13575 E 110th Lane,Commerce City,80022',
                lot: '022',
                userName: '13575 E 110th Lane',
              },
              {
                address: '13585 E 110th Lane,Commerce City,80022',
                lot: '023',
                userName: '13585 E 110th Lane',
              },
              {
                address: '13595 E 110th Lane,Commerce City,80022',
                lot: '024',
                userName: '13595 E 110th Lane',
              },
            ],
            tract: '08 F.8 ',
          },
        ],
      },
      {
        projectCode: '113',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '21184 E. 62nd Ave,Aurora,80019',
                lot: '010',
                userName: '21184 E. 62nd Ave',
              },
            ],
            tract: '11     ',
          },
          {
            lots: [
              {
                address: '21294 E. 62nd Ave,Aurora,80019',
                lot: '010',
                userName: '21294 E. 62nd Ave',
              },
            ],
            tract: '12     ',
          },
          {
            lots: [
              {
                address: '21008 E. 63rd Ave,Aurora,80019',
                lot: '001',
                userName: '21008 E. 63rd Ave',
              },
              {
                address: '21088 E. 63rd Ave,Aurora,80019',
                lot: '005',
                userName: '21088 E. 63rd Ave',
              },
            ],
            tract: '6      ',
          },
        ],
      },
      {
        projectCode: '115',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '20650 E 58TH AVE,Aurora,80019',
                lot: '001',
                userName: '20650 E 58TH AVE',
              },
              {
                address: '20660 E 58TH AVE,Aurora,80019',
                lot: '002',
                userName: '20660 E 58TH AVE',
              },
              {
                address: '20670 E 58TH AVE,Aurora,80019',
                lot: '003',
                userName: '20670 E 58TH AVE',
              },
              {
                address: '20680 E 58TH AVE,Aurora,80019',
                lot: '004',
                userName: '20680 E 58TH AVE',
              },
              {
                address: '20690 E 58TH AVE,Aurora,80019',
                lot: '005',
                userName: '20690 E 58TH AVE',
              },
              {
                address: '20700 E 58TH AVE,Aurora,80019',
                lot: '006',
                userName: '20700 E 58TH AVE',
              },
              {
                address: '5788 N KILLARNEY WAY,Aurora,80019',
                lot: '013',
                userName: '5788 N KILLARNEY WAY',
              },
              {
                address: '5780 N KILLARNEY WAY,Aurora,80019',
                lot: '014',
                userName: '5780 N KILLARNEY WAY',
              },
              {
                address: '5778 N KILLARNEY WAY,Aurora,80019',
                lot: '015',
                userName: '5778 N KILLARNEY WAY',
              },
              {
                address: '5770 N KILLARNEY WAY,Aurora,80019',
                lot: '016',
                userName: '5770 N KILLARNEY WAY',
              },
            ],
            tract: '3      ',
          },
        ],
      },
      {
        projectCode: '116',
        name: '',
        tracts: [
          {
            lots: [
              {
                address: '798 Gambel Drive,Johnstown,80534',
                lot: '006',
                userName: '798 Gambel Drive',
              },
            ],
            tract: '2      ',
          },
          {
            lots: [
              {
                address: '4702 Sunsplash Way,Johnstown,80534',
                lot: '001',
                userName: '4702 Sunsplash Way',
              },
              {
                address: '4672 Sunsplash Way,Johnstown,80534',
                lot: '004',
                userName: '4672 Sunsplash Way',
              },
              {
                address: '4662 Sunsplash Way,Johnstown,80534',
                lot: '005',
                userName: '4662 Sunsplash Way',
              },
              {
                address: '4652 Sunsplash Way,Johnstown,80534',
                lot: '006',
                userName: '4652 Sunsplash Way',
              },
              {
                address: '4642 Sunsplash Way,Johnstown,80534',
                lot: '007',
                userName: '4642 Sunsplash Way',
              },
              {
                address: '4632 Sunsplash Way,Johnstown,80534',
                lot: '008',
                userName: '4632 Sunsplash Way',
              },
              {
                address: '4622 Sunsplash Way,Johnstown,80534',
                lot: '009',
                userName: '4622 Sunsplash Way',
              },
              {
                address: '4612 Sunsplash Way,Johnstown,80534',
                lot: '010',
                userName: '4612 Sunsplash Way',
              },
              {
                address: '4611 Amrock Drive,Johnstown,80534',
                lot: '011',
                userName: '4611 Amrock Drive',
              },
              {
                address: '4621 Amrock Drive,Johnstown,80534',
                lot: '012',
                userName: '4621 Amrock Drive',
              },
              {
                address: '4631 Amrock Drive,Johnstown,80534',
                lot: '013',
                userName: '4631 Amrock Drive',
              },
              {
                address: '4641 Amrock Drive,Johnstown,80534',
                lot: '014',
                userName: '4641 Amrock Drive',
              },
              {
                address: '4651 Amrock Drive,Johnstown,80534',
                lot: '015',
                userName: '4651 Amrock Drive',
              },
              {
                address: '4661 Amrock Drive,Johnstown,80534',
                lot: '016',
                userName: '4661 Amrock Drive',
              },
              {
                address: '4671 Amrock Drive,Johnstown,80534',
                lot: '017',
                userName: '4671 Amrock Drive',
              },
            ],
            tract: '4      ',
          },
          {
            lots: [
              {
                address: '815 Currant Place,Johnstown,80534',
                lot: '001',
                userName: '815 Currant Place',
              },
              {
                address: '805 Currant Place,Johnstown,80534',
                lot: '002',
                userName: '805 Currant Place',
              },
              {
                address: '795 Currant Place,Johnstown,80534',
                lot: '003',
                userName: '795 Currant Place',
              },
              {
                address: '785 Currant Place,Johnstown,80534',
                lot: '004',
                userName: '785 Currant Place',
              },
              {
                address: '775 Currant Place,Johnstown,80534',
                lot: '005',
                userName: '775 Currant Place',
              },
              {
                address: '765 Currant Place,Johnstown,80534',
                lot: '006',
                userName: '765 Currant Place',
              },
              {
                address: '4592 Amrock Drive,Johnstown,80534',
                lot: '007',
                userName: '4592 Amrock Drive',
              },
              {
                address: '4602 Amrock Drive,Johnstown,80534',
                lot: '008',
                userName: '4602 Amrock Drive',
              },
              {
                address: '4612 Amrock Drive,Johnstown,80534',
                lot: '009',
                userName: '4612 Amrock Drive',
              },
            ],
            tract: '5      ',
          },
        ],
      },
    ],
  },
  {
    companyCode: '3020',
    name: 'Los Angeles and Ventura County',
    projects: [
      {
        projectCode: '047',
        name: 'Sonora',
        tracts: [
          {
            lots: [
              {
                address: '3212 Garnet Lane,Lancaster,93535',
                lot: '018',
                userName: 'Jesus Schiller',
              },
              {
                address: '3218 Garnet Lane,Lancaster,93535',
                lot: '019',
                userName: 'Elijah Mueller',
              },
              {
                address: '3224 Garnet Lane,Lancaster,93535',
                lot: '020',
                userName: 'Fredrick Toy',
              },
              {
                address: '3230 Garnet Lane,Lancaster,93535',
                lot: '021',
                userName: 'Jeffrey Reichert',
              },
              {
                address: '3236 Garnet Lane,Lancaster,93535',
                lot: '022',
                userName: 'Kim Klocko',
              },
              {
                address: '44238 Mahogany Street,Lancaster,93535',
                lot: '056',
                userName: 'Randal Quigley',
              },
              {
                address: '44246 Mahogany Street,Lancaster,93535',
                lot: '057',
                userName: 'Joseph Wintheiser',
              },
              {
                address: '44254 Mahogany Street,Lancaster,93535',
                lot: '058',
                userName: 'Conrad Littel',
              },
              {
                address: '44262 Mahogany Street,Lancaster,93535',
                lot: '059',
                userName: 'Kenneth Denesik',
              },
            ],
            tract: '61248 ',
          },
        ],
      },
      {
        projectCode: '049',
        name: 'Oakcrest',
        tracts: [
          {
            lots: [
              {
                address: '4161 Melody Street,La Verne,91750',
                lot: '005',
                userName: 'Joseph Wintheiser',
              },
              {
                address: '4151 Melody Street,La Verne,91750',
                lot: '006',
                userName: 'Conrad Littel',
              },
              {
                address: '4141 Melody Street,La Verne,91750',
                lot: '007',
                userName: 'Kenneth Denesik',
              },
              {
                address: '4131 Melody Street,La Verne,91750',
                lot: '008',
                userName: 'Ruben Boehm',
              },
              {
                address: '4121 Melody Street,La Verne,91750',
                lot: '009',
                userName: 'Kristopher Nolan',
              },
              {
                address: '4111 Melody Street,La Verne,91750',
                lot: '010',
                userName: 'Walter Von',
              },
              {
                address: '4101 Melody Street,La Verne,91750',
                lot: '011',
                userName: 'Arnold Adams',
              },
              {
                address: '2800 Sapphire Road,La Verne,91750',
                lot: '012',
                userName: 'Bruce Bradtke',
              },
            ],
            tract: '83064',
          },
        ],
      },
      {
        projectCode: '055',
        name: 'Crimson at Valencia',
        tracts: [
          {
            lots: [
              {
                address: '27579 Sanctuary Court,Valencia,91381',
                lot: '  8',
                userName: 'Carlos Howell',
              },
              {
                address: '27569 Sanctuary Court,Valencia,91381',
                lot: ' 12',
                userName: 'Woodrow Kuphal',
              },
              {
                address: '27557 Sanctuary Court,Valencia,91381',
                lot: ' 16',
                userName: 'Aaron Considine',
              },
              {
                address: '27555 Sanctuary Court,Valencia,91381',
                lot: ' 17',
                userName: 'Paul Tremblay',
              },
              {
                address: '27553 Sanctuary Court,Valencia,91381',
                lot: ' 18',
                userName: 'Alfred Weissnat',
              },
              {
                address: '27570 Sanctuary Court,Valencia,91381',
                lot: ' 25',
                userName: 'Nelson Leffler',
              },
              {
                address: '27568 Sanctuary Court,Valencia,91381',
                lot: ' 26',
                userName: 'Scott Bogisich',
              },
            ],
            tract: '6110508',
          },
        ],
      },
      {
        projectCode: '059',
        name: 'Lotus',
        tracts: [
          {
            lots: [
              {
                address: '4372 Alamo Lane,Arcadia,91006',
                lot: '  8',
                userName: 'Leo Nienow',
              },
              {
                address: '4376 Alamo Lane,Arcadia,91006',
                lot: '  9',
                userName: 'Ricardo Torp',
              },
              {
                address: '4380 Alamo Lane,Arcadia,91006',
                lot: ' 10',
                userName: 'Roosevelt Spencer',
              },
              {
                address: '4384 Alamo Lane,Arcadia,91006',
                lot: ' 11',
                userName: 'Roland Moore',
              },
              {
                address: '4388 Alamo Lane,Arcadia,91006',
                lot: ' 12',
                userName: 'Myron Jerde',
              },
            ],
            tract: '80294',
          },
        ],
      },
    ],
  },
];

export const SAMPLE_PHOTOS_HISTORY_DATA: HistoryData[] = [
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2023-03-22'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-05-15'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-09-01'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/BTFoundation1.jpg'),
      require('@assets/photos/BTFoundation2.jpg'),
      require('@assets/photos/BTFoundation3.jpg'),
      require('@assets/photos/BTFoundation4.jpg'),
      require('@assets/photos/BTFoundation5.jpg'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-05'),
    syncStatus: SyncStatus.pending,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-28'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-10-08'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-12'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [require('@assets/photos/BTDrywall1.jpg')],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-10'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/BTFrame1.jpg'),
      require('@assets/photos/BTFrame2.jpg'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-08-03'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-01-27'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-10-20'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-04-08'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-11-14'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-09-29'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-06-02'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-13'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [require('@assets/photos/BTElectricalTrim1.jpg')],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-12-14'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [require('@assets/photos/BTBuildComplete.jpg')],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-05-01'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-10-24'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-02-28'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-07-09'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-09-18'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-03-06'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-01-21'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
    readStatus: 'Unread',
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Garden',
    batchNo: 3,
    imagePosition: 'center',
    capturedBy: 'smith',
    capturedOn: new Date('2024-06-15'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-11-29'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7012',
    projectCode: '114',
    tractNumber: '98763-1',
    lotNumber: '506',
    imageName: 'Backyard',
    batchNo: 4,
    imagePosition: 'left',
    capturedBy: 'johnson',
    capturedOn: new Date('2024-04-15'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-10'),
    remarks: 'Needs pruning',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7023',
    projectCode: '115',
    tractNumber: '98763-2',
    lotNumber: '507',
    imageName: 'Frontyard',
    batchNo: 5,
    imagePosition: 'right',
    capturedBy: 'smith',
    capturedOn: new Date('2024-04-01'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-01'),
    remarks: 'Well-maintained',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7034',
    projectCode: '116',
    tractNumber: '98763-3',
    lotNumber: '508',
    imageName: 'Patio',
    batchNo: 6,
    imagePosition: 'center',
    capturedBy: 'williams',
    capturedOn: new Date('2024-04-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-05'),
    remarks: 'Needs cleaning',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
    readStatus: 'Unread',
  },
  {
    companyCode: '7045',
    projectCode: '117',
    tractNumber: '98763-4',
    lotNumber: '509',
    imageName: 'Driveway',
    batchNo: 7,
    imagePosition: 'left',
    capturedBy: 'brown',
    capturedOn: new Date('2024-04-10'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-10'),
    remarks: 'Needs repair',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7021',
    projectCode: '118',
    tractNumber: '98763-5',
    lotNumber: '510',
    imageName: 'Garden',
    batchNo: 8,
    imagePosition: 'right',
    capturedBy: 'jackson',
    capturedOn: new Date('2024-04-12'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-15'),
    remarks: 'Overgrown plants',
    subject: 'Message Subject',
    message: 'Need pruning and weeding',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7032',
    projectCode: '119',
    tractNumber: '98763-6',
    lotNumber: '511',
    imageName: 'Backyard',
    batchNo: 9,
    imagePosition: 'center',
    capturedBy: 'martinez',
    capturedOn: new Date('2024-04-17'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-20'),
    remarks: 'Lawn needs mowing',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7043',
    projectCode: '120',
    tractNumber: '98763-7',
    lotNumber: '512',
    imageName: 'Frontyard',
    batchNo: 10,
    imagePosition: 'left',
    capturedBy: 'rodriguez',
    capturedOn: new Date('2024-04-20'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-25'),
    remarks: 'Broken fence',
    subject: 'Message Subject',
    message: 'Fence needs replacement',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7054',
    projectCode: '121',
    tractNumber: '98763-8',
    lotNumber: '513',
    imageName: 'Patio',
    batchNo: 11,
    imagePosition: 'right',
    capturedBy: 'hernandez',
    capturedOn: new Date('2024-04-25'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-12-30'),
    remarks: 'Dirty furniture',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7065',
    projectCode: '122',
    tractNumber: '98763-9',
    lotNumber: '514',
    imageName: 'Driveway',
    batchNo: 12,
    imagePosition: 'center',
    capturedBy: 'garcia',
    capturedOn: new Date('2024-04-30'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-01-05'),
    remarks: 'Oil stains',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7076',
    projectCode: '123',
    tractNumber: '98763-10',
    lotNumber: '515',
    imageName: 'Garden',
    batchNo: 13,
    imagePosition: 'left',
    capturedBy: 'lopez',
    capturedOn: new Date('2024-05-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-01-10'),
    remarks: 'Weeds everywhere',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7087',
    projectCode: '124',
    tractNumber: '98763-11',
    lotNumber: '516',
    imageName: 'Backyard',
    batchNo: 14,
    imagePosition: 'right',
    capturedBy: 'gonzalez',
    capturedOn: new Date('2024-05-10'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-01-15'),
    remarks: 'Faded paint',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7098',
    projectCode: '125',
    tractNumber: '98763-12',
    lotNumber: '517',
    imageName: 'Frontyard',
    batchNo: 15,
    imagePosition: 'center',
    capturedBy: 'martin',
    capturedOn: new Date('2024-05-15'),
    syncStatus: SyncStatus.failed,
    retryCount: 0,
    syncedOn: new Date('2024-01-20'),
    remarks: 'Leaky sprinklers',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7109',
    projectCode: '126',
    tractNumber: '98763-13',
    lotNumber: '518',
    imageName: 'Patio',
    batchNo: 16,
    imagePosition: 'left',
    capturedBy: 'perez',
    capturedOn: new Date('2024-05-20'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-01-25'),
    remarks: 'Loose tiles',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7110',
    projectCode: '127',
    tractNumber: '98763-14',
    lotNumber: '519',
    imageName: 'Driveway',
    batchNo: 17,
    imagePosition: 'right',
    capturedBy: 'ramirez',
    capturedOn: new Date('2024-05-25'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-01-30'),
    remarks: 'Cracked pavement',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7121',
    projectCode: '128',
    tractNumber: '98763-15',
    lotNumber: '520',
    imageName: 'Garden',
    batchNo: 18,
    imagePosition: 'center',
    capturedBy: 'torres',
    capturedOn: new Date('2024-05-30'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-05'),
    remarks: 'Overgrown bushes',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7132',
    projectCode: '129',
    tractNumber: '98763-16',
    lotNumber: '521',
    imageName: 'Backyard',
    batchNo: 19,
    imagePosition: 'left',
    capturedBy: 'sanchez',
    capturedOn: new Date('2024-06-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-10'),
    remarks: 'Dead plants',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7143',
    projectCode: '130',
    tractNumber: '98763-17',
    lotNumber: '522',
    imageName: 'Frontyard',
    batchNo: 20,
    imagePosition: 'right',
    capturedBy: 'lopez',
    capturedOn: new Date('2024-06-10'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-15'),
    remarks: 'Overgrown grass',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7143',
    projectCode: '130',
    tractNumber: '98763-17',
    lotNumber: '522',
    imageName: 'Frontyard',
    batchNo: 20,
    imagePosition: 'right',
    capturedBy: 'lopez',
    capturedOn: new Date('2024-06-10'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-15'),
    remarks: 'Overgrown grass',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7154',
    projectCode: '131',
    tractNumber: '98763-18',
    lotNumber: '523',
    imageName: 'Patio',
    batchNo: 21,
    imagePosition: 'center',
    capturedBy: 'gonzalez',
    capturedOn: new Date('2024-06-15'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-20'),
    remarks: 'Dirty floor',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },

  {
    companyCode: '7165',
    projectCode: '132',
    tractNumber: '98763-19',
    lotNumber: '524',
    imageName: 'Driveway',
    batchNo: 22,
    imagePosition: 'left',
    capturedBy: 'martinez',
    capturedOn: new Date('2024-06-20'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-02-25'),
    remarks: 'Potholes',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7176',
    projectCode: '133',
    tractNumber: '98763-20',
    lotNumber: '525',
    imageName: 'Garden',
    batchNo: 23,
    imagePosition: 'right',
    capturedBy: 'rodriguez',
    capturedOn: new Date('2024-06-25'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-03-01'),
    remarks: 'Overgrown hedges',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7187',
    projectCode: '134',
    tractNumber: '98763-21',
    lotNumber: '526',
    imageName: 'Backyard',
    batchNo: 24,
    imagePosition: 'center',
    capturedBy: 'hernandez',
    capturedOn: new Date('2024-07-01'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-03-05'),
    remarks: 'Weeds everywhere',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7198',
    projectCode: '135',
    tractNumber: '98763-22',
    lotNumber: '527',
    imageName: 'Frontyard',
    batchNo: 25,
    imagePosition: 'left',
    capturedBy: 'brown',
    capturedOn: new Date('2024-07-05'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-03-10'),
    remarks: 'Uneven ground',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
  {
    companyCode: '7210',
    projectCode: '137',
    tractNumber: '98763-24',
    lotNumber: '529',
    imageName: 'Driveway',
    batchNo: 27,
    imagePosition: 'center',
    capturedBy: 'jackson',
    capturedOn: new Date('2024-07-15'),
    syncStatus: SyncStatus.completed,
    retryCount: 0,
    syncedOn: new Date('2024-03-20'),
    remarks: 'Oil stains',
    subject: 'Message Subject',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    address: '2901 Gallarate Dr Henderson NV 89044',
    images: [
      require('@assets/photos/SampleImage1.png'),
      require('@assets/photos/SampleImage2.png'),
    ],
  },
];

// Custom hook to add a beforeRemove listener to the navigation object
function useBeforeRemoveListener(
  navigation: StackNavigationProp<RootStackParamList>,
) {
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'beforeRemove',
      (e: { preventDefault: () => void }) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Show an alert asking if the user really wants to exit the app
        // Alert.alert(
        //   'Exit App',
        //   'Do you want to exit from the App?',
        //   [
        //     {
        //       text: 'Cancel',
        //       onPress: () => null,
        //       style: 'cancel',
        //     },
        //     {
        //       text: 'YES',
        //       onPress: () => BackHandler.exitApp(),
        //     },
        //   ],
        //   { cancelable: false }
        // );
      },
    );

    // Cleanup function to remove the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);
}

export default useBeforeRemoveListener;
