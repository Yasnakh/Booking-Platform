import "../../components/propertyList/propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">

      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/square210/645685.jpg?k=bb3c96578e18a637d5481bd37ce507968c8473365b557d08c302e105ec5f13dc&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Barcelona, Spain</h1>
          <h2>Jul 6 - Jul 8 . Round Trip</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/square210/976538.jpg?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Amsterdam, Netherlands</h1>
          <h2>Jul 16 - Jul 18 . Round Trip</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/square210/976949.jpg?k=f0ca050b86e8214ef05124a776f1bd0bf8dd24ed4d35d3b644cf5ec7a661010a&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>London, United Kingdom</h1>
          <h2>Jul 16 - Jul 18 . Round Trip</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6335e7fc1e86a4765b377b07/Vienna--Austria-/960x0.jpg?format=jpg&width=960"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Vienna, Austria</h1>
          <h2>Jul 16 - Jul 18 . Round Trip</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/402px-Prague_%286365119737%29.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Prague, Czech Republic</h1>
          <h2>Jul 16 - Jul 18 . Round Trip</h2>
        </div>
      </div>
      
    </div>
  );
};

export default PropertyList;
