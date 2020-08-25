import * as React from 'react';
import styled from 'styled-components';

type Props = {
  labelTitle: string;
  inputType: string;
  value: string;
  handleChangeValue(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  background-color: rgb(25, 39, 52);
  border-bottom: solid 2px rgb(136, 153, 166);
`;

const InputLabel = styled.label`
  padding-left: 10px;
  color: rgb(136, 153, 166);
  font-family: 'Segoe UI', Meiryo, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
`;

const LoginInput = styled.input`
  color: white;
  font-size: 18px;
  padding: 0;
  height: 29px;
  width: 100%;
  background-color: rgb(25, 39, 52);
  border: none;
`;

export const InputForm: React.FC<Props> = ({
  labelTitle,
  inputType,
  value,
  handleChangeValue,
}) => {
  return (
    <InputContainer>
      <InputLabel>
        {labelTitle}
        <LoginInput
          type={inputType}
          value={value}
          onChange={(e) => handleChangeValue(e)}
        />
      </InputLabel>
    </InputContainer>
  );
};
