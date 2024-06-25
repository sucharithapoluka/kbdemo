import { Dimensions, ScaledSize } from "react-native";
import { OnboardingSliderData } from "../models/OnboardingSliderData";
import { CompanyData } from "../models/LotsData";

export const ScreenDimensions: ScaledSize = Dimensions.get('screen');

export const OnBordingSlides: OnboardingSliderData[] =
  [
    {
      id: 1,
      image: require('../assets/OnBoardingScreens/FindingCustomer.gif'),
      title: 'Finding Customers',
      description:
        'Upload photos and create messages by finding the correct lot and customer.',
    },
    {
      id: 2,
      image: require('../assets/OnBoardingScreens/UploadingPhotos.gif'),
      title: 'Uploading Photos',
      description:
        'Capture photos with the app, review them for accuracy and tap the upload button.',
    },
    {
      id: 3,
      image: require('../assets/OnBoardingScreens/PhotoHistory.gif'),
      title: 'Photo History',
      description:
        'Use Photo History to check the status of an upload, or resend the photos if needed.',
    },
    {
      id: 4,
      image: require('../assets/OnBoardingScreens/CreatingMessage.gif'),
      title: 'Creating Messages',
      description:
        'Create messages with the app, review for accuracy and tap the send button.',
    },
    {
      id: 5,
      image: require('../assets/OnBoardingScreens/MessageHistorygif.gif'),
      title: 'Message History',
      description:
        'Use Message History to check the status of a message or view the text that was sent.',
    },
  ];

export const TabNames = {
  upload: "Upload",
  create: "Create",
  history: "History"
}

