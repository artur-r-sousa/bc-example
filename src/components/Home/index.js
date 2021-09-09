import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProdGrid, StyledTitle, StyledMainView } from "../../assets/css/styles";
import GlobalStyle from '../../assets/fonts/fonts';
import { ProductLoading } from "../../store/modules/exemple/actions";
import Product from "../Product";

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products)
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
                
                {products.length > 0 ?
                products.map(item => {
                    
                    return (
                        <Product
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            photo_url={item.photo_url}
                        />
                    )
                })
                    : <p>Loading</p>
                }

            </StyledProdGrid>
        </>
    )
};



export default Home;
