import { UserDataTypes } from "@/app/types/user";

export async function getUsers(): Promise<UserDataTypes[] | null> {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`An error occurred while searching for users: ${res.status}`);
    }
    const usersList = await res.json();
    return usersList;
  } catch (error) {
    console.error(`An error occurred while trying to connect to the server: ${error}`);
    return null;
  }
}
