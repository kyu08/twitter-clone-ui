import * as React from 'react';
import classes from './TweetCreateForm.module.css';
import { UserImageSection } from '../Tweet/UserImageSection';

type Props = {
  userImageURL: string;
  content: string;
  handleChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export const TweetCreateForm: React.FC<Props> = (props) => {
  const { content, handleChangeContent, userImageURL } = props;
  const imageSize = 49;

  return (
    <div className={classes.TweetCreate}>
      <UserImageSection userImageURL={userImageURL} imageSize={imageSize} />
      <div className={classes.RightContainer}>
        <textarea
          className={classes.InputElement}
          wrap="soft"
          value={content}
          onChange={(e) => handleChangeContent(e)}
          placeholder="いまどうしてる？"
        />
      </div>
    </div>
  );
};
