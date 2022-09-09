import { HeroImageComponent } from "./components";

export const ProductsPage = () => {
  const testData: string[] = Array(18).fill(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,soluta dolores laboriosam alias illum possimus dignissimos fuga?Inventore cupiditate delectus labore illum laudantium architectopariatur porro dicta voluptatem corrupti maxime, dolor sapiente idnam? Ab voluptatibus eius quo quas iste, recusandae voluptatesdistinctio culpa assumenda nisi possimus architecto quam sunt."
  );

  return (
    <>
      <HeroImageComponent />
      <div className="flex justify-center bg-[#27a4] py-12 px-4 md:px-6 lg:px-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-[#f33e]">
          {testData.map((e, index) => (
            <div className="bg-[#7cd8] w-82 h-144" key={index}>
              {e}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
