export const dynamic = "force-dynamic";
// or
export const revalidate = 0;

export async function getUluxOptions() {
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;

  // If no URL is set, return empty array (build-time safety)
  if (!payloadUrl) {
    console.warn("NEXT_PUBLIC_PAYLOAD_URL not set, skipping policy fetch");
    return [];
  }

  try {
    const res = await fetch(`${payloadUrl}/api/ulux?sort=order&limit=10`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch ulux content:", res.status);
      return [];
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching ulux content:", error);
    return [];
  }
}
