import * as React from 'react';
import styled from 'styled-components';
import { UserImageSection } from '../Tweet/UserImageSection';

type Props = {
  userImageURL: string;
  content: string;
  handleChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

const TweetCreate = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #15202b;
`;
const RightContainer = styled.div`
  max-height: 400px;
  width: 100%;
  padding-right: 15px;
  margin-top: 13px;
`;
const InputElement = styled.textarea`
  margin-top: 8px;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  background-color: #15202b;
  border: none;
  border-bottom: solid 1px rgb(136, 153, 166);
  resize: none;
  outline: none;
  color: white;
  font-size: 19px;
  font-family: 'Segoe UI', Meiryo, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  ::placeholder {
    font-weight: bold;
    opacity: 0.7;
    position: relative;
    top: -0.15em;
  }
`;

export const TweetCreateForm: React.FC<Props> = ({
  content,
  handleChangeContent,
  userImageURL,
}) => {
  const imageSize = 49;

  return (
    <TweetCreate>
      <UserImageSection userImageURL={userImageURL} imageSize={imageSize} />
      <RightContainer>
        <InputElement
          wrap="soft"
          value={content}
          onChange={(e) => handleChangeContent(e)}
          placeholder="いまどうしてる？"
        />
      </RightContainer>
    </TweetCreate>
  );
};
