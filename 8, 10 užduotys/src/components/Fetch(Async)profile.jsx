import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState([]);

  let { username } = useParams();
  console.log(username)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const profile = await response.json();
      setProfile(profile);
      console.log(profile)
    };
    fetchData();
  },
    []);

  return (
    <div className="container mt-5 ">
      <div className="row text-end ">
        <div className="col-6  ">
          <img src={profile.avatar_url} alt="avatar" />
        </div>
        <div className="col-6 text-start ">
          <p className="fs-3">
            <span className="fw-bold text-warning">Name:</span> {profile.name}
          </p>
          <p className="fs-4">
            <span className="text-warning ">Login:</span> {profile.login}
          </p>
          <p className="fs-4">
            <span className="text-warning ">Followers:</span>
            {profile.followers}
          </p>
          <p className="fs-4">
            <span className="text-warning ">Twitter:</span>
            {profile.twitter_username}
          </p>
        </div>
        <p className="text-center mt-2">
          <Link to={`/`}>
            <button className="btn btn-secondary ">Go back &raquo;</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Profile;
