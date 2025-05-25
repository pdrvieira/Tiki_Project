import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 100%;
  min-height: 320px;
  background: inherit;

  footer > div {
    max-width: 1150px;
    margin: 0 auto;
    width: 100%;
    padding: 60px 32px 0 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    text-align: center;
    color: white;
    padding-top: 60px;
    padding-bottom: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  p {
    font-size: 10px;
    text-align: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0;
  }
`;