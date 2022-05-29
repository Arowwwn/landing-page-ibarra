import React from 'react';
import Article from '../../components/article/Article';
import { blogs01, blogs02, blogs03, blogs04, blogs05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> You should do something too.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blogs01} date="Feb 27, 2021" text="A Valorant guide made with input from community members over at Valorant!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blogs02} date="Feb 27, 2021" text="A Valorant guide made with input from community members over at Valorant!" />
        <Article imgUrl={blogs03} date="Feb 27, 2021" text="A Valorant guide made with input from community members over at Valorant!" />
        <Article imgUrl={blogs04} date="Feb 27, 2021" text="A Valorant guide made with input from community members over at Valorant!" />
        <Article imgUrl={blogs05} date="Feb 27, 2021" text="A Valorant guide made with input from community members over at Valorant!" />
      </div>
    </div>
  </div>
);

export default Blog;