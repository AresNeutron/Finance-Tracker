import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth/index";
import { FinancialRecordProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/auth"}>Authenticate</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={
                <FinancialRecordProvider>
                  <Dashboard />
                </FinancialRecordProvider>
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
