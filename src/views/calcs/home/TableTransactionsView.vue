<template>
    <section class="table--wrapper">
        <h1 class="section--title">Tabela de Transações</h1>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID da Transação</th>
                        <th>Data da transação</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo de transação</th>
                        <th>Categoria</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1111</td>
                        <td>01/01/2023</td>
                        <td>Conta de Luz</td>
                        <td>R$ 350,00</td>
                        <td>Despesa</td>
                        <td>Casa</td>
                        <td><button>Editar</button></td>
                    </tr>
                    <tr>
                        <td>2222</td>
                        <td>25/01/2023</td>
                        <td>Salário do mês de Fevereiro</td>
                        <td>R$ 5000,00</td>
                        <td>Receita</td>
                        <td>Trabalho</td>
                        <td><button>Editar</button></td>
                    </tr>
                    <tr>
                        <td>3333</td>
                        <td>12/03/2023</td>
                        <td>Conta de Água</td>
                        <td>R$ 55,00</td>
                        <td>Despesa</td>
                        <td>Casa</td>
                        <td><button>Editar</button></td>
                    </tr>
                    <tr>
                        <td>4444</td>
                        <td>10/04/2023</td>
                        <td>Venda de equipamento</td>
                        <td>R$ 1000,00</td>
                        <td>Receita</td>
                        <td>Vendas</td>
                        <td><button>Editar</button></td>
                    </tr>
                    <tr>
                        <td>5555</td>
                        <td>31/05/2023</td>
                        <td>Compras de mercado</td>
                        <td>R$ 260,00</td>
                        <td>Despesa</td>
                        <td>Alimentação</td>
                        <td><button>Editar</button></td>
                    </tr>
                </tbody>
                <tfoot class="table-footer">
                    <tr>
                        <td>Total: R$ 6000,00</td>
                    </tr>
                    <tr class="cell-button">
                        <td colspan="7"><button class="btn-transaction">Ver todas</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
</template>