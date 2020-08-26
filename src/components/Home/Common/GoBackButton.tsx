import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

// 複数回 render される component で ↓のようにでる。ので inline で style を書く。(この component と userImageSection でこの Error が出た)
// The component styled.div with the id of "sc-fzoxnE" has been created dynamically.
// You may see this warning because you've called styled inside another component.
// To resolve this only create new StyledComponents outside of any render method and function component.
// container であり presentation でもあるけどいいかな、、、
export const GoBackButton: React.FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const IconWrapperStyle = {
    color: '#1da1f2',
    padding: '15px 15px',
  };

  return (
    <div onClick={() => goBack()} style={IconWrapperStyle}>
      <ArrowBackIcon />
    </div>
  );
};
