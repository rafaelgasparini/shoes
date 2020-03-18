import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from "react-icons/all";
import {Container, ProductTable, Total} from "./styles";

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                <tr>
                    <th/>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img
                            src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280"
                            alt="Tênis"/>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$ 129,90</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1"/>
                            </button>
                            <input type="number" readOnly value={2}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"/>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$258,80</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#7159c1"/>
                        </button>
                    </td>
                </tr>
                </tbody>

            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 1290,28</strong>
                </Total>
            </footer>
        </Container>
    )
}
