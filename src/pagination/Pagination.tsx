import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="pagination-previous">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>⬅ Nuevos Posts</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="pagination-next">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>Anteriores Posts ➡</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
