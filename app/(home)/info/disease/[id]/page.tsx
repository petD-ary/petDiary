'use client';
import React, { useEffect, useState } from 'react';
import DetailList from '@/components/Info/Detail/DetailList';
import DetailTitle from '@/components/Info/Detail/DetailTitle';
import { getKnowledgeDiseaseDetail } from '@/apis/info';
import { DiseaseProps } from '@/components/Info/Disease';
import Loading from '@/components/Loading';

const DiseaseDetailPage = ({ params: { id } }: { params: { id: number } }) => {
  const [content, setContent] = useState<DiseaseProps | null>(null);

  useEffect(() => {
    const getDetailContent = async () => {
      const res = await getKnowledgeDiseaseDetail(id);
      setContent(res);
    };
    getDetailContent();
  }, []);

  if (content === null)
    return (
      <div className='bg-extra-device-bg h-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  return (
    <div className='bg-extra-device-bg h-full overflow-y-scroll scrollbar-none'>
      <DetailTitle
        title={content.diagnosisName}
        summary={content.summary}
        type={content.petType}
        tag={content.riskLevel}
      />

      <div className='bg-white px-5 last:[&_>_div]:border-none'>
        <DetailList title='원인' desc={content.cause} />
        <DetailList title='취약 품종' desc={content.vulnerableBreed} />
        <DetailList title='증상' desc={content.symptoms} />
        <DetailList title='예방법' desc={content.prevention} />
        <DetailList title='치료법' desc={content.treatment} />
        <DetailList title='관리 필요도' desc={content.managementNecessity} />
        <DetailList title='좋은 영양소' desc={content.recommendedNutrients} />
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
