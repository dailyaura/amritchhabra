import { Search, Share2, Target, Mail, PenLine } from "lucide-react";

export const CONTACT = {
  name: "Amrit Chhabra",
  role: "Digital Marketing Professional",
  founderOf: "DailyAura.in",
  phone: "9877621320",
  phoneHref: "tel:+919877621320",
  whatsapp: "https://wa.me/919877621320",
  email: "chhabraamrit686@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "SEO", path: "/seo" },
  { label: "Social Media", path: "/social-media" },
  { label: "Meta Ads", path: "/meta-ads" },
  { label: "Email Marketing", path: "/email-marketing" },
  { label: "Content Writing", path: "/content-writing" },
  { label: "Results", path: "/results" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    icon: Search,
    title: "SEO",
    path: "/seo",
    testid: "service-card-seo",
    description:
      "Search engine optimization built on keyword research, search intent, technical health and content that earns lasting organic visibility.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    path: "/social-media",
    testid: "service-card-social",
    description:
      "Content planning, reels strategy and distribution systems that grow reach, engagement and audience quality across platforms.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    path: "/meta-ads",
    testid: "service-card-meta-ads",
    description:
      "Paid campaigns on Facebook and Instagram with structured audience research, creative testing and cost-conscious optimization.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    path: "/email-marketing",
    testid: "service-card-email",
    description:
      "Segmentation, campaign planning and email copywriting that turns subscriber attention into repeat engagement and retention.",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    path: "/content-writing",
    testid: "service-card-content",
    description:
      "SEO content writing and content strategy built around search intent, structure, readability and measurable performance.",
  },
];

export const SECTORS = [
  { name: "Clothing Brands", angle: "Collection launches, lookbook content and shopping intent keywords." },
  { name: "Fashion", angle: "Trend-led reels, seasonal campaigns and style search visibility." },
  { name: "Property Dealers", angle: "Local search presence and enquiry-focused landing content." },
  { name: "Real Estate", angle: "Project visibility, location keywords and lead-oriented campaigns." },
  { name: "Education", angle: "Course discovery content and intent-driven search strategy." },
  { name: "Local Businesses", angle: "Maps visibility, local keywords and community-driven social proof." },
  { name: "Retail", angle: "Product discovery, catalogue content and seasonal promotion calendars." },
  { name: "Lifestyle", angle: "Aspirational content systems and audience-first storytelling." },
  { name: "Professional Services", angle: "Authority content and trust-building search presence." },
  { name: "Personal Brands", angle: "Founder-led content, audience growth and positioning strategy." },
  { name: "Service Businesses", angle: "Enquiry generation through search, social and messaging campaigns." },
  { name: "E-commerce", angle: "Product SEO, shopping feed health and performance creatives." },
  { name: "Healthcare", angle: "Informative content and careful, compliant visibility building." },
  { name: "Dental Care", angle: "Local treatment keywords and patient education content." },
  { name: "Automotive", angle: "Inventory visibility, comparison content and local reach." },
  { name: "Events and Ticketing", angle: "Launch bursts, event discovery and retargeting audiences." },
  { name: "Technology", angle: "Product-led content, feature pages and technical SEO." },
  { name: "SaaS", angle: "Use-case pages, comparison intent and demo-focused funnels." },
  { name: "Hospitality", angle: "Experience storytelling, reviews strategy and booking intent." },
  { name: "Beauty and Wellness", angle: "Visual-first social content and local discovery." },
  { name: "Fitness", angle: "Transformation content, community building and class visibility." },
  { name: "Home Services", angle: "Service-area pages and trust-driven enquiry flows." },
  { name: "Food and Beverage", angle: "Menu discovery, local social reach and seasonal pushes." },
  { name: "Finance and Consulting", angle: "Credibility content and high-intent search capture." },
];

export const GROWTH_STEPS = [
  { num: "01", title: "Strategy", text: "Every engagement starts with research: audience, market, competitors and search demand. Decisions come from data, not guesses." },
  { num: "02", title: "Execution", text: "Plans become shipped work: optimized pages, published content, launched campaigns and structured calendars." },
  { num: "03", title: "Performance", text: "Work is measured against the metrics that matter for the channel: clicks, impressions, reach, interactions, cost per result." },
  { num: "04", title: "Evidence", text: "Results are documented with real dashboards and reports, so progress is visible rather than claimed." },
  { num: "05", title: "Growth", text: "What works gets scaled, what does not gets fixed. Compounding improvements across channels build durable growth." },
];

