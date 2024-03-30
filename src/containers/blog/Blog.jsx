import React from "react";
import './Blog.css';
import { Article } from "../../component";
import { blog01, blog02, blog03, blog04, blog05 } from './index.js';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Dive Deeper into the World of Voice AI: Our Latest Articles
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupa">
          <Article imgURL={blog01} date="Sep 26, 2021" title="Unleashing the Power of Voice AI: A Revolutionary Journey Begins" />
        </div>
        <div className="gpt3__blog-container-groupb">
          <Article imgURL={blog02} date="Sep 26, 2021" title="The Future is Here: Exploring the Landscape of Voice AI Technology" />
          <Article imgURL={blog03} date="Sep 26, 2021" title="Voice AI Unveiled: Understanding the Impact on Everyday Life" />
          <Article imgURL={blog04} date="Sep 26, 2021" title="Voice AI Revolution: Transforming Industries and Enhancing Experiences" />
          <Article imgURL={blog05} date="Sep 26, 2021" title="Embracing Innovation: The Journey Towards Seamless Voice AI Integration" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
