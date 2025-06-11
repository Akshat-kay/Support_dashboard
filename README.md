markdown
Copy
Edit
# 🛠️ Support Dashboard for eCommerce App

A full-stack support dashboard to manage customer support cases, view uploaded logs, browse FAQs, and generate support reports. Built with Node.js, Express, MySQL, and vanilla HTML/JS with Chart.js for visualizations.

---

## 📂 Project Structure

support-dashboard/
├── backend/ # Express API for logs, cases, faqs, reports
├── frontend/ # Static frontend UI
├── sql/ # SQL schema and seed data
├── logs/ # Uploaded log files
└── .gitignore # Files ignored by Git

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Support Case Management  
- 📁 Log File Viewer  
- ❓ Knowledge Base (FAQ Search)  
- 🌐 i18n Language Support  
- 📊 Report Dashboard with Chart.js  

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express, MySQL
- **Frontend**: HTML, CSS, JS
- **Charting**: Chart.js
- **Localization**: JSON i18n
- **Tools**: VS Code, Git, npm

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/support-dashboard.git
cd support-dashboard
2️⃣ Setup MySQL Database
In MySQL CLI or a GUI (like Workbench):

sql
Copy
Edit
CREATE DATABASE support_dashboard;
USE support_dashboard;

CREATE TABLE support_cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255),
  issue TEXT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE faqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT,
  answer TEXT
);
3️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=support_dashboard
PORT=3000
Start the backend:

bash
Copy
Edit
node server.js
4️⃣ Frontend Setup
Open frontend/index.html in a browser directly
or run a local server:

bash
Copy
Edit
cd frontend
npx serve .
🌐 API Endpoints
Method	Endpoint	Description
GET	/cases	List all support cases
POST	/cases	Add a new case
POST	/logs/upload	Upload log file
GET	/faqs	Get all FAQs
GET	/faqs/search?q=term	Search FAQs
GET	/reports/cases-by-status	Report summary

🌍 Language Support
Available languages:

English (en)



Add more under frontend/i18n/ like fr.json, de.json, etc.

📦 Deployment Ideas
Frontend → Vercel / Netlify / GitHub Pages

Backend → Render / Railway / Heroku

Database → Planetscale / MySQL Docker / RDS

🙌 Contributing
Pull requests welcome. Please follow clean code practices and test features before submitting.

📄 License
Licensed under the MIT License.

🔗 Contact
Developer: Akshat Kashyap
🌐 Portfolio: akshatkashyap.cloud
💼 LinkedIn: linkedin.com/in/786akshatk
