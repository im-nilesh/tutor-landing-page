import { useState } from "react";
import { ArrowLeft, Mail, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

export default function ForgotPassword({ notify }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    notify("Password reset form submitted. Connect the email service to send a reset link.");
  };

  return (
    <AuthLayout
      eyebrow="ACCOUNT RECOVERY"
      title="Let's get you"
      accent="back on track."
      description="A few quick steps will help you regain access to your TutorVerse account."
      footer={<>Remembered your password? <Link to="/login">Log in</Link></>}
    >
      <div className="auth-heading">
        <span className="auth-heading-icon">{submitted ? <MailCheck size={25} /> : <Mail size={25} />}</span>
        <span className="form-kicker">PASSWORD ASSISTANCE</span>
        <h2>{submitted ? "Check your" : "Forgot your"} <em>{submitted ? "inbox" : "password?"}</em></h2>
        <p>{submitted ? "The reset request has been recorded in this frontend demo. An email service is required to send the actual link." : "Enter the email address linked to your account and we'll help you reset your password."}</p>
      </div>

      {!submitted ? (
        <form className="app-form auth-form" onSubmit={handleSubmit}>
          <label className="form-field"><span>Email address</span><div className="input-with-icon"><Mail size={18} /><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></div></label>
          <button className="btn btn-primary auth-submit" type="submit">Send reset link <span>→</span></button>
          <Link className="back-link" to="/login"><ArrowLeft size={16} /> Back to login</Link>
        </form>
      ) : (
        <button className="btn btn-primary auth-submit" type="button" onClick={() => setSubmitted(false)}>Try another email</button>
      )}
    </AuthLayout>
  );
}
