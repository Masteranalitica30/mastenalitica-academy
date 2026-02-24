fetch("data/cursos.json")
.then(res=>res.json())
.then(data=>{

let html="";

data.cursos.forEach(curso=>{
html+=`
<div>
<h2>${curso.nombre}</h2>
<p>Inicio: ${curso.inicio}</p>
<p>${curso.horas} horas</p>
</div>
`;
});

document.getElementById("listaCursos").innerHTML=html;

});
