import React from "react";
import { StyledProdGrid, StyledTitle, StyledMainView } from "../../assets/css/styles";
import GlobalStyle from '../../assets/fonts/fonts';

import Product from "../Product";

const mockData = {
    "id": 1,
    "name": "Macaco Hidraulico 2 Ton Universal Tipo Jacarezinho C/ Maleta",
    "price": 120,
    "category": "Acessórios para veículos",
    "description": "Macaco Hidráulico Jacaré 2 Toneladas Sparta Mtx",
    "photo_url": "https://a-static.mlcdn.com.br/618x463/macaco-hidraulico-2-ton-universal-tipo-jacarezinho-c-maleta-sparta/ddmaquinas/46389/f7a5427327d1aefdcac158512aee3be9.jpg"
}

const Home = () => {
    return (
        <>
            <GlobalStyle />

            <StyledMainView>
                <StyledTitle>Kuppi</StyledTitle>
            </StyledMainView>
            
            <StyledProdGrid >
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
                <Product
                    id={mockData.id}
                    name={mockData.name}
                    price={mockData.price}
                    category={mockData.category}
                    description={mockData.description}
                    photo_url={mockData.photo_url}
                />
            </StyledProdGrid>
        </>
    )
};

export default Home;
