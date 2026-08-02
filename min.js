const questions = document.querySelectorAll(".accordion-item .question");
const sectionsElement = document.querySelectorAll("section");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  });
});

const clickQuestionsEvent = (item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      item.click();
    }
  });
};
questions.forEach(clickQuestionsEvent);



const observeElements = (sectionsElement) => {
  const options = { threshold: 0.3 };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("In-view");
      }
      else{
        entry.target.classList.remove("In-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  sectionsElement.forEach((element) => observer.observe(element));
};
observeElements(sectionsElement);
