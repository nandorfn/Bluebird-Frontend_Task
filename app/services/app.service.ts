export const getData = async () => {
  const url = process.env.NEXT_API_URL;
  const res = await fetch(`${url}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
    
  return res.json();
}