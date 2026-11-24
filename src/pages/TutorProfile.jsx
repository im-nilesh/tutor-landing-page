import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, CalendarDays, CheckCircle2, Clock3, GraduationCap, Laptop, MapPin, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { tutorProfiles } from "../data/tutorProfiles";
import { findTutorBySlug, tutorSlug } from "../utils/tutor";
import { tutors } from "../data/content";

export default function TutorProfile({ notify }) {
  const { tutorId } = useParams();
  const tutor = findTutorBySlug(tutorId);
  const details = tutorProfiles[tutorId];
  const [saved, setSaved] = useState(false);

  if (!tutor) {
    return (
      <div className="section-wrap profile-not-found">
        <span className="eyebrow"><BookOpen size={14} /> TUTOR PROFILE</span>
        <h1>We couldn't find this <em>tutor.</em></h1>
        <p>The profile may have moved or the link may be incorrect.</p>
        <Link className="btn btn-primary" to="/tutors"><ArrowLeft size={16} /> Back to tutors</Link>
      </div>
    );
  }

  const contactUrl = `/contact?tutor=${encodeURIComponent(tutor.name)}`;
  const relatedTutors = tutors.filter((item) => item.name !== tutor.name).slice(0, 2);

  return (
    <div className="inner-page profile-page">
      <div className="section-wrap">
        <Link className="back-link profile-back" to="/tutors"><ArrowLeft size={16} /> Back to all tutors</Link>

        <section className="profile-hero">
          <div className="profile-hero-main">
            <div className={`profile-avatar ${tutor.color}`}>{tutor.initials}<span><BadgeCheck size={18} /></span></div>
            <div className="profile-identity">
              <span className="profile-demo-label"><ShieldCheck size={14} /> Sample tutor profile</span>
              <h1>{tutor.name}</h1>
              <p>{tutor.subject}</p>
              <div className="profile-rating"><Star size={16} fill="currentColor" /> <b>{tutor.rating}</b><span>({tutor.reviews} reviews)</span><i /> <BadgeCheck size={15} /> Verified demo profile</div>
              <div className="profile-meta-row"><span><Clock3 size={16} /> {tutor.exp} experience</span><span><Laptop size={16} /> {tutor.mode}</span><span><MapPin size={16} /> {details.location}</span></div>
            </div>
          </div>
          <div className="profile-price-card">
            <small>Starting from</small>
            <strong>{tutor.price}<span>/ hour</span></strong>
            <Link className="btn btn-primary" to={contactUrl}>Contact tutor <ArrowRight size={16} /></Link>
            <button className={saved ? "profile-save saved" : "profile-save"} onClick={() => { setSaved((value) => !value); notify(saved ? "Tutor removed from your saved list." : "Tutor saved in this demo session. Sign in to keep it across devices."); }}><Star size={15} fill={saved ? "currentColor" : "none"} /> {saved ? "Saved" : "Save profile"}</button>
          </div>
        </section>

        <div className="profile-content-grid">
          <main className="profile-main-column">
            <section className="profile-panel">
              <div className="profile-section-title"><span className="profile-section-icon"><BookOpen size={18} /></span><div><span className="kicker">ABOUT THE TUTOR</span><h2>Meet {tutor.name.split(" ")[0]}</h2></div></div>
              <h3 className="profile-headline">{details.headline}</h3>
              <p className="profile-bio">{details.bio}</p>
              <div className="profile-facts-grid">
                <div><GraduationCap size={18} /><span><small>Qualification</small><b>{details.qualification}</b></span></div>
                <div><BookOpen size={18} /><span><small>Institution</small><b>{details.institution}</b></span></div>
                <div><MessageCircle size={18} /><span><small>Languages</small><b>{details.languages.join(", ")}</b></span></div>
              </div>
            </section>

            <section className="profile-panel">
              <div className="profile-section-title"><span className="profile-section-icon"><GraduationCap size={18} /></span><div><span className="kicker">SUBJECT EXPERTISE</span><h2>What I can help with</h2></div></div>
              <div className="profile-topic-list">{details.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
            </section>

            <section className="profile-panel">
              <div className="profile-section-title"><span className="profile-section-icon"><CheckCircle2 size={18} /></span><div><span className="kicker">LEARNING EXPERIENCE</span><h2>My teaching approach</h2></div></div>
              <div className="approach-list">{details.approach.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
            </section>
          </main>

          <aside className="profile-side-column">
            <section className="profile-panel profile-availability">
              <div className="profile-section-title"><span className="profile-section-icon"><CalendarDays size={18} /></span><div><span className="kicker">CLASS SCHEDULE</span><h2>Availability</h2></div></div>
              <p>Example time slots. Confirm the schedule directly with the tutor.</p>
              <div className="availability-list">{details.availability.map((slot) => <div key={slot}><Clock3 size={15} /><span>{slot}</span></div>)}</div>
              <Link className="btn btn-primary profile-full-btn" to={contactUrl}>Ask about a class <ArrowRight size={15} /></Link>
            </section>

            <section className="profile-note-card">
              <ShieldCheck size={23} />
              <h3>A better fit starts with a conversation.</h3>
              <p>Share your learning goals and ask about lesson format, availability and fees before booking.</p>
              <Link to={contactUrl}>Send an enquiry <ArrowRight size={15} /></Link>
            </section>
          </aside>
        </div>

        <section className="related-tutors">
          <div className="section-title-row"><div><span className="kicker">KEEP EXPLORING</span><h2>Other great <em>tutors.</em></h2><p>Explore more sample tutor profiles from TutorVerse.</p></div><Link className="text-link" to="/tutors">View all tutors <ArrowRight size={16} /></Link></div>
          <div className="related-tutor-grid">{relatedTutors.map((item) => <Link className="related-tutor-card" key={item.name} to={`/tutors/${tutorSlug(item.name)}`}><span className={`avatar ${item.color}`}>{item.initials}</span><span><b>{item.name}</b><small>{item.subject}</small></span><ArrowRight size={17} /></Link>)}</div>
        </section>
      </div>
    </div>
  );
}
