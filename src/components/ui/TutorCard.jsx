import { BadgeCheck, Clock3, Laptop, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Tilt from "./Tilt";
import { tutorSlug } from "../../utils/tutor";

export default function TutorCard({ t }) {
  const profilePath = `/tutors/${tutorSlug(t.name)}`;
  const contactPath = `/contact?tutor=${encodeURIComponent(t.name)}`;

  return (
    <Tilt as="article" className="tutor-card" max={9}>
      <div className="tutor-top">
        <div className={`avatar ${t.color}`}>{t.initials}</div>
        <div className="tutor-name">
          <h3>{t.name} <BadgeCheck size={14} /></h3>
          <p>{t.subject}</p>
          <div className="rating"><Star size={13} fill="currentColor" /> {t.rating} <span>({t.reviews} reviews)</span></div>
        </div>
        <span className="price">{t.price}<small>/hr</small></span>
      </div>
      <div className="tutor-meta"><span><Clock3 /> {t.exp} exp.</span><span><Laptop /> {t.mode}</span></div>
      <div className="tutor-actions">
        <Link className="btn btn-outline" to={profilePath}>View Profile</Link>
        <Link className="btn btn-primary" to={contactPath}>Contact</Link>
      </div>
    </Tilt>
  );
}
