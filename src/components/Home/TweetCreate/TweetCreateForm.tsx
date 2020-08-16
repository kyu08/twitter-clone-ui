import * as React from 'react';
import classes from './TweetCreateForm.module.css';
import { UserImageContainer } from '../Tweet/UserImageContainer';

type Props = {
  userImageURL: string;
  content: string;
  handleChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export const TweetCreateForm: React.FC<Props> = (props) => {
  const { content, handleChangeContent, userImageURL } = props;

  return (
    <div className={classes.TweetCreate}>
      <UserImageContainer userImageURL={userImageURL} />
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
