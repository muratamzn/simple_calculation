let list =[];

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let button = document.querySelector("#btn");
let ulelement =document.querySelector("#listul");

button.addEventListener("click", displaySonuc);

function displaySonuc() {
    let p = document.querySelector("#deger");

    if (input1.value == "" || input2.value == "" || input3.value == "") {
        alert("lütfen bir değer giriniz...");
    }else if( input3.value == "-" & input1.value < input2.value){
        alert("Bu işlem geçersiz...")

    } else {
        const deger1 = islem(input1.value, input2.value, input3.value);
        const sonuc = `Değer : ${input1.value} ${input3.value} ${input2.value} = ${deger1}`
        p.innerHTML = sonuc;
        const objeList = {
            id: list.length,
            islm: sonuc
        }
        list.push(objeList);
        console.log("liste durumu :" )
        console.log( list)
        ulelement.innerHTML = "";
        
        list.forEach(obj => {
            let element = document.createElement("li"); 
            element.innerHTML = "<li>"+obj.islm+"</li>"  
            element.setAttribute("class", "myli");
            ulelement.appendChild(element);
        }); 
        input1.value = "";
        input2.value = "";
        input3.value = "";
    };
};
function islem(a, b, c) {
    if (c == "+") {
        toplam = parseInt(a) + parseInt(b);
        return toplam;
    } else if (c == "-") {
        cıkarma = parseInt(a) - parseInt(b);
        return cıkarma;
    } else if (c == "/") {
        bolme = parseInt(a) / parseInt(b);
        return bolme;
    } else if (c == "*") {
        carpma = parseInt(a) * parseInt(b);
        return carpma;
    };
};