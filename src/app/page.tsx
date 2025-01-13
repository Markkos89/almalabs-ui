/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestCard } from "@/components/request-card";
import { getRequests } from "./requests/requests.api";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function HomePage() {
  const requests = await getRequests();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex mx-2 justify-between ">
        <h1 className="text-2xl md:text-4xl font-bold">AlmaLabs App</h1>

        <Link href="/requests/new" className={buttonVariants()}>
          Create Request
        </Link>
      </div>

      <div className="grid mx-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {requests
          ? requests.map((request: any) => (
              <RequestCard request={request} key={request.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export default HomePage;
