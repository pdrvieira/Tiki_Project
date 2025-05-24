
import leftArrow from '/src/assets/arrow-left.svg';
import React from 'react';

interface SetaEsqProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SetaEsq: React.FC<SetaEsqProps> = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <img src={leftArrow} alt="Voltar" />
  </div>
);

export default SetaEsq;
