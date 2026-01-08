export async function getUluxOption(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/ulux?where[slug][equals]=${slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.docs[0] || null;
}
