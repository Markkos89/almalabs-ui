import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRequest } from "../requests.api";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

interface Props {
  params: {
    id: string;
  };
}

async function RequestDetailPage({ params }: Props) {
  const request = await getRequest(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Request Detail: {request.id}
            <Link className={buttonVariants()} href="/">
              Go back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{request.title}</h1>
          <p>{request.description}</p>
          {/* TODO: Add email contact button */}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="mt-5"
            variant="default"
            onClick={() =>
              (window.location.href = `mailto:${request?.contact}`)
            }
          >
            Contact
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RequestDetailPage;
