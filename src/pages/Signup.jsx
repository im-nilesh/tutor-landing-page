import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

export default function Signup({ notify }) {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const handleSubmit = (event) => {
    event.preventDefault();
    notify("Sign-up UI is ready. Connect your authentication API to create accounts.");
  };

  return (
    <AuthLayout
      eyebrow="CREATE YOUR ACCOUNT"
      title="A little progress"
      accent="every day."
      description="Join a learning community that makes it easier to find guidance, build confidence and reach your goals."
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <div className="auth-heading">
        <span className="form-kicker">GET STARTED FOR FREE</span>
        <h2>Create your <em>account</em></h2>
        <p>It takes only a minute to get started.</p>
      </div>

      <form className="app-form auth-form" onSubmit={handleSubmit}>
        <input type="hidden" name="accountType" value={accountType} />
        <div className="form-field">
          <span>I am joining as</span>
          <div className="choice-grid">
            <button type="button" className={accountType === "student" ? "choice-card selected" : "choice-card"} onClick={() => setAccountType("student")}><span className="choice-icon">✦</span><b>Student / Parent</b><small>Find the right tutor</small></button>
            <button type="button" className={accountType === "tutor" ? "choice-card selected" : "choice-card"} onClick={() => setAccountType("tutor")}><span className="choice-icon">✧</span><b>Tutor</b><small>Teach and connect</small></button>
          </div>
        </div>

        <div className="form-grid-two">
          <label className="form-field"><span>Full name</span><div className="input-with-icon"><UserRound size={18} /><input name="name" placeholder="Your name" autoComplete="name" required /></div></label>
          <label className="form-field"><span>Email address</span><div className="input-with-icon"><Mail size={18} /><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></div></label>
        </div>

        <label className="form-field"><span>Password</span><div className="input-with-icon"><LockKeyhole size={18} /><input type={showPassword ? "text" : "password"} name="password" placeholder="Create a password" autoComplete="new-password" minLength={8} required /><button className="input-icon-action" type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div><small className="field-hint">Use at least 8 characters.</small></label>

        <label className="check-field"><input type="checkbox" required /> <span>I agree to the TutorVerse Terms of Use and Privacy Policy.</span></label>
        <button className="btn btn-primary auth-submit" type="submit">Create account <span>→</span></button>
        {accountType === "tutor" ? <p className="inline-note">Tutors can also complete the <Link to="/become-a-tutor">tutor application</Link> to share their teaching details.</p> : null}
      </form>
    </AuthLayout>
  );
}
