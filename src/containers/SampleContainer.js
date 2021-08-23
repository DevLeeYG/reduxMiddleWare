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
    // useEffect 에 파라미터로 넣는 함수는 async 로 할 수 없기 때문에
    // 그 내부에서 async 함수를 선언하고 호출해줍니다.
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e); // 에러 조회
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
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
