import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import React from "react";

import { MainPage } from "@pages";

dayjs.extend(isSameOrBefore);

const App: React.FC = () => {
  return (
    <div className="bg-[#E4F6ED] min-h-screen p-4">
      <div className="max-w-[1440px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <MainPage />
      </div>
    </div>
  );
};
export default App;
