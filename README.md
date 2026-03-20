💳 UPI API Backend

A scalable backend API for a UPI-like payment system built using Node.js, Express, Prisma, and MySQL.
This project demonstrates secure authentication, modular architecture, and real-world backend practices.

🚀 Features :-

 Authentication (Register / Login / Logout)
 JWT-based Access & Refresh Tokens
 Secure HTTP-only Cookies
 Bank Account Management
 Prisma ORM with MySQL
 Clean Architecture (Controller → Service → Route)

📦 Installation

 # Clone repository
git clone https://github.com/your-username/upi-api.git

# Go to project folder
cd upi_app

# Install dependencies
npm install

🔐 Environment Variables

.env

PORT=5000

DATABASE_URL="mysql://root:password@localhost:3306/upi_db"

JWT_ACCESS_SECRET=access_key_upi_aap
JWT_REFRESH_SECRET=refresh_key_upi_aap

NODE_ENV=development

🗄️ Prisma Setup

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

▶️ Running the Server

# Start
npm run dev