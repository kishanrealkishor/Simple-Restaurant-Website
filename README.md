# Simple-Restaurant-Website
# ☕ REALKK CAFE – Full Stack Restaurant Website

## 📌 Overview

REALKK CAFE is a modern full-stack restaurant website developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. The platform allows customers to browse menu items, create accounts, log in securely, manage their cart, and place food orders online.

This project demonstrates frontend-backend integration, database connectivity, user authentication, cart management, and checkout processing in a real-world restaurant environment.

---

## 🚀 Features

### 👤 User Authentication
- User Registration (Sign Up)
- User Login
- MongoDB Database Storage
- User Validation

### 🍔 Interactive Menu
- 15 Delicious Food Items
- Coffee, Bistro & Dessert Categories
- Search Functionality
- Add to Cart Feature

### 🛒 Shopping Cart
- Add Items to Cart
- Remove Items from Cart
- Update Quantity
- Automatic Total Calculation

### 💳 Checkout System
- Customer Details Form
- Name, Email, Phone Number
- Delivery Address
- Multiple Payment Methods
  - Credit Card
  - UPI
  - Cash on Delivery
- Order Confirmation

### 🗄 Database Integration
- User Data Storage
- Order Data Storage
- Customer Information Storage
- Payment Information Storage
- Order Status Tracking
- Date & Time Recording

---

## 🛠 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Compass
- Mongoose

### Development Tools
- Visual Studio Code
- GitHub
- Google Chrome

---

## 📂 Project Structure

```text
REALKK-CAFE
│
├── index.html
├── style.css
├── script.js
│
├── backend
│   ├── server.js
│   ├── package.json
│   │
│   └── models
│       ├── User.js
│       └── Order.js
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/realkk-cafe.git
```

### Open Project

```bash
cd realkk-cafe
```

### Install Backend Dependencies

```bash
npm install express mongoose cors
```

### Run Server

```bash
node server.js
```

Server Output:

```text
MongoDB Connected
Server Running on Port 5000
```

### Run Frontend

Open:

```text
index.html
```

or use VS Code Live Server.

---

## 🗃 Database Collections

### Users Collection

```json
{
  "name": "Kishan",
  "email": "kishan@gmail.com",
  "password": "password"
}
```

### Orders Collection

```json
{
  "customerName": "Kishan",
  "email": "kishan@gmail.com",
  "phone": "9876543210",
  "address": "New York",
  "paymentMethod": "UPI",
  "total": 120.50,
  "status": "Pending"
}
```

---

## 🎯 Learning Outcomes

This project helped in understanding:

- Full Stack Web Development
- Frontend & Backend Integration
- MongoDB Database Management
- REST API Development
- User Authentication
- Cart Management
- Checkout Processing
- Responsive Web Design

---

## 👨‍💻 Developer

**Kishan Kishor**  
Entrepreneur • Musician • Web Developer

REALKK CAFE was developed as a full-stack restaurant management and food ordering website project to demonstrate modern web development concepts using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

---

## 📜 License

This project is developed for educational and learning purposes only.
