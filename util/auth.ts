import axios from "axios";

const API_KEY = "AIzaSyA9UO7vG-k9XSAD2Ws35U89ey6UuhHbQ6k";

async function authenticate(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken; // idToken is the token we get from the server

  return token;
}

export function createUser(email: string, password: string) {
  return authenticate("signUp", email, password); // signUp is the mode we want to use
}

export function login(email: string, password: string) {
  return authenticate("signInWithPassword", email, password); // signInWithPassword is the mode we want to use
}
