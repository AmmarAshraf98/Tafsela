export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div className='bg-amber-900'>
      <h1>Welcome Tafsla site ✌️</h1>
    </div>
  );
}
