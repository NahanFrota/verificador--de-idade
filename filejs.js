function verificar(){
    var data = new Date()
    var anos = data.getFullYear()
    var fano = document.getElementById("anode").value
    var resu = document.getElementById("res")
    var minidade = 1899
    
 if(fano <= minidade || fano > anos){
   alert("ops algo deu errado, seus dados são falsos")
 }    else{
    var sexx = document.getElementsByName ("sex")
    var calculo = anos - fano
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
 } if (sexx[0].checked){
   genero = 'masculino'
      if(fano >=2000 || fano <= 2008){
         img.setAttribute('src', 'jovem.png')

      }

 }else if (sexx[1].checked){
   genero = 'feminino'
   if(fano >=2000 || fano <= 2008){
      img.setAttribute('src', 'jovemM.png')
   }
  
 }
 resu.innerHTML = `voce tem ${calculo} anos ${genero}`
    resu.appendChild(img)
}