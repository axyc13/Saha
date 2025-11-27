export async function getValues() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/values?sort=order&limit=20`,
    {
      next: { revalidate: 60 }, // optional caching
    }
  );

  const data = await res.json();
  return data.docs;
}
