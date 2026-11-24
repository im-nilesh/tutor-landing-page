import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import PageHeading from "../components/pages/PageHeading";

export default function Contact({ notify }) {
  const [searchParams] = useSearchParams();
  const tutorName = searchParams.get("tutor") || "";
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState(tutorName ? `Tutor enquiry: ${tutorName}` : "General enquiry");

  useEffect(() => {
    setSubject(tutorName ? `Tutor enquiry: ${tutorName}` : "General enquiry");
    setSubmitted(false);
  }, [tutorName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    notify("Your message is ready. Connect an email or contact API to deliver it.");
  };

  return (
    <div className="inner-page contact-page">
      <div className="section-wrap">
        <PageHeading
          eyebrow="WE'RE HERE TO HELP"
          title="Let's start a"
          accent="conversation."
          description="Questions about finding a tutor, teaching with us or using TutorVerse? Send a message and we'll point you in the right direction."
          align="center"
        />

        <div className="contact-layout">
          <aside className="contact-info-card">
            <span className="kicker">CONTACT DETAILS</span>
            <h2>Talk to the <em>TutorVerse</em> team.</h2>
            <p>Use the form for enquiries and support. The details below are sample contact placeholders for this frontend and can be replaced with your live business information.</p>
            <div className="contact-info-list">
              <div><span className="contact-info-icon"><Mail size={19} /></span><div><small>Email</small><b>hello@tutorverse.example</b></div></div>
              <div><span className="contact-info-icon"><Phone size={19} /></span><div><small>Phone</small><b>+91 00000 00000</b></div></div>
              <div><span className="contact-info-icon"><MapPin size={19} /></span><div><small>Location</small><b>Bengaluru, India</b></div></div>
              <div><span className="contact-info-icon"><Clock3 size={19} /></span><div><small>Support hours</small><b>Monday – Saturday · 9 AM – 6 PM</b></div></div>
            </div>
            <div className="contact-info-note"><MessageCircle size={19} /><span>We aim to make every learning connection feel simple and clear.</span></div>
          </aside>

          <section className="contact-form-card">
            {submitted ? (
              <div className="contact-success"><span className="success-icon"><Send size={30} /></span><span className="kicker">MESSAGE PREPARED</span><h2>Thanks for reaching <em>out.</em></h2><p>Your message has been captured in this frontend demo. Connect a backend or email service to deliver it to the team.</p><button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div>
            ) : (
              <>
                <div className="contact-form-heading"><span className="eyebrow"><Sparkles size={13} /> SEND A MESSAGE</span><h2>How can we <em>help?</em></h2><p>Fields marked with * are required.</p></div>
                {tutorName ? <div className="selected-tutor-note"><b>Enquiry for:</b> {tutorName} <Link to={`/tutors`}>Browse tutors</Link></div> : null}
                <form className="app-form contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid-two">
                    <label className="form-field"><span>Your name *</span><input name="name" placeholder="Full name" autoComplete="name" required /></label>
                    <label className="form-field"><span>Email address *</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
                  </div>
                  <div className="form-grid-two">
                    <label className="form-field"><span>Phone number</span><input type="tel" name="phone" placeholder="Optional" autoComplete="tel" /></label>
                    <label className="form-field"><span>Enquiry type *</span><select name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required><option>General enquiry</option><option>Finding a tutor</option><option>Teaching with TutorVerse</option><option>Technical support</option>{tutorName ? <option>{`Tutor enquiry: ${tutorName}`}</option> : null}</select></label>
                  </div>
                  <label className="form-field"><span>Message *</span><textarea name="message" rows="6" minLength="10" placeholder="Tell us how we can help..." required /></label>
                  <button className="btn btn-primary application-submit" type="submit">Send message <ArrowRight size={17} /></button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
