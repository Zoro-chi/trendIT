import * as uploadApi from "../Api/uploadRequest.js";

export const uploadImage = (data) => async (dispatch) => {
  try {
    await uploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};
