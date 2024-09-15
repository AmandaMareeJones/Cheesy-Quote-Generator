function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "Your quote will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
