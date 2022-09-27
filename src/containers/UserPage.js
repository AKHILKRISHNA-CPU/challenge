import React, { useState, useEffect } from "react";
import { getUserData, getUserRepositories } from "../github";
import Navbar from "../components/otheruser/otheruser";
import UserInfos from "../components/UserInfo/UserData";
import Repositories from "../components/Repositories/Repositories";

import Loading from "../components/Loader/Loading";

function UserPage({ match }) {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const userNameParams = match.params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepositories();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userNameParams);
    setRepositories(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfos user={user} />
            <Repositories repos={repositories} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UserPage;
