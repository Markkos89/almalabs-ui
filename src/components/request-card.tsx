/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function RequestCard({ request }: any) {
  const router = useRouter();

  return (
    <Card
      onClick={() => {
        router.push(`/requests/${request.id}`);
      }}
      className="cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="flex justify-between">{request?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{`${request?.description?.slice(0, 10)} ...`}</p>
      </CardContent>
    </Card>
  );
}
