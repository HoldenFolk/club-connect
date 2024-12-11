import React from 'react';
import { PageTemplate } from '../../template/index';
import PrivPagesWrapper from '../PrivPagesWrapper';
import ProfileSettings from '../ProfileSettings';

export const ProfilePage = () => {
  return (
    <PageTemplate>
      <PrivPagesWrapper>
        <ProfileSettings />
      </PrivPagesWrapper>
    </PageTemplate>
  );
};
