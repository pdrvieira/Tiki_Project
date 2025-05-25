import styled from 'styled-components';

export const StyledEstado = styled.div`
  position: relative;
  margin-bottom: 40px;

  .imgMain {
    width: 100%;
    border-radius: 40px;
    box-shadow: -10px 20px 50px rgba(143, 13, 255, 0.2);
    display: block;
  }

  .hover-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: rgba(0, 0, 0, 0.9);
    color: var(--color-branco);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-bottom-left-radius: 39px;
    border-bottom-right-radius: 39px;
  }

  &:hover .hover-overlay {
    opacity: 1;
  }

    .social-icons {
    display: flex;
    gap: 12px;
    margin-left: 12px; 
    
    a img {
      width: 32px;
      height: 32px;
      border-color: var(--color-branco);
      transition: transform 0.3s ease;
    }

    a img:hover{
        transform: scale(1.1);
    }
  }
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  max-width: 930px;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0 20px;
  
  .custom-arrow {
    position: absolute;
    background: transparent !important;
    top: 50%;
    z-index: 1;
    transform: translateY(-130%);
    cursor: pointer;
  }

  .custom-arrow.prev {
    left: -50px;
  }

  .custom-arrow.next {
    right: -50px;
  }

  .custom-arrow img {
    width: 32px;
    height: 32px;

  }

  .slick-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
    padding: 0;
    z-index: 10;
    pointer-events: auto;
    li {
      display: inline-block;
      margin: 0 4px;
      button {
        pointer-events: auto;
      }
    }
    li button:before {
      color: #ffffff;
      font-size: 10px;
      opacity: 0.7;
    }
    li.slick-active button:before {
      color: #ffffff;
      opacity: 1;
    }
  }
`;

export const StyledCardWrapper = styled.div`
  padding: 0 5px;
  outline: none;
  margin-bottom: 80px;
`;



export const StyledThumb = styled.div<{ isActive: boolean; locked?: boolean }>`
  cursor: ${({ locked }) => (locked ? 'not-allowed' : 'pointer')};
  position: relative;
  box-shadow: -5px 20px 30px -5px rgba(143, 13, 255, 0.2);
  transition: all 0.2s ease;
  border: 1px solid ${({ isActive }) => (isActive ? '#ffffff' : 'transparent')};
  border-radius: 20px;
  background: ${({ locked }) => (locked ? '#170424' : 'none')};
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  min-width: 160px;

  &:hover {
    border-color: ${({ locked }) => (locked ? 'transparent' : '#ffffff')};

    span {
      color: ${({ locked }) => (locked ? '#FC2BEE' : '#ffffff')};
    }
  }

  img.content-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    display: ${({ locked }) => (locked ? 'none' : 'block')};
  }

  img.lock-icon {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.8;
  }

  span {
    position: absolute;
    top: 120px;
    left: 60px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ isActive, locked }) => (locked ? '#fc2bee' : isActive ? '#fff' : '#fc2bee')};
  }
`;
