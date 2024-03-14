import { css } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import { deleteSongRequest, fetchSongsRequest } from "../redux/songSlice";

const MainDisplay = () => {
  // const isLoading = useSelector((state) => state.addsong.isLoading);
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const { reload, setReload } = useState(true);

  const dispatch = useDispatch();
  const allsongs = useSelector((state) => state.allsongs.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [dispatch, allsongs]);

  const handleDeleteSong = (song) => {
    dispatch(deleteSongRequest(song));
  };

  return (
    <div className="pt-10">
      {loading === true ? (
        <div className="flex w-full item-center justify-center">
          <ReactLoading
            type={"bars"}
            color={"#0000ff"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {Array.isArray(allsongs)
            ? allsongs.map((song) => (
                <div
                  key={song.id}
                  css={css`
                    border: 1px solid rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &:hover {
                      color: gray;
                      transform: scale(1.01);
                    }
                  `}
                >
                  <div className="desc">
                    <h1
                      css={css`
                        font-weight: 700;
                        font-size: 25px;
                      `}
                    >
                      Name: {song.title}
                    </h1>
                    <p
                      css={css`
                        font-weight: 700;
                        font-size: 20px;
                      `}
                    >
                      Artist: {song.artist}
                    </p>

                    <p
                      css={css`
                        font-weight: 700;
                        font-size: 16px;
                      `}
                    >
                      Genre: {song.genre}
                    </p>
                    <p
                      css={css`
                        font-weight: 700;
                        font-size: 14px;
                      `}
                    >
                      Duration: {song.duration}
                    </p>
                  </div>
                  <div className="icons flex space-x-4">
                    <Link to={"/editfile/" + song.id}>
                      <EditIcon
                        css={css`
                          background: green;
                          width: 40px;
                          height: 40px;
                          padding: 10px;
                          font-size: 20px;
                          color: white;
                          border-radius: 10px;
                          cursor: pointer;
                        `}
                      />
                    </Link>
                    <DeleteIcon
                      css={css`
                        background: red;
                        width: 40px;
                        height: 40px;
                        padding: 10px;
                        font-size: 20px;
                        color: white;
                        border-radius: 10px;
                        cursor: pointer;
                      `}
                      onClick={() => handleDeleteSong(song)}
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
