"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ChangePageBtnProps {
  PageList: { path: string; title: string }[];
}

const ChangePageBtn = ({ PageList }: ChangePageBtnProps) => {
  const pathname = usePathname();

  return (
    <div className="px-4 sm:px-0 py-6 sm:py-12">
      <div
        className={`flex mx-auto 
      bg-grayColor-200
      h-12 max-w-[450px] min-w-[300px]
      rounded-lg
   `}
      >
        {PageList.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className={`h-full
          flex justify-center items-center
          rounded-lg w-1/2
          font-semibold
          ${pathname === page.path ? "border-2 border-grayColor-200 bg-white" : "text-white"}`}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChangePageBtn;
