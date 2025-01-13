import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRequest } from "../requests.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ContactButton from "@/components/contact-button";

type Params = Promise<{ id: string }>;

async function RequestDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const request = await getRequest(id);

  return (
    <div className="flex mx-2 flex-col justify-center items-center h-screen gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Request #{request.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{request.title}</h1>
          <p>{request.description}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <ContactButton contact={request.contact} />
        </CardFooter>
      </Card>
      <div>
        <Link className={buttonVariants()} href="/">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default RequestDetailPage;
