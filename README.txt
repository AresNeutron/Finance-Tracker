# Finance Tracker App

This is an intermediate-level full stack finance tracking application, which allows users to securely manage and record their financial transactions. The project is built with TypeScript, React for the frontend, and uses Clerk for user authentication. The backend is developed with Express, Node.js, and MongoDB for data storage.

## Features

- **User Authentication**: Managed via Clerk, ensuring secure login and user data protection.
- **Financial Record Management**: Add, update, and manage personal financial records.
- **Categories**: Transactions can be categorized (e.g., Food, Rent, Salary, Utilities, Entertainment).
- **Payment Methods**: Users can select different payment methods (e.g., Credit Card, Cash, Bank Transfer).
- **Date Tracking**: Each record includes the transaction date.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [Yarn](https://yarnpkg.com/) or npm for managing packages.
- A running instance of MongoDB for database operations.
- A Clerk account for user authentication.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finance-tracker.git
   cd finance-tracker
   
2. Install dependencies:
   ```bash
   yarn install
   
3. Setup environment variables for Clerk and MongoDB (create a .env file and include your credentials)::
   ```bash
   CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   MONGODB_URI=<your-mongodb-uri>

4. Start the backend server (assuming your backend is in a separate folder):
   ```bash
   cd backend
   yarn dev

5. Start the frontend application:
   ```bash
   cd frontend
   yarn dev

Backend API
The backend API is built with Express and MongoDB, and it provides the following endpoints:

POST /addrecord: Adds a new financial record for the user.
GET /records: Retrieves all financial records for the logged-in user.
PUT /updaterecord/:id: Updates a specific financial record.
DELETE /deleterecord/:id: Deletes a specific financial record.


Frontend Overview
React Router: Used for client-side routing.
Context API: Manages the state of financial records across components.
Clerk: Manages user authentication and provides user-specific data.
FinancialRecordForm: The form component that allows users to add new financial records.


How to Use
Login/Sign Up: Users must sign in via Clerk authentication before using the app.
Add Records: Once logged in, users can add new financial records by entering the description, amount, category, and payment method.
View Records: All added records will be displayed on the dashboard, allowing users to see a summary of their transactions.


Tech Stack
Frontend: React, TypeScript, Clerk for authentication.
Backend: Express, Node.js, MongoDB for data persistence.
State Management: React Context API for handling financial records.


Credits
This project was created following a tutorial from PedroTech on YouTube. It aims to provide an intermediate-level guide to building a full stack application with authentication, React, and backend data management.

Check out the original tutorial here: [PedroTech on YouTube](https://www.youtube.com/@PedroTechnologies?app=desktop)

License
This project is licensed under the MIT License.