import TagIcon from '@mui/icons-material/LocalOffer';

export default function Header() {
  return (
    <header className="pt-4 pb-6 flex justify-center items-center gap-2">
      <TagIcon />
      <h1 className="m-0 text-3xl md:text-4xl">Tag Browser</h1>
    </header>
  );
}
