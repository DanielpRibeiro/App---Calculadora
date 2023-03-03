    function calcular(tipo, valor){
        
        //Verifica se esta ocorrendo a acao em cada botao
        
        console.log(tipo, valor)

        // DIFERENCIAR AÇAO DE VALOR
        if(tipo === 'acao'){

            if(tipo == 'acao'){

                // Limpar o campo de resultados
                if(valor === 'c'){
                    document.getElementById('resultado').value=''
                }

                // Operaçoes matematicas
                if(valor ==='+' || valor ==='-' || valor ==='x' || valor ==='/' || valor ==='.'){
                    document.getElementById('resultado').value += valor 
                }

                // resultado
                 if(valor === '='){
                    // eval > se caso houver uma expressao matematica irá efetuar o calculo
                    var valor_campo = eval(document.getElementById('resultado').value)
                    document.getElementById('resultado').value = valor_campo
                  }
            }

        }
        else if(tipo === 'valor'){

            // *** 2 ***** Concatenando os valores na barra de resultados
           
                // var valor_campo = document.getElementById('resultado').value

            // A primeira ação abaixo apenas efetua a leitura de onclick sem recuperar o valor antigo
            // *** 1 ***** Evento de onclick (valor) sendo mostrado na barra de resultados
           
                // 1 - document.getElementById('resultado').value = valor
                // 2 -  document.getElementById('resultado').value = valor_campo + valor

            // Realiza a concatenaçao de forma mais exemplificada
                document.getElementById('resultado').value += valor 
        }
    }