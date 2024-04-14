import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Articles, IBlogGalleryProps } from '../Components/Articles';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';
// import { convertTo2D } from '../../_assets/pagination/Pagination';

const convertTo2D = function convertTo2D<T>(arr: T[], size: number) {
  const res: T[][] = [];

  arr.forEach((element, index) => {
    if (index % size === 0) {
      res.push([element]);
    } else {
      res[res.length - 1].push(element);
    }
  });

  return res;
};

type IPageUrl = {
  page: string;
};

const PaginatePosts = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Articles posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const pages = convertTo2D(posts, AppConfig.pagination_size);

  return {
    paths: pages.slice(1).map((_, index) => ({
      params: {
        // Index starts from zero so we need to do index + 1
        // slice(1) removes the first page so we do another index + 1
        // the first page is implemented in index.tsx
        page: `page${index + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  IBlogGalleryProps,
  IPageUrl
> = async ({ params }) => {
  const posts = getAllPosts(['title', 'date', 'slug']);

  const pages = convertTo2D(posts, AppConfig.pagination_size);
  const currentPage = Number(params!.page.replace('page', ''));
  const currentIndex = currentPage - 1;

  const pagination: IPaginationProps = {};

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentIndex],
      pagination,
    },
  };
};

export default PaginatePosts;
