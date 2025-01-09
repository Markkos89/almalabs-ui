/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createRequest, updateRequest } from "../requests.api";
import { useParams, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export function RequestForm({ request }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: request?.title,
      description: request?.description,
      contact: request?.contact,
    },
  });
  const router = useRouter();
  const params = useParams<{ id: string }>();
  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    if (params?.id) {
      const res = await updateRequest(params.id, {
        ...data,
      });
      console.log(res);
    } else {
      await createRequest({
        ...data,
      });
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <Label>Request Title</Label>
        <Input {...register("title")} />
        <Label>Description</Label>
        <Textarea {...register("description")} className="resize-none" />
        <Label>Contact Email</Label>
        <Input {...register("contact")} />
      </div>
      <Button>{params.id ? "Update Request" : "Create Request"}</Button>
    </form>
  );
}
