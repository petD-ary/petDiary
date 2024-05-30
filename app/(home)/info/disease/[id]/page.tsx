'use client';
import React from 'react';
import IconBack from '@/assets/images/info/icon-back.svg';
import Link from 'next/link';

const DetailListUi = ({
  title,
  desc,
}: {
  title: string;
  desc: string | { id: number; symptom: string }[];
}) => {
  return (
    <div className='border-b border-extra-deviders py-4'>
      <h4 className='text-button font-semibold text-text-title pb-2'>
        {title}
      </h4>
      <p className='text-body2 text-text-secondary'>
        {typeof desc === 'string'
          ? desc
          : desc.map((item) => (
              <span key={item.id} className='block pb-1'>
                {item.symptom}
              </span>
            ))}
      </p>
    </div>
  );
};

const DiseaseDetailPage = () => {
  const dummyData = {
    cause:
      '세포의 과증식인지 종양 발생이 원인인지는 불분명하나 음식의 변화, 편식, 환경오염, 알레르기에 노출 그리고 유전적 변화 비정상적인 면역 반응 등이 관여한다고 알려져 있습니다. ',
    createdAt: '2024-05-28T14:22:44.611Z',
    diagnosisName: '갑상선 기능 항진증',
    id: 1,
    managementNecessity: '높음',
    petType: '고양이',
    prevention:
      '특별한 예방법은 없으며, 평소에 다른 행동과 증상을 눈여겨봐야 합니다.',
    recommendedNutrients: '-',
    riskLevel: '높음',
    summary:
      '갑상선에서 성장과 대사를 촉진하는 호르몬이 과도하게 분비되어 나타나는 질병입니다.',
    symptoms: [
      { id: 1, symptom: '최근 체중 감소' },
      { id: 2, symptom: '평소보다 많은 물 마시기' },
      { id: 3, symptom: '과식' },
      { id: 4, symptom: '설사, 물 같은 변' },
      { id: 5, symptom: '호흡 곤란' },
    ],
    treatment: '외과적 수술, 약 복용 조절',
    updatedAt: '2024-05-28T14:22:44.611Z',
    vulnerableBreed:
      '4세 이상의 모든 묘종에서 자주 발생하는 질환입니다.(샴히말라얀의 경우 발병률이 낮음)',
  };
  return (
    <div className='bg-extra-device-bg h-full'>
      {/* <Link href='/info' className='flex justify-between py-1 px-2 bg-white'>
        <IconBack />
      </Link> */}

      <div className='pt-5 px-5 bg-white'>
        <div className='py-4'>
          <h3 className='text-title2 font-semibold text-text-title'>
            {dummyData.diagnosisName}
          </h3>
          <p className='text-body2 font-medium text-text-primary py-3'>
            {dummyData.summary}
          </p>
          <div className='flex items-center gap-1 text-caption2 font-medium text-text-primary'>
            <span>{dummyData.petType}</span>
            <span>·</span>
            <span
              className={`rounded px-1 py-[2px] ${dummyData.riskLevel === '높음' ? 'bg-error/5 text-error' : 'bg-success/5 text-success'}`}
            >
              위험도 {dummyData.riskLevel}
            </span>
          </div>
        </div>
      </div>

      <div className='bg-white px-5 last:[&_>_div]:border-none'>
        <DetailListUi title='원인' desc={dummyData.cause} />
        <DetailListUi title='증상' desc={dummyData.prevention} />
        <DetailListUi title='예방법' desc={dummyData.treatment} />
        <DetailListUi
          title='좋은 영양소'
          desc={dummyData.managementNecessity}
        />
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
