import UserCard from "@/components/UserCard";
import { getUsers } from "./services/getUsers";
import { UserDataTypes } from "@/app/types/user";
import PageWrapper from "@/components/PageWrapper";

export default async function Page() {
  const usersList: UserDataTypes[] | null = await getUsers();

  return (
    <PageWrapper>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        <h1 className="col-span-full text-4xl font-semibold text-center">Users List</h1>
        {!usersList || usersList.length === 0 ? (
          <p>An error occurred while trying to connect to the server</p>
        ) : (
          usersList.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </main>
    </PageWrapper>
  );
}
