export abstract class DioAccount{
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit(value: number): void {
        if (this.validateStatus()) {
            if (value > 0) {
                this.balance += value
                console.log(`Deposito feito com sucesso, seu saldo agora é de R$ ${this.balance}`);
                return
            }
            console.log(`O valor que voje digitou esta incorreto, nao podemos depositar valores negativos`);
        }
       
    } 

    withdraw = (value: number): void =>{
        if (this.validateStatus()) {
            if (value > 0) {
                if(value < this.balance){
                    this.balance -= value
                    console.log(`Saque feito com sucesso, seu saldo agora é de R$ ${this.balance}`);
                    return
                }
                else{
                    console.log(`Você não pode fazer um saque maior que seu saldo, seu saldo é de R$${this.balance}`);

                }
            }
            console.log(`O valor que voje digitou esta incorreto, nao podemos depositar valores negativos`);
        }
       
    }

    setBalance = (value: number) =>{
        this.balance = value
    }

    getBalance = (): number =>{
        return this.balance
    }

    validateStatus(): boolean {
        if (!this.status) {
            console.log("Conta desativada");
            
        }
        return this.status
    }
}
