import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
 
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Personal Websites",
  "Business Websites",
  "E-commerce Websites",
  "Portfolio Websites",
  "Blog Websites",
  "Landing Pages",
  "Educational Websites",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
"For established businesses that need ongoing, in-depth strategic support."
  "For small teams and startups needing foundational support.";

export const collabContent = [
  {
    id: "0",
    title: "Smart Setup",
    text: collabText,
  },
  {
    id: "1",
    title: "24/7 Support",
  },
  {
    id: "2",
    title: "Priority Support",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Guidance/Consultation",
    description: "Starting at",
    price: "0",
    features: [
      "Advice on web strategies, SEO basics, and user experience improvements",
      "One 15-minits consultation on phone",
      "Email follow-up for any questions related to the session"
    ],
  },
  {
    id: "1",
    title: "For Websait",
    description: "Starting at",
    price: "5,000",
    features: [
      "Basic website setup and design",
      "Basic Maintenance Price Range:INR 10,000/mont",
      "For informational websites with minimal functionality, and simple design.",
    ],
  },
  {
    id: "2",
    title: "For More",
    description: "contect us",
    price: null,
    features: [
      "Basic UI/UX Package INR 1,000 - 5,000 (One-time)",
      "Basic App Development INR 8,000 - 12,000",
      "Graphic Design INR 5,000 - 10,000",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Guidance and Consultation",
    text: "Not sure where to start? Our guidance services offer personalized advice and strategies for your digital projects, whether it's selecting the right technology, improving user engagement, or refining a business idea. Let our experts lead you towards success.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Website Development and Maintenance",
    text: "We specialize in creating dynamic, user-friendly websites that cater to your needs. Whether you're looking to launch a new website or maintain an existing one, our expert developers ensure seamless performance and regular updates to keep your online presence robust and up-to-date.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Graphic Design",
    text: "Our graphic design team brings creativity and precision to every project, from logos and branding to marketing materials and digital assets. We work closely with clients to capture their vision and communicate their message effectively through captivating visuals.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Android App Development",
    text: "We design and develop Android applications that deliver exceptional user experiences. From concept to deployment, our team ensures every app is intuitive, feature-rich, and optimized for performance across a wide range of Android devices.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "UI/UX Design",
    text: "We focus on creating intuitive, user-friendly interfaces that enhance the overall experience for users. Our UI/UX design services combine functionality with aesthetics, ensuring a smooth, engaging interaction across web and mobile platforms.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Software Development",
    text: "Our team of developers builds custom software solutions tailored to your business needs. Whether it’s an internal tool to improve workflows or a consumer-facing product, we ensure scalability, efficiency, and security at every stage of development.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/devl_ens?igsh=aHhnbDAwZTJwMGs3&utm_source=qr",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

