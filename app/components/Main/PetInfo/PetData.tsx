import { petInfoState } from "@/recoil/Main/atoms";
import React from "react";
import { useRecoilValue } from "recoil";
import DDay from "./DDay";
import Highlight from "./Highlight";
import PetImg from "./PetImg";

const PetData = () => {
  const petInfo = useRecoilValue(petInfoState);
  function solution(bandage, health, attacks) {
    let currentHealth = health; //현재 체력
    let addHealth = 0; //회복 체력
    let successCount = 0; //연속 성공 횟수
    let attacksTime = attacks[attacks.length - 1][0]; //마지막 공격 시간
    for (let gameTime = 0; (gameTime = attacksTime); gameTime++) {
      if (currentHealth === health && attacks[0][0] !== gameTime) {
        //     체력<=최대 체력, 최대 체력일 경우 회복 안됨
        successCount++;
      }
      //  연속 성공 횟수 카운트
      successCount++;
      //     공격 당하면 기술 취소 연속 시간 = 0, 체력 감소
      if (attacks[0][0] === gameTime) {
        successCount = 0;
        currentHealth -= attacks[0][1];
        //      체력이 0이하면 -1 반환
        if (currentHealth < 0) {
          return -1;
        }
        //     공격이 끝난 후 체력이 0이하가 아니면 체력 반환
        if (attacksTime === gameTime) {
          return currentHealth;
        }
        attacks.shift();
      }

      //   t초 동안 감으면 bandage[1]t만큼 회복
      currentHealth += bandage[1];
      //    bandage[0]초 연속으로 붕대를 감으면 bandage[2]추가 회복,
      if (bandage[0] === successCount) {
        currentHealth += bandage[1] + bandage[2];
        successCount = 0;
      }
    }
  }
  return (
    <div className="flex justify-center mt-2 ">
      <div>
        <DDay />
        <PetImg />
        <div className="text-center">
          <span className="bg-white px-5 py-2 rounded-2xl text-sm">
            <Highlight content={petInfo.name} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetData;
