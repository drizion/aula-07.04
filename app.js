import converter from "./lib/index.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Ao conversor de unidades de temperatura!\n')

rl.question('Digite o número da operação que você quer fazer?\n\n1 - Graus Celcius para Fahrenheit\n2- Graus Fahrenheit para Célcius\n\n Resposta:', function (operacao) {
    switch(operacao){
        case '1': case '2': break
        default:
            console.log("operação incorreta")
            rl.close()
        break    
    }
    rl.question('Digite o valor: ', function (x) {
        var res
        if(operacao == '1') {
            res += converter.getFahrenheit(x)
        } else {
            res += converter.getCelcius(x)
        }
            if(isNaN(res)) {
                console.log("você não usou números")
                rl.close()
            } 
            console.log(`O resultado da operação foi ${res}`)
            rl.close()
    });
  });