import CustomButton from "../../common/CustomButton";

const CreateImage = () => {
  return (
    <div className="md:col-span-5 xl:col-span-6">
      <p className="text-xs opacity-50 pb-1 pl-2">Describe your image</p>
      <textarea
        placeholder="A steampunk teddy bear vending machine"
        className="shadow h-36 w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm pl-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 pr-12"
      />
      <p className="text-xs opacity-50 pb-1 pt-2 pl-2">Negative Prompt</p>
      <textarea
        placeholder="Describe things to exclude"
        className="shadow h-16 w-full mb-3 bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm pl-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 pr-12"
      />
      <div className="flex justify-end">
        <CustomButton text="Generate" className="!rounded-full !px-6" />
      </div>
    </div>
  );
};

export default CreateImage;
