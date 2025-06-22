import axios from "axios";

export const uploadDocument = async (
    file
) => {
  try {
    console.log({
      file
    });
    const res = await axios.post(`https://6pguwu9rv9.execute-api.us-east-1.amazonaws.com/dev/v1/upload`, {
      file
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const getDocuments = async (
    
) => {
  try {
 
    const res = await axios.get(`https://6pguwu9rv9.execute-api.us-east-1.amazonaws.com/dev/v1/users`,);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};