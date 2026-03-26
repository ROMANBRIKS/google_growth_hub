export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  affiliateLink: string;
  videoUrl: string;
  comparison: {
    feature: string;
    workspace: string;
    cloud: string;
    play: string;
  }[];
}

export const SERVICES: ServiceInfo[] = [
  {
    id: "workspace",
    title: "Google Workspace",
    description: "Everything you need to get anything done, now in one place. Google Workspace includes all of the productivity apps you know and love—Gmail, Calendar, Drive, Docs, Sheets, Slides, Meet, and many more.",
    icon: "Layout",
    features: [
      "Custom business email",
      "Video conferencing with 100+ participants",
      "Secure cloud storage",
      "Collaborative documents, spreadsheets, and presentations"
    ],
    affiliateLink: "https://workspace.google.com/signup/business/welcome",
    videoUrl: "https://www.youtube.com/embed/bE31y5HbukA",
    comparison: [
      { feature: "Primary Use", workspace: "Collaboration & Productivity", cloud: "Infrastructure & Computing", play: "App Distribution & Content" },
      { feature: "Target Audience", workspace: "Teams & Small Businesses", cloud: "Developers & IT Enterprises", play: "App Developers & Consumers" },
      { feature: "Key Benefit", workspace: "Seamless Teamwork", cloud: "Scalable Infrastructure", play: "Global Reach" }
    ]
  },
  {
    id: "cloud",
    title: "Google Cloud",
    description: "Accelerate your organization's digital transformation with Google Cloud. Build, deploy, and scale applications on the same infrastructure Google uses.",
    icon: "Cloud",
    features: [
      "Compute Engine & Kubernetes",
      "BigQuery for Data Analytics",
      "Vertex AI for Machine Learning",
      "Cloud Storage & Databases"
    ],
    affiliateLink: "https://cloud.google.com/free",
    videoUrl: "https://www.youtube.com/embed/uS_v_u6E-7o",
    comparison: [
      { feature: "Primary Use", workspace: "Collaboration & Productivity", cloud: "Infrastructure & Computing", play: "App Distribution & Content" },
      { feature: "Target Audience", workspace: "Teams & Small Businesses", cloud: "Developers & IT Enterprises", play: "App Developers & Consumers" },
      { feature: "Key Benefit", workspace: "Seamless Teamwork", cloud: "Scalable Infrastructure", play: "Global Reach" }
    ]
  },
  {
    id: "play",
    title: "Google Play",
    description: "Reach billions of users worldwide with Google Play. Distribute your apps, games, and digital content on the world's most popular mobile platform.",
    icon: "Play",
    features: [
      "Global App Distribution",
      "Play Console Analytics",
      "Monetization Tools",
      "Security & App Integrity"
    ],
    affiliateLink: "https://play.google.com/console/about/",
    videoUrl: "https://www.youtube.com/embed/70pY7-VvK_U",
    comparison: [
      { feature: "Primary Use", workspace: "Collaboration & Productivity", cloud: "Infrastructure & Computing", play: "App Distribution & Content" },
      { feature: "Target Audience", workspace: "Teams & Small Businesses", cloud: "Developers & IT Enterprises", play: "App Developers & Consumers" },
      { feature: "Key Benefit", workspace: "Seamless Teamwork", cloud: "Scalable Infrastructure", play: "Global Reach" }
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "How to Scale Your Startup with Google Cloud",
    excerpt: "Learn the best practices for leveraging Google Cloud's scalable infrastructure to grow your business from zero to millions of users.",
    content: "Scaling a startup is one of the biggest challenges founders face. Google Cloud provides the tools needed to handle rapid growth without the headache of managing physical hardware...",
    author: "Alex Rivera",
    date: "March 20, 2026",
    category: "Cloud"
  },
  {
    id: "2",
    title: "Maximizing Team Productivity with Google Workspace",
    excerpt: "Discover hidden features in Google Docs, Sheets, and Meet that can save your team hours every week.",
    content: "Most teams only use about 20% of what Google Workspace offers. In this post, we dive deep into advanced collaboration features...",
    author: "Sarah Chen",
    date: "March 18, 2026",
    category: "Workspace"
  },
  {
    id: "3",
    title: "The Developer's Guide to Google Play Console",
    excerpt: "A comprehensive look at the new features in Google Play Console designed to help you improve app quality and reach.",
    content: "Google Play Console has evolved significantly. From improved vitals reporting to better A/B testing tools, here is what you need to know...",
    author: "Marcus Thorne",
    date: "March 15, 2026",
    category: "Play"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary business goal right now?",
    options: [
      { text: "Improving team collaboration and communication", value: "workspace" },
      { text: "Building and scaling a custom application", value: "cloud" },
      { text: "Distributing a mobile app to a global audience", value: "play" },
      { text: "Analyzing large sets of business data", value: "cloud" }
    ]
  },
  {
    id: 2,
    question: "How many people are in your organization?",
    options: [
      { text: "Just me (Solo-entrepreneur)", value: "workspace" },
      { text: "Small team (2-20 people)", value: "workspace" },
      { text: "Growing startup (20-100 people)", value: "cloud" },
      { text: "Large enterprise (100+ people)", value: "cloud" }
    ]
  },
  {
    id: 3,
    question: "What is your technical expertise level?",
    options: [
      { text: "Non-technical / Business focused", value: "workspace" },
      { text: "Some technical knowledge", value: "workspace" },
      { text: "Developer / Engineer", value: "cloud" },
      { text: "IT Professional", value: "cloud" }
    ]
  }
];
