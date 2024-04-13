import React from "react";

import { GetStaticProps } from "next";

import { Articles, IBlogGalleryProps } from "../Components/Articles";
import { Meta } from "../Components/Meta";
import { IPaginationProps } from "../Components/Pagination";
import { Main } from "./Main";
import { AppConfig } from "../utils/AppConfig";
import { getAllPosts } from "../utils/Content";

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Articles posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(["title", "date", "tag", "description", "slug"]);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = "/page2";
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