export const GSC_FEATURED = [
  {
    id: "gsc-01",
    src: "/assets/evidence/gsc-01.png",
    alt: "Google Search Console search performance report comparing the last 3 months with the previous period, showing 119k clicks and 5.57m impressions",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "119k", prev: "82.1k" },
      { label: "Total impressions", value: "5.57m", prev: "4.88m" },
      { label: "Average CTR", value: "2.1%", prev: "1.7%" },
      { label: "Average position", value: "9", prev: "9.2" },
    ],
    note: "A compare view of two consecutive 3 month periods. Clicks moved from 82.1k to 119k while impressions grew from 4.88m to 5.57m, with CTR improving from 1.7% to 2.1%.",
  },
  {
    id: "gsc-02",
    src: "/assets/evidence/gsc-02.png",
    alt: "Google Search Console 16 month search performance report showing 143k clicks and 15.4m impressions",
    period: "Last 16 months",
    metrics: [
      { label: "Total clicks", value: "143k" },
      { label: "Total impressions", value: "15.4m" },
      { label: "Average CTR", value: "0.9%" },
      { label: "Average position", value: "14.4" },
    ],
    note: "A long-range 16 month view of search performance at scale: 143k clicks and 15.4m impressions across the full reporting window.",
  },
  {
    id: "gsc-03",
    src: "/assets/evidence/gsc-03.png",
    alt: "Google Search Console 3 month search performance report showing 58.8k clicks and 5.67m impressions",
    period: "Last 3 months",
    metrics: [
      { label: "Total clicks", value: "58.8k" },
      { label: "Total impressions", value: "5.67m" },
      { label: "Average CTR", value: "1%" },
      { label: "Average position", value: "15.2" },
    ],
    note: "Three months of sustained search visibility: 58.8k clicks on 5.67m impressions with consistent daily traffic across the period.",
  },
  {
    id: "gsc-04",
    src: "/assets/evidence/gsc-04.png",
    alt: "Google Search Console compare report showing clicks up from 8k to 11.9k and average position improved to 6.3",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "11.9k", prev: "8k" },
      { label: "Total impressions", value: "1.54m", prev: "1.23m" },
      { label: "Average CTR", value: "0.8%", prev: "0.6%" },
      { label: "Average position", value: "6.3", prev: "7.1" },
    ],
    note: "Compared with the previous period, clicks grew from 8k to 11.9k and impressions from 1.23m to 1.54m, while average position improved from 7.1 to 6.3.",
  },
  {
    id: "gsc-05",
    src: "/assets/evidence/gsc-05.png",
    alt: "Google Search Console compare report showing clicks up from 6.36k to 10.5k and position improved from 14.4 to 11.8",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "10.5k", prev: "6.36k" },
      { label: "Total impressions", value: "596k", prev: "450k" },
      { label: "Average CTR", value: "1.8%", prev: "1.4%" },
      { label: "Average position", value: "11.8", prev: "14.4" },
    ],
    note: "Period over period growth: clicks up from 6.36k to 10.5k, impressions from 450k to 596k, and average position improved from 14.4 to 11.8.",
  },
  {
    id: "gsc-06",
    src: "/assets/evidence/gsc-06.png",
    alt: "Google Search Console compare report showing an early stage site growing from 19 to 394 clicks",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "394", prev: "19" },
      { label: "Total impressions", value: "6.36k", prev: "222" },
      { label: "Average CTR", value: "6.2%", prev: "8.6%" },
      { label: "Average position", value: "19.1", prev: "9.2" },
    ],
    note: "An early stage visibility build: impressions expanded from 222 to 6.36k and clicks from 19 to 394 as new content began earning search coverage.",
  },
  {
    id: "gsc-07",
    src: "/assets/evidence/gsc-07.png",
    alt: "Google Search Console compare report showing clicks up from 73 to 582 and position improved from 32.6 to 20.2",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "582", prev: "73" },
      { label: "Total impressions", value: "41.9k", prev: "11.3k" },
      { label: "Average CTR", value: "1.4%", prev: "0.6%" },
      { label: "Average position", value: "20.2", prev: "32.6" },
    ],
    note: "A clear relevance recovery: clicks rose from 73 to 582, impressions from 11.3k to 41.9k, and average position improved from 32.6 to 20.2.",
  },
  {
    id: "gsc-08",
    src: "/assets/evidence/gsc-08.png",
    alt: "Google Search Console compare report showing clicks up from 627 to 1.76k and impressions up from 39.9k to 139k",
    period: "Last 3 months vs previous 3 months",
    metrics: [
      { label: "Total clicks", value: "1.76k", prev: "627" },
      { label: "Total impressions", value: "139k", prev: "39.9k" },
      { label: "Average CTR", value: "1.3%", prev: "1.6%" },
      { label: "Average position", value: "16.1", prev: "21.5" },
    ],
    note: "Compared periods show clicks growing from 627 to 1.76k and impressions from 39.9k to 139k, with average position improving from 21.5 to 16.1.",
  },
];

