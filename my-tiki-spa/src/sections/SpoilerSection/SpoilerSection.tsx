import {
  StyledBox,
  StyledSpoiler,
} from './SpoilerSection.styles';
import Card from '../../components/Cards/Card';

function SpoilerSection() {
  return (
    <StyledBox>

      <h1 style={{ paddingTop:89,paddingBottom:48 }}>CUIDADO, AO ROLAR PODE CONTER...</h1>

      <img src="/src/assets/icon-yellow.svg" alt="icone amarelo" />
      
      <StyledSpoiler>
        <img src="/src/assets/tittle1.svg" alt="SPOILERS text" />
      </StyledSpoiler>

      <img src="/src/assets/arrow down.svg" alt="icone amarelo" />

      <h2 style={{paddingTop:75.38, paddingBottom:15 }}>VOCÊ JÁ ESTAVA SABENDO?</h2>

      <Card />  
    </StyledBox>
      
  );
};

export default SpoilerSection;