function Home() {
  return (
    <div className="home-page">
      <div className="stories">
        <ul className="hash-list cols-5 cols-1-xs pad-30-all align-center text-sm">
          <li>
            <img
              src="./images/profiles/guy-1.jpg"
              className="wpx-75 img-round mgb-20"
              title=""
              alt=""
              data-edit="false"
              data-editor="field"
              data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
            />
          </li>
          <li>
            <img
              src="./images/profiles/girl-1.jpg"
              className="wpx-75 img-round mgb-20"
              title=""
              alt=""
              data-edit="false"
              data-editor="field"
              data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
            />
          </li>
          <li>
            <img
              src="./images/profiles/guy-2.jpg"
              className="wpx-75 img-round mgb-20"
              title=""
              alt=""
              data-edit="false"
              data-editor="field"
              data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
            />
          </li>
          <li>
            <img
              src="./images/profiles/girl-2.jpg"
              className="wpx-75 img-round mgb-20"
              title=""
              alt=""
              data-edit="false"
              data-editor="field"
              data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
            />
          </li>
          <li>
            <img
              src="./images/profiles/guy-3.jpg"
              className="wpx-75 img-round mgb-20"
              title=""
              alt=""
              data-edit="false"
              data-editor="field"
              data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
            />
          </li>
        </ul>
      </div>

      <div className="posts">
        <div className="post">
          <div className="head">
            <div className="avatar">
              <img
                src="./images/profiles/guy-1.jpg"
                alt=""
                className="wpx-55 img-round mgb-20"
              />
              <p>
                <b>joshy.p</b>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="./images/posts/usc.png" alt="" />
            <div className="caption">
              <p>
                <b>joshy.p</b> beastly performance against UCLA this week
              </p>
              <p className="comment">View all 91 comments</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="head">
            <div className="avatar">
              <img
                src="./images/profiles/guy-2.jpg"
                alt=""
                className="wpx-55 img-round mgb-20"
              />
              <p>
                <b>thee_best17</b>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="./images/posts/wedding.png" alt="" />
            <div className="caption">
              <p>
                <b>thee_best17</b> Congrats to thee guy, Alex. Stud!
              </p>
              <p className="comment">View all 15 comments</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="head">
            <div className="avatar">
              <img
                src="./images/profiles/girl-1.jpg"
                alt=""
                className="wpx-55 img-round mgb-20"
              />
              <p>
                <b>kimmy.runnells</b>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="./images/posts/baby.png" alt="" />
            <div className="caption">
              <p>
                <b>kimmy.runnells</b> My baby is growing so fast! 1 month!
              </p>
              <p className="comment">View all 9 comments</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="head">
            <div className="avatar">
              <img
                src="./images/profiles/guy-3.jpg"
                alt=""
                className="wpx-55 img-round mgb-20"
              />
              <p>
                <b>pgatour</b>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="./images/posts/tiger.png" alt="" />
            <div className="caption">
              <p>
                <b>pgatour</b> An update on the status of{' '}
                <a href="/">@TigerWoods</a>' game.
              </p>
              <p className="comment">View all 453 comments</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="head">
            <div className="avatar">
              <img
                src="./images/profiles/girl-2.jpg"
                alt=""
                className="wpx-55 img-round mgb-20"
              />
              <p>
                <b>byuvolleyball</b>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="./images/posts/byu.png" alt="" />
            <div className="caption">
              <p>
                <b>byuvolleyball</b> 2023 SEASON SCHEDULE!
              </p>
              <p className="comment">View all 4 comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
