import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addSongRequest } from "../redux/songSlice";
import { useDispatch } from "react-redux";

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

const AddFilePage = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [id, setId] = useState(uuidv4());
  const [required, setRequired] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const songData = {
      title,
      artist,
      genre,
      duration,
      id,
    };

    console.log(songData);

    if (title === "" || artist === "" || genre === "" || duration === "") {
      setRequired(true);
    } else {
      setRequired(false);
      dispatch(addSongRequest(songData));
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="artist">Artist: </Label>
        <Input
          type="text"
          id="artist"
          onChange={(e) => setArtist(e.target.value)}
        />
        <Label htmlFor="desc">Genre: </Label>
        <Input
          type="text"
          id="desc"
          onChange={(e) => setGenre(e.target.value)}
        />
        <Label htmlFor="duration">Duration: </Label>
        <Input
          type="text"
          id="duration"
          onChange={(e) => setDuration(e.target.value)}
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
          Add song
        </button>
      </form>
    </div>
  );
};

export default AddFilePage;
