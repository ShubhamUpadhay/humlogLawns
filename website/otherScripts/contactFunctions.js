const whatsappBtn = document.getElementById("whatsapp-btn");
const callBtn = document.getElementById("call-btn");

const phoneNumber = "+917440569391";
const whatsappMessage = "Hello, I would like to get in touch!";
const makePhoneCall = () => {
  window.location.href = phoneNumber;
};

const sendWhatsAppMessage = () => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappURL, "_blank");
};

whatsappBtn.addEventListener("click", sendWhatsAppMessage);
callBtn.addEventListener("click", makePhoneCall);
