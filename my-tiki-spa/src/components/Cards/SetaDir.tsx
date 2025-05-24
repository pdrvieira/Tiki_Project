import leftArrow from '/src/assets/arrow-right.svg';
import React from 'react';

interface SetaDirProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SetaDir: React.FC<SetaDirProps> = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <img src={leftArrow} alt="Próximo" />
  </div>
);

export default SetaDir;