export const GSC_GALLERY = [
  { id: "gsc-gallery-01", src: "/assets/evidence/gsc-gallery-01.png", alt: "Search performance compare view: clicks up from 7.03k to 10.9k on 950k impressions", caption: "10.9k clicks, 950k impressions, period compare" },
  { id: "gsc-gallery-02", src: "/assets/evidence/gsc-gallery-02.png", alt: "Search performance over 3 months: 6.11k clicks and 1.15m impressions", caption: "6.11k clicks, 1.15m impressions, 3 months" },
  { id: "gsc-gallery-03", src: "/assets/evidence/gsc-gallery-03.png", alt: "Search performance compare view: clicks up from 2k to 3.98k, impressions up from 45.4k to 88.5k", caption: "3.98k clicks vs 2k, 88.5k impressions vs 45.4k" },
  { id: "gsc-gallery-04", src: "/assets/evidence/gsc-gallery-04.png", alt: "Search performance compare view: clicks up from 101 to 314, impressions up from 6.88k to 36.2k", caption: "314 clicks vs 101, 36.2k impressions vs 6.88k" },
  { id: "gsc-gallery-05", src: "/assets/evidence/gsc-gallery-05.png", alt: "Search performance compare view: clicks up from 5k to 8.92k on 975k impressions", caption: "8.92k clicks vs 5k, 975k impressions vs 516k" },
  { id: "gsc-gallery-06", src: "/assets/evidence/gsc-gallery-06.png", alt: "Search performance compare view: clicks up from 3.03k to 4.65k on 545k impressions", caption: "4.65k clicks vs 3.03k, 545k impressions vs 417k" },
  { id: "gsc-gallery-07", src: "/assets/evidence/gsc-gallery-07.png", alt: "Search performance compare view: clicks up from 1.83k to 2.24k on 171k impressions", caption: "2.24k clicks vs 1.83k, 171k impressions vs 125k" },
  { id: "gsc-gallery-08", src: "/assets/evidence/gsc-gallery-08.png", alt: "Search performance compare view: clicks up from 3.27k to 4.57k with CTR up to 8%", caption: "4.57k clicks vs 3.27k, CTR 8% vs 4.6%" },
  { id: "gsc-gallery-09", src: "/assets/evidence/gsc-gallery-09.png", alt: "Search performance compare view: clicks up from 847 to 1.09k on 108k impressions", caption: "1.09k clicks vs 847, 108k impressions vs 97k" },
  { id: "gsc-gallery-10", src: "/assets/evidence/gsc-gallery-10.png", alt: "Search performance compare view: impressions up from 48.2k to 89.6k, position improved from 30 to 21.3", caption: "89.6k impressions vs 48.2k, position 21.3 vs 30" },
];

export const SOCIAL_EVIDENCE = [
  {
    id: "social-01",
    src: "/assets/evidence/social-01.png",
    alt: "Meta Business Suite content performance report showing 219.3K views, 16.7K 3-second views and 3.7K content interactions",
    title: "Views and Engagement",
    period: "1 Aug to 15 Aug, as shown in the report",
    metrics: [
      { label: "Views", value: "219.3K" },
      { label: "3-second views", value: "16.7K" },
      { label: "Content interactions", value: "3.7K" },
      { label: "Watch time", value: "4d 6h" },
    ],
    note: "A focused reels and content window where published content generated 219.3K views, 16.7K 3-second views and 3.7K content interactions, with 4 days and 6 hours of total watch time. Growth arrows in the dashboard reflect the lift after a structured content push.",
  },
  {
    id: "social-02",
    src: "/assets/evidence/social-02.png",
    alt: "Meta Business Suite report showing 1.0M views, 540.2K reach and 8.3K content interactions across Facebook and Instagram",
    title: "Cross-Platform Reach",
    period: "Reporting period as shown in the dashboard",
    metrics: [
      { label: "Views", value: "1.0M" },
      { label: "Instagram views", value: "1,003,151" },
      { label: "Reach", value: "540.2K" },
      { label: "Content interactions", value: "8.3K" },
    ],
    note: "A cross-platform reporting period where content passed 1.0M views, driven largely by Instagram with 1,003,151 views, alongside 540.2K reach and 8.3K content interactions.",
  },
  {
    id: "social-03",
    src: "/assets/evidence/social-03.png",
    alt: "Meta Business Suite report showing 174.0K views, 115K reach and 2.9K content interactions between June and September",
    title: "Audience Growth Over a Quarter",
    period: "21 Jun to 9 Sep, as shown in the report",
    metrics: [
      { label: "Views", value: "174.0K" },
      { label: "Reach", value: "115K" },
      { label: "Content interactions", value: "2.9K" },
      { label: "Instagram views", value: "171,626" },
    ],
    note: "A quarter-length view showing 174.0K views, 115K reach and 2.9K content interactions. The dashboard shows reach up 190.9% against the previous period, reflecting compounding distribution.",
  },
];

