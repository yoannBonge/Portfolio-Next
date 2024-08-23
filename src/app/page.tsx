import Content from "./_components/Content";
import Header from "./_components/Header";
import MouseHalo from "./_components/MouseHalo";

export default function Home() {
  return (
    <>
      <MouseHalo />
      <div className="px-6 md:p-12 lg:flex lg:justify-between lg:gap-2 lg:p-0">
        <Header />
        <Content />
      </div>
    </>
  );
}
