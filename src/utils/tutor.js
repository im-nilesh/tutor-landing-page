import { tutors } from "../data/content";

export function tutorSlug(name = "") {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findTutorBySlug(slug) {
  return tutors.find((tutor) => tutorSlug(tutor.name) === slug);
}
