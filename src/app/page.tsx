/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestCard } from "@/components/request-card";
import { getRequests } from "./requests/requests.api";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function HomePage() {
  const requests = await getRequests();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NextNestApp</h1>

        <Link href="/requests/new" className={buttonVariants()}>
          Create Request
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {requests
          ? requests.map((request: any) => (
              <RequestCard request={request} key={request.id} />
            ))
          : null}
      </div>
    </>
  );
}

export default HomePage;
