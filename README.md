# 🛒 Full-Stack E-Commerce Platform

A full-featured e-commerce web application built using the **MERN stack**, implementing real-world functionalities such as **role-based access control (RBAC)**, **secure authentication**, **product & order management**, **cloud-based media storage**, and **PayPal payment gateway integration**.

This project simulates a production-ready online shopping platform with separate **Admin** and **Customer** workflows.

---

## 🚀 Features

### 👤 Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-Based Access Control (Admin / User)
- Protected routes for admin and user dashboards

### 🛍️ User Features
- Browse products by category
- Product search and filtering
- Add / remove products from cart
- Secure checkout process
- PayPal payment integration
- Order history and order tracking

### 🛠️ Admin Features
- Admin dashboard
- Create, update, and delete products
- Upload product images using Cloudinary
- Manage product categories
- View and manage customer orders
- Control user access based on roles

### 💳 Payments
- PayPal payment gateway integration (Sandbox / Live mode)
- Secure transaction handling
- Payment status tracking

### 📦 Order Management
- Order creation after successful payment
- Order status updates (Pending, Paid, Delivered)
- Persistent order history

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS / CSS Modules
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Media & Payments
- Cloudinary (Image storage & optimization)
- PayPal REST API

### Utilities
- bcrypt.js
- dotenv
- cookie-parser
- CORS

---

## ⚙️ Environment Variables

Create a `.env` file and configure the following variables:

PORT=
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
PAYPAL_MODE=
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
CLIENT_URL=
VITE_API_URL=


> **Note:**  
> - `PAYPAL_MODE` can be set to `sandbox` or `live`.  
> - `CLIENT_URL` should point to the frontend domain.  
> - `VITE_API_URL` should point to the backend API base URL.

---

## 🧪 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git

### 2️⃣ Install Backend Dependencies
```bash
cd server
npm install

### 3️⃣ Install Frontend Dependencies
```bash
cd client
npm install

### Run The Application

```bash
cd server
npm run dev

cd client
npm run dev

## 🔐 Role-Based Access Control (RBAC)

### Admin
- Full product, image, and order management
- Dashboard access

### User
- Browse products
- Place orders
- Make payments

Unauthorized access to protected routes is restricted.

