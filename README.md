## 🖥️ **Meetup App — Frontend**

A modern and responsive **Meetup Management Web App** built with **React.js**.
This frontend connects to the [Meetup Backend API](https://github.com/ajmal92786/meetup-app-backend) to display a list of upcoming events and show detailed information for each event — including title, date, speakers, venue, and price.

---

### 🔗 **Related Repositories**

- ⚙️ Backend: [Meetup Backend Repo](https://github.com/ajmal92786/meetup-app-backend)
- 🖥️ Frontend: [Meetup Frontend Repo](https://github.com/ajmal92786/meetup-app-frontend)

---

### 📸 **Screenshots**

#### 🏠 Home Page — All Events

![All Events Page](<img width="1204" height="641" alt="image" src="https://github.com/user-attachments/assets/e53c360e-4a9a-49d3-a048-6c9aab2cb75e" />)

#### 🗓️ Event Details Page

![Event Details Page](<img width="1208" height="642" alt="image" src="https://github.com/user-attachments/assets/43c16b1d-a5fe-4370-9653-317eeee9a9a3" />)

---

### 🚀 **Features**

- 🧩 Displays all events fetched from backend API
- 🔍 View event details on click (title, description, venue, speakers, etc.)
- 🧭 Dynamic routing using React Router
- ⚡ API integration using Fetch
- 🎨 Clean, responsive UI (CSS / Bootstrap)
- 🧠 Modular components for scalability

---

### 🧠 **Tech Stack**

| Category               | Technologies           |
| ---------------------- | ---------------------- |
| **Frontend Framework** | React.js (Vite)        |
| **Routing**            | React Router DOM       |
| **API Handling**       | Fetch API              |
| **Styling**            | Bootstrap / Custom CSS |
| **Language**           | JavaScript (ES6+)      |

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

### 🧩 **Routing Setup**

**`src/main.jsx`**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import EventDetails from "./pages/EventDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/events/:eventId", element: <EventDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

### 💻 **Run Locally**

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

### 🧪 **Integration Flow**

1. App fetches events from `/events` endpoint (backend).
2. Displays them as cards on Home page.
3. Clicking an event navigates to `/event/:id` and fetches full details.
4. Data displayed includes title, description, date, venue, speakers, and pricing.

---

### 🌈 **Example UI Components**

**EventCard.jsx**

```jsx
const EventCard = ({ event }) => (
  <div className="p-4 border rounded-lg shadow hover:shadow-md">
    <img
      src={event.thumbnail}
      alt={event.title}
      className="rounded-lg w-full h-48 object-cover"
    />
    <h3 className="mt-2 text-xl font-semibold">{event.title}</h3>
    <p className="text-gray-500">{event.date}</p>
  </div>
);
```

---

### 💫 **Future Enhancements**

- 🎟️ Add event registration and payment integration
- 👥 User authentication (login & signup)
- 💬 Speaker profiles and social links

---

### 👨‍💻 **Author**

**Mohd Ajmal Raza**
Full-Stack Developer | React | Node.js | MongoDB | Express
<br/>
📧 [ajmalbly27@gmail.com](mailto:ajmalbly27@gmail.com)
🌐 [GitHub Profile](https://github.com/ajmal92786)

---

### 🏁 **License**

This project is licensed under the [MIT License](LICENSE).
