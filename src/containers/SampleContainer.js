import React from "react";
import { connect } from "react-redux";
import Sample from "../component/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React; //요건뭐야?

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };

    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_POST"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
