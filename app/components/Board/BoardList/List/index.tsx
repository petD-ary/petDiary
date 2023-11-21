import React from "react";

const mockData = [
  { id: 1, diagnosis: "진단1", symptoms: "증상1", petType: "강아지", risk: "높음" },
  { id: 2, diagnosis: "진단2", symptoms: "증상3", petType: "강아지", risk: "중간" },
  { id: 3, diagnosis: "진단3", symptoms: "증상5", petType: "고양이", risk: "낮음" },
];

interface BoardProps {
  cause: string;
  effect: string;
}

const BoardList = ({ cause, effect }: BoardProps) => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border border-gray-300 border-x-0">
        <thead className="bg-grayColor-200 text-left ">
          <tr className="grid grid-cols-10 gap-4 border-b">
            <th className="col-span-1 py-2 px-4 ">{cause}</th>
            <th className="col-span-6 py-2 px-4 ">{effect}</th>
            <th className="col-span-2 py-2 px-4 ">반려동물 타입</th>
            <th className="col-span-1 py-2 px-4 ">위험도</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => (
            <tr key={data.id} className="grid grid-cols-10 gap-4 border-b">
              <td className="col-span-1 py-2 px-4 ">{data.diagnosis}</td>
              <td className="col-span-6 py-2 px-4 ">{data.symptoms}</td>
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
