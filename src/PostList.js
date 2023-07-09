





import React, { useEffect, useState } from "react";
import Post from "./Post";
import Button from "./Button";

const PostList = () => {
  const [posts, setPostsList] = useState([]);

   
  const getData = (page) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`)
      .then((response) => response.json())
      .then((json) => {
        setPostsList(posts.concat(json));
      });
  };

  useEffect(() => {
    console.log('ropbie')
    getData(0);
  }, []);


  console.log(posts); // Wyświetlanie danych w konsoli


  return (
    <div className="postList"
    >
      {posts.map((post) => {

        return (
          <Post

            title={post.title}
            id={post.id}
            completed={post.completed}
            key={post.id}

          />
        );
      })}

      <Button getData={getData} postsLength={posts.length} />
    </div>
  );


};

export default PostList;
