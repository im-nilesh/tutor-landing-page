import { Link } from "react-router-dom";
import { BookOpen, Mail, MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-brand-block">
        <Link className="brand" to="/">
          <span className="brand-mark"><BookOpen size={24} /></span>
          <span>Tutor<span>Verse</span></span>
        </Link>
        <p>Find the guidance you need to keep learning and growing.</p>
      </div>

      <div className="footer-links">
        <div><b>Explore</b><Link to="/">Home</Link><Link to="/tutors">Find Tutors</Link><Link to="/#how-it-works">How It Works</Link></div>
        <div><b>For the community</b><Link to="/become-a-tutor">Become a Tutor</Link><Link to="/signup">Create an Account</Link><Link to="/login">Log In</Link></div>
        <div><b>Get in touch</b><Link to="/contact">Contact Us <MoveUpRight size={13} /></Link><a href="mailto:hello@tutorverse.example"><Mail size={13} /> Email Support</a><Link to="/#testimonials">Testimonials</Link></div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TutorVerse. Learn without limits.</span>
        <span>Designed for better learning connections.</span>
      </div>
    </footer>
  );
}
