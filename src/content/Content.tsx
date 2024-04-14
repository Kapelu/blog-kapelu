import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div style={{ color: '#ecb465c5' }}>{props.children}</div>
);

export { Content };
