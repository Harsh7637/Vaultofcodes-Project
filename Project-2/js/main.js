//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY >0);
})

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn =  document.querySelector(".nav-close-btn");
const navigation =  document.querySelector(".navigation");

menuBtn.addEventListener("click" , () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click" , () => {
    navigation.classList.remove("active");
});


/*=============== EMAIL JS ===============*/
emailjs.init('owaEECqAdJo-3HF3Q');
const contactForm = document.getElementById('contact-form'); // Use the ID of your form element
const contactMessage = document.getElementById('contact-message'); // Use the ID of your message element

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ks69b0o', 'template_6sbn234', '#contact-form', 'owaEECqAdJo-3HF3Q')
    .then(() => {
      contactMessage.textContent = 'Message Sent Successfully';
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      contactForm.reset();
    })
    .catch(() => {
      contactMessage.textContent = 'Message not sent (Service error)';
    });
};

contactForm.addEventListener('submit', sendEmail)
