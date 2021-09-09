import React from "react";
import { useSelector } from "react-redux";
import {
    StyledProdMain,
    StyledProdTitle,
    StyledProdInfo,
    StyledProdImg,
    StyledProdInternalGrid
} from "../../assets/css/styles";
import { Link } from "react-router-dom";

const Product = () => {
    const items = useSelector((state) => state.products.state)
  
    return (
        items.map(item => {
            return (
                <StyledProdMain id={item.id}>
                    <StyledProdInternalGrid>
                        <StyledProdImg
                            src={item.photo_url}
                        />
                        <div>
                            <Link to={"/products/"+item.id}>
                                <StyledProdTitle>{item.name}</StyledProdTitle>
                            </Link>

                            <StyledProdInfo>Por apenas R$ {item.price.toFixed(2)}</StyledProdInfo>
                        </div>

                    </StyledProdInternalGrid>
                </StyledProdMain>
            )
        })
    )
};

export default Product;
