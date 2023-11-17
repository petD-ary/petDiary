import PetInfo from "@/components/Main/PetInfo";
import Schedule from "@/components/Main/Schedule";
import Weather from "@/components/Main/Weather";
import Walk from "@/components/Main/Walk";

export default function Home() {
  return (
    <div className="w-full flex p-14 justify-between gap-6 ">
      <div className=" w-4/6 flex flex-col gap-6">
        <PetInfo />
        <div className="h-2/6 flex gap-6">
          <Weather />
          <Walk />
        </div>
      </div>
      <Schedule />
    </div>
  );
}
