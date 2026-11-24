import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Toast from "./components/common/Toast";
import ScrollToHash from "./components/common/ScrollToHash";

import Home from "./pages/Home";
import Tutors from "./pages/Tutors";
import TutorProfile from "./pages/TutorProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import BecomeTutor from "./pages/BecomeTutor";
import Contact from "./pages/Contact";


function AppLayout() {
  const [notice, setNotice] = useState("");
  const timer = useRef(null);

  const notify = (message) => {
    setNotice(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(""), 3200);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <ScrollToHash />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home notify={notify} />} />
          <Route path="/tutors" element={<Tutors notify={notify} />} />
          <Route path="/tutors/:tutorId" element={<TutorProfile notify={notify} />} />
          <Route path="/login" element={<Login notify={notify} />} />
          <Route path="/signup" element={<Signup notify={notify} />} />
          <Route path="/forgot-password" element={<ForgotPassword notify={notify} />} />
          <Route path="/become-a-tutor" element={<BecomeTutor notify={notify} />} />
          <Route path="/contact" element={<Contact notify={notify} />} />
          <Route path="*" element={<div className="section-wrap not-found-page"><span className="kicker">404 ERROR</span><h1>That page isn't <em>here.</em></h1><p>The link may be outdated, or the page may have moved.</p><Link className="btn btn-primary" to="/">Back to Home</Link></div>} />
        </Routes>
      </main>

      <Footer />
      <Toast message={notice} />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>;
}
