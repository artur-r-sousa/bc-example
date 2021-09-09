import React, { useEffect } from "react";
import {
    StyledProdMain,
    StyledProdTitle,
    StyledProdInfo,
    StyledProdImg,
    StyledProdInternalGrid
} from "../../assets/css/styles";
import { useParams } from "react-router-dom";
import { ProductLoading } from "../../store/modules/exemple/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.state)
    console.log(items)
    let { id } = useParams();

    useEffect(() => {
        //in case the user accesses the page directly this useEffect will prevent the page from having an undefined state
        dispatch(ProductLoading());
    }, [])

    return (
        <>
            {items.length > 0 ?
                <StyledProdMain id={id}>
                    <StyledProdInternalGrid>
                        <StyledProdImg
                            src={items.find(value => value.id == id).photo_url}
                        />
                        <div>
                            <StyledProdTitle>{items.find(value => value.id == id).name}</StyledProdTitle>
                            <StyledProdInfo>R$ {items.find(value => value.id == id).price.toFixed(2)}</StyledProdInfo>
                            <StyledProdInfo>{items.find(value => value.id == id).description}</StyledProdInfo>
                            <StyledProdInfo>{items.find(value => value.id == id).category}</StyledProdInfo>
                        </div>

                    </StyledProdInternalGrid>
                </StyledProdMain>
                : <p>Loading</p>
            }
            


        </>

    )
};

export default ProductInfo;
