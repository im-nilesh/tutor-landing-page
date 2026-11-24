import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

export default function Login({ notify }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    notify("Login UI is ready. Connect your authentication API to enable sign-in.");
  };

  return (
    <AuthLayout
      eyebrow="WELCOME BACK"
      title="Your next lesson"
      accent="starts here."
      description="Sign in to pick up where you left off, manage your learning and stay connected with your tutor."
      footer={<>New to TutorVerse? <Link to="/signup">Create an account</Link></>}
    >
      <div className="auth-heading">
        <span className="form-kicker">YOUR LEARNING SPACE</span>
        <h2>Welcome <em>back</em></h2>
        <p>Enter your details to access your account.</p>
      </div>

      <form className="app-form auth-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Email address</span>
          <div className="input-with-icon"><Mail size={18} /><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></div>
        </label>

        <label className="form-field">
          <span>Password</span>
          <div className="input-with-icon">
            <LockKeyhole size={18} />
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" autoComplete="current-password" required minLength={6} />
            <button className="input-icon-action" type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
        </label>

        <div className="auth-options">
          <label className="check-field"><input type="checkbox" name="remember" /> <span>Remember me</span></label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button className="btn btn-primary auth-submit" type="submit">Log In <span>→</span></button>
        <div className="auth-divider"><span>OR</span></div>
        <button className="btn btn-outline auth-secondary" type="button" onClick={() => navigate("/signup")}>Create a new account</button>
      </form>
      <p className="auth-legal">By continuing, you agree to the TutorVerse Terms of Use and Privacy Policy.</p>
    </AuthLayout>
  );
}
