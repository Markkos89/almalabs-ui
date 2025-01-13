import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RequestForm } from "./request-form";
import { getRequest } from "../requests.api";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type Params = Promise<{ id: string }>;

async function RequestsNewPage({ params }: { params: Params }) {
  const { id } = await params;

  const request = await getRequest(id);

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>{id ? "Edit Request" : "Create Request"}</CardTitle>
        </CardHeader>
        <CardContent>
          <RequestForm request={request} />
        </CardContent>
      </Card>
      <div>
        <Link className={buttonVariants()} href="/">
          Go back
        </Link>
      </div>
    </div>
  );
}
export default RequestsNewPage;
