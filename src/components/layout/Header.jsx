import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setOpen(false);
  const actions = (
    <>
      <Link className="btn btn-outline" to="/login" onClick={close}>Log In</Link>
      <Link className="btn btn-primary" to="/signup" onClick={close}>Sign Up <ArrowRight size={16} /></Link>
    </>
  );

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <Link className="brand" to="/" onClick={close} aria-label="TutorVerse home">
        <span className="brand-mark"><BookOpen size={26} /></span>
        <span>Tutor<span>Verse</span></span>
      </Link>

      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""} onClick={close}>Home</NavLink>
        <NavLink to="/tutors" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={close}>Find Tutors</NavLink>
        <NavLink to="/become-a-tutor" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={close}>For Tutors</NavLink>
        <Link to="/#how-it-works" onClick={close}>How It Works</Link>
        <Link to="/#testimonials" onClick={close}>Testimonials</Link>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={close}>Contact</NavLink>
        <div className="mobile-actions">{actions}</div>
      </nav>

      <div className="header-actions">{actions}</div>
    </header>
  );
}
