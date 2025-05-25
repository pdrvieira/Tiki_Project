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
    centerMode: false,
    initialSlide: 0,
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
            <StyledThumb
              onClick={() => !image.locked && setActiveImage(image)}
              isActive={activeImage.src === image.src}
              locked={image.locked}
            >
              {image.locked ? (
                <>
                  <img
                    src="src/assets/lock.svg" 
                    alt="Conteúdo bloqueado"
                    className="lock-icon"
                  />
                </>
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="content-thumb"
                  />
                </>
              )}
              <span>{image.label}</span>
            </StyledThumb>
          </StyledCardWrapper>
))}
        </Slider>
      </StyledCardsContainer>
    </>
  )
}

export default Card;
