import { useNavigate } from "react-router-dom";
const PageButton = ({toPage, pageIcon, pageName}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col">
        <button
          className="card page-button"
          onClick={() => navigate(`${toPage}`)}
        >
          <img className="page-icon" src={pageIcon}/>
          <h3 className="page-name">{pageName}</h3>
        </button>
      </div>
    </>
  );
};

export default PageButton;
