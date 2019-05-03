import React from 'react';

import './index.scss';

const itens = [
    { title: 'Cobrar', icon: 'people' },
    { title: 'Ajustar limite', icon: 'people' },
    { title: 'Pagar', icon: 'people' },
    { title: 'Transferir', icon: 'people' },
    { title: 'Indicar amigos', icon: 'people' },
    { title: 'Bloquear cartão', icon: 'people' },
    { title: 'Cartão virtual', icon: 'people' }
]

export default props => (
    <section className="bottom-navigation">
        <ul className="bottom-navigation-list">
            {itens.map((item, index) => (
                <li key={index} className="bottom-navigation-list-item">
                    <i>
                        { item.icon }
                    </i>
                    
                    { item.title }
                </li>
            ))}
        </ul>
    </section>
)