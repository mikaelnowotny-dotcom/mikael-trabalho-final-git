```javascript
// ==============================
// MENSAGEM DE BOAS-VINDAS
// ==============================

window.addEventListener("load", function () {
    console.log("Almanaque do Futebol Nostálgico carregado!");
});


// ==============================
// MENU ATIVO
// ==============================

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.style.backgroundColor = "#24553d";
            item.style.color = "#f5e6c8";
        });

        this.style.backgroundColor = "#c79a45";
        this.style.color = "#183c2b";
    });

});


// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.title = "Voltar ao topo";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.display = "none";
botaoTopo.style.padding = "12px 16px";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.fontWeight = "bold";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.backgroundColor = "#c79a45";
botaoTopo.style.color = "#183c2b";
botaoTopo.style.cursor = "pointer";

document.body.appendChild(botaoTopo);


// Mostrar botão quando rolar a página

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});


// Voltar para o topo

botaoTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```


