import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: 20px;
  padding: 16px 24px;
  border: none;
  border-radius: 40px;
  background-color: white;
  color:var(--color-roxo-alt);
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 3px 5px 0px 0px #FC2BEE;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Spinner = styled.div`
  border: 3px solid #eee;
  border-top: 3px solid var(--color-roxo-alt, #a020f0);
  border-radius: 50%;
  width: 26px;
  height: 27px;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const OkIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 10px;
  color:var(--color-roxo-alt);
  font-size: 24px;
  text-align: center;
  line-height: 24px;
  opacity: 1;
`;