import React from 'react';

import Link from 'next/link';

const convertUrlToLinkHref = (url: string) => (url === '/' ? '/' : '/[page]');

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <article className="pagination-previous">
    {props.previous && (
      <aside>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>← Nuevos Posts</a>
        </Link>
      </aside>
    )}

    {props.next && (
      <aside className="pagination-next">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>Anteriores Posts →</a>
        </Link>
      </aside>
    )}
  </article>
);

export { Pagination };
