import {
  StyledCardsContainer,
  StyledCardWrapper,
  StyledEstado,
  StyledThumb 

} from './Card.styles';
import Slider from 'react-slick';
import { useState } from 'react';
import SetaEsq from './SetaEsq';
import SetaDir from './SetaDir';

// Imagens
const images = [
  { src: '/src/assets/imagem.jpg', alt: 'Image 1', label: '16 DE MARÇO', locked: false },
  { src: '/src/assets/imagem2.png', alt: 'Image 2', label: '17 DE MARÇO', locked: false },
  { label: '18 DE MARÇO', locked: true },
  { label: '21 DE MARÇO', locked: true },
];

function Card() {
    const [activeImage, setActiveImage] = useState(images[0]);

    // configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SetaEsq />,
    nextArrow: <SetaDir />,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <StyledEstado>
        <img className='imgMain' src={activeImage.src} alt={activeImage.alt} />

        <div className="hover-overlay">
          <span>Espalhe este SPOILER:</span>
          <div className="social-icons">
            <a href="#" target="">
              <img src="/src/assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" target="">
              <img src="/src/assets/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="#" target="">
              <img src="/src/assets/whatsapp.svg" alt="Whatsapp" />
            </a>
            <a href="#" target="">
              <img src="/src/assets/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>


      </StyledEstado>

        <h2 style={{paddingBottom:15}}>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</h2>

      <StyledCardsContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <StyledCardWrapper key={index}>
              {image.locked ? (
                <StyledThumb isActive={false} locked>
                  <div style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#2B0A3D',
                    borderRadius: '20px'
                  }}>
                    <span style={{ fontSize: 32, color: '#fff' }}>🔒</span>
                    <span style={{ color: '#fff', marginTop: 8 }}>{image.label}</span>
                  </div>
                </StyledThumb>
              ) : (
                <StyledThumb
                  onClick={() => setActiveImage(image)}
                  isActive={activeImage.src === image.src}
                >
                  <img src={image.src} alt={image.alt} />
                  <span>{image.label}</span>
                </StyledThumb>
              )}
            </StyledCardWrapper>
          ))}
        </Slider>
      </StyledCardsContainer>
    </>
  )
}

export default Card;
