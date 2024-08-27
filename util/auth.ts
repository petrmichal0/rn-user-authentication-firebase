import axios from "axios";

const API_KEY = "AIzaSyA9UO7vG-k9XSAD2Ws35U89ey6UuhHbQ6k";

export async function createUser(email: string, password: string) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
