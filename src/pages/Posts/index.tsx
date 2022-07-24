import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { posts } from "./postSlice";
import { fetchPosts } from "./postThunk";
import "./styles.scss";

const Posts = () => {
  const list = useAppSelector(posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item) => (
            <tr key={item.userId}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
