import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSongRequest } from "../redux/songSlice";

const Input = styled.input`
  padding: 6px;
  outline: none;
  color: black;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

const Label = styled.label`
  color: black;
  font-weight: 700;
  font-size: 24px;
`;

const EditSong = () => {
  const oldSongData = useSelector((state) => state.allsongs.songs);

  const navigate = useNavigate();
  const id = useParams();
  const activeId = id.id;

  const result = oldSongData.filter(({ id }) => activeId.includes(id));
  const song = result[0];

  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(song.title);
  const [newArtist, setNewArtist] = useState(song.artist);
  const [newGenre, setNewGenre] = useState(song.genre);
  const [newDuration, setNewDuration] = useState(song.duration);
  const [required, setRequired] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const songData = {
      newTitle,
      newArtist,
      newGenre,
      newDuration,
      activeId,
    };

    if (
      newTitle === "" ||
      newArtist === "" ||
      newTitle === "" ||
      newDuration === ""
    ) {
      setRequired(true);
    } else {
      setRequired(false);
      dispatch(updateSongRequest(songData));
      navigate("/");
    }
  };

  return (
    <div className="pt-10">
      <form
        action=""
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Label htmlFor="name">Title: </Label>
        <Input
          type="text"
          id="name"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Label htmlFor="artist">Artist: </Label>
        <Input
          type="text"
          id="artist"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
        />
        <Label htmlFor="desc">Genre: </Label>
        <Input
          type="text"
          id="desc"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <Label htmlFor="duration">Duration: </Label>
        <Input
          type="text"
          id="duration"
          value={newDuration}
          onChange={(e) => setNewDuration(e.target.value)}
        />
        {required === true ? (
          <p className="text-xl text-white font-bold p-4 mt-4 bg-red-400">
            Please fill all the above fields
          </p>
        ) : null}
        <button
          css={css`
            margin-top: 20px;
            padding: 10px;
            background-color: green;
            width: 200px;
            color: white;
            font-size: 20px;
            font-weight: 700;
            border-radius: 10px;
          `}
          onClick={(e) => handleFormSubmit(e)}
        >
          Save Edit
        </button>
      </form>
    </div>
  );
};

export default EditSong;
