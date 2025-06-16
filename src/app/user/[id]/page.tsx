import { UserDataTypes } from "@/app/types/user";
import UserPage from "@/components/UserPage";
import { getUsers } from "@/app/services/getUsers";

interface UserPageByIdProps {
  params: {
    id: string;
  };
}

export default async function UserPageById({ params }: UserPageByIdProps) {
  const id = params.id;
  const usersList: UserDataTypes[] | null = await getUsers();
  const idNumber = parseInt(id);
  const userById: UserDataTypes | undefined = usersList?.find((user) => user.id === idNumber);

  return (
    <>{!userById ? <p>An error occurred while trying to connect to the server</p> : <UserPage user={userById} />}</>
  );
}
