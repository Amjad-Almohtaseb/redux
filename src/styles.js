import styled, {
  createGlobalStyle,
} from "styled-components"; /*createGlobalStyle is thing from styled-components that 
                              give us abilty to create global style*/

//global style and theme .....etc is? component
export const GlobalStyle = createGlobalStyle`//GlobalStyle is assumption name from us 
  h1{
    font-family:cursive;
  }
  body{
     background-color:${(props) => props.theme.backgroundColor} 
  }
  `;

export const theme = {
  mainColor: "#78A451",
  backgroundColor: "D6B85C",
  textColor: "100D04",
};
export const Productslist = styled.div`
  //this is a css component.react see it as a function.
  display: flex;

  justify-content: center;
`;
export const Shopimage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const Productimage = styled.img`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
`;
export const Imgtext = styled.p`
  text-align: center;
  font-weight: bold;
`;
export const Textstyle = styled.div`
  text-align: center;
  font-weight: bold;
`;
export const TripWrapper = styled.div`
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;

    width: 400px;
    height: 200px;
  }

  p {
    text-align: center;
  }
`;
