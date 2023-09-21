import axios from "axios";

// http://localhost:8000/api/
const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// async ~ await + axios
export const getCategories = async () => {
  return await instance.get("category");
};

export const addVideo = async (data) => {
  return await instance.post("video", data);
};

export const getVideos = async () => {
  return await instance.get("video");
};