// TODO: Delete this data after Lot Data API Integration
export const SampleLotsData: CompanyData[] = [
  {
    "companyCode": "3022 ",
    "projects": [
      {
        "projectCode": "090",
        "tracts": [
          {
            "lots": [
              {
                "address": "30784 Vera Cruz Circle,Winchester,92596",
                "lot": "  8",
                "userName": "30784 Vera Cruz Circle"
              },
              {
                "address": "30833 Vera Cruz Circle,Winchester,92596",
                "lot": " 17",
                "userName": "30833 Vera Cruz Circle"
              },
              {
                "address": "30762 Southend Ln,Winchester,92596",
                "lot": " 24",
                "userName": "30762 Southend Ln"
              },
              {
                "address": "30798 Southend Ln,Winchester,92596",
                "lot": " 27",
                "userName": "30798 Southend Ln"
              },
              {
                "address": "30799 Southend Ln,Winchester,92596",
                "lot": " 38",
                "userName": "30799 Southend Ln"
              },
              {
                "address": "29244 Boreham Ln,Winchester,92596",
                "lot": " 43",
                "userName": "29244 Boreham Ln"
              },
              {
                "address": "29316 Boreham Ln,Winchester,92596",
                "lot": " 45",
                "userName": "29316 Boreham Ln"
              },
              {
                "address": "29099 Boreham Ln,Winchester,92596",
                "lot": " 54",
                "userName": "29099 Boreham Ln"
              },
              {
                "address": "29075 Boreham Ln,Winchester,92596",
                "lot": " 55",
                "userName": "29075 Boreham Ln"
              },
              {
                "address": "29074 Hondo Ln,Winchester,92596",
                "lot": " 56",
                "userName": "29074 Hondo Ln"
              }
            ],
            "tract": "36417-2"
          },
          {
            "lots": [
              {
                "address": "30503 Vera Cruz Cir,Winchester,92596",
                "lot": " 12",
                "userName": "30503 Vera Cruz Cir"
              },
              {
                "address": "30515 Vera Cruz Cir,Winchester,92596",
                "lot": " 13",
                "userName": "30515 Vera Cruz Cir"
              },
              {
                "address": "30527 Vera Cruz Cir,Winchester,92596",
                "lot": " 14",
                "userName": "30527 Vera Cruz Cir"
              },
              {
                "address": "30539 Vera Cruz Cir,Winchester,92596",
                "lot": " 15",
                "userName": "30539 Vera Cruz Cir"
              },
              {
                "address": "30551 Vera Cruz Cir,Winchester,92596",
                "lot": " 16",
                "userName": "30551 Vera Cruz Cir"
              },
              {
                "address": "30557 Vera Cruz Cir,Winchester,92596",
                "lot": " 17",
                "userName": "30557 Vera Cruz Cir"
              },
              {
                "address": "29261 Shane Ct,Winchester,92596",
                "lot": " 18",
                "userName": "29261 Shane Ct"
              }
            ],
            "tract": "36417-3"
          }
        ]
      },
      {
        "projectCode": "094",
        "tracts": [
          {
            "lots": [
              {
                "address": "30240 CEDAR CREEK WAY,Homeland,92548",
                "lot": "  1",
                "userName": "30240 CEDAR CREEK WAY"
              },
              {
                "address": "30348 CEDAR CREEK WAY,Homeland,92548",
                "lot": "  6",
                "userName": "30348 CEDAR CREEK WAY"
              },
              {
                "address": "30396 CEDAR CREEK WAY,Homeland,92548",
                "lot": "  8",
                "userName": "30396 CEDAR CREEK WAY"
              },
              {
                "address": "25268 CALAMITY LN,Homeland,92548",
                "lot": " 25",
                "userName": "25268 CALAMITY LN"
              },
              {
                "address": "25292 CALAMITY LN,Homeland,92548",
                "lot": " 26",
                "userName": "25292 CALAMITY LN"
              },
              {
                "address": "30713 CEDAR CREEK WAY,Homeland,92548",
                "lot": " 61",
                "userName": "30713 CEDAR CREEK WAY"
              },
              {
                "address": "30349 CEDAR CREEK WAY,Homeland,92548",
                "lot": " 77",
                "userName": "30349 CEDAR CREEK WAY"
              },
              {
                "address": "30254 THE VINTAGE DR,Homeland,92548",
                "lot": " 82",
                "userName": "30254 THE VINTAGE DR"
              }
            ],
            "tract": "37533-F"
          }
        ]
      },
      {
        "projectCode": "095",
        "tracts": [
          {
            "lots": [
              {
                "address": "25517 BUCKEYE MEADOW LN,Homeland,92548",
                "lot": " 72",
                "userName": "25517 BUCKEYE MEADOW LN"
              },
              {
                "address": "25469 BUCKEYE MEADOW LN,Homeland,92548",
                "lot": " 74",
                "userName": "25469 BUCKEYE MEADOW LN"
              },
              {
                "address": "25445 BUCKEYE MEADOW LN,Homeland,92548",
                "lot": " 75",
                "userName": "25445 BUCKEYE MEADOW LN"
              },
              {
                "address": "25421 BUCKEYE MEADOW LN,Homeland,92548",
                "lot": " 76",
                "userName": "25421 BUCKEYE MEADOW LN"
              },
              {
                "address": "25397 BUCKEYE MEADOW LN,Homeland,92548",
                "lot": " 77",
                "userName": "25397 BUCKEYE MEADOW LN"
              },
              {
                "address": "30014 THE VINTAGE DR,Homeland,92548",
                "lot": " 78",
                "userName": "30014 THE VINTAGE DR"
              },
              {
                "address": "30026 THE VINTAGE DR,Homeland,92548",
                "lot": " 79",
                "userName": "30026 THE VINTAGE DR"
              },
              {
                "address": "30038 THE VINTAGE DR,Homeland,92548",
                "lot": " 80",
                "userName": "30038 THE VINTAGE DR"
              },
              {
                "address": "30050 THE VINTAGE DR,Homeland,92548",
                "lot": " 81",
                "userName": "30050 THE VINTAGE DR"
              },
              {
                "address": "30062 THE VINTAGE DR,Homeland,92548",
                "lot": " 82",
                "userName": "30062 THE VINTAGE DR"
              },
              {
                "address": "30074 THE VINTAGE DR,Homeland,92548",
                "lot": " 83",
                "userName": "30074 THE VINTAGE DR"
              },
              {
                "address": "30086 THE VINTAGE DR,Homeland,92548",
                "lot": " 84",
                "userName": "30086 THE VINTAGE DR"
              },
              {
                "address": "30098 THE VINTAGE DR,Homeland,92548",
                "lot": " 85",
                "userName": "30098 THE VINTAGE DR"
              },
              {
                "address": "30110 THE VINTAGE DR,Homeland,92548",
                "lot": " 86",
                "userName": "30110 THE VINTAGE DR"
              },
              {
                "address": "30122 THE VINTAGE DR,Homeland,92548",
                "lot": " 87",
                "userName": "30122 THE VINTAGE DR"
              }
            ],
            "tract": "37533-1"
          },
          {
            "lots": [
              {
                "address": "25498 CELLARS RANCH RD,Homeland,92548",
                "lot": " 12",
                "userName": "25498 CELLARS RANCH RD"
              },
              {
                "address": "25522 CELLARS RANCH RD,Homeland,92548",
                "lot": " 13",
                "userName": "25522 CELLARS RANCH RD"
              },
              {
                "address": "25546 CELLARS RANCH RD,Homeland,92548",
                "lot": " 14",
                "userName": "25546 CELLARS RANCH RD"
              },
              {
                "address": "25545 CELLARS RANCH RD,Homeland,92548",
                "lot": " 31",
                "userName": "25545 CELLARS RANCH RD"
              },
              {
                "address": "25521 CELLARS RANCH RD,Homeland,92548",
                "lot": " 32",
                "userName": "25521 CELLARS RANCH RD"
              },
              {
                "address": "25497 CELLARS RANCH RD,Homeland,92548",
                "lot": " 33",
                "userName": "25497 CELLARS RANCH RD"
              },
              {
                "address": "25473 CELLARS RANCH RD,Homeland,92548",
                "lot": " 34",
                "userName": "25473 CELLARS RANCH RD"
              },
              {
                "address": "30124 ARROWLEAF WAY,Homeland,92548",
                "lot": " 35",
                "userName": "30124 ARROWLEAF WAY"
              },
              {
                "address": "30136 ARROWLEAF WAY,Homeland,92548",
                "lot": " 36",
                "userName": "30136 ARROWLEAF WAY"
              },
              {
                "address": "30148 ARROWLEAF WAY,Homeland,92548",
                "lot": " 37",
                "userName": "30148 ARROWLEAF WAY"
              },
              {
                "address": "30160 ARROWLEAF WAY,Homeland,92548",
                "lot": " 38",
                "userName": "30160 ARROWLEAF WAY"
              },
              {
                "address": "30172 ARROWLEAF WAY,Homeland,92548",
                "lot": " 39",
                "userName": "30172 ARROWLEAF WAY"
              },
              {
                "address": "30184 ARROWLEAF WAY,Homeland,92548",
                "lot": " 40",
                "userName": "30184 ARROWLEAF WAY"
              }
            ],
            "tract": "37533-2"
          }
        ]
      },
      {
        "projectCode": "096",
        "tracts": [
          {
            "lots": [
              {
                "address": "30311 TIN MINE ST,Homeland,92548",
                "lot": "  3",
                "userName": "30311 TIN MINE ST"
              },
              {
                "address": "30335 TIN MINE ST,Homeland,92548",
                "lot": "  4",
                "userName": "30335 TIN MINE ST"
              },
              {
                "address": "30359 TIN MINE ST,Homeland,92548",
                "lot": "  5",
                "userName": "30359 TIN MINE ST"
              },
              {
                "address": "30383 TIN MINE ST,Homeland,92548",
                "lot": "  6",
                "userName": "30383 TIN MINE ST"
              },
              {
                "address": "30407 TIN MINE ST,Homeland,92548",
                "lot": "  7",
                "userName": "30407 TIN MINE ST"
              },
              {
                "address": "30431 TIN MINE ST,Homeland,92548",
                "lot": "  8",
                "userName": "30431 TIN MINE ST"
              },
              {
                "address": "30455 TIN MINE ST,Homeland,92548",
                "lot": "  9",
                "userName": "30455 TIN MINE ST"
              },
              {
                "address": "30479 TIN MINE ST,Homeland,92548",
                "lot": " 10",
                "userName": "30479 TIN MINE ST"
              },
              {
                "address": "30503 TIN MINE ST,Homeland,92548",
                "lot": " 11",
                "userName": "30503 TIN MINE ST"
              },
              {
                "address": "30527 TIN MINE ST,Homeland,92548",
                "lot": " 12",
                "userName": "30527 TIN MINE ST"
              },
              {
                "address": "30551 TIN MINE ST,Homeland,92548",
                "lot": " 13",
                "userName": "30551 TIN MINE ST"
              },
              {
                "address": "30575 TIN MINE ST,Homeland,92548",
                "lot": " 14",
                "userName": "30575 TIN MINE ST"
              },
              {
                "address": "30599 TIN MINE ST,Homeland,92548",
                "lot": " 15",
                "userName": "30599 TIN MINE ST"
              },
              {
                "address": "30623 TIN MINE ST,Homeland,92548",
                "lot": " 16",
                "userName": "30623 TIN MINE ST"
              },
              {
                "address": "30647 TIN MINE ST,Homeland,92548",
                "lot": " 17",
                "userName": "30647 TIN MINE ST"
              },
              {
                "address": "30671 TIN MINE ST,Homeland,92548",
                "lot": " 18",
                "userName": "30671 TIN MINE ST"
              },
              {
                "address": "30695 TIN MINE ST,Homeland,92548",
                "lot": " 19",
                "userName": "30695 TIN MINE ST"
              }
            ],
            "tract": "29322-F"
          }
        ]
      },
      {
        "projectCode": "097",
        "tracts": [
          {
            "lots": [
              {
                "address": "13739 Emery Street,Victorville,92392",
                "lot": "  8",
                "userName": "13739 Emery Street"
              },
              {
                "address": "13727 Emery Street,Victorville,92392",
                "lot": "  9",
                "userName": "13727 Emery Street"
              },
              {
                "address": "13715 Emery Street,Victorville,92392",
                "lot": " 10",
                "userName": "13715 Emery Street"
              },
              {
                "address": "13703 Emery Street,Victorville,92392",
                "lot": " 11",
                "userName": "13703 Emery Street"
              },
              {
                "address": "13691 Emery Street,Victorville,92392",
                "lot": " 12",
                "userName": "13691 Emery Street"
              },
              {
                "address": "13679 Emery Street,Victorville,92392",
                "lot": " 13",
                "userName": "13679 Emery Street"
              },
              {
                "address": "13742 Emery Street,Victorville,92392",
                "lot": " 19",
                "userName": "13742 Emery Street"
              },
              {
                "address": "13743 Eva Court,Victorville,92392",
                "lot": " 20",
                "userName": "13743 Eva Court"
              },
              {
                "address": "13431 Eva Court,Victorville,92392",
                "lot": " 21",
                "userName": "13431 Eva Court"
              },
              {
                "address": "13719 Eva Court,Victorville,92392",
                "lot": " 22",
                "userName": "13719 Eva Court"
              },
              {
                "address": "13707 Eva Court,Victorville,92392",
                "lot": " 23",
                "userName": "13707 Eva Court"
              },
              {
                "address": "13695 Eva Court,Victorville,92392",
                "lot": " 24",
                "userName": "13695 Eva Court"
              },
              {
                "address": "13771 Asprey Street,Victorville,92392",
                "lot": " 42",
                "userName": "13771 Asprey Street"
              },
              {
                "address": "13759 Asprey Street,Victorville,92392",
                "lot": " 43",
                "userName": "13759 Asprey Street"
              },
              {
                "address": "13747 Asprey Street,Victorville,92392",
                "lot": " 44",
                "userName": "13747 Asprey Street"
              },
              {
                "address": "13735 Asprey Street,Victorville,92392",
                "lot": " 45",
                "userName": "13735 Asprey Street"
              }
            ],
            "tract": "20274  "
          }
        ]
      },
      {
        "projectCode": "098",
        "tracts": [
          {
            "lots": [
              {
                "address": "41521 Red Car Drive,Lake Elsinore,92532",
                "lot": " 12",
                "userName": "41521 Red Car Drive"
              },
              {
                "address": "41523 Red Car Drive,Lake Elsinore,92532",
                "lot": " 13",
                "userName": "41523 Red Car Drive"
              },
              {
                "address": "41525 Red Car Drive,Lake Elsinore,92532",
                "lot": " 14",
                "userName": "41525 Red Car Drive"
              },
              {
                "address": "41527 Red Car Drive,Lake Elsinore,92532",
                "lot": " 15",
                "userName": "41527 Red Car Drive"
              },
              {
                "address": "41529 Red Car Drive,Lake Elsinore,92532",
                "lot": " 16",
                "userName": "41529 Red Car Drive"
              },
              {
                "address": "41531 Red Car Drive,Lake Elsinore,92532",
                "lot": " 17",
                "userName": "41531 Red Car Drive"
              },
              {
                "address": "41532 Red Car Drive,Lake Elsinore,92532",
                "lot": " 18",
                "userName": "41532 Red Car Drive"
              },
              {
                "address": "41530 Red Car Drive,Lake Elsinore,92532",
                "lot": " 19",
                "userName": "41530 Red Car Drive"
              },
              {
                "address": "41528 Red Car Drive,Lake Elsinore,92532",
                "lot": " 20",
                "userName": "41528 Red Car Drive"
              },
              {
                "address": "41526 Red Car Drive,Lake Elsinore,92532",
                "lot": " 21",
                "userName": "41526 Red Car Drive"
              },
              {
                "address": "41414 Stork Court,Lake Elsinore,92532",
                "lot": " 58",
                "userName": "41414 Stork Court"
              },
              {
                "address": "41413 Stork Court,Lake Elsinore,92532",
                "lot": " 62",
                "userName": "41413 Stork Court"
              },
              {
                "address": "41411 Stork Court,Lake Elsinore,92532",
                "lot": " 63",
                "userName": "41411 Stork Court"
              },
              {
                "address": "41407 Stork Court,Lake Elsinore,92532",
                "lot": " 65",
                "userName": "41407 Stork Court"
              },
              {
                "address": "41403 Stork Court,Lake Elsinore,92532",
                "lot": " 67",
                "userName": "41403 Stork Court"
              }
            ],
            "tract": "30698  "
          }
        ]
      },
      {
        "projectCode": "099",
        "tracts": [
          {
            "lots": [
              {
                "address": "16597 Trailblazer Ave,Chino,91708",
                "lot": " 67",
                "userName": "16597 Trailblazer Ave"
              }
            ],
            "tract": "20166  "
          }
        ]
      },
      {
        "projectCode": "104",
        "tracts": [
          {
            "lots": [
              {
                "address": "4140 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 13",
                "userName": "4140 E. AVILA PRIVADO"
              },
              {
                "address": "4150 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 14",
                "userName": "4150 E. AVILA PRIVADO"
              },
              {
                "address": "4160 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 15",
                "userName": "4160 E. AVILA PRIVADO"
              },
              {
                "address": "4161 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 17",
                "userName": "4161 E. AVILA PRIVADO"
              },
              {
                "address": "4149 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 19",
                "userName": "4149 E. AVILA PRIVADO"
              },
              {
                "address": "4143 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 20",
                "userName": "4143 E. AVILA PRIVADO"
              },
              {
                "address": "4137 E. AVILA PRIVADO,Ontario,91761",
                "lot": " 21",
                "userName": "4137 E. AVILA PRIVADO"
              },
              {
                "address": "4131 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 22",
                "userName": "4131 E. LA JOLLA STREET"
              },
              {
                "address": "4125 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 23",
                "userName": "4125 E. LA JOLLA STREET"
              },
              {
                "address": "4119 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 24",
                "userName": "4119 E. LA JOLLA STREET"
              },
              {
                "address": "4113 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 25",
                "userName": "4113 E. LA JOLLA STREET"
              },
              {
                "address": "4107 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 26",
                "userName": "4107 E. LA JOLLA STREET"
              },
              {
                "address": "4101 E. LA JOLLA STREET,Ontario,91761",
                "lot": " 27",
                "userName": "4101 E. LA JOLLA STREET"
              },
              {
                "address": "4313 S. MALIBU AVENUE,Ontario,91761",
                "lot": " 28",
                "userName": "4313 S. MALIBU AVENUE"
              }
            ],
            "tract": "20160  "
          }
        ]
      },
      {
        "projectCode": "105",
        "tracts": [
          {
            "lots": [
              {
                "address": "16188 ALAMO COURT,Chino,91708",
                "lot": "125",
                "userName": "16188 ALAMO COURT"
              },
              {
                "address": "16190 ALAMO COURT,Chino,91708",
                "lot": "126",
                "userName": "16190 ALAMO COURT"
              },
              {
                "address": "16192 ALAMO COURT,Chino,91708",
                "lot": "127",
                "userName": "16192 ALAMO COURT"
              },
              {
                "address": "16202 ALAMO COURT,Chino,91708",
                "lot": "128",
                "userName": "16202 ALAMO COURT"
              },
              {
                "address": "8561 MIDWAY LANE,Chino,91708",
                "lot": "129",
                "userName": "8561 MIDWAY LANE"
              },
              {
                "address": "8559 MIDWAY LANE,Chino,91708",
                "lot": "130",
                "userName": "8559 MIDWAY LANE"
              },
              {
                "address": "8557 MIDWAY LANE,Chino,91708",
                "lot": "131",
                "userName": "8557 MIDWAY LANE"
              },
              {
                "address": "8555 MIDWAY LANE,Chino,91708",
                "lot": "132",
                "userName": "8555 MIDWAY LANE"
              },
              {
                "address": "8537 MIDWAY LANE,Chino,91708",
                "lot": "133",
                "userName": "8537 MIDWAY LANE"
              },
              {
                "address": "8539 MIDWAY LANE,Chino,91708",
                "lot": "134",
                "userName": "8539 MIDWAY LANE"
              },
              {
                "address": "8541 MIDWAY LANE,Chino,91708",
                "lot": "135",
                "userName": "8541 MIDWAY LANE"
              },
              {
                "address": "8543 MIDWAY LANE,Chino,91708",
                "lot": "136",
                "userName": "8543 MIDWAY LANE"
              },
              {
                "address": "8545 MIDWAY LANE,Chino,91708",
                "lot": "137",
                "userName": "8545 MIDWAY LANE"
              },
              {
                "address": "8547 MIDWAY LANE,Chino,91708",
                "lot": "138",
                "userName": "8547 MIDWAY LANE"
              },
              {
                "address": "8549 MIDWAY LANE,Chino,91708",
                "lot": "139",
                "userName": "8549 MIDWAY LANE"
              },
              {
                "address": "8535 MIDWAY LANE,Chino,91708",
                "lot": "140",
                "userName": "8535 MIDWAY LANE"
              },
              {
                "address": "8533 MIDWAY LANE,Chino,91708",
                "lot": "141",
                "userName": "8533 MIDWAY LANE"
              },
              {
                "address": "8531 MIDWAY LANE,Chino,91708",
                "lot": "142",
                "userName": "8531 MIDWAY LANE"
              },
              {
                "address": "8529 MIDWAY LANE,Chino,91708",
                "lot": "143",
                "userName": "8529 MIDWAY LANE"
              }
            ],
            "tract": "20369  "
          }
        ]
      },
      {
        "projectCode": "110",
        "tracts": [
          {
            "lots": [
              {
                "address": "7349 Beryl Lane,Chino,91708",
                "lot": "100",
                "userName": "7349 Beryl Lane"
              },
              {
                "address": "16067 Aventurine Lane,Chino,91708",
                "lot": "103",
                "userName": "16067 Aventurine Lane"
              },
              {
                "address": "7338 Beryl Lane,Chino,91708",
                "lot": "104",
                "userName": "7338 Beryl Lane"
              }
            ],
            "tract": "20247  "
          }
        ]
      }
    ]
  },
  {
    "companyCode": "3013 ",
    "projects": [
      {
        "projectCode": "029",
        "tracts": [
          {
            "lots": [
              {
                "address": "3343 Belterra Point Drive,New Hill,27562",
                "lot": " 22",
                "userName": "3343 Belterra Point Drive"
              },
              {
                "address": "3312 Olancha Court,New Hill,27562",
                "lot": "004",
                "userName": "3312 Olancha Court"
              },
              {
                "address": "3321 Olancha Court,New Hill,27562",
                "lot": "005",
                "userName": "3321 Olancha Court"
              },
              {
                "address": "3317 Olancha Court,New Hill,27562",
                "lot": "006",
                "userName": "3317 Olancha Court"
              },
              {
                "address": "3406 Writt Court,New Hill,27562",
                "lot": "134",
                "userName": "3406 Writt Court"
              }
            ],
            "tract": "1      "
          }
        ]
      },
      {
        "projectCode": "030",
        "tracts": [
          {
            "lots": [
              {
                "address": "139 Saint Clair Drive,Fuquay Varina,27526",
                "lot": " 77",
                "userName": "139 Saint Clair Drive"
              },
              {
                "address": "424 John Stark Drive,Fuquay Varina,27526",
                "lot": "021",
                "userName": "424 John Stark Drive"
              },
              {
                "address": "454 John Stark Drive,Fuquay Varina,27526",
                "lot": "022",
                "userName": "454 John Stark Drive"
              },
              {
                "address": "445 Thomas Gage Drive,Fuquay Varina,27526",
                "lot": "027",
                "userName": "445 Thomas Gage Drive"
              },
              {
                "address": "415 Thomas Gage Drive,Fuquay Varina,27526",
                "lot": "028",
                "userName": "415 Thomas Gage Drive"
              },
              {
                "address": "424 Thomas Gage Drive,Fuquay Varina,27526",
                "lot": "029",
                "userName": "424 Thomas Gage Drive"
              },
              {
                "address": "194 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "053",
                "userName": "194 Robert Howe Drive"
              },
              {
                "address": "214 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "054",
                "userName": "214 Robert Howe Drive"
              },
              {
                "address": "234 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "055",
                "userName": "234 Robert Howe Drive"
              },
              {
                "address": "256 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "056",
                "userName": "256 Robert Howe Drive"
              },
              {
                "address": "296 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "058",
                "userName": "296 Robert Howe Drive"
              },
              {
                "address": "TBD Robert Howe Drive,Fuquay Varina,27526",
                "lot": "059",
                "userName": "TBD Robert Howe Drive"
              },
              {
                "address": "338 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "060",
                "userName": "338 Robert Howe Drive"
              },
              {
                "address": "358 Robert Howe Drive,Fuquay Varina,27526",
                "lot": "061",
                "userName": "358 Robert Howe Drive"
              },
              {
                "address": "483 Saint Clair Drive,Fuquay Varina,27526",
                "lot": "062",
                "userName": "483 Saint Clair Drive"
              },
              {
                "address": "TBD Saint Clair Drive,Fuquay Varina,27526",
                "lot": "065",
                "userName": "TBD Saint Clair Drive"
              },
              {
                "address": "218 Tarleton Drive,Fuquay Varina,27526",
                "lot": "132",
                "userName": "218 Tarleton Drive"
              },
              {
                "address": "53 Putnam Street,Fuquay Varina,27526",
                "lot": "133",
                "userName": "53 Putnam Street"
              },
              {
                "address": "35 Putnam Street,Fuquay Varina,27526",
                "lot": "134",
                "userName": "35 Putnam Street"
              },
              {
                "address": "15 Putnam Street,Fuquay Varina,27526",
                "lot": "135",
                "userName": "15 Putnam Street"
              },
              {
                "address": "451 John Stark Drive,Fuquay Varina,27526",
                "lot": "136",
                "userName": "451 John Stark Drive"
              },
              {
                "address": "467 John Stark Drive,Fuquay Varina,27526",
                "lot": "137",
                "userName": "467 John Stark Drive"
              }
            ],
            "tract": "159"
          }
        ]
      },
      {
        "projectCode": "033",
        "tracts": [
          {
            "lots": [
              {
                "address": "715 Purple Aster St.,Youngsville,27596",
                "lot": " 30",
                "userName": "715 Purple Aster St."
              },
              {
                "address": "695 Purple Aster St.,Youngsville,27596",
                "lot": " 32",
                "userName": "695 Purple Aster St."
              },
              {
                "address": "360 Purple Aster Street,Youngsville,27596",
                "lot": "089",
                "userName": "360 Purple Aster Street"
              },
              {
                "address": "350 Purple Aster Street,Youngsville,27596",
                "lot": "090",
                "userName": "350 Purple Aster Street"
              },
              {
                "address": "340 Purple Aster Street,Youngsville,27596",
                "lot": "091",
                "userName": "340 Purple Aster Street"
              },
              {
                "address": "140 Shooting Star Trail,Youngsville,27596",
                "lot": "121",
                "userName": "140 Shooting Star Trail"
              },
              {
                "address": "130 Shooting Star Trail,Youngsville,27596",
                "lot": "122",
                "userName": "130 Shooting Star Trail"
              },
              {
                "address": "120 Shooting Star Trail,Youngsville,27596",
                "lot": "123",
                "userName": "120 Shooting Star Trail"
              },
              {
                "address": "110 Shooting Star Trail,Youngsville,27596",
                "lot": "124",
                "userName": "110 Shooting Star Trail"
              },
              {
                "address": "45 Shooting Star Trail,Youngsville,27596",
                "lot": "138",
                "userName": "45 Shooting Star Trail"
              },
              {
                "address": "55 Shooting Star Trail,Youngsville,27596",
                "lot": "139",
                "userName": "55 Shooting Star Trail"
              },
              {
                "address": "65 Shooting Star Trail,Youngsville,27596",
                "lot": "140",
                "userName": "65 Shooting Star Trail"
              },
              {
                "address": "75 Shooting Star Trail,Youngsville,27596",
                "lot": "141",
                "userName": "75 Shooting Star Trail"
              },
              {
                "address": "85 Shooting Star Trail,Youngsville,27596",
                "lot": "142",
                "userName": "85 Shooting Star Trail"
              },
              {
                "address": "95 Shooting Star Trail,Youngsville,27596",
                "lot": "143",
                "userName": "95 Shooting Star Trail"
              },
              {
                "address": "105 Shooting Star Trail,Youngsville,27596",
                "lot": "144",
                "userName": "105 Shooting Star Trail"
              },
              {
                "address": "115 Shooting Star Trail,Youngsville,27596",
                "lot": "145",
                "userName": "115 Shooting Star Trail"
              },
              {
                "address": "125 Shooting Star Trail,Youngsville,27596",
                "lot": "146",
                "userName": "125 Shooting Star Trail"
              },
              {
                "address": "135 Shooting Star Trail,Youngsville,27596",
                "lot": "147",
                "userName": "135 Shooting Star Trail"
              },
              {
                "address": "130 Buttonbush Lane,Youngsville,27596",
                "lot": "148",
                "userName": "130 Buttonbush Lane"
              },
              {
                "address": "120 Buttonbush Lane,Youngsville,27596",
                "lot": "149",
                "userName": "120 Buttonbush Lane"
              },
              {
                "address": "110 Buttonbush Lane,Youngsville,27596",
                "lot": "150",
                "userName": "110 Buttonbush Lane"
              },
              {
                "address": "105 Buttonbush Lane,Youngsville,27596",
                "lot": "170",
                "userName": "105 Buttonbush Lane"
              },
              {
                "address": "115 Buttonbush Lane,Youngsville,27596",
                "lot": "171",
                "userName": "115 Buttonbush Lane"
              },
              {
                "address": "125 Buttonbush Lane,Youngsville,27596",
                "lot": "172",
                "userName": "125 Buttonbush Lane"
              }
            ],
            "tract": "1      "
          }
        ]
      },
      {
        "projectCode": "036",
        "tracts": [
          {
            "lots": [
              {
                "address": "585 Hacksaw Trail,Raleigh,27610",
                "lot": "  3",
                "userName": "585 Hacksaw Trail"
              },
              {
                "address": "583 Hacksaw Trail,Raleigh,27610",
                "lot": "  4",
                "userName": "583 Hacksaw Trail"
              },
              {
                "address": "581 Hacksaw Trail,Raleigh,27610",
                "lot": "  5",
                "userName": "581 Hacksaw Trail"
              },
              {
                "address": "579 Hacksaw Trail,Raleigh,27610",
                "lot": "  6",
                "userName": "579 Hacksaw Trail"
              }
            ],
            "tract": "1      "
          },
          {
            "lots": [
              {
                "address": "311 Hacksaw Trl,Raleigh,27610",
                "lot": "095",
                "userName": "311 Hacksaw Trl"
              }
            ],
            "tract": "13     "
          },
          {
            "lots": [
              {
                "address": "305 Hacksaw Trl,Raleigh,27610",
                "lot": "097",
                "userName": "305 Hacksaw Trl"
              },
              {
                "address": "303 Hacksaw Trl,Raleigh,27610",
                "lot": "098",
                "userName": "303 Hacksaw Trl"
              },
              {
                "address": "301 Hacksaw Trl,Raleigh,27610",
                "lot": "099",
                "userName": "301 Hacksaw Trl"
              }
            ],
            "tract": "14     "
          },
          {
            "lots": [
              {
                "address": "3000 Spline Cir,Raleigh,27610",
                "lot": "100",
                "userName": "3000 Spline Cir"
              },
              {
                "address": "3002 Spline Cir,Raleigh,27610",
                "lot": "101",
                "userName": "3002 Spline Cir"
              },
              {
                "address": "3004 Spline Cir,Raleigh,27610",
                "lot": "102",
                "userName": "3004 Spline Cir"
              }
            ],
            "tract": "15     "
          },
          {
            "lots": [
              {
                "address": "3124 Garner Rd,Raleigh,27610",
                "lot": "058",
                "userName": "3124 Garner Rd"
              },
              {
                "address": "3126 Garner Rd,Raleigh,27610",
                "lot": "059",
                "userName": "3126 Garner Rd"
              },
              {
                "address": "3128 Garner Rd,Raleigh,27610",
                "lot": "060",
                "userName": "3128 Garner Rd"
              }
            ],
            "tract": "36     "
          },
          {
            "lots": [
              {
                "address": "3118 Garner Rd,Raleigh,27610",
                "lot": "001",
                "userName": "3118 Garner Rd"
              },
              {
                "address": "3120 Garner Rd,Raleigh,27610",
                "lot": "002",
                "userName": "3120 Garner Rd"
              }
            ],
            "tract": "37     "
          }
        ]
      },
      {
        "projectCode": "039",
        "tracts": [
          {
            "lots": [
              {
                "address": "837 Emmer Street,Rolesville,27571",
                "lot": "006",
                "userName": "837 Emmer Street"
              },
              {
                "address": "833 Emmer Street,Rolesville,27571",
                "lot": "007",
                "userName": "833 Emmer Street"
              },
              {
                "address": "829 Emmer Street,Rolesville,27571",
                "lot": "008",
                "userName": "829 Emmer Street"
              },
              {
                "address": "825 Emmer Street,Rolesville,27571",
                "lot": "009",
                "userName": "825 Emmer Street"
              },
              {
                "address": "821 Emmer Street,Rolesville,27571",
                "lot": "010",
                "userName": "821 Emmer Street"
              },
              {
                "address": "813 Emmer Street,Rolesville,27571",
                "lot": "012",
                "userName": "813 Emmer Street"
              },
              {
                "address": "809 Emmer Street,Rolesville,27571",
                "lot": "013",
                "userName": "809 Emmer Street"
              },
              {
                "address": "805 Emmer Street,Rolesville,27571",
                "lot": "014",
                "userName": "805 Emmer Street"
              },
              {
                "address": "801 Emmer Street,Rolesville,27571",
                "lot": "015",
                "userName": "801 Emmer Street"
              },
              {
                "address": "769 Emmer Street,Rolesville,27571",
                "lot": "016",
                "userName": "769 Emmer Street"
              },
              {
                "address": "765 Emmer Street,Rolesville,27571",
                "lot": "017",
                "userName": "765 Emmer Street"
              },
              {
                "address": "753 Emmer Street,Rolesville,27571",
                "lot": "020",
                "userName": "753 Emmer Street"
              },
              {
                "address": "737 Emmer Street,Rolesville,27571",
                "lot": "024",
                "userName": "737 Emmer Street"
              },
              {
                "address": "733 Emmer Street,Rolesville,27571",
                "lot": "025",
                "userName": "733 Emmer Street"
              },
              {
                "address": "729 Emmer Street,Rolesville,27571",
                "lot": "026",
                "userName": "729 Emmer Street"
              },
              {
                "address": "625 Emmer Street,Rolesville,27571",
                "lot": "035",
                "userName": "625 Emmer Street"
              },
              {
                "address": "204 Windsor Mill Road,Rolesville,27571",
                "lot": "046",
                "userName": "204 Windsor Mill Road"
              },
              {
                "address": "208 Windsor Mill Road,Rolesville,27571",
                "lot": "047",
                "userName": "208 Windsor Mill Road"
              },
              {
                "address": "212 Windsor Mill Road,Rolesville,27571",
                "lot": "048",
                "userName": "212 Windsor Mill Road"
              },
              {
                "address": "216 Windsor Mill Road,Rolesville,27571",
                "lot": "049",
                "userName": "216 Windsor Mill Road"
              },
              {
                "address": "220 Windsor Mill Road,Rolesville,27571",
                "lot": "050",
                "userName": "220 Windsor Mill Road"
              },
              {
                "address": "224 Windsor Mill Road,Rolesville,27571",
                "lot": "051",
                "userName": "224 Windsor Mill Road"
              },
              {
                "address": "248 Windsor Mill Road,Rolesville,27571",
                "lot": "057",
                "userName": "248 Windsor Mill Road"
              },
              {
                "address": "249 Windsor Mill Road,Rolesville,27571",
                "lot": "062",
                "userName": "249 Windsor Mill Road"
              },
              {
                "address": "245 Windsor Mill Road,Rolesville,27571",
                "lot": "063",
                "userName": "245 Windsor Mill Road"
              },
              {
                "address": "241 Windsor Mill Road,Rolesville,27571",
                "lot": "064",
                "userName": "241 Windsor Mill Road"
              },
              {
                "address": "237 Windsor Mill Road,Rolesville,27571",
                "lot": "065",
                "userName": "237 Windsor Mill Road"
              },
              {
                "address": "193 Shadowdale Lane,Rolesville,27571",
                "lot": "070",
                "userName": "193 Shadowdale Lane"
              },
              {
                "address": "177 Shadowdale Lane,Rolesville,27571",
                "lot": "074",
                "userName": "177 Shadowdale Lane"
              },
              {
                "address": "173 Shadowdale Lane,Rolesville,27571",
                "lot": "075",
                "userName": "173 Shadowdale Lane"
              },
              {
                "address": "113 Shadowdale Lane,Rolesville,27571",
                "lot": "090",
                "userName": "113 Shadowdale Lane"
              }
            ],
            "tract": "198"
          }
        ]
      },
      {
        "projectCode": "045",
        "tracts": [
          {
            "lots": [
              {
                "address": "504 Thorny Branch Drive,Raleigh,27603",
                "lot": "014",
                "userName": "504 Thorny Branch Drive"
              },
              {
                "address": "457 Thorny Branch Drive,Raleigh,27603",
                "lot": "029",
                "userName": "457 Thorny Branch Drive"
              },
              {
                "address": "433 Thorny Branch Drive,Raleigh,27603",
                "lot": "032",
                "userName": "433 Thorny Branch Drive"
              },
              {
                "address": "425 Thorny Branch Drive,Raleigh,27603",
                "lot": "033",
                "userName": "425 Thorny Branch Drive"
              },
              {
                "address": "420 Thorny Branch Drive,Raleigh,27603",
                "lot": "046",
                "userName": "420 Thorny Branch Drive"
              },
              {
                "address": "452 Thorny Branch Drive,Raleigh,27603",
                "lot": "052",
                "userName": "452 Thorny Branch Drive"
              },
              {
                "address": "456 Thorny Branch Drive,Raleigh,27603",
                "lot": "053",
                "userName": "456 Thorny Branch Drive"
              },
              {
                "address": "476 Thorny Branch Drive,Raleigh,27603",
                "lot": "058",
                "userName": "476 Thorny Branch Drive"
              },
              {
                "address": "6125 Oak Passage Drive,Raleigh,27603",
                "lot": "076",
                "userName": "6125 Oak Passage Drive"
              },
              {
                "address": "6121 Oak Passage Drive,Raleigh,27603",
                "lot": "077",
                "userName": "6121 Oak Passage Drive"
              },
              {
                "address": "6117 Oak Passage Drive,Raleigh,27603",
                "lot": "078",
                "userName": "6117 Oak Passage Drive"
              },
              {
                "address": "6113 Oak Passage Drive,Raleigh,27603",
                "lot": "079",
                "userName": "6113 Oak Passage Drive"
              }
            ],
            "tract": "1      "
          }
        ]
      },
      {
        "projectCode": "047",
        "tracts": [
          {
            "lots": [
              {
                "address": "100 Golden Gate Lane,Chapel Hill,27516",
                "lot": "010",
                "userName": "100 Golden Gate Lane"
              },
              {
                "address": "104 Golden Gate Lane,Chapel Hill,27516",
                "lot": "012",
                "userName": "104 Golden Gate Lane"
              },
              {
                "address": "106 Golden Gate Lane,Chapel Hill,27516",
                "lot": "013",
                "userName": "106 Golden Gate Lane"
              }
            ],
            "tract": "1      "
          },
          {
            "lots": [
              {
                "address": "102 Golden Gate Lane,Chapel Hill,27516",
                "lot": "011",
                "userName": "102 Golden Gate Lane"
              }
            ],
            "tract": "ADULOW "
          }
        ]
      },
      {
        "projectCode": "048",
        "tracts": [
          {
            "lots": [
              {
                "address": "1100 Bellpit Road,Durham,27703",
                "lot": "005",
                "userName": "1100 Bellpit Road"
              },
              {
                "address": "809 Doggard Lane,Durham,27703",
                "lot": "009",
                "userName": "809 Doggard Lane"
              },
              {
                "address": "805 Doggard Lane,Durham,27703",
                "lot": "010",
                "userName": "805 Doggard Lane"
              },
              {
                "address": "801 Doggard Lane,Durham,27703",
                "lot": "011",
                "userName": "801 Doggard Lane"
              },
              {
                "address": "2213 Rockface Way,Durham,27703",
                "lot": "013",
                "userName": "2213 Rockface Way"
              },
              {
                "address": "2209 Rockface Way,Durham,27703",
                "lot": "014",
                "userName": "2209 Rockface Way"
              },
              {
                "address": "2205 Rockface Way,Durham,27703",
                "lot": "015",
                "userName": "2205 Rockface Way"
              },
              {
                "address": "2201 Rockface Way,Durham,27703",
                "lot": "016",
                "userName": "2201 Rockface Way"
              },
              {
                "address": "2126 Rockface Way,Durham,27703",
                "lot": "051",
                "userName": "2126 Rockface Way"
              },
              {
                "address": "2130 Rockface Way,Durham,27703",
                "lot": "052",
                "userName": "2130 Rockface Way"
              },
              {
                "address": "2134 Rockface Way,Durham,27703",
                "lot": "053",
                "userName": "2134 Rockface Way"
              },
              {
                "address": "2138 Rockface Way,Durham,27703",
                "lot": "054",
                "userName": "2138 Rockface Way"
              },
              {
                "address": "2142 Rockface Way,Durham,27703",
                "lot": "055",
                "userName": "2142 Rockface Way"
              },
              {
                "address": "2146 Rockface Way,Durham,27703",
                "lot": "056",
                "userName": "2146 Rockface Way"
              },
              {
                "address": "1504 Underbrush Drive,Durham,27703",
                "lot": "058",
                "userName": "1504 Underbrush Drive"
              },
              {
                "address": "1512 Underbrush Drive,Durham,27703",
                "lot": "060",
                "userName": "1512 Underbrush Drive"
              },
              {
                "address": "1536 Underbrush Drive,Durham,27703",
                "lot": "066",
                "userName": "1536 Underbrush Drive"
              },
              {
                "address": "1540 Underbrush Drive,Durham,27703",
                "lot": "067",
                "userName": "1540 Underbrush Drive"
              },
              {
                "address": "1544 Underbrush Drive,Durham,27703",
                "lot": "068",
                "userName": "1544 Underbrush Drive"
              },
              {
                "address": "1548 Underbrush Drive,Durham,27703",
                "lot": "069",
                "userName": "1548 Underbrush Drive"
              },
              {
                "address": "1552 Underbrush Drive,Durham,27703",
                "lot": "070",
                "userName": "1552 Underbrush Drive"
              },
              {
                "address": "1600 Underbrush Drive,Durham,27703",
                "lot": "071",
                "userName": "1600 Underbrush Drive"
              },
              {
                "address": "1604 Underbrush Drive,Durham,27703",
                "lot": "072",
                "userName": "1604 Underbrush Drive"
              },
              {
                "address": "1608 Underbrush Drive,Durham,27703",
                "lot": "073",
                "userName": "1608 Underbrush Drive"
              },
              {
                "address": "1533 Underbrush Drive,Durham,27703",
                "lot": "079",
                "userName": "1533 Underbrush Drive"
              },
              {
                "address": "1529 Underbrush Drive,Durham,27703",
                "lot": "080",
                "userName": "1529 Underbrush Drive"
              },
              {
                "address": "1525 Underbrush Drive,Durham,27703",
                "lot": "081",
                "userName": "1525 Underbrush Drive"
              },
              {
                "address": "1521 Underbrush Drive,Durham,27703",
                "lot": "082",
                "userName": "1521 Underbrush Drive"
              },
              {
                "address": "1517 Underbrush Drive,Durham,27703",
                "lot": "083",
                "userName": "1517 Underbrush Drive"
              },
              {
                "address": "1513 Underbrush Drive,Durham,27703",
                "lot": "084",
                "userName": "1513 Underbrush Drive"
              },
              {
                "address": "1509 Underbrush Drive,Durham,27703",
                "lot": "085",
                "userName": "1509 Underbrush Drive"
              },
              {
                "address": "1505 Underbrush Drive,Durham,27703",
                "lot": "086",
                "userName": "1505 Underbrush Drive"
              },
              {
                "address": "1501 Underbrush Drive,Durham,27703",
                "lot": "087",
                "userName": "1501 Underbrush Drive"
              },
              {
                "address": "1421 Underbrush Drive,Durham,27703",
                "lot": "088",
                "userName": "1421 Underbrush Drive"
              },
              {
                "address": "1417 Underbrush Drive,Durham,27703",
                "lot": "089",
                "userName": "1417 Underbrush Drive"
              },
              {
                "address": "1409 Underbrush Drive,Durham,27703",
                "lot": "091",
                "userName": "1409 Underbrush Drive"
              },
              {
                "address": "1357 Underbrush Drive,Durham,27703",
                "lot": "094",
                "userName": "1357 Underbrush Drive"
              }
            ],
            "tract": "1      "
          }
        ]
      },
      {
        "projectCode": "049",
        "tracts": [
          {
            "lots": [
              {
                "address": "2115 Rockface Way,Durham,27703",
                "lot": "017",
                "userName": "2115 Rockface Way"
              },
              {
                "address": "2113 Rockface Way,Durham,27703",
                "lot": "018",
                "userName": "2113 Rockface Way"
              },
              {
                "address": "2111 Rockface Way,Durham,27703",
                "lot": "019",
                "userName": "2111 Rockface Way"
              },
              {
                "address": "2109 Rockface Way,Durham,27703",
                "lot": "020",
                "userName": "2109 Rockface Way"
              },
              {
                "address": "2107 Rockface Way,Durham,27703",
                "lot": "021",
                "userName": "2107 Rockface Way"
              },
              {
                "address": "2105 Rockface Way,Durham,27703",
                "lot": "022",
                "userName": "2105 Rockface Way"
              },
              {
                "address": "2103 Rockface Way,Durham,27703",
                "lot": "023",
                "userName": "2103 Rockface Way"
              },
              {
                "address": "2101 Rockface Way,Durham,27703",
                "lot": "024",
                "userName": "2101 Rockface Way"
              },
              {
                "address": "2025 Rockface Way,Durham,27703",
                "lot": "025",
                "userName": "2025 Rockface Way"
              },
              {
                "address": "2023 Rockface Way,Durham,27703",
                "lot": "026",
                "userName": "2023 Rockface Way"
              },
              {
                "address": "2021 Rockface Way,Durham,27703",
                "lot": "027",
                "userName": "2021 Rockface Way"
              },
              {
                "address": "2019 Rockface Way,Durham,27703",
                "lot": "028",
                "userName": "2019 Rockface Way"
              },
              {
                "address": "2015 Rockface Way,Durham,27703",
                "lot": "029",
                "userName": "2015 Rockface Way"
              },
              {
                "address": "2013 Rockface Way,Durham,27703",
                "lot": "030",
                "userName": "2013 Rockface Way"
              },
              {
                "address": "2011 Rockface Way,Durham,27703",
                "lot": "031",
                "userName": "2011 Rockface Way"
              },
              {
                "address": "2009 Rockface Way,Durham,27703",
                "lot": "032",
                "userName": "2009 Rockface Way"
              },
              {
                "address": "2007 Rockface Way,Durham,27703",
                "lot": "033",
                "userName": "2007 Rockface Way"
              },
              {
                "address": "2005 Rockface Way,Durham,27703",
                "lot": "034",
                "userName": "2005 Rockface Way"
              },
              {
                "address": "2102 Rockface Way,Durham,27703",
                "lot": "039",
                "userName": "2102 Rockface Way"
              },
              {
                "address": "2104 Rockface Way,Durham,27703",
                "lot": "040",
                "userName": "2104 Rockface Way"
              },
              {
                "address": "2106 Rockface Way,Durham,27703",
                "lot": "041",
                "userName": "2106 Rockface Way"
              },
              {
                "address": "2108 Rockface Way,Durham,27703",
                "lot": "042",
                "userName": "2108 Rockface Way"
              },
              {
                "address": "2110 Rockface Way,Durham,27703",
                "lot": "043",
                "userName": "2110 Rockface Way"
              },
              {
                "address": "2112 Rockface Way,Durham,27703",
                "lot": "044",
                "userName": "2112 Rockface Way"
              },
              {
                "address": "2114 Rockface Way,Durham,27703",
                "lot": "045",
                "userName": "2114 Rockface Way"
              },
              {
                "address": "2116 Rockface Way,Durham,27703",
                "lot": "046",
                "userName": "2116 Rockface Way"
              },
              {
                "address": "2118 Rockface Way,Durham,27703",
                "lot": "047",
                "userName": "2118 Rockface Way"
              },
              {
                "address": "2120 Rockface Way,Durham,27703",
                "lot": "048",
                "userName": "2120 Rockface Way"
              },
              {
                "address": "2122 Rockface Way,Durham,27703",
                "lot": "049",
                "userName": "2122 Rockface Way"
              },
              {
                "address": "2124 Rockface Way,Durham,27703",
                "lot": "050",
                "userName": "2124 Rockface Way"
              }
            ],
            "tract": "1      "
          }
        ]
      },
      {
        "projectCode": "057",
        "tracts": [
          {
            "lots": [
              {
                "address": "1404 Willow Landing Way,Willow Spring,27592",
                "lot": "001",
                "userName": "1404 Willow Landing Way"
              },
              {
                "address": "1408 Willow Landing Way,Willow Spring,27592",
                "lot": "002",
                "userName": "1408 Willow Landing Way"
              },
              {
                "address": "1412 Willow Landing Way,Willow Spring,27592",
                "lot": "003",
                "userName": "1412 Willow Landing Way"
              },
              {
                "address": "1420 Willow Landing Way,Willow Spring,27592",
                "lot": "004",
                "userName": "1420 Willow Landing Way"
              },
              {
                "address": "7509 Frasier Fir Place,Willow Spring,27592",
                "lot": "008",
                "userName": "7509 Frasier Fir Place"
              },
              {
                "address": "7600 Redwood Ridge Way,Willow Spring,27592",
                "lot": "014",
                "userName": "7600 Redwood Ridge Way"
              },
              {
                "address": "7632 Redwood Ridge Way,Willow Spring,27592",
                "lot": "021",
                "userName": "7632 Redwood Ridge Way"
              },
              {
                "address": "7636 Redwood Ridge Way,Willow Spring,27592",
                "lot": "022",
                "userName": "7636 Redwood Ridge Way"
              },
              {
                "address": "7640 Redwood Ridge Way,Willow Spring,27592",
                "lot": "023",
                "userName": "7640 Redwood Ridge Way"
              },
              {
                "address": "7644 Redwood Ridge Way,Willow Spring,27592",
                "lot": "024",
                "userName": "7644 Redwood Ridge Way"
              },
              {
                "address": "7648 Redwood Ridge Way,Willow Spring,27592",
                "lot": "025",
                "userName": "7648 Redwood Ridge Way"
              },
              {
                "address": "7652 Redwood Ridge Way,Willow Spring,27592",
                "lot": "026",
                "userName": "7652 Redwood Ridge Way"
              },
              {
                "address": "1620 Willow Landing Way,Willow Spring,27592",
                "lot": "027",
                "userName": "1620 Willow Landing Way"
              },
              {
                "address": "1616 Willow Landing Way,Willow Spring,27592",
                "lot": "028",
                "userName": "1616 Willow Landing Way"
              },
              {
                "address": "1612 Willow Landing Way,Willow Spring,27592",
                "lot": "029",
                "userName": "1612 Willow Landing Way"
              },
              {
                "address": "1604 Willow Landing Way,Willow Spring,27592",
                "lot": "031",
                "userName": "1604 Willow Landing Way"
              },
              {
                "address": "1600 Willow Landing Way,Willow Spring,27592",
                "lot": "032",
                "userName": "1600 Willow Landing Way"
              },
              {
                "address": "7633 Redwood Ridge Way,Willow Spring,27592",
                "lot": "037",
                "userName": "7633 Redwood Ridge Way"
              },
              {
                "address": "7637 Redwood Ridge Way,Willow Spring,27592",
                "lot": "038",
                "userName": "7637 Redwood Ridge Way"
              },
              {
                "address": "7717 Chestnut Creek Court,Willow Spring,27592",
                "lot": "039",
                "userName": "7717 Chestnut Creek Court"
              },
              {
                "address": "7713 Chestnut Creek Court,Willow Spring,27592",
                "lot": "040",
                "userName": "7713 Chestnut Creek Court"
              },
              {
                "address": "7705 Chestnut Creek Court,Willow Spring,27592",
                "lot": "041",
                "userName": "7705 Chestnut Creek Court"
              }
            ],
            "tract": "115"
          }
        ]
      }
    ]
  },
  {
    "companyCode": "3016 ",
    "projects": [
      {
        "projectCode": "017",
        "tracts": [
          {
            "lots": [
              {
                "address": "3409 Keechi Creek Dr (SC),Celina,75078",
                "lot": " 14",
                "userName": "3409 Keechi Creek Dr (SC)"
              }
            ],
            "tract": "F-1    "
          }
        ]
      },
      {
        "projectCode": "020",
        "tracts": [
          {
            "lots": [
              {
                "address": "621 Windsor Dr,Princeton,75407",
                "lot": "001",
                "userName": "621 Windsor Dr"
              },
              {
                "address": "635 Windsor Dr,Princeton,75407",
                "lot": "002",
                "userName": "635 Windsor Dr"
              },
              {
                "address": "663 Windsor Dr,Princeton,75407",
                "lot": "004",
                "userName": "663 Windsor Dr"
              },
              {
                "address": "677 Windsor Dr,Princeton,75407",
                "lot": "005",
                "userName": "677 Windsor Dr"
              },
              {
                "address": "691 Windsor Dr,Princeton,75407",
                "lot": "006",
                "userName": "691 Windsor Dr"
              },
              {
                "address": "692 Jupe Way,Princeton,75407",
                "lot": "025",
                "userName": "692 Jupe Way"
              },
              {
                "address": "678 Jupe Way,Princeton,75407",
                "lot": "026",
                "userName": "678 Jupe Way"
              },
              {
                "address": "664 Jupe Way,Princeton,75407",
                "lot": "027",
                "userName": "664 Jupe Way"
              },
              {
                "address": "650 Jupe Way,Princeton,75407",
                "lot": "028",
                "userName": "650 Jupe Way"
              },
              {
                "address": "636 Jupe Way,Princeton,75407",
                "lot": "029",
                "userName": "636 Jupe Way"
              },
              {
                "address": "622 Jupe Way,Princeton,75407",
                "lot": "030",
                "userName": "622 Jupe Way"
              }
            ],
            "tract": "10-1   "
          },
          {
            "lots": [
              {
                "address": "1444 Kingsbridge Dr,Princeton,75407",
                "lot": "008",
                "userName": "1444 Kingsbridge Dr"
              },
              {
                "address": "1426 Kingsbridge Dr,Princeton,75407",
                "lot": "009",
                "userName": "1426 Kingsbridge Dr"
              },
              {
                "address": "1408 Kingsbridge Dr,Princeton,75407",
                "lot": "010",
                "userName": "1408 Kingsbridge Dr"
              },
              {
                "address": "1382 Kingsbridge Dr,Princeton,75407",
                "lot": "011",
                "userName": "1382 Kingsbridge Dr"
              },
              {
                "address": "1364 Kingsbridge Dr,Princeton,75407",
                "lot": "012",
                "userName": "1364 Kingsbridge Dr"
              },
              {
                "address": "1346 Kingsbridge Dr,Princeton,75407",
                "lot": "013",
                "userName": "1346 Kingsbridge Dr"
              },
              {
                "address": "358 Boroughbridge Dr,Princeton,75407",
                "lot": "016",
                "userName": "358 Boroughbridge Dr"
              },
              {
                "address": "370 Boroughbridge Dr,Princeton,75407",
                "lot": "017",
                "userName": "370 Boroughbridge Dr"
              },
              {
                "address": "382 Boroughbridge Dr,Princeton,75407",
                "lot": "018",
                "userName": "382 Boroughbridge Dr"
              },
              {
                "address": "394 Boroughbridge Dr,Princeton,75407",
                "lot": "019",
                "userName": "394 Boroughbridge Dr"
              },
              {
                "address": "406 Boroughbridge Dr,Princeton,75407",
                "lot": "020",
                "userName": "406 Boroughbridge Dr"
              },
              {
                "address": "418 Boroughbridge Dr,Princeton,75407",
                "lot": "021",
                "userName": "418 Boroughbridge Dr"
              },
              {
                "address": "440 Boroughbridge Dr,Princeton,75407",
                "lot": "022",
                "userName": "440 Boroughbridge Dr"
              },
              {
                "address": "452 Boroughbridge Dr,Princeton,75407",
                "lot": "023",
                "userName": "452 Boroughbridge Dr"
              },
              {
                "address": "464 Boroughbridge Dr,Princeton,75407",
                "lot": "024",
                "userName": "464 Boroughbridge Dr"
              },
              {
                "address": "476 Boroughbridge Dr,Princeton,75407",
                "lot": "025",
                "userName": "476 Boroughbridge Dr"
              },
              {
                "address": "488 Boroughbridge Dr,Princeton,75407",
                "lot": "026",
                "userName": "488 Boroughbridge Dr"
              }
            ],
            "tract": "1-1    "
          },
          {
            "lots": [
              {
                "address": "1443 Kingsbridge Dr,Princeton,75407",
                "lot": "004",
                "userName": "1443 Kingsbridge Dr"
              },
              {
                "address": "1425 Kingsbridge,Princeton,75407",
                "lot": "005",
                "userName": "1425 Kingsbridge"
              },
              {
                "address": "1407 Kingsbridge Dr,Princeton,75407",
                "lot": "006",
                "userName": "1407 Kingsbridge Dr"
              },
              {
                "address": "1381 Kingsbridge Dr,Princeton,75407",
                "lot": "007",
                "userName": "1381 Kingsbridge Dr"
              },
              {
                "address": "365 Boroughbridge Dr,Princeton,75407",
                "lot": "008",
                "userName": "365 Boroughbridge Dr"
              },
              {
                "address": "383 Boroughbridge Dr,Princeton,75407",
                "lot": "009",
                "userName": "383 Boroughbridge Dr"
              },
              {
                "address": "395 Boroughbridge Dr,Princeton,75407",
                "lot": "010",
                "userName": "395 Boroughbridge Dr"
              },
              {
                "address": "409 Boroughbridge Dr,Princeton,75407",
                "lot": "011",
                "userName": "409 Boroughbridge Dr"
              },
              {
                "address": "421 Boroughbridge Dr,Princeton,75407",
                "lot": "012",
                "userName": "421 Boroughbridge Dr"
              },
              {
                "address": "424 Princewood Dr,Princeton,75407",
                "lot": "013",
                "userName": "424 Princewood Dr"
              },
              {
                "address": "412 Princewood Dr,Princeton,75407",
                "lot": "014",
                "userName": "412 Princewood Dr"
              },
              {
                "address": "400 Princewood Dr,Princeton,75407",
                "lot": "015",
                "userName": "400 Princewood Dr"
              }
            ],
            "tract": "2-1    "
          },
          {
            "lots": [
              {
                "address": "353 Princewood Dr,Princeton,75407",
                "lot": "003",
                "userName": "353 Princewood Dr"
              },
              {
                "address": "365 Princewood Dr,Princeton,75407",
                "lot": "004",
                "userName": "365 Princewood Dr"
              },
              {
                "address": "377 Princewood Dr,Princeton,75407",
                "lot": "005",
                "userName": "377 Princewood Dr"
              },
              {
                "address": "389 Princewood Dr,Princeton,75407",
                "lot": "006",
                "userName": "389 Princewood Dr"
              },
              {
                "address": "401 Princewood Dr,Princeton,75407",
                "lot": "007",
                "userName": "401 Princewood Dr"
              },
              {
                "address": "413 Princewood Dr,Princeton,75407",
                "lot": "008",
                "userName": "413 Princewood Dr"
              },
              {
                "address": "425 Princewood Dr,Princeton,75407",
                "lot": "009",
                "userName": "425 Princewood Dr"
              },
              {
                "address": "437 Princewood Dr,Princeton,75407",
                "lot": "010",
                "userName": "437 Princewood Dr"
              },
              {
                "address": "449 Princewood Dr,Princeton,75407",
                "lot": "011",
                "userName": "449 Princewood Dr"
              },
              {
                "address": "461 Princewood Dr,Princeton,75407",
                "lot": "012",
                "userName": "461 Princewood Dr"
              },
              {
                "address": "473 Princewood Dr,Princeton,75407",
                "lot": "013",
                "userName": "473 Princewood Dr"
              },
              {
                "address": "485 Princewood Dr,Princeton,75407",
                "lot": "014",
                "userName": "485 Princewood Dr"
              }
            ],
            "tract": "3-1    "
          },
          {
            "lots": [
              {
                "address": "621 Jupe Way,Princeton,75407",
                "lot": "059",
                "userName": "621 Jupe Way"
              },
              {
                "address": "635 Jupe Way,Princeton,75407",
                "lot": "060",
                "userName": "635 Jupe Way"
              },
              {
                "address": "649 Jupe Way,Princeton,75407",
                "lot": "061",
                "userName": "649 Jupe Way"
              },
              {
                "address": "663 Jupe Way,Princeton,75407",
                "lot": "062",
                "userName": "663 Jupe Way"
              }
            ],
            "tract": "4-1    "
          },
          {
            "lots": [
              {
                "address": "692 Windsor Dr,Princeton,75407",
                "lot": "025",
                "userName": "692 Windsor Dr"
              },
              {
                "address": "678 Windsor Dr,Princeton,75407",
                "lot": "026",
                "userName": "678 Windsor Dr"
              },
              {
                "address": "664 Windsor Dr,Princeton,75407",
                "lot": "027",
                "userName": "664 Windsor Dr"
              },
              {
                "address": "650 Windsor Dr,Princeton,75407",
                "lot": "028",
                "userName": "650 Windsor Dr"
              },
              {
                "address": "636 Windsor Dr,Princeton,75407",
                "lot": "029",
                "userName": "636 Windsor Dr"
              },
              {
                "address": "622 Windsor Dr,Princeton,75407",
                "lot": "030",
                "userName": "622 Windsor Dr"
              }
            ],
            "tract": "9-1    "
          }
        ]
      },
      {
        "projectCode": "034",
        "tracts": [
          {
            "lots": [
              {
                "address": "952 Adair Dr,Aubrey,76227",
                "lot": " 38",
                "userName": "952 Adair Dr"
              },
              {
                "address": "968 Adair Dr,Aubrey,76227",
                "lot": " 42",
                "userName": "968 Adair Dr"
              },
              {
                "address": "984 Adair Dr,Aubrey,76227",
                "lot": " 46",
                "userName": "984 Adair Dr"
              },
              {
                "address": "2300 Wheeler Ave,Aubrey,76227",
                "lot": " 48",
                "userName": "2300 Wheeler Ave"
              },
              {
                "address": "2304 Wheeler Ave,Aubrey,76227",
                "lot": " 49",
                "userName": "2304 Wheeler Ave"
              },
              {
                "address": "2308 Wheeler Ave,Aubrey,76227",
                "lot": " 50",
                "userName": "2308 Wheeler Ave"
              }
            ],
            "tract": "AAA-3B1"
          },
          {
            "lots": [
              {
                "address": "912 Burnett Dr,Aubrey,76227",
                "lot": "  4",
                "userName": "912 Burnett Dr"
              },
              {
                "address": "920 Burnett Dr,Aubrey,76227",
                "lot": "  6",
                "userName": "920 Burnett Dr"
              },
              {
                "address": "924 Burnett Dr,Aubrey,76227",
                "lot": "  7",
                "userName": "924 Burnett Dr"
              },
              {
                "address": "932 Burnett Dr,Aubrey,76227",
                "lot": "  9",
                "userName": "932 Burnett Dr"
              },
              {
                "address": "940 Burnett Dr,Aubrey,76227",
                "lot": " 11",
                "userName": "940 Burnett Dr"
              },
              {
                "address": "944 Burnett Dr,Aubrey,76227",
                "lot": " 12",
                "userName": "944 Burnett Dr"
              },
              {
                "address": "948 Burnett Dr,Aubrey,76227",
                "lot": " 13",
                "userName": "948 Burnett Dr"
              },
              {
                "address": "956 Burnett Dr,Aubrey,76227",
                "lot": " 15",
                "userName": "956 Burnett Dr"
              },
              {
                "address": "960 Burnett Dr,Aubrey,76227",
                "lot": " 16",
                "userName": "960 Burnett Dr"
              },
              {
                "address": "964 Burnett Dr,Aubrey,76227",
                "lot": " 17",
                "userName": "964 Burnett Dr"
              },
              {
                "address": "976 Burnett Dr,Aubrey,76227",
                "lot": " 20",
                "userName": "976 Burnett Dr"
              },
              {
                "address": "980 Burnett Dr,Aubrey,76227",
                "lot": " 21",
                "userName": "980 Burnett Dr"
              },
              {
                "address": "977 Brock Dr,Aubrey,76227",
                "lot": " 25",
                "userName": "977 Brock Dr"
              },
              {
                "address": "965 Brock Dr,Aubrey,76227",
                "lot": " 28",
                "userName": "965 Brock Dr"
              },
              {
                "address": "953 Brock Dr,Aubrey,76227",
                "lot": " 31",
                "userName": "953 Brock Dr"
              },
              {
                "address": "945 Brock Dr,Aubrey,76227",
                "lot": " 33",
                "userName": "945 Brock Dr"
              },
              {
                "address": "933 Brock Dr,Aubrey,76227",
                "lot": " 36",
                "userName": "933 Brock Dr"
              },
              {
                "address": "929 Brock Dr,Aubrey,76227",
                "lot": " 37",
                "userName": "929 Brock Dr"
              }
            ],
            "tract": "BBB-3B1"
          },
          {
            "lots": [
              {
                "address": "928 Brock Dr,Aubrey,76227",
                "lot": "  8",
                "userName": "928 Brock Dr"
              },
              {
                "address": "944 Brock Dr,Aubrey,76227",
                "lot": " 12",
                "userName": "944 Brock Dr"
              },
              {
                "address": "968 Brock Dr,Aubrey,76227",
                "lot": " 18",
                "userName": "968 Brock Dr"
              },
              {
                "address": "961 Adair Dr,Aubrey,76227",
                "lot": " 29",
                "userName": "961 Adair Dr"
              },
              {
                "address": "949 Adair Dr,Aubrey,76227",
                "lot": " 32",
                "userName": "949 Adair Dr"
              }
            ],
            "tract": "DDD-3B1"
          },
          {
            "lots": [
              {
                "address": "1845 Aslynn Cr,Aubrey,76227",
                "lot": " 11",
                "userName": "1845 Aslynn Cr"
              }
            ],
            "tract": "E-3B1  "
          },
          {
            "lots": [
              {
                "address": "1842 Aslynn Cr,Aubrey,76227",
                "lot": " 43",
                "userName": "1842 Aslynn Cr"
              },
              {
                "address": "1846 Aslynn Cr,Aubrey,76227",
                "lot": " 44",
                "userName": "1846 Aslynn Cr"
              },
              {
                "address": "3012 Aslynn Cr - cnr,Aubrey,76227",
                "lot": " 52",
                "userName": "3012 Aslynn Cr - cnr"
              }
            ],
            "tract": "F-3B1  "
          },
          {
            "lots": [
              {
                "address": "2525 Warren Ln - cnr,Aubrey,76227",
                "lot": "  8",
                "userName": "2525 Warren Ln - cnr"
              },
              {
                "address": "2521 Warren Ln,Aubrey,76227",
                "lot": "  9",
                "userName": "2521 Warren Ln"
              },
              {
                "address": "2517 Warren Ln,Aubrey,76227",
                "lot": " 10",
                "userName": "2517 Warren Ln"
              },
              {
                "address": "2513 Warren Ln,Aubrey,76227",
                "lot": " 11",
                "userName": "2513 Warren Ln"
              },
              {
                "address": "2509 Warren Ln,Aubrey,76227",
                "lot": " 12",
                "userName": "2509 Warren Ln"
              },
              {
                "address": "2505 Warren Ln,Aubrey,76227",
                "lot": " 13",
                "userName": "2505 Warren Ln"
              },
              {
                "address": "2501 Warren Ln - cnr,Aubrey,76227",
                "lot": " 14",
                "userName": "2501 Warren Ln - cnr"
              }
            ],
            "tract": "VV-3B1 "
          },
          {
            "lots": [
              {
                "address": "2500 Warren Ln - cnr,Aubrey,76227",
                "lot": "  1",
                "userName": "2500 Warren Ln - cnr"
              },
              {
                "address": "2504 Warren Ln,Aubrey,76227",
                "lot": "  2",
                "userName": "2504 Warren Ln"
              },
              {
                "address": "2508 Warren Ln,Aubrey,76227",
                "lot": "  3",
                "userName": "2508 Warren Ln"
              },
              {
                "address": "2512 Warren Ln,Aubrey,76227",
                "lot": "  4",
                "userName": "2512 Warren Ln"
              },
              {
                "address": "2516 Warren Ln,Aubrey,76227",
                "lot": "  5",
                "userName": "2516 Warren Ln"
              },
              {
                "address": "2524 Warren Ln - cnr,Aubrey,76227",
                "lot": "  7",
                "userName": "2524 Warren Ln - cnr"
              },
              {
                "address": "2521 Wayne Ave,Aubrey,76227",
                "lot": "  9",
                "userName": "2521 Wayne Ave"
              },
              {
                "address": "2513 Wayne Ave,Aubrey,76227",
                "lot": " 11",
                "userName": "2513 Wayne Ave"
              },
              {
                "address": "2509 Wayne Ave,Aubrey,76227",
                "lot": " 12",
                "userName": "2509 Wayne Ave"
              },
              {
                "address": "2505 Wayne Ave,Aubrey,76227",
                "lot": " 13",
                "userName": "2505 Wayne Ave"
              },
              {
                "address": "2501 Wayne Ave - cnr,Aubrey,76227",
                "lot": " 14",
                "userName": "2501 Wayne Ave - cnr"
              }
            ],
            "tract": "WW-3B1 "
          },
          {
            "lots": [
              {
                "address": "2500 Wayne Ave - cnr,Aubrey,76227",
                "lot": "  1",
                "userName": "2500 Wayne Ave - cnr"
              },
              {
                "address": "2504 Wayne Ave,Aubrey,76227",
                "lot": "  2",
                "userName": "2504 Wayne Ave"
              },
              {
                "address": "2508 Wayne Ave,Aubrey,76227",
                "lot": "  3",
                "userName": "2508 Wayne Ave"
              },
              {
                "address": "2512 Wayne Ave,Aubrey,76227",
                "lot": "  4",
                "userName": "2512 Wayne Ave"
              },
              {
                "address": "2516 Wayne Ave,Aubrey,76227",
                "lot": "  5",
                "userName": "2516 Wayne Ave"
              },
              {
                "address": "2520 Wayne Ave,Aubrey,76227",
                "lot": "  6",
                "userName": "2520 Wayne Ave"
              },
              {
                "address": "2524 Wayne Ave - cnr,Aubrey,76227",
                "lot": "  7",
                "userName": "2524 Wayne Ave - cnr"
              },
              {
                "address": "2521 Wesley Ave,Aubrey,76227",
                "lot": "  9",
                "userName": "2521 Wesley Ave"
              },
              {
                "address": "2517 Wesley Ave,Aubrey,76227",
                "lot": " 10",
                "userName": "2517 Wesley Ave"
              },
              {
                "address": "2513 Wesley Ave,Aubrey,76227",
                "lot": " 11",
                "userName": "2513 Wesley Ave"
              },
              {
                "address": "2509 Wesley Ave,Aubrey,76227",
                "lot": " 12",
                "userName": "2509 Wesley Ave"
              },
              {
                "address": "2505 Wesley Ave,Aubrey,76227",
                "lot": " 13",
                "userName": "2505 Wesley Ave"
              },
              {
                "address": "2501 Wesley Ave - cnr,Aubrey,76227",
                "lot": " 14",
                "userName": "2501 Wesley Ave - cnr"
              }
            ],
            "tract": "XX-3B1 "
          },
          {
            "lots": [
              {
                "address": "2500 Wesley Ave - cnr,Aubrey,76227",
                "lot": "  1",
                "userName": "2500 Wesley Ave - cnr"
              },
              {
                "address": "2504 Wesley Ave,Aubrey,76227",
                "lot": "  2",
                "userName": "2504 Wesley Ave"
              },
              {
                "address": "2508 Wesley Ave,Aubrey,76227",
                "lot": "  3",
                "userName": "2508 Wesley Ave"
              },
              {
                "address": "2512 Wesley Ave,Aubrey,76227",
                "lot": "  4",
                "userName": "2512 Wesley Ave"
              },
              {
                "address": "2516 Wesley Ave,Aubrey,76227",
                "lot": "  5",
                "userName": "2516 Wesley Ave"
              },
              {
                "address": "2520 Wesley Ave,Aubrey,76227",
                "lot": "  6",
                "userName": "2520 Wesley Ave"
              },
              {
                "address": "2524 Wesley Ave - cnr,Aubrey,76227",
                "lot": "  7",
                "userName": "2524 Wesley Ave - cnr"
              },
              {
                "address": "2525 Wheeler Ave - cnr,Aubrey,76227",
                "lot": "  8",
                "userName": "2525 Wheeler Ave - cnr"
              },
              {
                "address": "2517 Wheeler Ave,Aubrey,76227",
                "lot": " 10",
                "userName": "2517 Wheeler Ave"
              },
              {
                "address": "2513 Wheeler Ave,Aubrey,76227",
                "lot": " 11",
                "userName": "2513 Wheeler Ave"
              },
              {
                "address": "2509 Wheeler Ave,Aubrey,76227",
                "lot": " 12",
                "userName": "2509 Wheeler Ave"
              },
              {
                "address": "2505 Wheeler Ave,Aubrey,76227",
                "lot": " 13",
                "userName": "2505 Wheeler Ave"
              },
              {
                "address": "2501 Wheeler Ave - cnr,Aubrey,76227",
                "lot": " 14",
                "userName": "2501 Wheeler Ave - cnr"
              }
            ],
            "tract": "YY-3B1 "
          },
          {
            "lots": [
              {
                "address": "2524 Wheeler Ave - cnr,Aubrey,76227",
                "lot": "  1",
                "userName": "2524 Wheeler Ave - cnr"
              },
              {
                "address": "2516 Wheeler Ave,Aubrey,76227",
                "lot": "  3",
                "userName": "2516 Wheeler Ave"
              },
              {
                "address": "2508 Wheeler Ave,Aubrey,76227",
                "lot": "  5",
                "userName": "2508 Wheeler Ave"
              },
              {
                "address": "2504 Wheeler Ave,Aubrey,76227",
                "lot": "  6",
                "userName": "2504 Wheeler Ave"
              },
              {
                "address": "2416 Wheeler Ave,Aubrey,76227",
                "lot": "  8",
                "userName": "2416 Wheeler Ave"
              }
            ],
            "tract": "ZZ-3B1 "
          }
        ]
      },
      {
        "projectCode": "035",
        "tracts": [
          {
            "lots": [
              {
                "address": "513 Turner Lane,Justin,76247",
                "lot": "  3",
                "userName": "513 Turner Lane"
              },
              {
                "address": "515 Turner Lane,Justin,76247",
                "lot": "  4",
                "userName": "515 Turner Lane"
              },
              {
                "address": "517 Turner Lane,Justin,76247",
                "lot": "  5",
                "userName": "517 Turner Lane"
              },
              {
                "address": "408 Eaton Drive,Justin,76247",
                "lot": "  6",
                "userName": "408 Eaton Drive"
              },
              {
                "address": "406 Eaton Drive,Justin,76247",
                "lot": "  7",
                "userName": "406 Eaton Drive"
              }
            ],
            "tract": "10-1   "
          },
          {
            "lots": [
              {
                "address": "205 Peckham Drive,Justin,76247",
                "lot": " 29",
                "userName": "205 Peckham Drive"
              },
              {
                "address": "210 Colvin Lane,Justin,76247",
                "lot": " 36",
                "userName": "210 Colvin Lane"
              },
              {
                "address": "212 Colvin Lane,Justin,76247",
                "lot": " 37",
                "userName": "212 Colvin Lane"
              },
              {
                "address": "214 Colvin Lane,Justin,76247",
                "lot": " 38",
                "userName": "214 Colvin Lane"
              },
              {
                "address": "222 Colvin Lane,Justin,76247",
                "lot": " 42",
                "userName": "222 Colvin Lane"
              },
              {
                "address": "224 Colvin Lane,Justin,76247",
                "lot": " 43",
                "userName": "224 Colvin Lane"
              }
            ],
            "tract": "7-1    "
          },
          {
            "lots": [
              {
                "address": "307 Laurel Drive,Justin,76247",
                "lot": "  4",
                "userName": "307 Laurel Drive"
              },
              {
                "address": "309 Laurel Drive,Justin,76247",
                "lot": "  5",
                "userName": "309 Laurel Drive"
              }
            ],
            "tract": "8-1    "
          },
          {
            "lots": [
              {
                "address": "401 Eaton Drive,Justin,76247",
                "lot": "  1",
                "userName": "401 Eaton Drive"
              },
              {
                "address": "403 Eaton Drive,Justin,76247",
                "lot": "  2",
                "userName": "403 Eaton Drive"
              },
              {
                "address": "405 Eaton Drive,Justin,76247",
                "lot": "  3",
                "userName": "405 Eaton Drive"
              },
              {
                "address": "304 Laurel Drive,Justin,76247",
                "lot": "  8",
                "userName": "304 Laurel Drive"
              },
              {
                "address": "302 Laurel Drive,Justin,76247",
                "lot": "  9",
                "userName": "302 Laurel Drive"
              },
              {
                "address": "300 Laurel Drive,Justin,76247",
                "lot": " 10",
                "userName": "300 Laurel Drive"
              }
            ],
            "tract": "9-1    "
          }
        ]
      },
      {
        "projectCode": "036",
        "tracts": [
          {
            "lots": [
              {
                "address": "210 Grace Lane,Justin,76247",
                "lot": " 17",
                "userName": "210 Grace Lane"
              },
              {
                "address": "212 Grace Lane,Justin,76247",
                "lot": " 18",
                "userName": "212 Grace Lane"
              },
              {
                "address": "214 Grace Lane,Justin,76247",
                "lot": " 19",
                "userName": "214 Grace Lane"
              },
              {
                "address": "1200 Lancaster Drive,Justin,76247",
                "lot": " 23",
                "userName": "1200 Lancaster Drive"
              },
              {
                "address": "1202 Lancaster Drive,Justin,76247",
                "lot": " 24",
                "userName": "1202 Lancaster Drive"
              },
              {
                "address": "1204 Lancaster Drive,Justin,76247",
                "lot": " 25",
                "userName": "1204 Lancaster Drive"
              }
            ],
            "tract": "1-1    "
          },
          {
            "lots": [
              {
                "address": "506 Claremont Drive,Justin,76247",
                "lot": " 12",
                "userName": "506 Claremont Drive"
              },
              {
                "address": "508 Claremont Drive,Justin,76247",
                "lot": " 13",
                "userName": "508 Claremont Drive"
              },
              {
                "address": "510 Claremont Drive,Justin,76247",
                "lot": " 14",
                "userName": "510 Claremont Drive"
              },
              {
                "address": "518 Claremont Drive,Justin,76247",
                "lot": " 18",
                "userName": "518 Claremont Drive"
              },
              {
                "address": "520 Claremont Drive,Justin,76247",
                "lot": " 19",
                "userName": "520 Claremont Drive"
              }
            ],
            "tract": "11-1   "
          },
          {
            "lots": [
              {
                "address": "906 Wilson Drive,Justin,76247",
                "lot": "  4",
                "userName": "906 Wilson Drive"
              },
              {
                "address": "908 Wilson Drive,Justin,76247",
                "lot": "  5",
                "userName": "908 Wilson Drive"
              },
              {
                "address": "910 Wilson Drive,Justin,76247",
                "lot": "  6",
                "userName": "910 Wilson Drive"
              },
              {
                "address": "521 Claremont Drive,Justin,76247",
                "lot": "  9",
                "userName": "521 Claremont Drive"
              },
              {
                "address": "519 Claremont Drive,Justin,76247",
                "lot": " 10",
                "userName": "519 Claremont Drive"
              },
              {
                "address": "517 Claremont Drive,Justin,76247",
                "lot": " 11",
                "userName": "517 Claremont Drive"
              },
              {
                "address": "507 Claremont Drive,Justin,76247",
                "lot": " 16",
                "userName": "507 Claremont Drive"
              },
              {
                "address": "505 Claremont Drive,Justin,76247",
                "lot": " 17",
                "userName": "505 Claremont Drive"
              },
              {
                "address": "503 Claremont Drive,Justin,76247",
                "lot": " 18",
                "userName": "503 Claremont Drive"
              },
              {
                "address": "501 Claremont Drive,Justin,76247",
                "lot": " 19",
                "userName": "501 Claremont Drive"
              }
            ],
            "tract": "12-1   "
          },
          {
            "lots": [
              {
                "address": "1205 Lancaster Drive,Justin,76247",
                "lot": "  3",
                "userName": "1205 Lancaster Drive"
              },
              {
                "address": "1207 Lancaster Drive,Justin,76247",
                "lot": "  4",
                "userName": "1207 Lancaster Drive"
              },
              {
                "address": "1209 Lancaster Drive,Justin,76247",
                "lot": "  5",
                "userName": "1209 Lancaster Drive"
              },
              {
                "address": "1114 Linwood Drive,Justin,76247",
                "lot": " 16",
                "userName": "1114 Linwood Drive"
              },
              {
                "address": "1112 Linwood Drive,Justin,76247",
                "lot": " 17",
                "userName": "1112 Linwood Drive"
              },
              {
                "address": "1110 Linwood Drive,Justin,76247",
                "lot": " 18",
                "userName": "1110 Linwood Drive"
              }
            ],
            "tract": "2-1    "
          }
        ]
      },
      {
        "projectCode": "039",
        "tracts": [
          {
            "lots": [
              {
                "address": "3918 Belleview Place,Forney,75126",
                "lot": " 14",
                "userName": "3918 Belleview Place"
              },
              {
                "address": "3922 Belleview Place,Forney,75126",
                "lot": " 15",
                "userName": "3922 Belleview Place"
              },
              {
                "address": "3926 Belleview Place,Forney,75126",
                "lot": " 16",
                "userName": "3926 Belleview Place"
              },
              {
                "address": "3930 Belleview Place,Forney,75126",
                "lot": " 17",
                "userName": "3930 Belleview Place"
              }
            ],
            "tract": "2-21   "
          },
          {
            "lots": [
              {
                "address": "3800 Parsons Street,Forney,75126",
                "lot": "  1",
                "userName": "3800 Parsons Street"
              },
              {
                "address": "3804 Parsons Street,Forney,75126",
                "lot": "  2",
                "userName": "3804 Parsons Street"
              },
              {
                "address": "3808 Parsons Street,Forney,75126",
                "lot": "  3",
                "userName": "3808 Parsons Street"
              },
              {
                "address": "3812 Parsons Street,Forney,75126",
                "lot": "  4",
                "userName": "3812 Parsons Street"
              },
              {
                "address": "3801 Belleview Place,Forney,75126",
                "lot": " 11",
                "userName": "3801 Belleview Place"
              },
              {
                "address": "3805 Belleview Place,Forney,75126",
                "lot": " 12",
                "userName": "3805 Belleview Place"
              },
              {
                "address": "3809 Belleview Place,Forney,75126",
                "lot": " 13",
                "userName": "3809 Belleview Place"
              },
              {
                "address": "3813 Belleview Place,Forney,75126",
                "lot": " 14",
                "userName": "3813 Belleview Place"
              },
              {
                "address": "3817 Belleview Place,Forney,75126",
                "lot": " 15",
                "userName": "3817 Belleview Place"
              },
              {
                "address": "3821 Belleview Place,Forney,75126",
                "lot": " 16",
                "userName": "3821 Belleview Place"
              },
              {
                "address": "3825 Belleview Place,Forney,75126",
                "lot": " 17",
                "userName": "3825 Belleview Place"
              },
              {
                "address": "3829 Belleview Place,Forney,75126",
                "lot": " 18",
                "userName": "3829 Belleview Place"
              },
              {
                "address": "3833 Belleview Place,Forney,75126",
                "lot": " 19",
                "userName": "3833 Belleview Place"
              }
            ],
            "tract": "3-21   "
          },
          {
            "lots": [
              {
                "address": "3901 Belleview Place,Forney,75126",
                "lot": " 15",
                "userName": "3901 Belleview Place"
              },
              {
                "address": "3905 Belleview Place,Forney,75126",
                "lot": " 16",
                "userName": "3905 Belleview Place"
              },
              {
                "address": "3909 Belleview Place,Forney,75126",
                "lot": " 17",
                "userName": "3909 Belleview Place"
              },
              {
                "address": "3913 Belleview Place,Forney,75126",
                "lot": " 18",
                "userName": "3913 Belleview Place"
              },
              {
                "address": "3917 Belleview Place,Forney,75126",
                "lot": " 19",
                "userName": "3917 Belleview Place"
              }
            ],
            "tract": "4-21   "
          },
          {
            "lots": [
              {
                "address": "4022 Bedford Drive,Forney,75126",
                "lot": " 12",
                "userName": "4022 Bedford Drive"
              },
              {
                "address": "4026 Bedford Drive,Forney,75126",
                "lot": " 13",
                "userName": "4026 Bedford Drive"
              }
            ],
            "tract": "5-21   "
          }
        ]
      },
      {
        "projectCode": "041",
        "tracts": [
          {
            "lots": [
              {
                "address": "1041 Auburn Drive,Justin,76247",
                "lot": " 31",
                "userName": "1041 Auburn Drive"
              },
              {
                "address": "1039 Auburn Drive,Justin,76247",
                "lot": " 32",
                "userName": "1039 Auburn Drive"
              },
              {
                "address": "1033 Auburn Drive,Justin,76247",
                "lot": " 35",
                "userName": "1033 Auburn Drive"
              },
              {
                "address": "1031 Auburn Drive,Justin,76247",
                "lot": " 36",
                "userName": "1031 Auburn Drive"
              }
            ],
            "tract": "17-1   "
          },
          {
            "lots": [
              {
                "address": "1024 Auburn Drive,Justin,76247",
                "lot": " 26",
                "userName": "1024 Auburn Drive"
              },
              {
                "address": "1022 Auburn Drive,Justin,76247",
                "lot": " 27",
                "userName": "1022 Auburn Drive"
              },
              {
                "address": "1014 Auburn Drive,Justin,76247",
                "lot": " 31",
                "userName": "1014 Auburn Drive"
              }
            ],
            "tract": "3-1    "
          },
          {
            "lots": [
              {
                "address": "1015 Auburn Drive,Justin,76247",
                "lot": " 11",
                "userName": "1015 Auburn Drive"
              },
              {
                "address": "1017 Auburn Drive,Justin,76247",
                "lot": " 12",
                "userName": "1017 Auburn Drive"
              },
              {
                "address": "1019 Auburn Drive,Justin,76247",
                "lot": " 13",
                "userName": "1019 Auburn Drive"
              }
            ],
            "tract": "4-1    "
          }
        ]
      }
    ]
  },
  {
    "companyCode": "3005 ",
    "projects": [
      {
        "projectCode": "049",
        "tracts": [
          {
            "lots": [
              {
                "address": "210 Felicity Loop,Castle Rock,80109",
                "lot": " 17",
                "userName": "210 Felicity Loop"
              },
              {
                "address": "188 Felicity Loop,Castle Rock,80109",
                "lot": " 18",
                "userName": "188 Felicity Loop"
              }
            ],
            "tract": "3F.16P8"
          }
        ]
      },
      {
        "projectCode": "065",
        "tracts": [
          {
            "lots": [
              {
                "address": "21538 E. 61st Drive,Aurora,80019",
                "lot": " 01",
                "userName": "21538 E. 61st Drive"
              },
              {
                "address": "6093 N. Perth Street,Aurora,80019",
                "lot": " 04",
                "userName": "6093 N. Perth Street"
              },
              {
                "address": "6094 N. Orleans Street,Aurora,80019",
                "lot": " 09",
                "userName": "6094 N. Orleans Street"
              }
            ],
            "tract": "10 F.1 "
          }
        ]
      },
      {
        "projectCode": "066",
        "tracts": [
          {
            "lots": [
              {
                "address": "6360 N MALAYA ST,Aurora,80019",
                "lot": "002",
                "userName": "6360 N MALAYA ST"
              },
              {
                "address": "6372 N MALAYA ST,Aurora,80019",
                "lot": "005",
                "userName": "6372 N MALAYA ST"
              },
              {
                "address": "21101 E 63RD DR,Aurora,80019",
                "lot": "017",
                "userName": "21101 E 63RD DR"
              },
              {
                "address": "21103 E 63RD DR,Aurora,80019",
                "lot": "018",
                "userName": "21103 E 63RD DR"
              },
              {
                "address": "21111 E 63RD DR,Aurora,80019",
                "lot": "019",
                "userName": "21111 E 63RD DR"
              },
              {
                "address": "21113 E 63RD DR,Aurora,80019",
                "lot": "020",
                "userName": "21113 E 63RD DR"
              },
              {
                "address": "21121 E 63RD DR,Aurora,80019",
                "lot": "021",
                "userName": "21121 E 63RD DR"
              },
              {
                "address": "21123 E 63RD DR,Aurora,80019",
                "lot": "022",
                "userName": "21123 E 63RD DR"
              },
              {
                "address": "21131 E 63RD DR,Aurora,80019",
                "lot": "023",
                "userName": "21131 E 63RD DR"
              },
              {
                "address": "21133 E 63RD DR,Aurora,80019",
                "lot": "024",
                "userName": "21133 E 63RD DR"
              },
              {
                "address": "21141 E 63RD DR,Aurora,80019",
                "lot": "025",
                "userName": "21141 E 63RD DR"
              },
              {
                "address": "21143 E 63RD DR,Aurora,80019",
                "lot": "026",
                "userName": "21143 E 63RD DR"
              },
              {
                "address": "21233 E 63RD DR,Aurora,80019",
                "lot": "041",
                "userName": "21233 E 63RD DR"
              },
              {
                "address": "21253 E 63RD DR,Aurora,80019",
                "lot": "043",
                "userName": "21253 E 63RD DR"
              },
              {
                "address": "21263 E 63RD DR,Aurora,80019",
                "lot": "044",
                "userName": "21263 E 63RD DR"
              },
              {
                "address": "21273 E 63RD DR,Aurora,80019",
                "lot": "045",
                "userName": "21273 E 63RD DR"
              }
            ],
            "tract": "02 F.3 "
          },
          {
            "lots": [
              {
                "address": "6223 N LIVERPOOL ST,Aurora,80019",
                "lot": "005",
                "userName": "6223 N LIVERPOOL ST"
              }
            ],
            "tract": "04 F.3 "
          },
          {
            "lots": [
              {
                "address": "6123 N. Orleans Street,Aurora,80019",
                "lot": " 39",
                "userName": "6123 N. Orleans Street"
              }
            ],
            "tract": "09 F.1 "
          },
          {
            "lots": [
              {
                "address": "6290 N NEPAL CT,Aurora,80019",
                "lot": "005",
                "userName": "6290 N NEPAL CT"
              }
            ],
            "tract": "09 F.3 "
          }
        ]
      },
      {
        "projectCode": "067",
        "tracts": [
          {
            "lots": [
              {
                "address": "1992 Griffin Drive,Brighton,80601",
                "lot": " 03",
                "userName": "1992 Griffin Drive"
              }
            ],
            "tract": "10     "
          }
        ]
      },
      {
        "projectCode": "071",
        "tracts": [
          {
            "lots": [
              {
                "address": "28472  E. 6th Place,Watkins,80137",
                "lot": "030",
                "userName": "28472  E. 6th Place"
              },
              {
                "address": "658 North Bersshine Court,Watkins,80137",
                "lot": "038",
                "userName": "658 North Bersshine Court"
              },
              {
                "address": "639 N. Bently Street,Watkins,80137",
                "lot": "042",
                "userName": "639 N. Bently Street"
              }
            ],
            "tract": "04 F.4 "
          }
        ]
      },
      {
        "projectCode": "073",
        "tracts": [
          {
            "lots": [
              {
                "address": "3142 Sweetgrass Pkwy,Dacono,80514",
                "lot": " 01",
                "userName": "3142 Sweetgrass Pkwy"
              },
              {
                "address": "3162 Sweetgrass Pkwy,Dacono,80514",
                "lot": " 03",
                "userName": "3162 Sweetgrass Pkwy"
              }
            ],
            "tract": "01 F.01"
          }
        ]
      },
      {
        "projectCode": "074",
        "tracts": [
          {
            "lots": [
              {
                "address": "3152 Sweetgrass Pkwy,Dacono,80514",
                "lot": " 02",
                "userName": "3152 Sweetgrass Pkwy"
              },
              {
                "address": "3172 Sweetgrass Pkwy,Dacono,80514",
                "lot": " 04",
                "userName": "3172 Sweetgrass Pkwy"
              }
            ],
            "tract": "01 F.01"
          },
          {
            "lots": [
              {
                "address": "3471 Bluestem Street,Dacono,80514",
                "lot": " 02",
                "userName": "3471 Bluestem Street"
              },
              {
                "address": "3461 Bluestem Street,Dacono,80514",
                "lot": " 03",
                "userName": "3461 Bluestem Street"
              },
              {
                "address": "3451 Bluestem Street,Dacono,80514",
                "lot": " 04",
                "userName": "3451 Bluestem Street"
              },
              {
                "address": "3441 Bluestem Street,Dacono,80514",
                "lot": " 05",
                "userName": "3441 Bluestem Street"
              },
              {
                "address": "3431 Bluestem Street,Dacono,80514",
                "lot": " 06",
                "userName": "3431 Bluestem Street"
              },
              {
                "address": "3421 Bluestem Street,Dacono,80514",
                "lot": " 07",
                "userName": "3421 Bluestem Street"
              },
              {
                "address": "3411 Bluestem Street,Dacono,80514",
                "lot": " 08",
                "userName": "3411 Bluestem Street"
              }
            ],
            "tract": "01F4   "
          },
          {
            "lots": [
              {
                "address": "3451 Switchgrass Street,Dacono,80514",
                "lot": " 04",
                "userName": "3451 Switchgrass Street"
              },
              {
                "address": "3403 Switchgrass Street,Dacono,80514",
                "lot": " 08",
                "userName": "3403 Switchgrass Street"
              },
              {
                "address": "3412 Bluestem Street,Dacono,80514",
                "lot": " 09",
                "userName": "3412 Bluestem Street"
              },
              {
                "address": "3422 Bluestem Street,Dacono,80514",
                "lot": " 10",
                "userName": "3422 Bluestem Street"
              },
              {
                "address": "3432 Bluestem Street,Dacono,80514",
                "lot": " 11",
                "userName": "3432 Bluestem Street"
              },
              {
                "address": "3442 Bluestem Street,Dacono,80514",
                "lot": " 12",
                "userName": "3442 Bluestem Street"
              },
              {
                "address": "3452 Bluestem Street,Dacono,80514",
                "lot": " 13",
                "userName": "3452 Bluestem Street"
              },
              {
                "address": "3462 Bluestem Street,Dacono,80514",
                "lot": " 14",
                "userName": "3462 Bluestem Street"
              },
              {
                "address": "3472 Bluestem Street,Dacono,80514",
                "lot": " 15",
                "userName": "3472 Bluestem Street"
              }
            ],
            "tract": "02F4   "
          },
          {
            "lots": [
              {
                "address": "3488 Switchgrass Street,Dacono,80514",
                "lot": " 03",
                "userName": "3488 Switchgrass Street"
              }
            ],
            "tract": "03F4   "
          },
          {
            "lots": [
              {
                "address": "3358 Bluestem Street,Dacono,80514",
                "lot": " 17",
                "userName": "3358 Bluestem Street"
              }
            ],
            "tract": "05F4   "
          },
          {
            "lots": [
              {
                "address": "4570 Meadow Drive,Dacono,80514",
                "lot": " 05",
                "userName": "4570 Meadow Drive"
              }
            ],
            "tract": "08F4   "
          }
        ]
      },
      {
        "projectCode": "077",
        "tracts": [
          {
            "lots": [
              {
                "address": "17510 Alpine Lily Ave.,Parker,80134",
                "lot": " 13",
                "userName": "17510 Alpine Lily Ave."
              }
            ],
            "tract": "02 F.16"
          }
        ]
      },
      {
        "projectCode": "078",
        "tracts": [
          {
            "lots": [
              {
                "address": "5984 East 154TH Place,Thornton,80602",
                "lot": "001",
                "userName": "5984 East 154TH Place"
              },
              {
                "address": "5944 East 154TH Place,Thornton,80602",
                "lot": "003",
                "userName": "5944 East 154TH Place"
              },
              {
                "address": "5924 East 154TH Place,Thornton,80602",
                "lot": "004",
                "userName": "5924 East 154TH Place"
              },
              {
                "address": "5925 East 154TH Place,Thornton,80602",
                "lot": "009",
                "userName": "5925 East 154TH Place"
              },
              {
                "address": "5945 East 154TH Place,Thornton,80602",
                "lot": "010",
                "userName": "5945 East 154TH Place"
              },
              {
                "address": "6025 East 154TH Place,Thornton,80602",
                "lot": "014",
                "userName": "6025 East 154TH Place"
              },
              {
                "address": "15419 Kearney Street,Thornton,80602",
                "lot": "017",
                "userName": "15419 Kearney Street"
              },
              {
                "address": "15429 Kearney Street,Thornton,80602",
                "lot": "018",
                "userName": "15429 Kearney Street"
              },
              {
                "address": "15449 Kearney Street,Thornton,80602",
                "lot": "019",
                "userName": "15449 Kearney Street"
              },
              {
                "address": "15459 Kearney Street,Thornton,80602",
                "lot": "020",
                "userName": "15459 Kearney Street"
              },
              {
                "address": "15469 Kearney Street,Thornton,80602",
                "lot": "021",
                "userName": "15469 Kearney Street"
              },
              {
                "address": "6227 East 155TH Place,Thornton,80602",
                "lot": "030",
                "userName": "6227 East 155TH Place"
              },
              {
                "address": "6247 East 155TH Place,Thornton,80602",
                "lot": "031",
                "userName": "6247 East 155TH Place"
              },
              {
                "address": "6267 East 155TH Place,Thornton,80602",
                "lot": "032",
                "userName": "6267 East 155TH Place"
              },
              {
                "address": "6287 East 155TH Place,Thornton,80602",
                "lot": "033",
                "userName": "6287 East 155TH Place"
              },
              {
                "address": "6307 East 155TH Place,Thornton,80602",
                "lot": "034",
                "userName": "6307 East 155TH Place"
              },
              {
                "address": "6327 East 155TH Place,Thornton,80602",
                "lot": "035",
                "userName": "6327 East 155TH Place"
              },
              {
                "address": "6347 East 155TH Place,Thornton,80602",
                "lot": "036",
                "userName": "6347 East 155TH Place"
              },
              {
                "address": "6367 East 155TH Place,Thornton,80602",
                "lot": "037",
                "userName": "6367 East 155TH Place"
              },
              {
                "address": "6387 East 155th Place,Thornton,80602",
                "lot": "038",
                "userName": "6387 East 155th Place"
              },
              {
                "address": "15490 Locust Street,Thornton,80602",
                "lot": "039",
                "userName": "15490 Locust Street"
              }
            ],
            "tract": "01 F.1 "
          },
          {
            "lots": [
              {
                "address": "15418 Kearney Street,Thornton,80602",
                "lot": "001",
                "userName": "15418 Kearney Street"
              },
              {
                "address": "15428 Kearney Street,Thornton,80602",
                "lot": "002",
                "userName": "15428 Kearney Street"
              },
              {
                "address": "15438 Kearney Street,Thornton,80602",
                "lot": "003",
                "userName": "15438 Kearney Street"
              },
              {
                "address": "15448 Kearney Street,Thornton,80602",
                "lot": "004",
                "userName": "15448 Kearney Street"
              }
            ],
            "tract": "02 F.1 "
          },
          {
            "lots": [
              {
                "address": "6004 East 154th Place,Thornton,80602",
                "lot": "001",
                "userName": "6004 East 154th Place"
              },
              {
                "address": "6044 East 154th Place,Thornton,80602",
                "lot": "003",
                "userName": "6044 East 154th Place"
              },
              {
                "address": "6064 East 154th Place,Thornton,80602",
                "lot": "004",
                "userName": "6064 East 154th Place"
              },
              {
                "address": "6084 East 154th Place,Thornton,80602",
                "lot": "005",
                "userName": "6084 East 154th Place"
              },
              {
                "address": "6104 East 154th Place,Thornton,80602",
                "lot": "006",
                "userName": "6104 East 154th Place"
              },
              {
                "address": "6124 East 154th Place,Thornton,80602",
                "lot": "007",
                "userName": "6124 East 154th Place"
              },
              {
                "address": "6144 East 154th Place,Thornton,80602",
                "lot": "008",
                "userName": "6144 East 154th Place"
              },
              {
                "address": "6204 East 154th Place,Thornton,80602",
                "lot": "011",
                "userName": "6204 East 154th Place"
              },
              {
                "address": "6224 East 154th Place,Thornton,80602",
                "lot": "012",
                "userName": "6224 East 154th Place"
              },
              {
                "address": "6244 East 154th Place,Thornton,80602",
                "lot": "013",
                "userName": "6244 East 154th Place"
              },
              {
                "address": "6264 East 154th Place,Thornton,80602",
                "lot": "014",
                "userName": "6264 East 154th Place"
              },
              {
                "address": "6284 East 154th Place,Thornton,80602",
                "lot": "015",
                "userName": "6284 East 154th Place"
              }
            ],
            "tract": "05 F.1 "
          },
          {
            "lots": [
              {
                "address": "15375 Ivy Street,Thornton,80602",
                "lot": "003",
                "userName": "15375 Ivy Street"
              },
              {
                "address": "5780 East 153RD Place,Thornton,80602",
                "lot": "020",
                "userName": "5780 East 153RD Place"
              },
              {
                "address": "5800 East 153RD Place,Thornton,80602",
                "lot": "021",
                "userName": "5800 East 153RD Place"
              },
              {
                "address": "5820 East 153RD Place,Thornton,80602",
                "lot": "022",
                "userName": "5820 East 153RD Place"
              },
              {
                "address": "5860 East 153RD Place,Thornton,80602",
                "lot": "024",
                "userName": "5860 East 153RD Place"
              },
              {
                "address": "5920 East 153RD Place,Thornton,80602",
                "lot": "027",
                "userName": "5920 East 153RD Place"
              },
              {
                "address": "15360 Jasmine Street,Thornton,80602",
                "lot": "030",
                "userName": "15360 Jasmine Street"
              },
              {
                "address": "15390 Jasmine Street,Thornton,80602",
                "lot": "033",
                "userName": "15390 Jasmine Street"
              }
            ],
            "tract": "06 F.1 "
          },
          {
            "lots": [
              {
                "address": "15373 Jersey Court,Thornton,80602",
                "lot": "008",
                "userName": "15373 Jersey Court"
              },
              {
                "address": "15383 Jersey Court,Thornton,80602",
                "lot": "009",
                "userName": "15383 Jersey Court"
              },
              {
                "address": "15393 Jersey Court,Thornton,80602",
                "lot": "010",
                "userName": "15393 Jersey Court"
              }
            ],
            "tract": "07 F.1 "
          }
        ]
      },
      {
        "projectCode": "081",
        "tracts": [
          {
            "lots": [
              {
                "address": "1939 Water Birch Way,Castle Rock,80108",
                "lot": "001",
                "userName": "1939 Water Birch Way"
              },
              {
                "address": "1923 Water Birch Way,Castle Rock,80108",
                "lot": "002",
                "userName": "1923 Water Birch Way"
              },
              {
                "address": "1905 Water Birch Way,Castle Rock,80108",
                "lot": "003",
                "userName": "1905 Water Birch Way"
              },
              {
                "address": "1889 Water Birch Way,Castle Rock,80108",
                "lot": "004",
                "userName": "1889 Water Birch Way"
              },
              {
                "address": "1871 Water Birch Way,Castle Rock,80108",
                "lot": "005",
                "userName": "1871 Water Birch Way"
              },
              {
                "address": "1853 Water Birch Way,Castle Rock,80108",
                "lot": "006",
                "userName": "1853 Water Birch Way"
              },
              {
                "address": "1837 Water Birch Way,Castle Rock,80108",
                "lot": "007",
                "userName": "1837 Water Birch Way"
              },
              {
                "address": "1821 Water Birch Way,Castle Rock,80108",
                "lot": "008",
                "userName": "1821 Water Birch Way"
              },
              {
                "address": "1805 Water Birch Way,Castle Rock,80108",
                "lot": "009",
                "userName": "1805 Water Birch Way"
              },
              {
                "address": "1787 Water Birch Way,Castle Rock,80108",
                "lot": "010",
                "userName": "1787 Water Birch Way"
              },
              {
                "address": "1771 Water Birch Way,Castle Rock,80108",
                "lot": "011",
                "userName": "1771 Water Birch Way"
              },
              {
                "address": "1822 Water Birch Way,Castle Rock,80108",
                "lot": "013",
                "userName": "1822 Water Birch Way"
              },
              {
                "address": "1838 Water Birch Way,Castle Rock,80108",
                "lot": "014",
                "userName": "1838 Water Birch Way"
              },
              {
                "address": "1854 Water Birch Way,Castle Rock,80108",
                "lot": "015",
                "userName": "1854 Water Birch Way"
              },
              {
                "address": "1870 Water Birch Way,Castle Rock,80108",
                "lot": "016",
                "userName": "1870 Water Birch Way"
              },
              {
                "address": "1888 Water Birch Way,Castle Rock,80108",
                "lot": "017",
                "userName": "1888 Water Birch Way"
              },
              {
                "address": "1904 Water Birch Way,Castle Rock,80108",
                "lot": "018",
                "userName": "1904 Water Birch Way"
              },
              {
                "address": "1920 Water Birch Way,Castle Rock,80108",
                "lot": "019",
                "userName": "1920 Water Birch Way"
              },
              {
                "address": "1938 Water Birch Way,Castle Rock,80108",
                "lot": "020",
                "userName": "1938 Water Birch Way"
              }
            ],
            "tract": "01 F.1 "
          },
          {
            "lots": [
              {
                "address": "2036 Peachleaf Loop,Castle Rock,80108",
                "lot": "005",
                "userName": "2036 Peachleaf Loop"
              },
              {
                "address": "2058 Peachleaf Loop,Castle Rock,80108",
                "lot": "008",
                "userName": "2058 Peachleaf Loop"
              },
              {
                "address": "2098 Peachleaf Loop,Castle Rock,80108",
                "lot": "013",
                "userName": "2098 Peachleaf Loop"
              },
              {
                "address": "2114 Peachleaf Loop,Castle Rock,80108",
                "lot": "014",
                "userName": "2114 Peachleaf Loop"
              },
              {
                "address": "2182 Peachleaf Loop,Castle Rock,80108",
                "lot": "023",
                "userName": "2182 Peachleaf Loop"
              },
              {
                "address": "2194 Peachleaf Loop,Castle Rock,80108",
                "lot": "024",
                "userName": "2194 Peachleaf Loop"
              },
              {
                "address": "2063 Peachleaf Loop,Castle Rock,80108",
                "lot": "028",
                "userName": "2063 Peachleaf Loop"
              }
            ],
            "tract": "02 F.1 "
          },
          {
            "lots": [
              {
                "address": "4425 Soapberry Place,Castle Rock,80108",
                "lot": "001",
                "userName": "4425 Soapberry Place"
              },
              {
                "address": "4439 Soapberry Place,Castle Rock,80108",
                "lot": "002",
                "userName": "4439 Soapberry Place"
              },
              {
                "address": "4451 Soapberry Place,Castle Rock,80108",
                "lot": "003",
                "userName": "4451 Soapberry Place"
              },
              {
                "address": "4469 Soapberry Place,Castle Rock,80108",
                "lot": "004",
                "userName": "4469 Soapberry Place"
              },
              {
                "address": "4478 Soapberry Place,Castle Rock,80108",
                "lot": "005",
                "userName": "4478 Soapberry Place"
              },
              {
                "address": "4466 Soapberry Place,Castle Rock,80108",
                "lot": "006",
                "userName": "4466 Soapberry Place"
              },
              {
                "address": "4458 Soapberry Place,Castle Rock,80108",
                "lot": "007",
                "userName": "4458 Soapberry Place"
              },
              {
                "address": "4450 Soapberry Place,Castle Rock,80108",
                "lot": "008",
                "userName": "4450 Soapberry Place"
              },
              {
                "address": "4438 Soapberry Place,Castle Rock,80108",
                "lot": "009",
                "userName": "4438 Soapberry Place"
              },
              {
                "address": "4426 Soapberry Place,Castle Rock,80108",
                "lot": "010",
                "userName": "4426 Soapberry Place"
              },
              {
                "address": "4418 Soapberry Place,Castle Rock,80108",
                "lot": "011",
                "userName": "4418 Soapberry Place"
              },
              {
                "address": "4406 Soapberry Place,Castle Rock,80108",
                "lot": "012",
                "userName": "4406 Soapberry Place"
              },
              {
                "address": "4398 Soapberry Place,Castle Rock,80108",
                "lot": "013",
                "userName": "4398 Soapberry Place"
              },
              {
                "address": "4390 Soapberry Place,Castle Rock,80108",
                "lot": "014",
                "userName": "4390 Soapberry Place"
              },
              {
                "address": "4378 Soapberry Place,Castle Rock,80108",
                "lot": "015",
                "userName": "4378 Soapberry Place"
              },
              {
                "address": "4370 Soapberry Place,Castle Rock,80108",
                "lot": "016",
                "userName": "4370 Soapberry Place"
              },
              {
                "address": "4359 Soapberry Place,Castle Rock,80108",
                "lot": "028",
                "userName": "4359 Soapberry Place"
              },
              {
                "address": "4371 Soapberry Place,Castle Rock,80108",
                "lot": "029",
                "userName": "4371 Soapberry Place"
              }
            ],
            "tract": "03 F.1 "
          }
        ]
      },
      {
        "projectCode": "082",
        "tracts": [
          {
            "lots": [
              {
                "address": "3266 Boral Owl Drive,Brighton,80601",
                "lot": "023",
                "userName": "3266 Boral Owl Drive"
              },
              {
                "address": "3278 Boral Owl Drive,Brighton,80601",
                "lot": "024",
                "userName": "3278 Boral Owl Drive"
              },
              {
                "address": "3352 Boral Owl Drive,Brighton,80601",
                "lot": "031",
                "userName": "3352 Boral Owl Drive"
              },
              {
                "address": "3366 Boral Owl Drive,Brighton,80601",
                "lot": "032",
                "userName": "3366 Boral Owl Drive"
              },
              {
                "address": "3382 Boral Owl Drive,Brighton,80601",
                "lot": "034",
                "userName": "3382 Boral Owl Drive"
              },
              {
                "address": "3388 Boral Owl Drive,Brighton,80601",
                "lot": "035",
                "userName": "3388 Boral Owl Drive"
              },
              {
                "address": "3378 Grey Owl Place,Brighton,80601",
                "lot": "037",
                "userName": "3378 Grey Owl Place"
              }
            ],
            "tract": "12     "
          },
          {
            "lots": [
              {
                "address": "1933 Spotted Owl Court,Brighton,80601",
                "lot": "008",
                "userName": "1933 Spotted Owl Court"
              },
              {
                "address": "1921 Spotted Owl Court,Brighton,80601",
                "lot": "009",
                "userName": "1921 Spotted Owl Court"
              },
              {
                "address": "1897 Spotted Owl Court,Brighton,80601",
                "lot": "011",
                "userName": "1897 Spotted Owl Court"
              },
              {
                "address": "1885 Spotted Owl Court,Brighton,80601",
                "lot": "012",
                "userName": "1885 Spotted Owl Court"
              },
              {
                "address": "1873 Spotted Owl Court,Brighton,80601",
                "lot": "013",
                "userName": "1873 Spotted Owl Court"
              }
            ],
            "tract": "14     "
          },
          {
            "lots": [
              {
                "address": "3354 Grey Owl Place,Brighton,80601",
                "lot": "001",
                "userName": "3354 Grey Owl Place"
              },
              {
                "address": "3342 Grey Owl Place,Brighton,80601",
                "lot": "002",
                "userName": "3342 Grey Owl Place"
              },
              {
                "address": "3330 Grey Owl Place,Brighton,80601",
                "lot": "003",
                "userName": "3330 Grey Owl Place"
              },
              {
                "address": "3318 Grey Owl Place,Brighton,80601",
                "lot": "004",
                "userName": "3318 Grey Owl Place"
              },
              {
                "address": "3306 Grey Owl Place,Brighton,80601",
                "lot": "005",
                "userName": "3306 Grey Owl Place"
              },
              {
                "address": "1870 Spotted Owl Court,Brighton,80601",
                "lot": "007",
                "userName": "1870 Spotted Owl Court"
              },
              {
                "address": "1894 Spotted Owl Court,Brighton,80601",
                "lot": "009",
                "userName": "1894 Spotted Owl Court"
              },
              {
                "address": "1906 Spotted Owl Court,Brighton,80601",
                "lot": "010",
                "userName": "1906 Spotted Owl Court"
              },
              {
                "address": "1930 Spotted Owl Court,Brighton,80601",
                "lot": "012",
                "userName": "1930 Spotted Owl Court"
              },
              {
                "address": "3337 Boral Owl Drive,Brighton,80601",
                "lot": "013",
                "userName": "3337 Boral Owl Drive"
              },
              {
                "address": "3351 Boral Owl Drive,Brighton,80601",
                "lot": "014",
                "userName": "3351 Boral Owl Drive"
              },
              {
                "address": "3369 Boral Owl Drive,Brighton,80601",
                "lot": "015",
                "userName": "3369 Boral Owl Drive"
              },
              {
                "address": "3387 Boral Owl Drive,Brighton,80601",
                "lot": "017",
                "userName": "3387 Boral Owl Drive"
              }
            ],
            "tract": "15     "
          }
        ]
      },
      {
        "projectCode": "083",
        "tracts": [
          {
            "lots": [
              {
                "address": "20570 E 58TH AVE,Aurora,80019",
                "lot": "001",
                "userName": "20570 E 58TH AVE"
              },
              {
                "address": "20590 E 58TH AVE,Aurora,80019",
                "lot": "002",
                "userName": "20590 E 58TH AVE"
              },
              {
                "address": "20610 E 58TH AVE,Aurora,80019",
                "lot": "003",
                "userName": "20610 E 58TH AVE"
              },
              {
                "address": "20630 E 58TH AVE,Aurora,80019",
                "lot": "004",
                "userName": "20630 E 58TH AVE"
              },
              {
                "address": "5787 N KILLARNEY WAY,Aurora,80019",
                "lot": "005",
                "userName": "5787 N KILLARNEY WAY"
              },
              {
                "address": "5779 N KILLARNEY WAY,Aurora,80019",
                "lot": "006",
                "userName": "5779 N KILLARNEY WAY"
              },
              {
                "address": "5777 N KILLARNEY WAY,Aurora,80019",
                "lot": "007",
                "userName": "5777 N KILLARNEY WAY"
              },
              {
                "address": "5769 N KILLARNEY WAY,Aurora,80019",
                "lot": "008",
                "userName": "5769 N KILLARNEY WAY"
              },
              {
                "address": "5759 N KILLARNEY WAY,Aurora,80019",
                "lot": "009",
                "userName": "5759 N KILLARNEY WAY"
              },
              {
                "address": "20633 E 57TH AVE,Aurora,80019",
                "lot": "010",
                "userName": "20633 E 57TH AVE"
              },
              {
                "address": "20623 E 57TH AVE,Aurora,80019",
                "lot": "011",
                "userName": "20623 E 57TH AVE"
              },
              {
                "address": "5742 N JEBEL WAY,Aurora,80019",
                "lot": "012",
                "userName": "5742 N JEBEL WAY"
              },
              {
                "address": "5744 N JEBEL WAY,Aurora,80019",
                "lot": "013",
                "userName": "5744 N JEBEL WAY"
              },
              {
                "address": "5746 N JEBEL WAY,Aurora,80019",
                "lot": "014",
                "userName": "5746 N JEBEL WAY"
              },
              {
                "address": "5756 N JERICHO WAY,Aurora,80019",
                "lot": "016",
                "userName": "5756 N JERICHO WAY"
              },
              {
                "address": "5764 N JERICHO WAY,Aurora,80019",
                "lot": "017",
                "userName": "5764 N JERICHO WAY"
              },
              {
                "address": "5766 N JERICHO WAY,Aurora,80019",
                "lot": "018",
                "userName": "5766 N JERICHO WAY"
              },
              {
                "address": "5776 N JERICHO WAY,Aurora,80019",
                "lot": "019",
                "userName": "5776 N JERICHO WAY"
              },
              {
                "address": "5786 N JERICHO WAY,Aurora,80019",
                "lot": "020",
                "userName": "5786 N JERICHO WAY"
              }
            ],
            "tract": "2      "
          }
        ]
      },
      {
        "projectCode": "100",
        "tracts": [
          {
            "lots": [
              {
                "address": "13589 E 111th Avenue,Commerce City,80022",
                "lot": "027",
                "userName": "13589 E 111th Avenue"
              },
              {
                "address": "13599 E 111th Avenue,Commerce City,80022",
                "lot": "028",
                "userName": "13599 E 111th Avenue"
              }
            ],
            "tract": "06 F.8 "
          },
          {
            "lots": [
              {
                "address": "13598 E 111th Avenue,Commerce City,80022",
                "lot": "001",
                "userName": "13598 E 111th Avenue"
              },
              {
                "address": "13588 E 111th Avenue,Commerce City,80022",
                "lot": "002",
                "userName": "13588 E 111th Avenue"
              },
              {
                "address": "13568 E 111th Avenue,Commerce City,80022",
                "lot": "003",
                "userName": "13568 E 111th Avenue"
              },
              {
                "address": "13558 E 111th Avenue,Commerce City,80022",
                "lot": "004",
                "userName": "13558 E 111th Avenue"
              },
              {
                "address": "13548 E 111th Avenue,Commerce City,80022",
                "lot": "005",
                "userName": "13548 E 111th Avenue"
              },
              {
                "address": "13538 E 111th Avenue,Commerce City,80022",
                "lot": "006",
                "userName": "13538 E 111th Avenue"
              },
              {
                "address": "13528 E 111th Avenue,Commerce City,80022",
                "lot": "007",
                "userName": "13528 E 111th Avenue"
              },
              {
                "address": "13518 E 111th Avenue,Commerce City,80022",
                "lot": "008",
                "userName": "13518 E 111th Avenue"
              },
              {
                "address": "13508 E 111th Avenue,Commerce City,80022",
                "lot": "009",
                "userName": "13508 E 111th Avenue"
              },
              {
                "address": "13498 E 111th Avenue,Commerce City,80022",
                "lot": "010",
                "userName": "13498 E 111th Avenue"
              },
              {
                "address": "13488 E 111th Avenue,Commerce City,80022",
                "lot": "011",
                "userName": "13488 E 111th Avenue"
              },
              {
                "address": "13478 E 111th Avenue,Commerce City,80022",
                "lot": "012",
                "userName": "13478 E 111th Avenue"
              },
              {
                "address": "13468 E 111th Avenue,Commerce City,80022",
                "lot": "013",
                "userName": "13468 E 111th Avenue"
              },
              {
                "address": "13458 E 111th Avenue,Commerce City,80022",
                "lot": "014",
                "userName": "13458 E 111th Avenue"
              },
              {
                "address": "13457 E 110th Drive,Commerce City,80022",
                "lot": "015",
                "userName": "13457 E 110th Drive"
              },
              {
                "address": "13467 E 110th Drive,Commerce City,80022",
                "lot": "016",
                "userName": "13467 E 110th Drive"
              },
              {
                "address": "13477 E 110th Drive,Commerce City,80022",
                "lot": "017",
                "userName": "13477 E 110th Drive"
              },
              {
                "address": "13487 E 110th Drive,Commerce City,80022",
                "lot": "018",
                "userName": "13487 E 110th Drive"
              },
              {
                "address": "13497 E 110th Drive,Commerce City,80022",
                "lot": "019",
                "userName": "13497 E 110th Drive"
              },
              {
                "address": "13507 E 110th Drive,Commerce City,80022",
                "lot": "020",
                "userName": "13507 E 110th Drive"
              },
              {
                "address": "13517 E 110th Drive,Commerce City,80022",
                "lot": "021",
                "userName": "13517 E 110th Drive"
              },
              {
                "address": "13527 E 110th Drive,Commerce City,80022",
                "lot": "022",
                "userName": "13527 E 110th Drive"
              },
              {
                "address": "13537 E 110th Drive,Commerce City,80022",
                "lot": "023",
                "userName": "13537 E 110th Drive"
              },
              {
                "address": "13547 E 110th Drive,Commerce City,80022",
                "lot": "024",
                "userName": "13547 E 110th Drive"
              },
              {
                "address": "13557 E 110th Drive,Commerce City,80022",
                "lot": "025",
                "userName": "13557 E 110th Drive"
              },
              {
                "address": "13567 E 110th Drive,Commerce City,80022",
                "lot": "026",
                "userName": "13567 E 110th Drive"
              },
              {
                "address": "13587 E 110th Drive,Commerce City,80022",
                "lot": "027",
                "userName": "13587 E 110th Drive"
              },
              {
                "address": "13597 E 110th Drive,Commerce City,80022",
                "lot": "028",
                "userName": "13597 E 110th Drive"
              }
            ],
            "tract": "07 F.8 "
          }
        ]
      },
      {
        "projectCode": "104",
        "tracts": [
          {
            "lots": [
              {
                "address": "9384 Bahama Ct,Commerce City,80022",
                "lot": "002",
                "userName": "9384 Bahama Ct"
              },
              {
                "address": "9374 Bahama Ct,Commerce City,80022",
                "lot": "003",
                "userName": "9374 Bahama Ct"
              },
              {
                "address": "9360 Bahama Ct,Commerce City,80022",
                "lot": "004",
                "userName": "9360 Bahama Ct"
              },
              {
                "address": "9350 Bahama Ct,Commerce City,80022",
                "lot": "005",
                "userName": "9350 Bahama Ct"
              },
              {
                "address": "9342 Bahama Ct,Commerce City,80022",
                "lot": "006",
                "userName": "9342 Bahama Ct"
              },
              {
                "address": "9340 Bahama Ct,Commerce City,80022",
                "lot": "007",
                "userName": "9340 Bahama Ct"
              },
              {
                "address": "9332 Bahama Ct,Commerce City,80022",
                "lot": "008",
                "userName": "9332 Bahama Ct"
              },
              {
                "address": "9330 Bahama Ct,Commerce City,80022",
                "lot": "009",
                "userName": "9330 Bahama Ct"
              },
              {
                "address": "9320 Bahama Ct,Commerce City,80022",
                "lot": "010",
                "userName": "9320 Bahama Ct"
              },
              {
                "address": "9310 Bahama Ct,Commerce City,80022",
                "lot": "011",
                "userName": "9310 Bahama Ct"
              },
              {
                "address": "9300 Bahama Ct,Commerce City,80022",
                "lot": "012",
                "userName": "9300 Bahama Ct"
              },
              {
                "address": "9290 Bahama Ct,Commerce City,80022",
                "lot": "013",
                "userName": "9290 Bahama Ct"
              },
              {
                "address": "9280 Bahama Ct,Commerce City,80022",
                "lot": "014",
                "userName": "9280 Bahama Ct"
              },
              {
                "address": "9270 Bahama Ct,Commerce City,80022",
                "lot": "015",
                "userName": "9270 Bahama Ct"
              },
              {
                "address": "9283 Biscay St,Commerce City,80022",
                "lot": "022",
                "userName": "9283 Biscay St"
              },
              {
                "address": "9293 Biscay St,Commerce City,80022",
                "lot": "023",
                "userName": "9293 Biscay St"
              },
              {
                "address": "9303 Biscay St,Commerce City,80022",
                "lot": "024",
                "userName": "9303 Biscay St"
              },
              {
                "address": "9313 Biscay St,Commerce City,80022",
                "lot": "025",
                "userName": "9313 Biscay St"
              },
              {
                "address": "9323 Biscay St,Commerce City,80022",
                "lot": "026",
                "userName": "9323 Biscay St"
              },
              {
                "address": "9333 Biscay St,Commerce City,80022",
                "lot": "027",
                "userName": "9333 Biscay St"
              },
              {
                "address": "9343 Biscay St,Commerce City,80022",
                "lot": "028",
                "userName": "9343 Biscay St"
              },
              {
                "address": "9353 Biscay St,Commerce City,80022",
                "lot": "029",
                "userName": "9353 Biscay St"
              },
              {
                "address": "9363 Biscay St,Commerce City,80022",
                "lot": "030",
                "userName": "9363 Biscay St"
              },
              {
                "address": "9373 Biscay St,Commerce City,80022",
                "lot": "031",
                "userName": "9373 Biscay St"
              }
            ],
            "tract": "1      "
          },
          {
            "lots": [
              {
                "address": "9354 Biscay St,Commerce City,80022",
                "lot": "002",
                "userName": "9354 Biscay St"
              },
              {
                "address": "9344 Biscay St,Commerce City,80022",
                "lot": "003",
                "userName": "9344 Biscay St"
              },
              {
                "address": "9334 Biscay St,Commerce City,80022",
                "lot": "004",
                "userName": "9334 Biscay St"
              },
              {
                "address": "9324 Biscay St,Commerce City,80022",
                "lot": "005",
                "userName": "9324 Biscay St"
              },
              {
                "address": "9314 Biscay St,Commerce City,80022",
                "lot": "006",
                "userName": "9314 Biscay St"
              },
              {
                "address": "9304 Biscay St,Commerce City,80022",
                "lot": "007",
                "userName": "9304 Biscay St"
              },
              {
                "address": "9294 Biscay St,Commerce City,80022",
                "lot": "008",
                "userName": "9294 Biscay St"
              },
              {
                "address": "9284 Biscay St,Commerce City,80022",
                "lot": "009",
                "userName": "9284 Biscay St"
              },
              {
                "address": "9274 Biscay St,Commerce City,80022",
                "lot": "010",
                "userName": "9274 Biscay St"
              },
              {
                "address": "9264 Biscay St,Commerce City,80022",
                "lot": "011",
                "userName": "9264 Biscay St"
              },
              {
                "address": "9254 Biscay St,Commerce City,80022",
                "lot": "012",
                "userName": "9254 Biscay St"
              }
            ],
            "tract": "2      "
          }
        ]
      },
      {
        "projectCode": "105",
        "tracts": [
          {
            "lots": [
              {
                "address": "3102 Sweetgrass Parkway,Dacono,80514",
                "lot": "007",
                "userName": "3102 Sweetgrass Parkway"
              },
              {
                "address": "3112 Sweetgrass Parkway,Dacono,80514",
                "lot": "008",
                "userName": "3112 Sweetgrass Parkway"
              },
              {
                "address": "3122 Sweetgrass Parkway,Dacono,80514",
                "lot": "009",
                "userName": "3122 Sweetgrass Parkway"
              },
              {
                "address": "3132 Sweetgrass Parkway,Dacono,80514",
                "lot": "010",
                "userName": "3132 Sweetgrass Parkway"
              }
            ],
            "tract": "3 F.1  "
          }
        ]
      },
      {
        "projectCode": "107",
        "tracts": [
          {
            "lots": [
              {
                "address": "13594 E 110th Lane,Commerce City,80022",
                "lot": "005",
                "userName": "13594 E 110th Lane"
              },
              {
                "address": "11094 Xanadu Street,Commerce City,80022",
                "lot": "006",
                "userName": "11094 Xanadu Street"
              },
              {
                "address": "11102 Xanadu Street,Commerce City,80022",
                "lot": "007",
                "userName": "11102 Xanadu Street"
              },
              {
                "address": "11104 Xanadu Street,Commerce City,80022",
                "lot": "008",
                "userName": "11104 Xanadu Street"
              },
              {
                "address": "11112 Xanadu Street,Commerce City,80022",
                "lot": "009",
                "userName": "11112 Xanadu Street"
              },
              {
                "address": "11114 Xanadu Street,Commerce City,80022",
                "lot": "010",
                "userName": "11114 Xanadu Street"
              }
            ],
            "tract": "01 F.8 "
          },
          {
            "lots": [
              {
                "address": "11049 Ursula Street,Commerce City,80022",
                "lot": "001",
                "userName": "11049 Ursula Street"
              },
              {
                "address": "11045 Ursula Street,Commerce City,80022",
                "lot": "002",
                "userName": "11045 Ursula Street"
              },
              {
                "address": "11039 Ursula Street,Commerce City,80022",
                "lot": "003",
                "userName": "11039 Ursula Street"
              }
            ],
            "tract": "04 F.8 "
          },
          {
            "lots": [
              {
                "address": "13302 E 110th Way,Commerce City,80022",
                "lot": "001",
                "userName": "13302 E 110th Way"
              },
              {
                "address": "13312 E 110th Way,Commerce City,80022",
                "lot": "002",
                "userName": "13312 E 110th Way"
              },
              {
                "address": "13322 E 110th Way,Commerce City,80022",
                "lot": "003",
                "userName": "13322 E 110th Way"
              },
              {
                "address": "13332 E 110th Way,Commerce City,80022",
                "lot": "004",
                "userName": "13332 E 110th Way"
              },
              {
                "address": "13342 E 110th Way,Commerce City,80022",
                "lot": "005",
                "userName": "13342 E 110th Way"
              },
              {
                "address": "13352 E 110th Way,Commerce City,80022",
                "lot": "006",
                "userName": "13352 E 110th Way"
              },
              {
                "address": "13372 E 110th Way,Commerce City,80022",
                "lot": "007",
                "userName": "13372 E 110th Way"
              },
              {
                "address": "13382 E 110th Way,Commerce City,80022",
                "lot": "008",
                "userName": "13382 E 110th Way"
              },
              {
                "address": "13392 E 110th Way,Commerce City,80022",
                "lot": "009",
                "userName": "13392 E 110th Way"
              },
              {
                "address": "13402 E 110th Way,Commerce City,80022",
                "lot": "010",
                "userName": "13402 E 110th Way"
              },
              {
                "address": "13412 E 110th Way,Commerce City,80022",
                "lot": "011",
                "userName": "13412 E 110th Way"
              },
              {
                "address": "13422 E 110th Way,Commerce City,80022",
                "lot": "012",
                "userName": "13422 E 110th Way"
              },
              {
                "address": "13432 E 110th Way,Commerce City,80022",
                "lot": "013",
                "userName": "13432 E 110th Way"
              },
              {
                "address": "13442 E 110th Way,Commerce City,80022",
                "lot": "014",
                "userName": "13442 E 110th Way"
              }
            ],
            "tract": "05 F.8 "
          },
          {
            "lots": [
              {
                "address": "13596 E 110th Drive,Commerce City,80022",
                "lot": "001",
                "userName": "13596 E 110th Drive"
              },
              {
                "address": "13586 E 110th Drive,Commerce City,80022",
                "lot": "002",
                "userName": "13586 E 110th Drive"
              },
              {
                "address": "13576 E 110th Drive,Commerce City,80022",
                "lot": "003",
                "userName": "13576 E 110th Drive"
              },
              {
                "address": "13566 E 110th Drive,Commerce City,80022",
                "lot": "004",
                "userName": "13566 E 110th Drive"
              },
              {
                "address": "13565 E 110th Lane,Commerce City,80022",
                "lot": "021",
                "userName": "13565 E 110th Lane"
              },
              {
                "address": "13575 E 110th Lane,Commerce City,80022",
                "lot": "022",
                "userName": "13575 E 110th Lane"
              },
              {
                "address": "13585 E 110th Lane,Commerce City,80022",
                "lot": "023",
                "userName": "13585 E 110th Lane"
              },
              {
                "address": "13595 E 110th Lane,Commerce City,80022",
                "lot": "024",
                "userName": "13595 E 110th Lane"
              }
            ],
            "tract": "08 F.8 "
          }
        ]
      },
      {
        "projectCode": "113",
        "tracts": [
          {
            "lots": [
              {
                "address": "21184 E. 62nd Ave,Aurora,80019",
                "lot": "010",
                "userName": "21184 E. 62nd Ave"
              }
            ],
            "tract": "11     "
          },
          {
            "lots": [
              {
                "address": "21294 E. 62nd Ave,Aurora,80019",
                "lot": "010",
                "userName": "21294 E. 62nd Ave"
              }
            ],
            "tract": "12     "
          },
          {
            "lots": [
              {
                "address": "21008 E. 63rd Ave,Aurora,80019",
                "lot": "001",
                "userName": "21008 E. 63rd Ave"
              },
              {
                "address": "21088 E. 63rd Ave,Aurora,80019",
                "lot": "005",
                "userName": "21088 E. 63rd Ave"
              }
            ],
            "tract": "6      "
          }
        ]
      },
      {
        "projectCode": "115",
        "tracts": [
          {
            "lots": [
              {
                "address": "20650 E 58TH AVE,Aurora,80019",
                "lot": "001",
                "userName": "20650 E 58TH AVE"
              },
              {
                "address": "20660 E 58TH AVE,Aurora,80019",
                "lot": "002",
                "userName": "20660 E 58TH AVE"
              },
              {
                "address": "20670 E 58TH AVE,Aurora,80019",
                "lot": "003",
                "userName": "20670 E 58TH AVE"
              },
              {
                "address": "20680 E 58TH AVE,Aurora,80019",
                "lot": "004",
                "userName": "20680 E 58TH AVE"
              },
              {
                "address": "20690 E 58TH AVE,Aurora,80019",
                "lot": "005",
                "userName": "20690 E 58TH AVE"
              },
              {
                "address": "20700 E 58TH AVE,Aurora,80019",
                "lot": "006",
                "userName": "20700 E 58TH AVE"
              },
              {
                "address": "5788 N KILLARNEY WAY,Aurora,80019",
                "lot": "013",
                "userName": "5788 N KILLARNEY WAY"
              },
              {
                "address": "5780 N KILLARNEY WAY,Aurora,80019",
                "lot": "014",
                "userName": "5780 N KILLARNEY WAY"
              },
              {
                "address": "5778 N KILLARNEY WAY,Aurora,80019",
                "lot": "015",
                "userName": "5778 N KILLARNEY WAY"
              },
              {
                "address": "5770 N KILLARNEY WAY,Aurora,80019",
                "lot": "016",
                "userName": "5770 N KILLARNEY WAY"
              }
            ],
            "tract": "3      "
          }
        ]
      },
      {
        "projectCode": "116",
        "tracts": [
          {
            "lots": [
              {
                "address": "798 Gambel Drive,Johnstown,80534",
                "lot": "006",
                "userName": "798 Gambel Drive"
              }
            ],
            "tract": "2      "
          },
          {
            "lots": [
              {
                "address": "4702 Sunsplash Way,Johnstown,80534",
                "lot": "001",
                "userName": "4702 Sunsplash Way"
              },
              {
                "address": "4672 Sunsplash Way,Johnstown,80534",
                "lot": "004",
                "userName": "4672 Sunsplash Way"
              },
              {
                "address": "4662 Sunsplash Way,Johnstown,80534",
                "lot": "005",
                "userName": "4662 Sunsplash Way"
              },
              {
                "address": "4652 Sunsplash Way,Johnstown,80534",
                "lot": "006",
                "userName": "4652 Sunsplash Way"
              },
              {
                "address": "4642 Sunsplash Way,Johnstown,80534",
                "lot": "007",
                "userName": "4642 Sunsplash Way"
              },
              {
                "address": "4632 Sunsplash Way,Johnstown,80534",
                "lot": "008",
                "userName": "4632 Sunsplash Way"
              },
              {
                "address": "4622 Sunsplash Way,Johnstown,80534",
                "lot": "009",
                "userName": "4622 Sunsplash Way"
              },
              {
                "address": "4612 Sunsplash Way,Johnstown,80534",
                "lot": "010",
                "userName": "4612 Sunsplash Way"
              },
              {
                "address": "4611 Amrock Drive,Johnstown,80534",
                "lot": "011",
                "userName": "4611 Amrock Drive"
              },
              {
                "address": "4621 Amrock Drive,Johnstown,80534",
                "lot": "012",
                "userName": "4621 Amrock Drive"
              },
              {
                "address": "4631 Amrock Drive,Johnstown,80534",
                "lot": "013",
                "userName": "4631 Amrock Drive"
              },
              {
                "address": "4641 Amrock Drive,Johnstown,80534",
                "lot": "014",
                "userName": "4641 Amrock Drive"
              },
              {
                "address": "4651 Amrock Drive,Johnstown,80534",
                "lot": "015",
                "userName": "4651 Amrock Drive"
              },
              {
                "address": "4661 Amrock Drive,Johnstown,80534",
                "lot": "016",
                "userName": "4661 Amrock Drive"
              },
              {
                "address": "4671 Amrock Drive,Johnstown,80534",
                "lot": "017",
                "userName": "4671 Amrock Drive"
              }
            ],
            "tract": "4      "
          },
          {
            "lots": [
              {
                "address": "815 Currant Place,Johnstown,80534",
                "lot": "001",
                "userName": "815 Currant Place"
              },
              {
                "address": "805 Currant Place,Johnstown,80534",
                "lot": "002",
                "userName": "805 Currant Place"
              },
              {
                "address": "795 Currant Place,Johnstown,80534",
                "lot": "003",
                "userName": "795 Currant Place"
              },
              {
                "address": "785 Currant Place,Johnstown,80534",
                "lot": "004",
                "userName": "785 Currant Place"
              },
              {
                "address": "775 Currant Place,Johnstown,80534",
                "lot": "005",
                "userName": "775 Currant Place"
              },
              {
                "address": "765 Currant Place,Johnstown,80534",
                "lot": "006",
                "userName": "765 Currant Place"
              },
              {
                "address": "4592 Amrock Drive,Johnstown,80534",
                "lot": "007",
                "userName": "4592 Amrock Drive"
              },
              {
                "address": "4602 Amrock Drive,Johnstown,80534",
                "lot": "008",
                "userName": "4602 Amrock Drive"
              },
              {
                "address": "4612 Amrock Drive,Johnstown,80534",
                "lot": "009",
                "userName": "4612 Amrock Drive"
              }
            ],
            "tract": "5      "
          }
        ]
      }
    ]
  }
]