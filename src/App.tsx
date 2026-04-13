/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { Blueprint } from "./pages/Blueprint";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans selection:bg-brand-accent selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blueprint" element={<Blueprint />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
