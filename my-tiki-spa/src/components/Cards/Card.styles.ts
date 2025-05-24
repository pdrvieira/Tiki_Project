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
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
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

  
`;

export const StyledCardWrapper = styled.div`
  padding: 0 10px;
  outline: none;
`;



export const StyledThumb = styled.div<{ isActive: boolean, locked?: boolean }>`
  cursor: ${({ locked }) => (locked ? 'not-allowed' : 'pointer')};
  position: relative;
  border-radius: 20px;
  box-shadow: -10px 20px 50px rgba(143, 13, 255, 0.2);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: ${({ locked }) => (locked ? '#2B0A3D' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px; 
  min-width: 180px; 

  img {
    width: 100%;
    border-radius: 20px;
    display: ${({ locked }) => (locked ? 'none' : 'block')};
  }

  .lock-thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ locked }) => (locked ? '#fff' : '#fc2bee')};
  }

  &:hover {
    border-color: ${({ locked }) => (locked ? 'transparent' : '#ffffff')};
    span {
      color: ${({ locked }) => (locked ? '#fff' : '#ffffff')};
    }
  }

  ${({ isActive }) =>
    isActive &&
    `
    border-color: #ffffff;
    span {
      color: #ffffff;
    }
  `}
`;