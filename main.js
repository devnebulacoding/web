function scrollToELement(elementSelector, instance = 0){

    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")



link1.addEventListener('click', ()=>{
    scrollToELement('.welcome p')
})
link2.addEventListener('click', ()=>{
    scrollToELement('.about')
})
link3.addEventListener('click',()=>{
    scrollToELement('.contact')
})
link4.addEventListener('click',()=>{
    scrollToELement('.about')
})

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_z6d2fgs';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      Swal.fire({
        title: "Felicidades",
        text: "Mensaje enviado correctamente",
        icon: "success",
        confirmButtonColor: "#027be4",
        iconColor:"#027be4"
      });
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});
