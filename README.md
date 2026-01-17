## 🖥️ **Meetup App**

Meetup is a **full‑stack meetup web application** that showcases upcoming events and provides detailed information for each event, including title, schedule, speakers, venue, pricing, and other key details.

The project demonstrates clean frontend–backend integration using a **React frontend**, **Node.js/Express backend**, and **MongoDB database**, following a modular and scalable structure.

---

## Demo Link

[Live Demo](https://meetup-app-frontend-eac.vercel.app/)

---

### 🔗 **Related Repositories**

- ⚙️ Backend: [Meetup Backend Repo](https://github.com/ajmal92786/meetup-app-backend)
- 🖥️ Frontend: [Meetup Frontend Repo](https://github.com/ajmal92786/meetup-app-frontend)

---

### 🚀 **Features**

- 📋 Displays upcoming events fetched from backend APIs
- 🔍 Shows detailed event information (description, venue, speakers, pricing)
- 🧭 Enables dynamic routing using React Router
- ⚡ Integrates backend APIs using Fetch
- 🎨 Renders a clean and responsive UI using Bootstrap
- 🧠 Uses reusable and modular components for scalability

---

### 📸 **Screenshots**

#### 🏠 Home Page — All Events

![All Events Page](https://github.com/user-attachments/assets/e53c360e-4a9a-49d3-a048-6c9aab2cb75e)

#### 🗓️ Event Details Page

![Event Details Page](https://github.com/user-attachments/assets/43c16b1d-a5fe-4370-9653-317eeee9a9a3)

---

## Technologies

**Frontend**

- React JS
- React Router
- Bootstrap

**Backend**

- Node.js
- Express.js
- MongoDB (Mongoose)

---

### 📁 **Project Structure**

```
meetup-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── EventCard.jsx
│   │   └── EventList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── EventDetails.jsx
│   ├── hooks/
│   │   └── useFetch.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

### 🔐 Environment Setup

Create a .env file in the frontend root directory:

```
VITE_API_BASE_URL=https://meetup-app-backend-eac.vercel.app/
```

---

### 💻 **Quick Start**

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ajmal92786/meetup-app-frontend
cd meetup-app-frontend
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Start the Development Server

```bash
npm run dev
```

Frontend runs on:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔗 API Reference

#### **GET /events**

Fetch all events

Responses:

```json
[
  {
    "_id": "eventId",
    "title": "Tech Conference",
    "hostedBy": "Tech Innovators",
    "type": "Offline",
    "thumbnail": "https://images.unsplash.com/photo",
    "description": "Stay ahead in the world of technology ...",
    "startDateTime": "date",
    "endDateTime": "date",
    "venue": "Tech City Convention Center",
    "address": "101 Innovation Drive, City",
    "price": 2500,
    "speakers": [
      {
        "_id": "id",
        "name": "Amit Verma",
        "designation": "CTO, CloudNova",
        "image": "https://images.unsplash.com/photo"
      }
    ],
    "dressCode": "Business casual",
    "ageRestriction": "18 and above",
    "tags": ["technology", "conference", "web"]
  }
]
```

---

#### **GET /events/\*\***:id\*\*

Fetch event details by ID

---

## 📬 Contact

For bugs or feature request, please reach out to:

📧 **[ajmalbly27@gmail.com](mailto:ajmalbly27@gmail.com)**
