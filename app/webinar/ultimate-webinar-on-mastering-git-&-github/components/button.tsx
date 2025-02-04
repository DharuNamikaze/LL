import React from "react";

const button = (props: React.PropsWithChildren) => {
  return (
    <div>
      <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c25ff] hover:shadow-[0_0_20px_5px_rgb(140,69,255,.8)] hover:from-[#4a208a] hover:to-[#6b2c93] transition-all duration-300 ease-in-out">
        <div className="absolute inset-0 rounded-lg">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
        </div>
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default button;
