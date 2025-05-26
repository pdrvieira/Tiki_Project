import {
  StyledBox,
  StyledSpoiler,
  StyledImages
} from './SpoilerSection.styles';
import Card from '../../components/Cards/Card';
import InputField from '../../components/InputField/InputField';



function SpoilerSection() {
  return (
    <>
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

      <StyledImages>
        <img src="/src/assets/tittle2.svg" alt="icone amarelo" />
        <br />
        <img style={{paddingTop:70, paddingBottom:75}}src="/src/assets/icon-yellow.svg" alt="SPOILERS text" />
      </StyledImages>
      
      <InputField/>
    </>
  );
};

export default SpoilerSection;