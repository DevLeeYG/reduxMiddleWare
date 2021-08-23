import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  const { body, title } = post;
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "loading..."}
        {!loadingPost && post && (
          <div>
            <h3>{title}</h3>
            <h3>{body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "loading..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
