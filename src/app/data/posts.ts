export interface Post {
  id: number;
  text: string;
  images: string[];
  videos?: string[];
  timestamp: string;
  category?: string;
  price?: number;
}

export const posts: Post[] = [
  {
    id: 1,
    text: "2ème DÉMARQUE ! … See more 2ème DÉMARQUE ! … See more Like Comment",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/614863038_1478046947654600_2722557603128065235_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Y3zlu1WoWt0Q7kNvwFbmwmo&_nc_oc=AdmMqir5Sja_9iVSsybsycCLo36FqHkTkMyt1-6jt2DW_SYWVV8ISy8lkU-1IxEWxmw&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=6NcXVzRKWLMYsZ-fhIr4Mg&oh=00_AfqYPHt1OHN7zB6EEKPbPlwbqUdA-AnywYNFKFkuYrL1rA&oe=697899A5"
    ],
    videos: [],
    timestamp: "January 14 at 6:22 AM"
  },
  {
    id: 2,
    text: "C'est les SOLDES chez Havane ! … See more C'est les SOLDES chez Havane ! … See more Like Comment",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/612108059_1472407364885225_7742006345236776730_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nUg8E85e9NsQ7kNvwGk7iE6&_nc_oc=AdkeMzTmaEJio55BW-OlY670UByfpQH4LK2E6TOLPlBOkYr7UwCH33Ze7BcE2DXTY1Q&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=QVGrynwbaPfO5aC7XI-Lvw&oh=00_AfrIwNmVZRHamJ4F-xKbHaP1dirXB5_5oooxrx097IuRAg&oe=69787EF7"
    ],
    videos: [],
    timestamp: "January 7 at 7:23 AM"
  },
  {
    id: 3,
    text: "Des cadeaux pour tous les goûts... Et tous les budgets! … See more Des cadeaux pour tous les goûts..",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t15.5256-10/596027614_1388409482776722_6389843682279328645_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5fad0e&_nc_ohc=YwSJSTxnF_gQ7kNvwGp9xjC&_nc_oc=Adm8iIj_gIKbLwYWoSO7K5zjtCUwhuYhXboydi0kceN3IOwb3HAPEsBiXaUmbWwPjPo&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=QVGrynwbaPfO5aC7XI-Lvw&oh=00_AfokymxhKugMLgMFMfmaq-bt8SfeC8X3UxA18NHXJSwykw&oe=6978A625"
    ],
    videos: [],
    timestamp: ""
  },
  {
    id: 4,
    text: "Ambiance chaleureuse et looks de saison: bienvenue dans notre univers de fêtes… See more Ambiance ch",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/595702258_1445568560902439_6641210930006422362_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=djjuaSxaWXkQ7kNvwHQHqBL&_nc_oc=AdkveZxlidCJnCyhAY25On8Ufmx_YqHJuMISpC1ojYkBp2byubgBS-wcFRxxraBBSx4&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=QVGrynwbaPfO5aC7XI-Lvw&oh=00_AfrG3jJUEhOZphOI7h24VomJInscXodQlEplc5HypmfL1g&oe=6978A369",
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/595810174_1445568587569103_5683431740011167505_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O5lkWHdRitYQ7kNvwG7t8in&_nc_oc=AdmrIgcz0UcdbYmQDH50iWkjGJaKtI3v4vSf-QTZhWYMmaJae_RtDuUt1gKNyvk-u3M&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=QVGrynwbaPfO5aC7XI-Lvw&oh=00_Afqynd-Z5ICD15haw0yU87iZj4qE3mChslMJQTRpr9hfqw&oe=697896E5"
    ],
    videos: [],
    timestamp: "December 5, 2025"
  },
  {
    id: 5,
    text: "Si le père Noël passe par ici, il sait quoi prendre  Wishlist de noël #… See more Si le père Noël pa",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/593896043_1443046607821301_7812593352303348213_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pm-fZt0IJCoQ7kNvwGZHfo1&_nc_oc=AdmlTfHlfV_pyiNIgF2zGA2503xaPi8fhX4pwlNhp50AoJf49rpnI4yxIzxbMWHl8Cs&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=Z-RDpCFH2kRG8zw1dAbM-A&oh=00_AfoTP_h9eaSeh69V_mI46aOLAv-G1ry9z9iPr1_f3IV5KQ&oe=69788A9B"
    ],
    videos: [],
    timestamp: "December 2, 2025"
  },
  {
    id: 6,
    text: "Boss Jeans L'élégance du denim. La signature du style.… See more Boss Jeans L'élégance du denim. La ",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/584293359_1431033619022600_5544714962360238812_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pPMLTggPMCAQ7kNvwFGTxFf&_nc_oc=Adlr1WjFel0tk5ViPx_cxfc5ftxabO1LFMlEduEMYiD_adrcLSYnkvi1s-eB6PhiwM4&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=Z-RDpCFH2kRG8zw1dAbM-A&oh=00_AfosULja8sg-5bguxscROC4aaL_zZR8csPkDaXn8I2Y1fw&oe=69789EF2"
    ],
    videos: [],
    timestamp: "November 18, 2025"
  },
  {
    id: 7,
    text: "BOSS - le juste équilibre entre confort et caractère … See more BOSS - le juste équilibre entre conf",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/583446997_1427634722695823_5141378191002760380_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jsXCsVOpONoQ7kNvwGLOMd3&_nc_oc=AdkT0KOvTveHM9LA90WrH20ODySuEIzn_xwwAqKOUmosTKKmVHAKY5TsgmuARiBCe4I&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=Z-RDpCFH2kRG8zw1dAbM-A&oh=00_AfrGaMUPsy9A6wgcnAzo5qz96tehm9Tnwb2GYF0gfMImZA&oe=697889B4"
    ],
    videos: [],
    timestamp: "November 14, 2025"
  },
  {
    id: 8,
    text: "Texture, ton, attitude.Le velours fait son retour - Une teinte à adopter sans hésiter … See more Tex",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/577811165_1421965599929402_5140587254028853990_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xJCZtGZptGkQ7kNvwF6NFAN&_nc_oc=AdmVc5qJx9YPT2OqUif5vGzBhDMofxOU5xIYx0eAiBRmjEYiZUADwdn2NTJbygFKhUw&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=RZRBn10_mjDHY0VWAWb95w&oh=00_Afr78ruSjTwiE5akmFgDOSUAyM68GDhhRz-77OaK9-KD1Q&oe=69789523"
    ],
    videos: [],
    timestamp: "November 8, 2025"
  },
  {
    id: 9,
    text: "Changez de face, gardez le style - la doudoune réversible K-way  Portez la différence … See more Cha",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/576832414_1418162776976351_1421898193391441910_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gRKxeCMns1IQ7kNvwHQFLRk&_nc_oc=AdnoxilTsGMLEy13QbmzfhsbpmUNeCeKGtAvWVf3wsyI9iZESrn0GWwOdJQIHGywxes&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=RZRBn10_mjDHY0VWAWb95w&oh=00_AfpGF0frxvuhTUvn7i54YVDWMYahfp-WDBRDy-hvnHR_jQ&oe=6978A476",
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/575198791_1418162823643013_7198870303286127291_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6acF6o6QnBcQ7kNvwEi3YhE&_nc_oc=Admesm5_CsEGZmM7fBnc4_1vamggC_nzc9xUYrN0h4lpYfoAJabwWm-Rloxo0zN5PRA&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=RZRBn10_mjDHY0VWAWb95w&oh=00_AfoYdpiaOXAk4H3omMBBDqTl1Ut7PHlrc8f6Qd1Lm8557w&oe=69788D74"
    ],
    videos: [],
    timestamp: "November 4, 2025"
  },
  {
    id: 10,
    text: "Élégance, précision, caractère.Des créations pensées pour l'homme moderne.… See more Élégance, préci",
    images: [
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/571339648_1414322010693761_5290993873093982751_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ElhWB1skwaUQ7kNvwHAe3pY&_nc_oc=AdmrcO_OCuy6rjhmek-el7MD7nMErKemiLje9278TkUtxR0VjCSWqCWobEZ8WS_B_XA&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=RZRBn10_mjDHY0VWAWb95w&oh=00_Afq86RwzIcqcwWj9B63R3AtcIIm--v5XIysOFyLhbid_SQ&oe=69788933",
      "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/571574060_1414321980693764_2487916263657265642_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gkVx826-EnkQ7kNvwGYrDC2&_nc_oc=Admlv4KPz9vC3lNg0PLOYiP4fp4vIUnA6e2YpMqqM5G4Yp9OgJOptPguE03tjA9_m1I&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=RZRBn10_mjDHY0VWAWb95w&oh=00_AfoNP3KXxutco8FVoXhWdL8iAyZDLXLIbmakfGNMP2wQjw&oe=6978B1F4"
    ],
    videos: [],
    timestamp: "October 31, 2025"
  }
];
