# TutorVerse frontend

TutorVerse is a React + Vite tutoring marketplace frontend. The interface uses the existing lavender/purple visual system and sample tutor data.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Frontend routes

- `/` — Home page and featured tutors
- `/tutors` — Tutor discovery, search, filters and sorting
- `/tutors/:tutorId` — Tutor profile and enquiry entry point
- `/login` — Login screen
- `/signup` — Student/parent or tutor sign-up screen
- `/forgot-password` — Password reset request screen
- `/become-a-tutor` — Tutor application form
- `/contact` — Contact and tutor enquiry form

## Integration note

This project is currently frontend-only. Authentication, password reset delivery, tutor application storage, contact delivery, profile persistence and booking workflows need backend/API integration. Tutor cards and profile content are sample data in `src/data/content.js` and `src/data/tutorProfiles.js`.
