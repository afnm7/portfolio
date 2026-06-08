export const projects = [
  {
    id: "P-01",
    title: "Code Exchange",
    subtitle: "Developer Knowledge Platform",
    tech: ["React", "JavaScript", "Node.js"],
    tags: ["Frontend", "Backend", "Community"],
    description:
      "A platform where developers can share code, explanations and solutions in a structured way.",
    points: [
      "Built a React frontend with reusable components",
      "Structured the project into pages, data and UI components",
      "Designed a clear interface for sharing code and technical knowledge",
      "Separated logic and UI to keep the code easier to maintain",
    ],
  },
  {
    id: "P-02",
    title: "Elections",
    subtitle: "Election Analysis Platform",
    tech: ["Java", "Spring Boot", "Vue", "Docker"],
    tags: ["REST API", "Data Analysis", "Full-stack"],
    description:
      "A full-stack election platform for processing, displaying and analyzing election data.",
    points: [
      "Built Spring Boot REST APIs for election data, parties and results",
      "Created a Vue frontend with routing, dashboards and interactive views",
      "Designed a relational data model for parties, municipalities and results",
      "Used Docker to run the frontend and backend in a reproducible setup",
    ],
  },
  {
    id: "P-03",
    title: "Webshop",
    subtitle: "E-commerce System",
    tech: ["TypeScript", "Express.js", "MySQL"],
    tags: ["TDD", "SOLID", "REST API"],
    description:
      "An e-commerce system with cart, wishlist, discount codes, checkout and order handling.",
    points: [
      "Developed Express REST APIs for cart, checkout, wishlist and orders",
      "Used MySQL for users, products, sessions, carts and orders",
      "Separated backend logic into controllers, services, middleware and interfaces",
      "Wrote Vitest tests with mocks and test helpers",
    ],
  },
  {
    id: "P-04",
    title: "DarkTech",
    subtitle: "Realtime Body Tracker",
    tech: ["Python", "Flask", "OpenCV", "MediaPipe"],
    tags: ["Computer Vision", "Tracking", "Raspberry Pi"],
    description:
      "A realtime body-tracking system that detects body position and displays live tracking data.",
    points: [
      "Built realtime body tracking with Python, OpenCV and MediaPipe",
      "Used pose landmarks to calculate body position, direction and bounding boxes",
      "Created a Flask dashboard for live X/Y-coordinate display",
      "Added CSV and readable log files for tracking results",
    ],
  },
];