import { createGlobalStyle } from 'styled-components';
import UbuntuRegular from './Ubuntu-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: UbuntuRegular;
        font-style: normal;
        font-weight: 400;
        src: url(${UbuntuRegular});
    }
`;