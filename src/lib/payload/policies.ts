export async function getPolicies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/policies?sort=order&limit=20`,
    {
      next: { revalidate: 60 }, // optional caching
    }
  );

  const data = await res.json();
  return data.docs;
}
