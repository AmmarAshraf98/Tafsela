import ClientComponent from "./ClientComponent";

export default async function Header() {
  return (
    <nav className='bg-primary-900 sticky top-0 w-full z-20 border-b border-default'>
      <ClientComponent />
    </nav>
  );
}
