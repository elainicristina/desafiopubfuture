# Gerenciador de finanças

Projeto desenvolvido como desafio na etapa tecnica do processo seletivo para PubFuture. O objetivo do desafio é um sistema responsável por gerenciar as finanças pessoais.


# Sobre o projeto

Dentre as features do projeto, posso citar:

1. Projeto é divido entre receita, despesas e contas.
2. Entre ambas cadastrar,listar, remover e editar.
3. Em despesas e receitas possui uma filtragem de periodo e tipo.
4. Em contas uma possibilidade de transferencia e verificar saldo total da conta.

# Sobre codigo

Projeto realizado com: 

- TypeScript e Express
- Banco MSQL
- Biblioteca TypeORM

# Como rodar

- Projeto está preparado para usar msql.
- Arquivo de configuraçao do banco é ormconfig.js
- Dockerfile para facilitar a instalação.

# Url, rotas e parametros

- url geral: localhost:3001
- rotas: contas/despesas/receitas/transferencia/saldo

1. Para obter todos os valores de um get na rota:

ex. localhost:3001/contas

2. Para criar de um post na rota com os seguintes parametros:

Conta:
 ```json
 {
    "saldo": 2000,
    "tipoConta": "POUPANÇA",
    "instituicaoFinanceira": "BB"
}
```

Receita:
 ```json
 {
   "valor": 800,
    "dataRecebimento": "2022-01-13",
    "dataRecebimentoEsperado": "2022-01-13",
    "descricao": "poupanca",
    "conta": "104",
    "tipoReceita": "sei la"
}
```

Despesa:
```json
 {
    "valor": 800,
    "dataPagamento": "2022-01-13",
    "dataPagamentoEsperado": "2022-01-13",
    "tipoDespesa": "Games",
    "conta": "Skin CS:GO"
}
```

3. Para atualizar, de um put na rota e escolha o campo que quer mudar:

ex.
```json
{
    "saldo": 1000000
}
```
5. Para deletar use o delete na rota e coloque seu id:

ex. localhost:3001/contas/102

4. Para filtrar por tipo, de um get na rota e coloque seu parametro:
key: tipoDespesa ou tipoReceita

ex.localhost:3001/despesas?tipoDespesa=Games
![Captura de tela de 2022-01-14 21-29-31](https://user-images.githubusercontent.com/81453546/149601300-31e4bee0-199b-4126-a953-a8032d9db5df.png)


5. Para filtrar por periodo, de um get na rota:

Precisa da data que esta no campo dataRecebimento ou dataPagamento.

ex. 
![Captura de tela de 2022-01-14 21-34-27](https://user-images.githubusercontent.com/81453546/149601557-dad15578-b907-4f6e-bdf0-769b5400db0d.png)




6. Para fazer transferencia de um get na rota:

ex. localhost:3001/contas/transferencia


Precisa do id da conta que vai mandar, o id da conta que vai receber e o valor da transferencia no body JSON da requisiçao.

ex.

```json
{
    "origem": 101,
    "destino": 103,
    "valor": 100
}
```

7. Para verificar saldo total de um get:

url: localhost:3001/contas/total











