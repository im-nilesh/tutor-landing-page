import { ArrowUpRight, BookOpen, GraduationCap, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({ eyebrow, title, accent, description, children, footer, variant = "student" }) {
  const tutorVariant = variant === "tutor";

  return (
    <div className="auth-page section-wrap">
      <div className="auth-layout">
        <aside className="auth-aside">
          <div className="auth-aside-orb auth-aside-orb-one" />
          <div className="auth-aside-orb auth-aside-orb-two" />
          <Link className="auth-brand" to="/">
            <span className="brand-mark"><BookOpen size={24} /></span>
            <span>Tutor<span>Verse</span></span>
          </Link>

          <div className="auth-aside-copy">
            <span className="auth-kicker"><Sparkles size={14} /> {eyebrow}</span>
            <h1>{title} <em>{accent}</em></h1>
            <p>{description}</p>
          </div>

          <div className="auth-visual" aria-hidden="true">
            <div className="auth-visual-orbit auth-visual-orbit-a" />
            <div className="auth-visual-orbit auth-visual-orbit-b" />
            <div className="auth-visual-core"><GraduationCap size={54} /></div>
            <span className="auth-visual-chip auth-chip-one"><BookOpen size={16} /> Keep learning</span>
            <span className="auth-visual-chip auth-chip-two"><Users size={16} /> Grow together</span>
          </div>

          <div className="auth-aside-foot">
            <span>Learn without limits.</span>
            <ArrowUpRight size={17} />
          </div>
        </aside>

        <section className="auth-form-panel">
          <div className="auth-form-inner">
            {children}
            {footer ? <div className="auth-form-footer">{footer}</div> : null}
          </div>
        </section>
      </div>
    </div>
  );
}
