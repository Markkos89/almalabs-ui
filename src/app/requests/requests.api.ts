/* eslint-disable @typescript-eslint/no-explicit-any */
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getRequests() {
  const data = await fetch(`${BACKEND_URL}/requests`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function getRequest(id: string) {
  const data = await fetch(`${BACKEND_URL}/requests/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createRequest(requestData: any) {
  const res = await fetch(`${BACKEND_URL}/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  console.log(data);
}

export async function deleteRequest(id: string) {
  const res = await fetch(`${BACKEND_URL}/requests/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function updateRequest(id: string, newRequest: any) {
  const res = await fetch(`${BACKEND_URL}/requests/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRequest),
    cache: "no-store",
  });
  return await res.json();
}
