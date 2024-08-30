import axios from "axios";

const API_KEY = "AIzaSyA9UO7vG-k9XSAD2Ws35U89ey6UuhHbQ6k";

export async function createUser(email: string, password: string) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error data:", error.response.data);
    } else {
      console.error(
        "Error message:",
        error instanceof Error ? error.message : String(error)
      );
    }
  }
}
