import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="article-container">{props.children}</div>
);

export { Content };
