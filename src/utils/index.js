import { API_BASE_URL } from "../constants";

// eslint-disable-next-line import/prefer-default-export
export const saveTodoToServer = async payload => {
  const isEdit = !!payload.id;
  let url = `${API_BASE_URL}/todos`;
  if (isEdit) url = `${url}/${payload.id}`;
  const response = await fetch(url, {
    method: isEdit ? "PUT" : "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  return response;
};
