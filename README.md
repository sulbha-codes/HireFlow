 HireFlow – Job Discovery Platform

HireFlow is a frontend job discovery application built using React and Tailwind CSS.
It allows users to browse job listings, filter them by category, save jobs, and simulate applying for a position — all with a clean and responsive UI.

This project focuses on frontend architecture, UI behavior, and state management, simulating how a real job portal works.

⸻

 Features
	•	 Browse job listings
	•	 Filter jobs by category
	•	 Save / remove jobs (localStorage)
	•	 View saved jobs on a separate page
	•	 Apply to a job (simulated flow)
	•	 Fast and responsive UI
	•	 Clean component-based architecture

⸻

🛠 Tech Stack
	•	React
	•	JavaScript (ES6+)
	•	Tailwind CSS
	•	React Router
	•	LocalStorage
	•	Vite

⸻

📁 Project Structure

src/
│
├── pages/
│   ├── Home.jsx
│   ├── SavedJobs.jsx
│   └── ApplyJob.jsx
│
├── components/
│   ├── JobCard.jsx
│   ├── FilterBar.jsx
│   ├── Loader.jsx
│   └── ErrorBox.jsx
│
├── data/
│   └── jobs.js
│
├── services/
│   └── jobApi.js
│
├── utils/
│   └── storage.js
│
├── App.jsx
└── main.jsx

 How It Works
	•	Job data is stored locally (mock API)
	•	Jobs are fetched asynchronously
	•	Users can:
	•	Search jobs
	•	Filter by category
	•	Save jobs
	•	View saved jobs
	•	Apply via a demo page
	•	Saved jobs persist using localStorage

📌 Why Mock Data?

This project focuses on frontend development.

In real-world applications:
	•	Job data comes from backend APIs
	•	Authentication & data storage are handled server-side

Here, mock data is used to:
	•	Simulate real API behavior
	•	Avoid CORS issues
	•	Focus on UI, state & logic

⸻

 What I Learned
	•	React component structure
	•	State management & filtering
	•	React Router for navigation
	•	Handling UI states (loading, empty, error)
	•	Working with localStorage
	•	Building real-world frontend features

⸻

 Future Improvements
	•	Pagination
	•	Search by company
	•	Sort by latest jobs
	•	Backend integration
	•	Authentication
	•	Job application form

⸻

👤 Author

Sulbha Rasal
Frontend Developer
📍Pune, India
💼 Open to Frontend Intern / Junior Roles
