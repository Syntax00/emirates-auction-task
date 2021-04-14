const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export { scrollToSection };
