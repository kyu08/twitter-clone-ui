import * as React from 'react';
import styled from 'styled-components';

type Props = {
  labelTitle: string;
  optionArray: number[];
  handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  optionNumber: number;
};

const InputContainer = styled.div`
  margin: 20px auto;
  width: 90px;
  background-color: rgb(25, 39, 52);
  border-bottom: solid 2px rgb(136, 153, 166);
`;

const InputLabel = styled.div`
  padding-left: 10px;
  color: rgb(136, 153, 166);
  font-family: 'Segoe UI', Meiryo, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
`;

const BirthdaySelector = styled.select`
  color: white;
  font-size: 18px;
  padding: 0;
  height: 29px;
  width: 100%;
  background-color: rgb(25, 39, 52);
  border: none;
`;

export const SelectDate: React.FC<Props> = ({
  labelTitle,
  optionArray,
  handleChange,
  optionNumber,
}) => {
  return (
    <InputContainer>
      <InputLabel>
        {labelTitle}
        <BirthdaySelector
          value={optionNumber}
          onChange={(e) => handleChange(e)}
        >
          {optionArray.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </BirthdaySelector>
      </InputLabel>
    </InputContainer>
  );
};