export const META_ADS_EVIDENCE = [
  {
    id: "meta-ads-01",
    src: "/assets/evidence/meta-ads-01.png",
    alt: "Meta Ads performance overview showing 92 messaging conversations started at 16.25 rupees per conversation on 1,495.43 rupees spent",
    title: "Performance Snapshot A",
    metrics: [
      { label: "Messaging conversations", value: "92" },
      { label: "Cost per conversation", value: "₹16.25" },
      { label: "Amount spent", value: "₹1,495.43" },
    ],
    note: "A messaging campaign snapshot: 92 messaging conversations started at ₹16.25 per conversation on a spend of ₹1,495.43. Shown exactly as reported and kept separate from other campaign periods.",
  },
  {
    id: "meta-ads-02",
    src: "/assets/evidence/meta-ads-02.png",
    alt: "Meta Ads performance overview showing 50 messaging conversations started at 20.03 rupees per conversation on 1,001.51 rupees spent",
    title: "Performance Snapshot B",
    metrics: [
      { label: "Messaging conversations", value: "50" },
      { label: "Cost per conversation", value: "₹20.03" },
      { label: "Amount spent", value: "₹1,001.51" },
    ],
    note: "A separate messaging campaign snapshot: 50 conversations at ₹20.03 per conversation on a spend of ₹1,001.51. This is an independent reporting period and is not combined with Snapshot A.",
  },
];

export const PROCESSES = {
  seo: ["Research", "Search Intent", "Strategy", "Optimization", "Content", "Technical SEO", "Performance Monitoring", "Continuous Improvement"],
  social: ["Audience Research", "Content Planning", "Content Creation", "Reels Strategy", "Distribution", "Engagement", "Performance Monitoring", "Optimization"],
  metaAds: ["Research", "Audience", "Creative", "Launch", "Testing", "Optimization", "Performance"],
  email: ["Audience", "Segmentation", "Campaign Strategy", "Email Copy", "CTA", "Follow-up", "Optimization"],
  content: ["Research", "Search Intent", "Content Structure", "Writing", "SEO Optimization", "Internal Linking", "Publishing", "Performance Review"],
};

export const MARQUEE_ITEMS = [
  "SEO Strategy",
  "Social Media Marketing",
  "Meta Ads",
  "Email Marketing",
  "Content Writing",
  "Content Strategy",
  "Performance Marketing",
  "Digital Growth",
];

export const PAGE_SEO = {
  home: {
    title: "Amrit Chhabra | Digital Marketing Professional",
    description: "Digital marketing that turns strategy into measurable growth. SEO, social media, Meta Ads, email marketing and content writing with real performance evidence.",
  },
  about: {
    title: "About Amrit Chhabra | Digital Marketing Professional",
    description: "The approach, experience and thinking behind Amrit Chhabra's digital marketing work, and the story of founding DailyAura.in.",
  },
  seo: {
    title: "SEO Services | Amrit Chhabra",
    description: "SEO strategy, keyword research, technical SEO and content optimization backed by real Google Search Console performance evidence.",
  },
  social: {
    title: "Social Media Marketing | Amrit Chhabra",
    description: "Social media strategy, reels planning and content distribution with real Meta Business Suite performance evidence.",
  },
  metaAds: {
    title: "Meta Ads Services | Amrit Chhabra",
    description: "Facebook and Instagram advertising with structured audience research, creative testing and real campaign performance snapshots.",
  },
  email: {
    title: "Email Marketing Services | Amrit Chhabra",
    description: "Email strategy, segmentation, campaign planning and copywriting focused on retention and customer communication.",
  },
  content: {
    title: "Content Writing Services | Amrit Chhabra",
    description: "SEO content writing and content strategy built around search intent, structure and performance-focused publishing.",
  },
  results: {
    title: "Results and Performance | Amrit Chhabra",
    description: "Real performance evidence: Google Search Console search performance, Meta Business Suite results and Meta Ads campaign snapshots.",
  },
  contact: {
    title: "Contact Amrit Chhabra | Start a Conversation",
    description: "Discuss your digital marketing goals. Reach out by phone, email or WhatsApp, or send a message through the contact form.",
  },
};
