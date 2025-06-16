"use client";
import UserCard from "@/components/UserCard";
import { UserDataTypes } from "@/app/types/user";
import { getUsers } from "@/app/services/getUsers";
import { useState, useEffect } from "react";
import PageWrapper from "./PageWrapper";
interface UsersListProps {
  searchInput: string;
}

export default function UsersList({ searchInput }: UsersListProps) {
  const [usersList, setUsersList] = useState<UserDataTypes[] | null>(null);

  useEffect(() => {
    const asyncGet = async () => {
      const users = await getUsers();
      if (users) setUsersList(users);
    };
    asyncGet();
  }, []);

  const searchByName = searchInput.trim() !== "";
  const foundUsers = searchByName
    ? usersList?.filter((user) => user.name.toLowerCase().includes(searchInput.trim().toLowerCase()))
    : usersList;

  return (
    <>
      {foundUsers?.length === 0 ? (
        <p>There are no users with such name</p>
      ) : (
        foundUsers?.map((user) => (
          <PageWrapper key={user.id}>
            <UserCard user={user} />
          </PageWrapper>
        ))
      )}
    </>
  );
}
