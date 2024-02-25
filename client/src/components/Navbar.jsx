import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 flex justify-between items-center">
      <Link to="/">
        <p className="text-3xl font-extrabold">Music.com</p>
      </Link>
      <div className="relative flex space-x-4 justify-center items-center">
        <Link to="addfile">
          <button
            css={css`
              padding: 8px 18px;
              border-radius: 10px;
              color: white;
              background: blue;
              font-weight: 700;
              font-size: 18px;
              display: flex;
            `}
          >
            <AddIcon
              css={css`
                font-size: 24px;
              `}
            />
            Add new song
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
