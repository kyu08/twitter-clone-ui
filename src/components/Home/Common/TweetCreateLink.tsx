import * as React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import styled from 'styled-components';

const TweetCreateLinkWrapper = styled.div`
  margin-left: auto;
  position: absolute;
  right: 25px;
  bottom: 75px;
`;

const TweetCreateLinkButton = styled.button`
  background-color: #1da1f2;
  color: white;
  border-radius: 50%;
  font-size: 35px;
  border: none;
  position: relative;
  padding: 10px 18px;
`;

export const TweetCreateLink: React.FC<{}> = () => {
  return (
    <>
      <TweetCreateLinkWrapper>
        <TweetCreateLinkButton>
          <CreateIcon fontSize="default" />
        </TweetCreateLinkButton>
      </TweetCreateLinkWrapper>
    </>
  );
};
