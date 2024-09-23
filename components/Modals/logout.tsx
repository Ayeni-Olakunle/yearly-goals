"use client";
import { FcExpired } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function Logout(props: any) {
  const router = useRouter();

  return (
    <div className="absolute top-[0] w-full left-[0] h-screen flex justify-center items-center px-[0] py-[50px] bg-[#00000082] overflow-y-scroll">
      <div className="w-[500px] bg-[white] h-auto rounded-[5px] flex justify-between items-center flex-col text-center p-[20px] gap-[10px]">
        <div>
          <FcExpired className="text-[150px]" />
        </div>
        <p className="text-[15px] text-[gray]">
          401 Unauthorized: The request lacks valid authentication credentials,
          or the user is not authorized to access the requested resource.
        </p>
        <div className="flex justify-center items-center py-[20px]">
          <button
            className="bg-[tomato] text-[white] px-[25px] py-[10px] rounded-[5px]"
            type="button"
            onClick={() => router.push("/")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
