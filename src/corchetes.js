

function corchetes(cadena) {
    if(cadena==="[]"){
        return true;
    }else{
        return false;
    }
  }

  function verificar(cadena){
    let corchetesabiertos=0;
    let corchetescerrados=0;
        for (let i=0;i<cadena.length;i++){
            if(cadena[i]==="["){
                corchetesabiertos++;
            }
            if(cadena[i]==="]"){
                corchetescerrados++;
            }
        }
        if (corchetesabiertos===corchetescerrados){
            return true;
        }else {
            return false;
        }

  }
  module.exports = {corchetes,verificar};
  