// import Content from "./_components/Content";
// import Header from "./_components/Header";
import MouseHalo from "./_components/MouseHalo";

export default function Home() {
  return (
    <>
      <MouseHalo />
      {/* <div className="px-6 md:p-12 lg:flex lg:justify-between lg:gap-2 lg:p-0">
        <Header />
        <Content />
      </div> */}
      <div className="mx-auto mt-16 flex h-[580px] w-[40%] items-center justify-center border-2">
        <h1 className="m-0 flex p-0 text-[20em] text-teal-300">YB</h1>
      </div>
    </>
  );
}
