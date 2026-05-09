import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (value: number): void =>{
        if (this.validateStatus()) {
            if (value > 0) {
                let balance: number = this.getBalance()
                balance += value
                this.setBalance(balance)
            }
        }
    }
}