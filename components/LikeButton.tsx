import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import { Interface } from "readline";
import useAuthStore from "../store/authStore";
interface IProps {
  handleLike: () => void;
  handleDisLike: () => void;
}
const LikeButton = ({ handleLike, handleDisLike }: IProps) => {
  const [alreadyLike, setAlreadyLike] = useState(true);
  const { userProfile } = useAuthStore();
  return (
    <div className="gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLike ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997] "
            onClick={handleDisLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997] "
            onClick={handleLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">like?.length || 0</p>
      </div>
    </div>
  );
};

export default LikeButton;