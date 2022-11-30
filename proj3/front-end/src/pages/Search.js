import '../css/Search.css';

function Search() {
  return (
    <div className="sea-page">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Find User"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-1" type="submit">
          Search
        </button>
      </form>

      <div className="history">
        <p>
          <b>Recent</b>
        </p>
        <div className="user">
          <img
            src="../images/profiles/guy-1.jpg"
            alt=""
            className="wpx-55 img-round mgb-20"
          />
          <p>
            <b>joshy.p</b>
          </p>
        </div>
        <div className="user">
          <img
            src="../images/profiles/girl-1.jpg"
            alt=""
            className="wpx-55 img-round mgb-20"
          />
          <p>
            <b>kimmy.runnells</b>
          </p>
        </div>
        <div className="user">
          <img
            src="../images/profiles/guy-3.jpg"
            alt=""
            className="wpx-55 img-round mgb-20"
          />
          <p>
            <b>pgatour</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
