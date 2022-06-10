// function pokerniMe(dugme) {

//     let nazivDugmeta = dugme.innerText;
   
//     // let klasaDugmeta = dugme.classList; 

//     // let klasaDugmeta = dugme.classList.value; 

//     let klasaDugmeta = dugme.className; 
    
//     console.log(klasaDugmeta);

//     // console.log(nazivDugmeta);
    
//     let message = document.querySelector("#kliknutoDugme");
    
//     message.innerText = nazivDugmeta + " " + klasaDugmeta;
    
//     // console.log(dugme);
// }

// function testing() {

    // let linkovi = document.querySelectorAll(" .glavni-div span .moj-link");

    // console.log(linkovi[0].innerText); // Link1

    // let linkovi = document.querySelectorAll(" .glavni-div .inner-div span .moj-link");

    // console.log(linkovi[0].innerText); // Link3


    // let linkovi = document.querySelectorAll("section .moj-link");

    // console.log(linkovi[0].innerText); OUTPUT LINK 2

    // console.log("test");

// }

// function testing() {
    
    // let link = document.querySelector(".drugi-link");

    // console.log(link)

    // let link2 = document.querySelector(".drugi-link");
    // let link1 = link2.previousElementSibling;
    // let link3 = link2.nextElementSibling; 

    // console.log(link2.nextSibling);

    // console.log(link2.previousElementSibling); // OUTPUT : <a href="#" class="prvi-link">Link1</a> 

    // console.log(link2.nextElementSibling); // Output : <a href="#" class="treci-link">Link3</a> 

    // console.log(link1.innerText); Link1
    // console.log(link2.innerText); Link2
    // console.log(link3.innerText); Link3

    // let link = document.querySelector(".drugi-link");

    // console.log(link.closest("div")); // <div class ="glavni-div">...</div>

    // let link = document.querySelector(".drugi-link");

    // console.log(link.closest("div")); // <div class="double-inner"> <a href="#" class="drugi-link">Link2</a> </div>

    
    // let link = document.querySelector(".drugi-link");

    // link.setAttribute("class", "plava-boja link"); 

    // let link = document.querySelector(".drugi-link"); 

    // link.setAttribute("href" , "https://google.com");

    // let link = document.querySelector(".drugi-link"); 

    // console.log(link.getAttribute("data-test")); OUTPUT : testing

    // let link = document.querySelector(".drugi-link"); 

    // link.removeAttribute("data-test");
    // link.removeAttribute("class");

    // Kako u DIV upisati HMTL

    // let gl_div = document.querySelector(".glavni-div"); 

    // gl_div.innerHTML = "<hr>";

    // gl_div.innerHTML = '<span>Klikni ovaj link : <a href="#">Klik</a></span>';





// }

function validacija() {

    let input = document.querySelector("#email");
    
    let value = input.value;

    // Provjera da li value (String) sadrzi @ i .

    if(value.includes("@") && (value.includes("."))) {                   // Ako ovaj string sadrzi @ i .

        // console.log("Validan mail");

        // console.log(value.substring(0,5));

        let pozicijaAt = value.indexOf("@"); // Uzimamo poziciju At
        let pozicijaTacka = value.indexOf("."); // Uzinmamo poziciju .

        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka); // substring uzima vrijednost izmedju pozicija i ne ukljucuje posljednju poziciju

        // if(izmedjuAtTacka.length > 0) {
        //     console.log("Dobro je");
        // } else {
        //     console.log("Nije dobro");
        // }

        // Da li izmedju tacke i @ imamo vise od 0 karaktera

        if(izmedjuAtTacka.length > 0) {
            
            let prijeAt = value.substring(0, pozicijaAt);

            // Da li prije At imamo vise od 2 karaktera

            if (prijeAt.length > 2) {
                
                // console.log("dobro je"); 

                let poslijeTacke = value.substring(pozicijaTacka + 1, value.length);

                // console.log(poslijeTacke);

                // Da li poslije tacke imamo vise od 1 karaktera

                if(poslijeTacke.length > 1) {
                    console.log("Email je validan!");
                } else {
                    console.log("Mail nije validan!"); 
                }
            }

            else {
                console.log("Mail nije validan")
            }
            
        } 
        
        else {
             console.log("Nije dobro");
        }

        // console.log(izmedjuAtTacka.length); // niko@nikolic.com == OUTPUT @nikolic

        // console.log(value.substring(pozicijaAt, pozicijaTacka));

        // console.log(value.indexOf("@")); // OUTPUT 7 
        // console.log(value.indexOf(".")); // OUTPUT 13

    } else {

        console.log("Mail nije validan");

    }                                            

    // console.log(value);


    // console.log(input);

    // console.log("test");

}