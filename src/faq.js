// Questions and Answers

const faqs = {
  1: {
    question: "Which blockchains does HexaPay support?",
    answer:
      "HexaPay currently supports Ethereum, Binance Smart Chain (BSC), Solana, Polygon, Avalanche, and Tron, with more chains being added regularly.",
  },
  2: {
    question: "Is HexaPay custodial or non-custodial?",
    answer:
      "HexaPay is a non-custodial platform. You retain full control of your funds at all times, and we never store your private keys.",
  },
  3: {
    question: "How do I integrate HexaPay into my website or app?",
    answer:
      "You can use our REST APIs, JavaScript SDK, or prebuilt plugins for platforms like Shopify and WooCommerce. Integration guides are available in our developer docs.",
  },
  4: {
    question: "Can I receive payments in stablecoins?",
    answer:
      "Yes. HexaPay supports stablecoins like USDT, USDC, and BUSD on supported chains. You can also auto-convert incoming tokens to stablecoins (coming soon).",
  },
  5: {
    question: "Do I need KYC to use HexaPay?",
    answer:
      "Basic wallet-to-wallet payments don’t require KYC. KYC is only needed for fiat conversion, enterprise plans, or regulated jurisdictions.",
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
