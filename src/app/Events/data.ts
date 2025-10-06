"use client";
export interface SocialLink {
  icon: string;
  href: string;
}

export interface Event {
  id: string;
  date: string;
  day: number;
  month: string;
  timeRange: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  cardImage: string;
  detailImages: string[];
  socialLinks: SocialLink[];
}

export const eventsData: Event[] = [
  {
    id: "independence-day-2025",
    date: "15 Aug.",
    day: 15,
    month: "Aug",
    timeRange: "7:00 - 15 Aug, 12:00",
    title: "Independence Day",
    shortDescription:
      "The 79th Independence Day was celebrated with great pomp on 15 August 2025 at the Central Institute of Subtropical Horticulture, Indian Council of Agricultural Research. At The Main Campus At Rahmankheda, The Director Of The Institute, Dr. T. Damodaran Hoisted The Flag And Congratulated All The Officers And Employees Of The Institute On Independence Day. On This Occasion, The Director Addressed All The Officers And Employees And Explained That Not Only Will We Move Forward By Accommodating Both Agricultural Demand And Technology Will We Be Able To Build A New India. All The Officers And Employees Of The Institute Were Present At The Program.",
    fullDescription:
      "The 79th Independence Day was celebrated with great pomp on 15 August 2025 at the Central Institute of Subtropical Horticulture, Rahmankheda, Lucknow Under The Indian Council Of Agricultural Research. At The Main Campus At Rahmankheda, The Director Of The Institute, Dr. T. Damodaran Hoisted The Flag And Congratulated All The Officers And Employees Of The Institute On Independence Day. On This Occasion, The Director Addressed All The Officers And Employees And Explained That Not Only Will We Move Forward By Accommodating Both Agricultural Demand And Technology Will We Be Able To Build A New India. All The Officers And Employees Of The Institute Were Present At The Program.",
    cardImage: "/icons/independence1.svg",
    detailImages: [
      "/icons/independencedetail1.svg",
      "/icons/independencedetail2.svg",
      "/icons/independencedetail3.svg",
    ],
    socialLinks: [
      { icon: "/icons/fbevent.svg", href: "#" },

      { icon: "/icons/instaevent.svg", href: "#" },
      { icon: "/icons/xevent.svg", href: "#" },
      { icon: "/icons/youtubeevent.svg", href: "#" },
    ],
  },
  {
    id: "entrepreneurship-development-programme",
    date: "19 Aug.",
    day: 19,
    month: "Aug",
    timeRange: "10:00 - 21 Aug, 05:00",
    title: "Entrepreneurship Development Programme (EDP)",
    shortDescription:
      "An Entrepreneurship Development Programme (EDP) On “Container Fruit Culture And Bonsai Making” Was Organized From 19th - 21st August, 2025 At The ICAR – Central Institute For Subtropical Horticulture (CISH), Lucknow By Non-And Agribusiness Incubation Centre, ICAR-CISH, Lucknow For Promoting Start-Ups In Horticulture. On The Inaugural Day Of EDP Who Gave Hands-On Training On Media Preparation For Fruit Culture And Bonsai, Its Cultivation, Pest And Disease Management Of Bonsai, Types Of Container Fruit Culture And Bonsai Etc. Participants Prepared Bonsai Plant Samples By Their Own During The Practical Session.",
    fullDescription:
      "An Entrepreneurship Development Programme (EDP) On “Container Fruit Culture And Bonsai Making” Was Organized From 19th - 21st August, 2025 At The ICAR – Central Institute For Subtropical Horticulture (CISH), Lucknow By Non-And Agribusiness Incubation Centre, ICAR-CISH, Lucknow For Promoting Start-Ups In Horticulture. On The Inaugural Day Of EDP Who Gave Hands-On Training On Media Preparation For Fruit Culture And Bonsai, Its Cultivation, Pest And Disease Management Of Bonsai, Types Of Container Fruit Culture And Bonsai Etc. Participants Prepared Bonsai Plant Samples By Their Own During The Practical Session.",
    cardImage: "/icons/independence2.svg",
    detailImages: [
      "/icons/independencedetail1.svg",
      "/icons/independencedetail2.svg",
      "/icons/independencedetail3.svg",
    ],
    socialLinks: [
      { icon: "/icons/fbevent.svg", href: "#" },

      { icon: "/icons/instaevent.svg", href: "#" },
      { icon: "/icons/xevent.svg", href: "#" },
      { icon: "/icons/youtubeevent.svg", href: "#" },
    ],
  },
  {
    id: "one-day-training-cum-demonstration",
    date: "28 Aug.",
    day: 28,
    month: "Aug",
    timeRange: "10:00 - 28 Aug, 05:00",
    title: "One Day Training Cum Demonstration",
    shortDescription:
      "The ICAR-Central Institute For Subtropical Horticulture Organized A One-Day Training-Cum-Demonstration On “Pre And Post-Harvest Management Of Mango” For Farmers From The Inaugural Session, Principal Scientist Dr. Dushyant Mishra Welcomed All The Participants From Various Institutes And Different Blocks Of Lucknow, Hardoi, And Kanpur Districts. In His Inaugural Address, Dr. T. Damodaran, Director Of The Institute Emphasized The Need For Adopting Scientific Pre-And Post-Harvest Techniques For Developing Latest Technology For Mango Restoration And Highlighted The Efforts Of The Institute In Developing And Transferring The Latest Innovations To Go On Mango Harvesting And Pruning.",
    fullDescription:
      "The ICAR-Central Institute For Subtropical Horticulture Organized A One-Day Training-Cum-Demonstration On “Pre And Post-Harvest Management Of Mango” For Farmers From The Inaugural Session, Principal Scientist Dr. Dushyant Mishra Welcomed All The Participants From Various Institutes And Different Blocks Of Lucknow, Hardoi, And Kanpur Districts. In His Inaugural Address, Dr. T. Damodaran, Director Of The Institute Emphasized The Need For Adopting Scientific Pre-And Post-Harvest Techniques For Developing Latest Technology For Mango Restoration And Highlighted The Efforts Of The Institute In Developing And Transferring The Latest Innovations To Go On Mango Harvesting And Pruning.",
    cardImage: "/icons/independence3.svg",
    detailImages: [
      "/icons/independencedetail1.svg",
      "/icons/independencedetail2.svg",
      "/icons/independencedetail3.svg",
    ],
    socialLinks: [
      { icon: "/icons/fbevent.svg", href: "#" },

      { icon: "/icons/instaevent.svg", href: "#" },
      { icon: "/icons/xevent.svg", href: "#" },
      { icon: "/icons/youtubeevent.svg", href: "#" },
    ],
  },
];
