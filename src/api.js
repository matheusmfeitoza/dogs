export const API_URL = "https://dogsapi.origamid.dev/json/";

export function TOKEN_USER(body) {
  return {
    url: API_URL + "jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_USER_VALIDATE(token) {
  return {
    url: API_URL + "jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formdata, token) {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formdata,
    },
  };
}

export function PHOTOS_GET({ total, page, user }) {
  return {
    url: `${API_URL}api/photo/?_total=${total}&_page=${page}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function COMMENT_POST(id, body, token) {
  return {
    url: `${API_URL}api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
      body: JSON.stringify(body),
    },
  };
}
