import React from "react";
import {
    StyledProdMain,
    StyledProdTitle,
    StyledProdInfo,
    StyledProdImg,
    StyledProdInternalGrid
} from "../../assets/css/styles";

const Product = ({ id, name, price, category, description, photo_url }) => {
    return (
        <StyledProdMain id={id}>
            <StyledProdInternalGrid>
                <StyledProdImg
                    src={photo_url}
                />
                <div>
                    <StyledProdTitle>{name}</StyledProdTitle>
                    <StyledProdInfo>Por apenas R$ {price},00</StyledProdInfo>
                    <StyledProdInfo>Tipo {category}</StyledProdInfo>
                    <div style={{margin: '10px'}}>
                        Descrição
                        <StyledProdInfo>{description}</StyledProdInfo>
                    </div>
                </div>
                
            </StyledProdInternalGrid>
        </StyledProdMain>
    )
};

export default Product;
