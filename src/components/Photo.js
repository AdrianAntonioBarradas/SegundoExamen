import "./compStyles.css";


export default function Photo(prop) {
  const json = prop.data;

  return prop.show ? (
    <div className="container-fluid"> 
      <div className="row titles">
        <div className="col-md-3"> Id</div>
        <div className="col-md-3"> Title</div>
        <div className="col-md-3"> Url</div>
        <div className="col-md-3"> ThumbnailUrl</div>
      </div>
      {json.map((s) => (
          <div className="row content" key={"user:"+s.id}>
            <div className="col-md-3"> {s.id}</div>
            <div className="col-md-3"> {s.title}</div>
            <div className="col-md-3">
              <img className="photo-url" src={s.url} />
            </div>
            <div className="col-md-3">
              <img src={s.thumbnailUrl} /> 
            </div>
          </div>
        ))}
    </div>
  ) : (
    false
  );
}
