import '../css/Profile.css';

function Profile() {
  return (
    <div className="pro-page">
      <div className="header">
        <div className="avatar">
          <img
            src="../images/profiles/guy-1.jpg"
            alt=""
            className="wpx-100 img-round mgb-20"
          />
        </div>
        <div className="data">
          <p>
            <b>joshy.p</b>
          </p>
          <p>Joshua Preach</p>
          <div className="follow">
            <p>
              <b>16</b> posts
            </p>
            <p>
              <b>419</b> followers
            </p>
            <p>
              <b>354</b> following
            </p>
          </div>
        </div>
      </div>

      <div className="posts">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img src="../images/explore/1.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/15.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/3.jpg" alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img src="../images/explore/4.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/5.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/13.jpg" alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img src="../images/explore/7.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/10.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/9.jpg" alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img src="../images/explore/8.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/11.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/12.jpg" alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <img src="../images/explore/6.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/14.jpg" alt="" />
            </div>
            <div className="col">
              <img src="../images/explore/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
