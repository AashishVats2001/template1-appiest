// Questions and Answers

const faqs = {
  1: {
    question: "How can I download my photo?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered altion in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
  },
  2: {
    question: "How can I purchase a premium plan?",
    answer:
      "Go to the Pricing section, choose a plan, and follow the payment instructions. Access is granted immediately.",
  },
  3: {
    question: "How do you delete pictures created in the app?",
    answer:
      "Head to the 'My Creations' section, long-press the image you want to delete, then select the delete option.",
  },
  4: {
    question: "The saved photos are not showing up correctly in the album.",
    answer:
      "Check app permissions for storage. Try restarting the app or clearing cache in settings.",
  },
  5: {
    question: "How to turn off the notification message from the app?",
    answer:
      "Open app settings > Notifications, and turn off the messages you don’t want. You can also adjust system-wide settings.",
  },
  6: {
    question: "Why can't I upload my photos?",
    answer:
      "Ensure you're connected to the internet, and that photo size and format are supported by the app.",
  },
  7: {
    question: "How do I get started with the app?",
    answer:
      "Download the app, sign up or log in, and follow the short onboarding guide to get started.",
  },
};

const container = document.getElementById("faq-container");

for (const key in faqs) {
  const { question, answer } = faqs[key];

  container.innerHTML += `
    <div class="flex flex-col w-full border-b-[1px] border-accent">
      <div class="question-toggle flex gap-3 items-center text-secondary py-5 opacity-80 hover:opacity-100 transition-all font-medium text-lg cursor-pointer">
        <i class="fa-solid fa-circle-question fa-lg"></i>
        <h3>${question}</h3>
      </div>
      <div class="faq-answer w-full transition-all ease-in-out duration-300 overflow-hidden origin-top text-muted box-border ms-10 text-balance text-sm"'>
        <p class='p-5 text-base'>${answer}</p>
      </div>
    </div>
  `;
}

document.querySelectorAll(".question-toggle").forEach((question) => {
  const answer = question.nextElementSibling;

  // Close all initially
  answer.style.maxHeight = "0px";
  answer.style.marginBottom = "0px";

  question.addEventListener("click", () => {
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // Close all answers
    document.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
      otherAnswer.style.maxHeight = "0px";
      otherAnswer.style.marginBottom = "0px";
    });

    // Toggle current one open
    if (!isOpen) {
      const scrollHeight = answer.scrollHeight + "px";
      answer.style.maxHeight = scrollHeight;
      answer.style.marginBottom = "20px";
    }
  });
});

// Open first answer on load
const firstAnswer = document.querySelector(".faq-answer");
if (firstAnswer) {
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
  firstAnswer.style.marginBottom = "20px";
}
