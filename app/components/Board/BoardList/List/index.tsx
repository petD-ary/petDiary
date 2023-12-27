import React from "react";

type mockDataProps = {
  id: number;
  substance: string;
  symptoms: string;
  petType: string;
  risk: string;
};

interface BoardProps {
  substance: string;
  effect: string;
  mockData: mockDataProps[];
}

const BoardList = ({ substance, effect, mockData }: BoardProps) => {
  return (
    <div className="overflow-x-auto max-h-[400px]">
      <table className="min-w-full border border-gray-300 border-x-0">
        <thead className="bg-grayColor-200 text-left ">
          <tr className="grid grid-cols-10 gap-4 border-b">
            <th className="col-span-2 py-2 px-4 ">{substance}</th>
            <th className="col-span-5 py-2 px-4 ">{effect}</th>
            <th className="col-span-2 py-2 px-4 ">반려동물 타입</th>
            <th className="col-span-1 py-2 px-4 ">위험도</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => (
            <tr key={data.id} className="grid grid-cols-10 gap-4 border-b">
              <td className="col-span-2 py-2 px-4 truncate">{data.substance}</td>
              <td className="col-span-5 py-2 px-4 truncate">{data.symptoms}</td>
              <td className="col-span-2 py-2 px-4 ">{data.petType}</td>
              <td className="col-span-1 py-2 px-4 ">{data.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
