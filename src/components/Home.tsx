import React, { useEffect } from "react";
import { useActions } from '../hooks/use-actions'
import { useTypedSelector } from '../hooks/use-typed-selector'
import { useHistory } from "react-router-dom";

function _Home(props: {}) {
  const history = useHistory();
  const { fetchBlogsLoading } = useActions()
  const blogs = useTypedSelector(state => state.blogs);
  useEffect(() => {
    fetchBlogsLoading()
  }, []);
  console.log(blogs);
  return (
    <div>
      <h1 style={{ textAlign: "center", position: "sticky", top: 0 }}>
        My Blogs{" "}
      </h1>
      {blogs.data.map(function(item) {
        return (
          <div
            key={item.title}
            onClick={() => history.push("create")}
            style={{
              border: "1px solid lightgrey",
              margin: "20px 50px",
              padding: "10px 20px",
              borderRadius: 10
            }}
          >
            <p>{item.title}</p>
            <span>{item.body}</span>
          </div>
        );
      })}
    </div>
  );
}

// function mapStateToProps(state: StoreState) {
//   return { blogs: state.blogs };
// }


export const Home = _Home
