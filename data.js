window.PORTFOLIO_DATA = {
  "fname": "Khaled Mosharraf",
  "lname": "",
  "title": "Khaled's portfolio",
  "status": "Open to collaboration",
  "loc": "Dhaka, Bangladesh",
  "school": "Daffodil International University",
  "club": "DIU cybersecurity club",
  "track": "CompTIA Network+ and Security+",
  "email": "protwoy787@gmail.com",
  "phone": "",
  "github": "www.github.com/protwoy007",
  "linkedin": "linkedin.com/in/protwoy007",
  "bio": "Second-year Computer Science and Engineering student in Dhaka. I like learning how systems talk to each other, from subnets and packets to smart contracts and circuits, and how to keep them safe.",
  "about1": "I am a second-year CSE student at Daffodil International University in Dhaka and a member of the DIU cybersecurity club. My work so far spans networking labs, blockchain, web apps with React and Firebase, and hardware with Arduino and ESP32.",
  "about2": "Right now I am working toward CompTIA Network+ and Security+, and researching how blockchain could make public fund tracking more transparent in rural Bangladesh.",
  "interests": "Cybersecurity, Networking, Blockchain, Embedded systems, Web development",
  "botname": "Khaled's Assistant",
  "botprompt": "You are the assistant on Khaled's portfolio site. Khaled is a second-year CSE student at Daffodil International University in Dhaka, Bangladesh, and a member of the DIU cybersecurity club. He works across networking, security fundamentals, blockchain, web development and embedded hardware. Answer questions about his skills, projects and how to contact him. Keep answers short and friendly. If you do not know something about Khaled, say so instead of guessing.",
  "skills": [
    {
      "name": "Cisco Packet Tracer",
      "cat": "Networking"
    },
    {
      "name": "OSI and TCP/IP",
      "cat": "Networking"
    },
    {
      "name": "Subnetting",
      "cat": "Networking"
    },
    {
      "name": "Linux",
      "cat": "Security"
    },
    {
      "name": "Security fundamentals",
      "cat": "Security"
    },
    {
      "name": "Firebase",
      "cat": "Web"
    },
    {
      "name": "Arduino",
      "cat": "Hardware"
    },
    {
      "name": "ESP32",
      "cat": "Hardware"
    },
    {
      "name": "KiCad",
      "cat": "Hardware"
    },
    {
      "name": "EasyEDA",
      "cat": "Hardware"
    },
    {
      "name": "C",
      "cat": "Programming"
    },
    {
      "name": "Algorithms",
      "cat": "Programming"
    },
    {
      "name": "Blockchain",
      "cat": "Programming"
    },
    {
      "name": "JavaScript",
      "cat": "Web"
    },
    {
      "name": "React",
      "cat": "Web"
    },
    {
      "name": "Chrome extensions",
      "cat": "Web"
    },
    {
      "name": "Flutter",
      "cat": "Mobile"
    },
    {
      "name": "Kotlin",
      "cat": "Mobile"
    },
    {
      "name": "Java",
      "cat": "Programming"
    }
  ],
  "projects": [
    {
      "title": "Seat Hold",
      "visual": "seats",
      "emoji": "",
      "desc": "A Chrome extension for the Bangladesh Railway e-ticket site that holds seats the moment tickets release at 8:00:00. Prefers side-by-side seats, falls back to any seats, and has a draggable panel, sound alerts and a watch mode that grabs seats other people release.",
      "tags": "Chrome Extension, JavaScript, Automation",
      "live": "",
      "code": "",
      "cat": "Extension",
      "status": "New",
      "details": "Tickets on the Bangladesh Railway e-ticket site can sell out within a minute of release. Seat Hold waits for the release time, then holds the seats you asked for on your route.\n\nIt is a separate extension from Ticket Finder. Its panel sits on the left side of the page while Ticket Finder's sits on the right.",
      "features": "Holds seats at the release time, 8:00:00 by default and editable\nPrefers side-by-side seats and falls back to any seats\nDraggable panel that remembers if it was open or closed\nDate picker in dd/mm/yyyy, and a sound alert with a stop button\nWatch mode: holds a seat on your route if someone else releases it, within a time limit you set\nHandles both broad gauge and meter gauge seat plans",
      "photos": []
    },
    {
      "title": "Trip Expense Tracker",
      "visual": "generic",
      "emoji": "🧾",
      "desc": "A shared expense tracker for group trips, hosted on GitHub Pages. Admins edit, the team views, each person's contribution is tracked, and every change is logged with its time in a git-style history.",
      "tags": "Firebase, GitHub Pages, Web",
      "live": "",
      "code": "https://github.com/protwoy007/trip_expense",
      "cat": "Web",
      "status": "New",
      "details": "Built to keep track of spending on a group trip. Admins can edit everything, while the rest of the team can open the page and follow the spending.\n\nIt is hosted on GitHub Pages, with Firebase behind it, and the Firebase key is kept out of the public repository.",
      "features": "Each expense stores a name, amount, date added, track date, place and notes\nGit-style change history: every edit is logged with the time it happened\nPer-person contribution tracking\nAdmin login for editing, view-only for the team\nDark blue, black and lime colour palette",
      "photos": []
    },
    {
      "title": "DengueShield BD",
      "visual": "generic",
      "emoji": "🦟",
      "desc": "A Flutter dengue early-warning app for Bangladesh. Includes dark mode, phone-only case reporting, a facts and myths screen, a 14-day trend history and a daily morning risk notification.",
      "tags": "Flutter, Mobile, Public health",
      "live": "",
      "code": "",
      "cat": "Mobile",
      "status": "New",
      "details": "An early-warning app for dengue in Bangladesh, built with Flutter. It started as a prototype and has been through a full usability upgrade and several feature releases.\n\nCase reports are stored on the phone only, which keeps the prototype simple.",
      "features": "Dark mode\nReport a case, stored on the phone\nDengue facts and myths screen\n14-day trend history\nDaily morning risk notification",
      "photos": []
    },
    {
      "title": "Tender Package Builder",
      "visual": "generic",
      "emoji": "📑",
      "desc": "A browser-only tool built for the AI DevFest 2026 Vibe Coding contest. It turns separate tender PDFs into one checked, ordered package, in Bangla and English, with no server.",
      "tags": "Frontend-only, PDF, Bangla and English, Contest",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "Updated",
      "details": "Built for the frontend-only problem of the AI DevFest 2026 Vibe Coding contest, a 90-minute build held on 6 October 2026. Tender documents arrive as separate PDFs and have to be put together into one correct package.\n\nIt is being upgraded after the contest with a better interface, more languages and a proper README.",
      "features": "Combines separate PDFs into one checked, ordered package\nWorks in Bangla and English\nRuns entirely in the browser, with no server",
      "photos": []
    },
    {
      "title": "Messenger Auto-Reply",
      "visual": "generic",
      "emoji": "💌",
      "desc": "A rule-based browser extension that answers Facebook messages without any AI or API: if a message matches a rule, the matching reply is sent. Setup wizard, ready-made templates, and separate rules for one-to-one and group chats.",
      "tags": "Chrome Extension, JavaScript, Rule-based",
      "live": "",
      "code": "",
      "cat": "Extension",
      "status": "In progress",
      "details": "A browser extension that replies to Facebook messages by rules instead of AI. If a message says a set phrase, or something close to it, the matching reply is sent.\n\nThe settings dashboard is being redesigned so that anyone can set it up without thinking about it.",
      "features": "Add rules by hand: if they say X, reply Y\nUniversal replies and person-specific replies\nSeparate group replies for your name being mentioned and for @everyone\nDashboard notifications for important messages\nFirst-run setup wizard with ready-made reply templates",
      "photos": []
    },
    {
      "title": "Reel Maker AI",
      "visual": "generic",
      "emoji": "🎬",
      "desc": "A web app for making beat-synced reels, with a multi-track timeline, music, custom presets and export presets. The first local MVP is the current build.",
      "tags": "Web app, Video editing, Presets",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "In progress",
      "details": "A web app for making short reels that are cut to the beat of a song. The first local version is a full MVP, with a multi-track timeline, music and export presets.\n\nThe longer plan adds automatic beat detection and presets that users create themselves.",
      "features": "Multi-track timeline\nMusic track support\nExport presets\nPlanned: automatic beat and tempo detection\nPlanned: custom presets made by the user",
      "photos": []
    },
    {
      "title": "Blockchain public fund tracking",
      "visual": "chain",
      "emoji": "",
      "desc": "Research on using a blockchain ledger to track public funds transparently, with rural Bangladesh as the target setting.",
      "tags": "Blockchain, Research",
      "live": "",
      "code": "",
      "cat": "Research",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Clap switch circuit",
      "visual": "clap",
      "emoji": "",
      "desc": "A sound-activated switch that turns an LED on and off when it hears a clap. Built as a lab circuit and still an active build.",
      "tags": "Circuit design, Electronics, Lab project",
      "live": "",
      "code": "",
      "cat": "Hardware",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Phone book management system",
      "visual": "terminal",
      "emoji": "",
      "desc": "A phone book manager written in C that uses six data structure and algorithm techniques. Built as a team project with a presentation.",
      "tags": "C, Algorithms, Team project",
      "live": "",
      "code": "",
      "cat": "Programming",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Vibe Mather",
      "visual": "generic",
      "emoji": "💬",
      "desc": "A campus social platform for DIU students to find friends by shared interests. Uses a weighted tag-matching algorithm, fuzzy autocorrection, 1-on-1 messaging and keyword-based moderation.",
      "tags": "React, Firebase, Node.js, Algorithms",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "My People Network",
      "visual": "generic",
      "emoji": "🕸️",
      "desc": "A local web app for mapping personal connections as an interactive force-directed graph, with profile pages, categories, a file manager and dark/light themes.",
      "tags": "Node.js, Express, D3.js",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Budget Splitter",
      "visual": "generic",
      "emoji": "💸",
      "desc": "A C program that splits shared expenses with a greedy algorithm, plus a round-robin comparison mode.",
      "tags": "C, Algorithms, Greedy",
      "live": "",
      "code": "",
      "cat": "Programming",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "FndChat",
      "visual": "generic",
      "emoji": "🗨️",
      "desc": "A chat web app that uses Google Sheets as its backend through Apps Script, with login validation, an admin system, user banning and message pinning.",
      "tags": "Google Sheets, Apps Script, Web",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "AI social media agent",
      "visual": "generic",
      "emoji": "🤖",
      "desc": "An experimental hybrid agent that reads messages from the screen with OCR and replies using free AI APIs, built to work around platform API restrictions.",
      "tags": "Python, OCR, Automation, AI APIs",
      "live": "",
      "code": "",
      "cat": "AI",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Safe-Send recipient risk check",
      "visual": "generic",
      "emoji": "🛡️",
      "desc": "A hackathon project for AI DevFest 2026 at DIU that checks the risk of a payment recipient before money is sent. Built with a team and scored 77.01 out of 100 in Phase 1.",
      "tags": "Hackathon, AI, Team project",
      "live": "",
      "code": "https://github.com/protwoy007/safe-send",
      "cat": "AI",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Particle system",
      "visual": "generic",
      "emoji": "✨",
      "desc": "An interactive particle system rendered with Three.js and Canvas.",
      "tags": "Three.js, Canvas, JavaScript",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Figma-to-HTML workflow",
      "visual": "generic",
      "emoji": "🎨",
      "desc": "A workflow for turning Figma UI designs into working HTML pages.",
      "tags": "Figma, HTML, CSS",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "img23d",
      "visual": "generic",
      "emoji": "🧊",
      "desc": "A web app that turns an uploaded image into a 3D model. FastAPI backend with a model-viewer frontend, a free Hugging Face Space engine for PCs without a GPU, a local TripoSR option, and STL/OBJ export. Runs on Windows and Ubuntu.",
      "tags": "Python, FastAPI, 3D, Web",
      "live": "",
      "code": "https://github.com/protwoy007/3d_model",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "Ticket Finder",
      "visual": "seats",
      "emoji": "🚆",
      "desc": "A Chrome extension for the Bangladesh Railway e-ticket site that scans every train between two stations and finds split-ticket routes using only each train's real stops. Shows the full seat matrix as a heatmap and paces requests to stay gentle on the server.",
      "tags": "Chrome Extension, JavaScript, Manifest V3",
      "live": "",
      "code": "https://github.com/protwoy007/ticket_finder",
      "cat": "Extension",
      "status": "Updated",
      "details": "Ticket Finder scans every train between two stations on the Bangladesh Railway e-ticket site and works out split-ticket routes from each train's real stops, so a sold-out journey can sometimes be covered by two shorter tickets.\n\nRequests are spaced about 1.5 seconds apart so the server does not treat the scan as a bot.",
      "features": "Scans every train between two stations\nSplit-ticket routes built only from each train's real stops\nFull seat matrix shown as a heatmap\nLive train timings\nFloating on-page dashboard panel",
      "photos": []
    },
    {
      "title": "YouTube Downloader extension",
      "visual": "generic",
      "emoji": "⬇️",
      "desc": "A Chrome, Brave and Edge extension that adds a download button next to Subscribe on YouTube. Pick a video quality or MP3 128 kbps, and a local yt-dlp and ffmpeg helper does the download.",
      "tags": "Chrome Extension, yt-dlp, JavaScript",
      "live": "",
      "code": "https://github.com/protwoy007/youtube_downloader",
      "cat": "Extension",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "MyPeople for Android",
      "visual": "generic",
      "emoji": "📱",
      "desc": "An Android port of the My People Network app, written in Kotlin and Jetpack Compose. Adds an AES-256-GCM dual-password vault, a force-graph view and a five-tab profile panel.",
      "tags": "Kotlin, Jetpack Compose, Android, Security",
      "live": "",
      "code": "",
      "cat": "Mobile",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    },
    {
      "title": "AR object scanning game",
      "visual": "generic",
      "emoji": "📷",
      "desc": "A browser-based AR game prototype. The phone camera identifies an object with on-device TensorFlow.js, the user measures it with four taps in WebXR, and a scaled 3D box is placed in the AR space.",
      "tags": "WebXR, TensorFlow.js, JavaScript, AR",
      "live": "",
      "code": "",
      "cat": "Web",
      "status": "",
      "details": "",
      "features": "",
      "photos": []
    }
  ],
  "resources": "https://drive.google.com/drive/folders/1f5cdXU84TpTs1kwcjRJTR0mNA_CRuoTL?usp=drive_link"
};
