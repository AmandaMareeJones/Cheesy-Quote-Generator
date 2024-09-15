function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userCheese = document.querySelector("#user-submit");
  let apiKey = "09te212a1c952dfb01916b44eoad6c23";
  let context =
    "you are an intelligent AI Assistant, who provides funny quotes about the type of cheese type submitted by the user. You need to read the value the user submits in the form.You need to identify the cheese type the user has provided before they click the submit button. The user always provides their choice of cheese. If you do not read a cheese type, provide a cheesy quote anyway. Provide the quote in HTML and present each sentance on a separate line. Do not show the word HTML";
  let prompt = `User Submit: Tell me a quote about ${userCheese.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink"> Generating your cheesy quote about ${userCheese.value}...⌛</div>`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
