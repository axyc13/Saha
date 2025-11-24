export async function getTerms() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/terms?sort=order`,
    {
      next: { revalidate: 60 }, // optional caching
    }
  );

  return res.json();
}
