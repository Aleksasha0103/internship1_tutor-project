import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-y-2 w-full max-w-md">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
