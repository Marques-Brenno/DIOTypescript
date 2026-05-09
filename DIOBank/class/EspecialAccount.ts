import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void =>{
        value += 10
        super.deposit(value)
    }
}