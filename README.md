# Tasks-List

Este é um projeto simples, feito em **Angular**, para fins de aprendizado e testes. A aplicação é uma lista de tarefas (Tasks List) que explora os conceitos de **Angular Signals** e outros fundamentos importantes do framework.

## Sobre o Projeto

O objetivo principal deste projeto é praticar:

* **Angular Signals:** Uma nova forma de gerenciar o estado da aplicação de forma reativa.
* **Fundamentos do Angular:** Componentes, serviços, data binding e comunicação entre componentes.
* **API com JSON Server:** Simulação de um backend para aprender a fazer requisições HTTP em um ambiente controlado.

## Como Executar

Siga os passos abaixo para rodar a aplicação na sua máquina.

### Pré-requisitos

Certifique-se de que você tem o **Angular CLI** instalado globalmente. Se não tiver, pode instalá-lo com o comando:

```bash
npm install -g @angular/cli
```

### 1. Instalar as Dependências
No diretório do projeto, execute o comando para instalar todas as dependências do package.json:

```bash
npm i
```

### 2. Executar o Backend
O backend é um JSON Server que usa o arquivo db.json para simular uma API REST.

Abra um novo terminal e execute o seguinte comando:

```bash
npx json-server db.json 
```
Estará disponível em http://localhost:3000/
#### **Observação**: Mantenha este terminal aberto enquanto a aplicação estiver rodando.

### 3. Executar a Aplicação Angular
Com o backend rodando, você pode iniciar a aplicação Angular. No primeiro terminal, use o comando:

```Bash
ng serve
```
A aplicação estará disponível em http://localhost:4200/.