'use client';
import React, { useEffect, useState } from 'react';
import DetailList from '@/components/Info/Detail/DetailList';
import DetailTitle from '@/components/Info/Detail/DetailTitle';
import { getKnowledgeDiseaseDetail } from '@/apis/info';
import { DiseaseProps } from '@/components/Info/Disease';

const DiseaseDetailPage = ({ params: { id } }: { params: { id: number } }) => {
  const [content, setContent] = useState<DiseaseProps | null>(null);

  useEffect(() => {
    const getDetailContent = async () => {
      const res = await getKnowledgeDiseaseDetail(id);
      return res && setContent(res);
    };
    getDetailContent();
  }, []);

  if (content === null) return <div>loading...</div>;

  return (
    <div className='bg-extra-device-bg h-full'>
      <DetailTitle
        title={content.diagnosisName}
        summary={content.summary}
        type={content.petType}
        tag={content.riskLevel}
      />

      <div className='bg-white px-5 last:[&_>_div]:border-none'>
        <DetailList title='원인' desc={content.cause} />
        <DetailList title='증상' desc={content.prevention} />
        <DetailList title='예방법' desc={content.treatment} />
        <DetailList title='좋은 영양소' desc={content.managementNecessity} />
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
