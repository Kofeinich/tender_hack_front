import React, { FC } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

type RedirectWithQueryType = {
  to: string;
};

export const RedirectWithQuery: FC<RedirectWithQueryType> = ({ to }) => {
  const { search } = useLocation();

  return <Redirect to={{ pathname: to, search: search }} />;
};
