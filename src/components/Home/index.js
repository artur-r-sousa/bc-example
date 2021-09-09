import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProdGrid, StyledTitle, StyledMainView } from "../../assets/css/styles";
import GlobalStyle from '../../assets/fonts/fonts';
import { ProductLoading } from "../../store/modules/exemple/actions";
import Product from "../Product";

const Home = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.state)
    useEffect(()=>{
        dispatch(ProductLoading());
    }, [])

    return (
        <>
            <GlobalStyle />
            <StyledMainView>
                <StyledTitle>Kuppi</StyledTitle>
            </StyledMainView>          
            <StyledProdGrid >               
                {items.length > 0 ?                   
                        <Product/>
                    : <p>Loading</p>
                }
            </StyledProdGrid>
        </>
    )
};

export default Home;
