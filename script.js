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

// document.getElementById("form_id").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const responseMessage = document.getElementById("responseMessage");
//   const email = document.getElementById("email_id").value;
//   const submitBtn = document.getElementById("submitBtn");
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
//   document.querySelector("input[name='email']").disabled = true;
//   submitBtn.textContent = "Enviando...";

//   if (!emailRegex.test(email)) {
//     responseMessage.textContent = "Ingresa un correo electrónico válido.";
//     submitBtn.textContent = "Enviar";
//     document.querySelector("input[name='email']").disabled = false;
//     return;
//   }
// })