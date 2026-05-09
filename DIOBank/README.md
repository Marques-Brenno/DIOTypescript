🏦 DIO Bank - Sistema Bancário Orientado a Objetos
📝 Sobre o Projeto
Este projeto é uma simulação de um sistema bancário desenvolvido inteiramente em TypeScript. O objetivo principal da aplicação é aplicar na prática os conceitos fundamentais de Programação Orientada a Objetos (POO), garantindo a segurança dos dados através do encapsulamento e promovendo a reutilização de código através da herança e polimorfismo.

🚀 Funcionalidades
O sistema gerencia diferentes tipos de contas bancárias, cada uma com suas próprias regras de negócio:

Depósitos e Saques Seguros: Validação de status da conta e verificação de saldo disponível antes de qualquer transação. Impede o depósito e saque de valores negativos.

Contas de Pessoas Físicas: Criação de contas padrão vinculadas a um documento de identificação.

Contas Corporativas (Company): Contas com funcionalidades exclusivas, como a capacidade de solicitar empréstimos (getLoan), que automaticamente acrescem o valor ao saldo da empresa.

Contas Especiais (VIP): Implementação de uma regra de negócio customizada onde todo depósito realizado recebe um bônus automático de R$ 10,00 da instituição.

🛠️ Conceitos Técnicos Aplicados
Neste projeto, foram aplicadas as melhores práticas do TypeScript:

Classes Abstratas (abstract class): Criação da classe base DioAccount, servindo como um molde rígido que não pode ser instanciado diretamente, apenas herdado.

Herança (extends e super): Compartilhamento de atributos e métodos da classe mãe para as classes filhas (CompanyAccount, PeopleAccount e EspecialAccount), evitando repetição de código.

Polimorfismo: Sobrescrita do método de depósito na conta especial para atender a uma regra de negócio diferente da conta padrão.

Encapsulamento e Modificadores de Acesso: * Uso de private para proteger o saldo (balance) e o status da conta, garantindo que só sejam alterados por métodos autorizados (saque, depósito, empréstimo).

Uso de readonly (imutabilidade) no name e accountNumber, garantindo que os dados vitais do cliente jamais sejam alterados ou apagados após a abertura da conta.

🏗️ Estrutura do Código
DioAccount: A superclasse abstrata que contém a lógica central do banco (validar status, depositar, sacar e ler saldo).

PeopleAccount: Herda de DioAccount e adiciona o atributo doc_id (CPF/RG).

CompanyAccount: Herda de DioAccount e adiciona o método getLoan().

EspecialAccount: Herda de DioAccount e modifica o método deposit() usando polimorfismo.

dioBank.ts: O arquivo principal responsável por instanciar os objetos reais e executar as transações bancárias.
