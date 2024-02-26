import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");
  const [id, setId] = useState(uuidv4());
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const songData = {
      name,
      artist,
      desc,
      duration,
      id,
    };

    axios.post(
      "https://elnatansamueldev.internaddis.com.elnatansamueldev.com/api/addsong",
      songData
    );

    navigate("/");
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
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="artist">Artist: </Label>
        <Input
          type="text"
          id="artist"
          onChange={(e) => setArtist(e.target.value)}
        />
        <Label htmlFor="desc">Description: </Label>
        <Input
          type="text"
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
        />
        <Label htmlFor="duration">Duration: </Label>
        <Input
          type="text"
          id="duration"
          onChange={(e) => setDuration(e.target.value)}
        />
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
