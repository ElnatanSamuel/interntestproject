import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const songData = useSelector((state) => state.addsong.allSongs);
  const navigate = useNavigate();
  const id = useParams();
  const activeId = id.id;

  const result = songData.filter(({ id }) => activeId.includes(id));
  const song = result[0];

  const [newName, setNewName] = useState(song.name);
  const [newArtist, setNewArtist] = useState(song.artist);
  const [newDesc, setNewDesc] = useState(song.desc);
  const [newDuration, setNewDuration] = useState(song.duration);
  const [required, setRequired] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const songData = {
      newName,
      newArtist,
      newDesc,
      newDuration,
      activeId,
    };

    if (
      newName === "" ||
      newArtist === "" ||
      newDesc === "" ||
      newDuration === ""
    ) {
      setRequired(true);
    } else {
      setRequired(false);
      axios.post(
        "https://elnatansamueldev.interntestserver.com.elnatansamueldev.com/api/editsong",
        songData
      );
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
        <Label htmlFor="name">Song Name: </Label>
        <Input
          type="text"
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Label htmlFor="artist">Artist: </Label>
        <Input
          type="text"
          id="artist"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
        />
        <Label htmlFor="desc">Description: </Label>
        <Input
          type="text"
          id="desc"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
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
