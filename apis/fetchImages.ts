export async function fetchImages() {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
}
