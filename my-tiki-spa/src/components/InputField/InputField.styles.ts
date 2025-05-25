import styled, { keyframes } from 'styled-components';

export const StyledBox2 = styled.section`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-roxo-alt);
  border-radius: 80px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  padding-bottom: 60px;
`;

export const StyledInput = styled.input`
  padding: 12px 20px;
  border-radius: 40px;
  border: 1.5px solid #fff;
  background: transparent;
  color: #fff;
  height: 70px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #ccc;
    transition: color 0.3s ease;
  }

  &:focus {
    border: 1px solid var(--color-rosa);
    color: var(--color-rosa);

    &::placeholder {
      color:var(--color-rosa);
    }
  }
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    &:checked::before {
      content: '';
      position: absolute;
      top: 4.5px;
      left: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ff00ff;
    }
  }
`;


