# 💰 Finance Dashboard UI

## 📌 Overview

This project is a clean and interactive **Finance Dashboard UI** built as part of a frontend assessment.

It allows users to:

* View financial summaries
* Analyze spending patterns
* Manage transactions
* Gain useful financial insights

The focus of this project is on **UI design, state management, and user experience**, rather than backend integration.

---

## 🚀 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expenses cards
* Spending trend (Line Chart)
* Expense breakdown by category (Pie Chart)

### 📋 Transactions

* List of transactions with:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)
* 🔍 Search functionality
* 🎯 Filter by type (Income/Expense)

### 🔐 Role-Based UI

* Viewer → Read-only access
* Admin → Can add transactions
* Role switcher for demo

### ➕ Add Transaction

* Modal form for adding new transactions
* Updates UI instantly

### 📊 Insights Section

* Highest spending category
* Income vs Expense summary
* Monthly comparison insights
* Smart messages like:

  * “Expenses increased by 12% this month”
  * “You saved ₹1200 this period”

### 💾 Persistence

* Data stored in **localStorage**
* Simulates real app behavior

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Redux Toolkit** (state management)
* **Tailwind CSS** (UI styling)
* **Recharts** (charts)

---

## 🧠 Approach

* Used **Redux Toolkit** for scalable state management
* Kept filters local to components for simplicity
* Used **mock data + localStorage** instead of backend
* Focused on **clean UI, UX, and meaningful insights**

---

## 🎨 UI/UX Highlights

* Modern dark theme with gradients
* Glassmorphism design
* Responsive layout
* Smooth hover interactions
* Clean typography and spacing

---

## ⚙️ Setup Instructions

```bash
npm install
npm run dev
```

---

## 📷 Screenshots

<img width="900" height="730" alt="image" src="https://github.com/user-attachments/assets/12c6ba1e-ef66-4270-b185-c3f17f8ffddb" />


---

## 📌 Notes

* This project uses mock data as backend integration was not required
* Designed to demonstrate frontend architecture and UI thinking

---

## 🙌 Author

Arman Khan
