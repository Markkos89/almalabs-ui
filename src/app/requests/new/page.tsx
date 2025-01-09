import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RequestForm } from "./request-form";
import { getRequest } from "../requests.api";

interface Props {
  params: {
    id: string;
  };
}

async function RequestsNewPage({ params }: Props) {
  const request = await getRequest(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>{params.id ? "Edit Request" : "Create Request"}</CardTitle>
        </CardHeader>
        <CardContent>
          <RequestForm request={request} />
        </CardContent>
      </Card>
    </div>
  );
}
export default RequestsNewPage;
