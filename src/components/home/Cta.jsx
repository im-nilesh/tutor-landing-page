import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";

export default function Cta() {
  return (
    <Reveal id="contact" className="cta">
      <div className="cta-icon"><GraduationCap size={38} /></div>
      <div><h2>Ready to start your <em>learning journey?</em></h2><p>Whether you're looking for a tutor or want to teach, get started in minutes.</p></div>
      <div className="cta-actions">
        <Link className="btn btn-light" to="/tutors">Find a Tutor <ArrowRight size={16} /></Link>
        <Link className="btn btn-cta-outline" to="/become-a-tutor">Become a Tutor</Link>
      </div>
    </Reveal>
  );
}
