import React, { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

type IContentProps = {
  children: ReactNode;
};

const Main = (props: IMainProps & IContentProps) => (
  <>
    {props.meta}
    <article className="">{props.children}</article>
  </>
);

export { Main };
