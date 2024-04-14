import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Articles = (props: IBlogGalleryProps) => (
  <>
    <section className="posts section-1">
      <div className="container">
        <h2 className="post-title background-blur">Articulos</h2>
        {props.posts.map((postMd) => (
          <article key={postMd.slug} className="post-card box-shadow">
            <div className="flex items-center text-gray-500 justify-between mb-4">
              <time className="post-card-header-item">
                {format(new Date(postMd.date), `dd LLL yyyy`)}
              </time>
              <span className="post-card-header-item">{postMd.tag}</span>
            </div>
            <h3>{postMd.title}</h3>
            <p>{postMd.description}</p>
            <div className="post-card-link">
              <Link
                href={`/posts/[slug]`}
                as={`/posts/${postMd.slug}`}
                className="post-card-link"
              >
                Leer más...
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </section>
  </>
);

export { Articles };
