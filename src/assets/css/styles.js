import styled from 'styled-components';

export const StyledMainView = styled.div`
    height: 30vh;
    width: 90vw;
    display: flex;
    align-content: center;
    text-align: center;
    background-color: rgb(44, 254, 134);
    justify-content: center;
    margin: 20px;
    margin-left: 4vw;
    border-radius: 18px;
`
export const StyledTitle = styled.h1`
    margin: 12vh;
    font-family: 'UbuntuRegular';
`

//Products Styles

export const StyledProdMain = styled.div`
    height: 50vh;
    width: 45vw;
    display: flex;
    flex-direction: column;
    background-color: #59ffe9;
    align-items: center;
    justify-content: center;
    margin-left: 3vw;
    font-family: 'UbuntuRegular';
    border-radius: 18px;
`
export const StyledProdGrid = styled.div`
    display: grid;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    grid-template-columns: 45vw 45vw;
`

export const StyledProdTitle = styled.h3`

`

export const StyledProdInfo = styled.p`
`

export const StyledProdImg = styled.img`
    height: 40vh;
    width: 19vw;
    border-radius: 18px;
`

export const StyledProdInternalGrid = styled.div`
    display: grid;
    grid-template-columns: 20vw 20vw;  
`