import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { UserDataTypes } from "@/app/types/user";
import Link from "next/link";

interface UserCardProps {
  user: UserDataTypes;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="w-[100%]">
      <CardTitle className="text-center text-lg">{user.name}</CardTitle>
      <CardContent>
        <span className="font-bold">Email:</span> {user.email}
      </CardContent>
      <CardContent>
        <span className="font-bold">Company:</span> {user.company.name}
      </CardContent>
      <Link href={`/user/${user.id}`}>
        <CardAction className="px-8 py-4 bg-orange-200 rounded-3xl justify-self-center">Open full card</CardAction>
      </Link>
    </Card>
  );
}
