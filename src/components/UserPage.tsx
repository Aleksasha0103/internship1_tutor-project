import { Card, CardContent, CardTitle, CardAction } from "./ui/card";
import { UserDataTypes } from "@/app/types/user";
import Link from "next/link";

interface UserDataProps {
  user: UserDataTypes;
}

export default function UserPage({ user }: UserDataProps) {
  return (
    <Card className="w-[30%] min-w-60">
      <CardTitle className="text-center text-lg">{user.name}</CardTitle>
      <CardContent>
        <span className="font-bold">Username:</span> {user.username}
      </CardContent>
      <CardContent>
        <span className="font-bold">Email:</span> {user.email}
      </CardContent>
      <CardContent>
        <span className="font-bold">Address:</span> {user.address.street}, {user.address.city}
      </CardContent>
      <CardContent>
        <span className="font-bold">Phone:</span> {user.phone}
      </CardContent>
      <CardContent>
        <span className="font-bold">Website:</span> {user.website}
      </CardContent>
      <CardContent>
        <span className="font-bold">Company:</span> {user.company.name}
      </CardContent>
      <Link href={`/`}>
        <CardAction className="px-8 py-4 bg-orange-200 rounded-3xl justify-self-center">
          Back to the users list
        </CardAction>
      </Link>
    </Card>
  );
}
