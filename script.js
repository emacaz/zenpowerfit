function importHotmart() {
  var imported = document.createElement("script");
  imported.src = "https://static.hotmart.com/checkout/widget.min.js";
  document.head.appendChild(imported);
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
  document.head.appendChild(link);
}
importHotmart();

document.getElementById("form_id").addEventListener("submit", (e) => {
  e.preventDefault();

  const API = 'https://3ewf2lnjmk.execute-api.sa-east-1.amazonaws.com/prod/';
  const responseMessage = document.getElementById("responseMessage");
  const email = document.getElementById("email_id").value.toLowerCase().replace(/\s/g, "");
  const submitBtn = document.getElementById("submitBtn");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  document.querySelector("input[name='email']").disabled = true;
  submitBtn.textContent = "Enviando...";
  submitBtn.style.cursor = "not-allowed";
  submitBtn.style.backgroundColor = "gray";
  submitBtn.disabled = true;

  if (!emailRegex.test(email)) {
    responseMessage.textContent = "Ingresa un correo electrónico válido.";
    submitBtn.textContent = "Enviar";
    submitBtn.style.backgroundColor = "#ff9300";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
    document.querySelector("input[name='email']").disabled = false;
    return;
  }

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => response.json())
    .then((rawData) => {
      const data = JSON.parse(rawData.body);
      responseMessage.textContent = data.userMessage;
      submitBtn.textContent = "Enviar";
      submitBtn.style.cursor = "pointer"
      submitBtn.style.backgroundColor = "#ff9300"
      submitBtn.disabled = false;
      document.querySelector("input[name='email']").disabled = false;
      document.querySelector("input[name='email']").value = "";
      // document.getElementById("confirmationModal").style.display = "block";
      // grecaptcha.reset();
    })
    .catch((error) => {
      console.error("Error", error);
    });
})