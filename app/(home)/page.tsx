import PetInfo from "@/components/Main/PetInfo";
import Schedule from "@/components/Main/Schedule";
import Weather from "@/components/Main/Weather";
import Walk from "@/components/Main/Walk";

export default function Home() {
  return (
    <div className="w-full flex flex-wrap justify-center p-14 gap-6">
      <div className="basis-1/2 flex flex-col gap-6 ">
        <PetInfo />
        <div className=" h-2/6 flex gap-6">
          <Weather />
          <Walk />
        </div>
      </div>
      <div className="basis-1/4 ">
        <Schedule />
      </div>
    </div>
  );
}
