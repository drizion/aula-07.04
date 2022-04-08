import converter from "./lib/index.js";
import readline from "readline";
import { throws } from "assert";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem vindo ao conversor de unidades de temperatura!\n')

rl.question('Digite o número da operação que você quer fazer?\n\n(1) Graus Celcius para Fahrenheit\n(2) Graus Fahrenheit para Celcius\n\nEscolha: ', function (operacao) {
    switch(operacao){
        case '1': case '2': break
        default: throw new Error('operação incorreta')
    }
    rl.question('\nDigite o valor: ', function (x) {
        var res
        if(operacao == '1') {
            res = converter.getFahrenheit(Number(x))
        } else {
            res = converter.getCelcius(Number(x))
        }
            if(isNaN(res)) {
                console.log("você não usou números")
                rl.close()
            } 
            console.log(`\nO resultado da operação foi ${res}`)
            rl.close()
    });
  });