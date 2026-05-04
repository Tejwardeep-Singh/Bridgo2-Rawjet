# 🚀 Bridgo

![Bridgo Banner](public/images/logo.png)

<p align="center">
  <b>Bridging the gap between local vendors and suppliers through real-time auction systems</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Socket.IO-Realtime-blue?style=for-the-badge&logo=socket.io" />
  <img src="https://img.shields.io/badge/EJS-Templating-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---

## 📌 Overview

**Bridgo** is a real-time auction-based marketplace inspired by traditional Indian *mandi systems*.
It connects **local street vendors** with **suppliers**, enabling them to trade goods efficiently through live bidding and direct requirement matching.

---

## 💡 Core Concept

Bridgo introduces two powerful auction modes:

### 🟢 Buy Auction (Vendor-driven)

* Vendors request goods
* Suppliers compete by offering the **lowest price**
* Best deal wins

### 🔵 Sell Auction (Supplier-driven)

* Suppliers list products
* Vendors compete by offering the **highest price**
* Highest bidder wins

---

## ✨ Features

### 👨‍🌾 Vendors

* Submit product requirements
* Create and manage auctions
* Participate in live bidding
* View active and past auctions

### 🚚 Suppliers

* List available stock
* Create auctions for products
* Compete in vendor auctions
* Respond directly to vendor requirements

### ⚡ Platform Features

* Real-time bidding with **Socket.IO**
* Auction scheduling (start & end time)
* Live auction participation
* Secure authentication using **JWT**
* Image upload via **Cloudinary**

---

## 🏗️ Tech Stack

| Layer    | Technology           |
| -------- | -------------------- |
| Backend  | Node.js, Express.js  |
| Database | MongoDB (Mongoose)   |
| Realtime | Socket.IO            |
| Auth     | JWT, bcrypt          |
| Frontend | EJS, CSS, JavaScript |
| Storage  | Cloudinary           |

---

## 📂 Project Structure

```bash
Bridgo/
├── app.js
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
└── uploads/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ryukgod26/Bridgo.git
cd Bridgo
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment

Create `.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/bridgo
JWT_KEY=your_secret_key
PORT=5000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 4️⃣ Run Application

#### Development:

```bash
npx nodemon app.js
```

#### Production:

```bash
node app.js
```

---

### 🌐 Access App

```
http://localhost:5000
```

---

## 🔄 Auction Workflow

1. User creates auction (Buy/Sell)
2. Auction goes live at scheduled time
3. Participants place bids in real-time
4. System determines winner automatically
5. Results displayed instantly

---

## ⚠️ Known Limitations (V1)

* Limited auction lifecycle control
* Basic real-time handling
* No rating/trust system
* UI not fully optimized for mobile

👉 These are being improved in **Bridgo V2**

---

## 🚀 Future Enhancements (V2 Vision)

* Advanced auction engine (auto state transitions)
* Notification system (outbid alerts, results)
* Ratings & verification system
* Mobile-first UI
* Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Tejwardeep Singh**
B.Tech CSE (2024–2028)

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>
