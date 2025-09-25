import axios from "axios";

const PostFormData = async function (id, data) {
  try {
    // POST data to formspree
    const response = await axios.post(`https://formspree.io/f/${id}`, data, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.status;
  } catch (error) {
    throw error;
  }
};

export default PostFormData;
