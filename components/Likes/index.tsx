import { useCommonFunctions } from "@/context/CommonFunctions";
import { LexicaImgProps } from "@/types/Lexicaimg";
import { Fragment, useEffect, useState } from "react";
import ImageDetailModal from "../common/ImageDetailModal";
import MappedImage from "../Home/HomePartials/MappedImage";

const LikesComponent = () => {
  const [columns, setColumns] = useState(4);
  const [likes, setLikes] = useState([]);
  const { showDetail } = useCommonFunctions();

  useEffect(() => {
    const localLikes = JSON.parse(localStorage.getItem("likes")!);
    localLikes && setLikes(localLikes);
  }, []);

  return (
    <section className="md:pt-24 pt-10 sm:pb-16 h-screen overflow-y-auto overflow-x-hidden">
      <div className="container max-w-6xl px-5 mb-32 sm:mb-0 text-zinc-200 mx-auto flex items-center flex-col">
        <h1 className="text-center text-4xl md:text-6xl logo-font mt-4 mb-12">
          Likes
        </h1>
        <div className="mb-14 flex-col gap-5 justify-center">
          <p className="text-sm text-gray-50 text-center opacity-50">
            Columns: {columns}
          </p>
          <div className="w-full flex justify-center items-center">
            <input
              className="w-48 md:w-56 cursor-pointer duration-150 hover:opacity-80"
              type="range"
              min={2}
              max={4}
              value={columns}
              onChange={(e) => setColumns(+e.target.value)}
            />
          </div>

          {likes.length > 0 ? (
            <p className="text-center px-10 text-sm mt-4 text-zinc-400">
              Showing {likes.length} result
            </p>
          ) : (
            <p className="text-center px-10 text-sm mt-4 text-zinc-400">
              You haven&apos;t liked any images yet.
            </p>
          )}

          <section
            className="gap-2 sm:gap-1 px-2 w-screen grid mt-4"
            style={{
              gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
            }}
          >
            {likes.length > 0 &&
              likes.map((like: LexicaImgProps) => (
                <Fragment key={like.id}>
                  <MappedImage item={like} remove={true} />
                </Fragment>
              ))}
          </section>
        </div>
      </div>
      {showDetail.isVisible && <ImageDetailModal />}
    </section>
  );
};

export default LikesComponent;
