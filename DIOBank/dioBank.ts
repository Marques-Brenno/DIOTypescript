
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { EspecialAccount } from "./class/EspecialAccount";

const contaPessoa = new PeopleAccount('Brenno', 1, 10)
const contaEmpresa = new CompanyAccount('DIO', 20)
const contaEspecial = new EspecialAccount('Pedro', 30)

// Testando a Conta de Pessoa
console.log("--- Testando People Account ---")
contaPessoa.deposit(100)
contaPessoa.withdraw(50)
console.log(contaPessoa.getBalance())

// Testando a Conta Empresa (supondo que ela tenha um método de empréstimo)
console.log("--- Testando Company Account ---")
contaEmpresa.getLoan(1000)
contaEmpresa.deposit(500)

// Testando a Conta Especial (aquela que ganha +10 no depósito)
console.log("--- Testando Especial Account ---")
contaEspecial.deposit(100)
console.log(contaEspecial.getBalance())
