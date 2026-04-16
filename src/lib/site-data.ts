export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/check-in", label: "Check In" },
  { href: "/my-checkins", label: "My Check-ins" },
  { href: "/crews", label: "Crews" },
  { href: "/network", label: "Network" },
  { href: "/activities", label: "Activities" },
  { href: "/messages", label: "Messages" },
  { href: "/profile", label: "Profile" },
];

export const featureCards = [
  {
    title: "Location Check-In",
    description:
      "Check in at airports and cities to let crew members know where you are.",
  },
  {
    title: "Organize Activities",
    description:
      "Create or join activities like sightseeing, dining, or sports.",
  },
  {
    title: "Aviation Network",
    description:
      "Connect with pilots and flight attendants from airlines worldwide.",
  },
];

export const activityCategories = [
  "All",
  "Sightseeing",
  "Dining",
  "Sports",
  "Nightlife",
  "Shopping",
  "Culture",
  "Relaxation",
  "Adventure",
];

export const profileInterests = [
  "Photography",
  "Hiking",
  "Fine Dining",
  "Aviation History",
  "Sports",
  "Music",
  "Travel",
  "Technology",
  "Cooking",
  "Reading",
];

export const profileLanguages = [
  "Deutsch",
  "English",
  "Español",
  "Français",
  "Italiano",
  "中文",
  "日本語",
  "Русский",
  "العربية",
];

export const positions = [
  "Captain",
  "First Officer",
  "Senior First Officer",
  "Second Officer",
  "Flight Attendant",
  "Purser",
  "Engineer",
  "Ground Staff",
];

export const userPreview = {
  displayName: "Lena Hoffmann",
  handle: "lena.hoffmann",
  airlineRole: "Lufthansa • Flight Attendant",
};

export const sampleCheckIns = [
  {
    city: "New York",
    location: "JFK Airport",
    dates: "Apr 18 - Apr 20",
    airline: "Lufthansa",
    lookingFor: "Dinner, Sightseeing",
    notes: "Layover with one free evening in Manhattan.",
    createdAt: "Created 2h ago",
  },
  {
    city: "Singapore",
    location: "Marina Bay",
    dates: "Apr 26 - Apr 28",
    airline: "Emirates",
    lookingFor: "Sports",
    notes: "Open for a sunrise run or tennis session.",
    createdAt: "Created yesterday",
  },
];

export const nearbyCrews = [
  {
    name: "Marco Vidal",
    airlineRole: "Iberia • Captain",
    location: "JFK Airport",
    checkInTime: "Checked in 40 min ago",
    quote: "Always up for local food spots after landing.",
    interests: ["Dining", "Aviation History", "Travel"],
    state: "Connect",
  },
  {
    name: "Aisha Khan",
    airlineRole: "Qatar Airways • Flight Attendant",
    location: "Downtown Manhattan",
    checkInTime: "Checked in 1h ago",
    quote: "Photo walks and rooftop sunsets are my weakness.",
    interests: ["Photography", "Sightseeing", "Music"],
    state: "Pending",
  },
];

export const sampleActivities = [
  {
    title: "Sunset Photography Tour",
    category: "Sightseeing",
    description:
      "Golden hour walk with skyline views, quick coffee stop, and a few hidden photo spots.",
    location: "Brooklyn Bridge Park",
    date: "Apr 18",
    time: "18:30",
    participants: "4/8",
    action: "Join Activity",
  },
  {
    title: "Crew Dinner at Marina Bay",
    category: "Dining",
    description:
      "Relaxed dinner for international crew members who want to explore local recommendations.",
    location: "Singapore",
    date: "Apr 26",
    time: "20:00",
    participants: "8/8",
    action: "Full",
  },
];

export const connectionTabs = [
  {
    label: "Pending",
    empty: "No pending connection requests",
    action: "Accept | Decline",
  },
  {
    label: "Sent",
    empty: "No pending requests sent",
    action: "Cancel Request",
  },
  {
    label: "Connected",
    empty: "No connections yet",
    action: "Connected",
  },
  {
    label: "Declined",
    empty: "No declined requests",
    action: "Remove",
  },
];

export const statsCards = [
  { label: "Organized", value: "12" },
  { label: "Participated", value: "39" },
  { label: "Check-Ins", value: "57" },
];
