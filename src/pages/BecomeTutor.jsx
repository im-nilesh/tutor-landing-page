import { useState } from "react";
import { ArrowRight, BadgeCheck, BookOpen, CalendarDays, CheckCircle2, GraduationCap, IndianRupee, Laptop, ShieldCheck, Sparkles, Users } from "lucide-react";
import PageHeading from "../components/pages/PageHeading";
import { subjects } from "../data/content";

const initialSubjects = [];

export default function BecomeTutor({ notify }) {
  const [selectedSubjects, setSelectedSubjects] = useState(initialSubjects);
  const [submitted, setSubmitted] = useState(false);

  const toggleSubject = (subject) => {
    setSelectedSubjects((current) => current.includes(subject)
      ? current.filter((item) => item !== subject)
      : [...current, subject]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedSubjects.length === 0) {
      notify("Choose at least one subject to continue.");
      return;
    }
    setSubmitted(true);
    notify("Tutor application captured in the frontend demo. Connect the backend to save it.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="inner-page become-page">
      <div className="section-wrap">
        <PageHeading
          eyebrow="TEACH WITH TUTORVERSE"
          title="Turn what you know into"
          accent="someone else's breakthrough."
          description="Create a tutor profile, share your expertise and connect with learners looking for the right guidance."
          align="center"
        />

        <div className="tutor-onboard-banner">
          <div className="onboard-banner-icon"><GraduationCap size={34} /></div>
          <div><span className="kicker">YOUR EXPERIENCE MATTERS</span><h2>Teach on your <em>terms.</em></h2><p>Choose the subjects, teaching mode and schedule that work for you.</p></div>
          <div className="onboard-points"><span><BadgeCheck size={16} /> Build your profile</span><span><Users size={16} /> Meet new learners</span><span><CalendarDays size={16} /> Set your availability</span></div>
        </div>

        {submitted ? (
          <div className="application-success">
            <span className="success-icon"><CheckCircle2 size={36} /></span>
            <span className="kicker">APPLICATION DETAILS READY</span>
            <h2>Your tutor profile is one step <em>closer.</em></h2>
            <p>Your details have been captured by this frontend demo. Once connected to a backend, the application can be reviewed and published.</p>
            <button className="btn btn-primary" onClick={() => { setSubmitted(false); setSelectedSubjects([]); }}>Submit another application <ArrowRight size={16} /></button>
          </div>
        ) : (
          <form className="app-form tutor-application" onSubmit={handleSubmit}>
            <div className="form-section-heading"><span className="section-number">01</span><div><h3>Personal information</h3><p>Tell students a little about the person behind the lessons.</p></div></div>
            <div className="form-grid-two">
              <label className="form-field"><span>Full name *</span><input name="fullName" placeholder="Your full name" autoComplete="name" required /></label>
              <label className="form-field"><span>Email address *</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
              <label className="form-field"><span>Phone number *</span><input type="tel" name="phone" placeholder="10-digit mobile number" pattern="[0-9+() -]{8,16}" autoComplete="tel" required /></label>
              <label className="form-field"><span>City / Location *</span><input name="location" placeholder="e.g. Bengaluru" autoComplete="address-level2" required /></label>
            </div>

            <div className="form-divider" />
            <div className="form-section-heading"><span className="section-number">02</span><div><h3>Teaching expertise</h3><p>Choose what you teach and share your experience.</p></div></div>
            <div className="form-field"><span>Subjects you teach *</span><div className="subject-choice-grid">{subjects.map((subject) => <label key={subject} className={selectedSubjects.includes(subject) ? "subject-choice selected" : "subject-choice"}><input type="checkbox" checked={selectedSubjects.includes(subject)} onChange={() => toggleSubject(subject)} /><span>{subject}</span></label>)}</div><small className="field-hint">Select all subjects you are comfortable teaching.</small></div>
            <div className="form-grid-two">
              <label className="form-field"><span>Highest qualification *</span><input name="qualification" placeholder="e.g. M.Sc. Mathematics" required /></label>
              <label className="form-field"><span>Years of teaching experience *</span><select name="experience" required defaultValue=""><option value="" disabled>Select experience</option><option>Less than 1 year</option><option>1–2 years</option><option>3–5 years</option><option>6–10 years</option><option>10+ years</option></select></label>
              <label className="form-field"><span>Hourly fee (₹) *</span><div className="input-with-icon"><IndianRupee size={17} /><input type="number" name="fee" min="100" max="10000" placeholder="500" required /></div></label>
              <label className="form-field"><span>Teaching mode *</span><select name="mode" defaultValue="Online & Home" required><option>Online & Home</option><option>Online</option><option>Home Classes</option></select></label>
            </div>

            <div className="form-divider" />
            <div className="form-section-heading"><span className="section-number">03</span><div><h3>Your teaching profile</h3><p>Help learners understand your approach before they contact you.</p></div></div>
            <label className="form-field"><span>Short introduction *</span><textarea name="bio" rows="5" minLength="40" maxLength="600" placeholder="Describe your teaching experience, approach and the kind of learners you work best with..." required /></label>
            <div className="form-grid-two">
              <label className="form-field"><span>Languages you teach in</span><input name="languages" placeholder="e.g. English, Kannada, Hindi" /></label>
              <label className="form-field"><span>Preferred class timing</span><select name="timing" defaultValue="Flexible"><option>Flexible</option><option>Weekday mornings</option><option>Weekday evenings</option><option>Weekends</option></select></label>
            </div>

            <div className="application-consent"><ShieldCheck size={19} /><p>Your profile should contain accurate qualifications and experience. Verification can be connected as a separate backend workflow.</p></div>
            <button className="btn btn-primary application-submit" type="submit">Submit tutor application <ArrowRight size={17} /></button>
          </form>
        )}

        <div className="onboard-trust-row"><span><ShieldCheck size={18} /> Verified profile process</span><span><Laptop size={18} /> Online & home classes</span><span><BookOpen size={18} /> Multiple subjects</span><span><Sparkles size={18} /> Flexible teaching</span></div>
      </div>
    </div>
  );
}
