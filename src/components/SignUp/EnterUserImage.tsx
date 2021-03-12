import * as React from 'react';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import styled from 'styled-components';
import { Message } from '../Login/Message';
import { TODO } from '../util/util';

type Props = {
  goToNextPage(e: React.MouseEvent<HTMLInputElement>): void;
  backToPreviousPage(e: React.MouseEvent<HTMLInputElement>): void;
  userImage: TODO<'userimage'>;
  selectImage(e: React.ChangeEvent<HTMLInputElement>): void;
  canGoToPage3: boolean;
};

const FileInput = styled.input`
  display: none;
`;
const FileInputContainer = styled.div`
  position: relative;
  text-align: center;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 40%;
  left: 46%;
`;

const DefaultUserImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
`;

const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const SubmitButton = styled.input`
  width: 49%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 60px;
  background-color: #1da1f2;
  color: white;
  border: none;
  :disabled {
    background: rgb(31, 96, 142);
    color: rgb(136, 153, 166);
  }
`;

const ButtonContainer = styled.div`
  margin: 20px auto;
  width: 315px;
`;

export const EnterUserImage: React.FC<Props> = ({
  backToPreviousPage,
  canGoToPage3,
  goToNextPage,
  selectImage,
  userImage,
}) => {
  return (
    <div>
      <Message message="プロフィール画像を選ぶ 2/4" />
      <ButtonContainer>
        <FileInputContainer>
          <DefaultUserImage src={userImage} alt="UserImage preview" />
          <InputLabel>
            <AddAPhotoOutlinedIcon />
            <FileInput
              type="file"
              id="upload_chat"
              name="file"
              accept="image/png, image/jpeg"
              onChange={(e) => selectImage(e)}
            />
          </InputLabel>
        </FileInputContainer>
        <SelectorContainer>
          <SubmitButton
            type="submit"
            value="戻る"
            onClick={(e) => backToPreviousPage(e)}
          />
          <SubmitButton
            type="submit"
            value="次へ"
            onClick={(e) => goToNextPage(e)}
            disabled={!canGoToPage3}
          />
        </SelectorContainer>
      </ButtonContainer>
    </div>
  );
};
