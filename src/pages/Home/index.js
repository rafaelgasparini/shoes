import React from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280"
                    alt="Tênis" />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280"
                    alt="Tênis" />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280" alt="Tênis" />

                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280" alt="Tênis" />

                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280" alt="Tênis" />

                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/90/D12-2759-890/D12-2759-890_detalhe1.jpg?resize=280:280" alt="Tênis" />

                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}
