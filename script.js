function pegarDados(){
 		//alert("ok");
//document.querySelector(".esconder").sytyle.display = "block";//
    let row  = document.querySelector('hr');
    row.classList.add('show');

    let result = document.querySelector('.hide');
    result.classList.remove('hide');
    result.classList.add('show');

 let camText = document.getElementById("texto").value; 
 //alert(camText);
document.getElementById("camText").innerHTML =  ("Nome:" + camText);

 let camTel = document.getElementById("fone").value;
 document.getElementById("campTel").innerHTML = ("Telefone:" + camTel);

 let camEmail = document.getElementById("e-mail").value;
 document.getElementById("camEmail").innerHTML = ("Email:" + camEmail);

 let camSenha = document.getElementById("senha").value;
 document.getElementById("camSenha").innerHTML = ("Senha:" + camSenha);

//  	if(document.getElementById("info2").checked){
// 	        alert("Seu curso é Informática");
// 	} else if (document.getElementById("adm2").checked){
// 			alert("Seu curso é Administração");
// 	} else if (document.getElementById("enf2").checked){
// 			alert("Seu curso é Enfermagem");
// }
// let priFaixa = document.getElementById("priFaixa").value;
// alert(priFaixa);
 
}
