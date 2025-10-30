# CP3_GestaoEstoque

Projeto de sistema de gestão de estoque para produtos perecíveis e não-perecíveis.

Resumo das regras implementadas:

- Produto:
  - SKU (identificador único)
  - nome
  - categoria: PERECIVEL | NAO_PERECIVEL
  - preço unitário
  - quantidade mínima em estoque
  - data de criação
- Movimentação de estoque:
  - tipo: ENTRADA | SAIDA
  - quantidade
  - data da movimentação
  - lote (obrigatório para perecíveis)
  - data de validade (obrigatório para perecíveis)

Regras de negócio implementadas:
- Produtos perecíveis devem possuir lote e data de validade ao cadastrar movimentação.
- Não é permitida entrada/saída com quantidade negativa.
- Ao registrar saída, o sistema verifica se há estoque suficiente.
- Produtos abaixo da quantidade mínima geram alerta em relatórios.
- Produtos perecíveis não aceitam movimentações após data de validade.

Como executar:

1. Instalar dependências:

   npm install

2. Iniciar a aplicação:

   npm start

API (exemplos):

- POST /products
  {
    "sku": "ABC123",
    "name": "Leite",
    "category": "PERECIVEL",
    "unitPrice": 5.5,
    "minQuantity": 10
  }

- POST /movements
  {
    "sku": "ABC123",
    "type": "ENTRADA",
    "quantity": 50,
    "lot": "L1",
    "expiryDate": "2025-11-05"
  }

- GET /reports/total-value
- GET /reports/expiring-soon
- GET /reports/below-minimum

Diagrama (texto):

Product (sku PK) --< Movement


Comprovantes de commits:
- Etapa 1 - Modelagem do domínio
- Etapa 2 - Implementação das regras de negócio
- Etapa 3 - Validações e tratamento de erros
- Tag: versao-final

