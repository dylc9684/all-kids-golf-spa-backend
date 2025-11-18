Here is a clean **README.md** you can drop directly into the project root.

---

# **All Kids Golf Spa – Backend (Node.js + Express + MongoDB)**

This is the backend API for the **All Kids Golf Spa** application.
It supports user accounts, kids profiles, booking golf/spa sessions, and admin features.

---

## 🚀 Features

### **User**

* Register / Login with JWT authentication
* Secure password hashing (bcrypt)
* Manage kids (add, list)

### **Kids**

* Add kid profiles
* Store age, notes, parent relationships

### **Bookings**

* Create bookings (golf or spa sessions)
* List bookings (admin or user)

### **Security**

* JWT-based auth middleware
* Helmet, CORS, Morgan logging (optional)

---

## 📁 Project Structure

```
all-kids-golf-spa-backend/
├── src
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔧 Installation

```bash
git clone <your-repo-url>
cd all-kids-golf-spa-backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## ▶️ Running the Server

Development mode (with nodemon):

```bash
npm run dev
```

Production mode:

```bash
node src/server.js
```

Server defaults to:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### **Auth**

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| POST   | `/auth/register` | Create account  |
| POST   | `/auth/login`    | Login & get JWT |

---

### **Kids (Protected)**

Include header:
`Authorization: Bearer <token>`

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| POST   | `/kids`  | Add a kid                    |
| GET    | `/kids`  | List kids for logged-in user |

---

### **Bookings (Protected)**

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | `/booking` | Create booking |
| GET    | `/booking` | List bookings  |

---

## 🧩 Tech Stack

* **Node.js + Express**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **Bcrypt** (password hashing)
* **Cors + Morgan** (dev helpers)

---

## 🛠️ Scripts

| Command       | Description         |
| ------------- | ------------------- |
| `npm run dev` | Start with nodemon  |
| `npm start`   | Start server (prod) |

---

## 🧪 Testing (Optional)

If you want Jest or Supertest added, tell me and I can scaffold it.

---

## 🚀 Deployment

Supports:

* **Railway.app**
* **Render.com**
* **Vercel (serverless)**
* **AWS Lambda**
* **Docker**

If you'd like a **Dockerfile**, **docker-compose**, or **CI/CD pipeline**, I can generate those.

---

## 📞 Support

For additional features (payments, admin dashboard, calendar scheduling, reminders), just ask!

---

Want me to generate a **frontend README**, **API documentation (Swagger)**, or **Postman collection**?
