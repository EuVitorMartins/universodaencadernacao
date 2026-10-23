/* ==================================================
   ENCADERNA FÁCIL 2027
   JAVASCRIPT PRINCIPAL
================================================== */



/* ==================================================
   FAQ - ABRIR E FECHAR
================================================== */


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {


    const question = item.querySelector(".faq-question");


    question.addEventListener("click", () => {


        const isActive = item.classList.contains("active");



        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

        });



        if(!isActive){

            item.classList.add("active");

        }


    });


});







/* ==================================================
   ESTILO FAQ
================================================== */


const faqStyle = document.createElement("style");


faqStyle.innerHTML = `


.faq-answer{

max-height:0;
overflow:hidden;
transition:max-height .4s ease,
padding .3s ease;

padding-top:0!important;
padding-bottom:0!important;

}



.faq-item.active .faq-answer{

max-height:300px;

padding-bottom:25px!important;

}



.faq-item.active .faq-question span{

transform:rotate(45deg);

}



.faq-question span{

transition:.3s;

}


`;


document.head.appendChild(faqStyle);









/* ==================================================
   CARROSSEIS DA COLEÇÃO
================================================== */


const carousels = document.querySelectorAll(".carousel-track");



carousels.forEach(carousel => {


    let isDown = false;

    let startX;

    let scrollLeft;



    carousel.addEventListener("mousedown", (e)=>{


        isDown = true;


        startX = e.pageX - carousel.offsetLeft;


        scrollLeft = carousel.scrollLeft;


    });




    carousel.addEventListener("mouseleave", ()=>{


        isDown = false;


    });




    carousel.addEventListener("mouseup", ()=>{


        isDown = false;


    });




    carousel.addEventListener("mousemove",(e)=>{


        if(!isDown) return;


        e.preventDefault();



        const x = e.pageX - carousel.offsetLeft;


        const walk = (x - startX) * 1.5;



        carousel.scrollLeft = scrollLeft - walk;


    });




    let touchStart = 0;



    carousel.addEventListener("touchstart",(e)=>{


        touchStart = e.touches[0].clientX;


    });




    carousel.addEventListener("touchmove",(e)=>{


        let touchMove = e.touches[0].clientX;



        let distance = touchStart - touchMove;



        carousel.scrollLeft += distance;



        touchStart = touchMove;


    });



});









/* ==================================================
   SCROLL SUAVE
================================================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor =>{


    anchor.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});









/* ==================================================
   ANIMAÇÕES AO ENTRAR NA TELA
================================================== */


const animatedElements = document.querySelectorAll(

".solution-info, \
.solution-video, \
.collection-category, \
.folder-card, \
.difference-card, \
.bonus-card, \
.faq-item, \
.final-box"

);





animatedElements.forEach(element =>{


    element.classList.add("reveal");


});







const revealStyle = document.createElement("style");


revealStyle.innerHTML = `


.reveal{

opacity:0;

transform:translateY(30px);

transition:

opacity .7s ease,

transform .7s ease;

}



.reveal.visible{

opacity:1;

transform:none;

}



`;



document.head.appendChild(revealStyle);








const observer = new IntersectionObserver(


(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");



observer.unobserve(entry.target);


}


});


},


{

threshold:0.15

}


);







animatedElements.forEach(element=>{


observer.observe(element);


});









/* ==================================================
   BOTÕES - EFEITO DE CLIQUE
================================================== */


const buttons = document.querySelectorAll(

".cta-video, \
.collection-button, \
.offer-button, \
.final-button"

);



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.96)";



setTimeout(()=>{


button.style.transform="";


},150);



});


});







console.log(

"Encaderna Fácil 2027 carregado com sucesso."

);

/* ==================================================
   POPUP SOCIAL PROOF
================================================== */


const popup = document.getElementById("purchasePopup");

const popupName = document.getElementById("popupName");

const popupProduct = document.getElementById("popupProduct");





/*
  Lista de notificações

  Troque pelos dados reais de compradores
  quando tiver autorização.
*/


const notifications = [


    {
        name: "Mariana Oliveira",
        product: "Coleção Premium Encaderna Fácil 2027"
    },


    {
        name: "Juliana Santos",
        product: "Coleção Essencial Encaderna Fácil 2027"
    },


    {
        name: "Camila Ferreira",
        product: "Coleção Premium + Todos os Bônus"
    },


    {
        name: "Ana Paula",
        product: "Coleção Premium Encaderna Fácil 2027"
    },


    {
        name: "Fernanda Martins",
        product: "Coleção Essencial Encaderna Fácil 2027"
    },


    {
        name: "Patrícia Almeida",
        product: "Coleção Premium + Bônus Exclusivos"
    },


    {
        name: "Carolina Souza",
        product: "Coleção Premium Encaderna Fácil 2027"
    }


];






// Escolhe item aleatório

function randomNotification(){


    const randomIndex = Math.floor(

        Math.random() * notifications.length

    );


    return notifications[randomIndex];


}







// Mostra popup


function showPopup(){


    const data = randomNotification();



    popupName.innerHTML =

    `${data.name} garantiu!`;



    popupProduct.innerHTML =

    data.product;



    popup.classList.add("show");




    setTimeout(()=>{


        popup.classList.remove("show");


    },5000);


}








// Tempo aleatório entre notificações


function randomTime(){


    const times = [


        30000, // 30 segundos

        40000, // 40 segundos

        50000  // 50 segundos


    ];



    return times[

        Math.floor(Math.random()*times.length)

    ];

}




// Primeira aparição após 20 segundos


setTimeout(()=>{


    showPopup();




    function nextPopup(){



        setTimeout(()=>{


            showPopup();


            nextPopup();



        }, randomTime());



    }




    nextPopup();



},20000);