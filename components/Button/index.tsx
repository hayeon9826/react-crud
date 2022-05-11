import React from 'react';
import { ButtonStyle } from './styles';

const Button = ({ buttonText }: any) => {
  return (
    <>
      <ButtonStyle>{buttonText}</ButtonStyle>
    </>
  );
};

export default Button;
