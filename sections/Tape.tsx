import { Fragment } from "react";
import { StarIcon } from "@/assets/icons";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:60s]">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => (
                  <div
                    className="inline-flex items-center gap-4 text-gray-900"
                    key={word}
                  >
                    <span className="text-sm font-extrabold uppercase">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
