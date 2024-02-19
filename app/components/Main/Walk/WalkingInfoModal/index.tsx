import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';

const WALKING_INFO = [
  {
    info: '좋음 ~ 보통',
    description: '숨이 가쁠 정도의 운동량 확보',
    color: '#0D6820',
    borderColor: 'rgba(47, 190, 77, 1)',
    backgroundColor: 'rgba(47, 190, 77, 0.1)',
  },
  {
    info: '나쁨',
    description: '30 ~ 40분 이내',
    color: '#C93506',
    borderColor: 'rgba(242, 106, 63, 1)',
    backgroundColor: 'rgba(242, 106, 63, 0.1)',
  },
  {
    info: '매우 나쁨',
    description: '10 ~ 15분 이내',
    color: '#A01404',
    borderColor: 'rgba(218, 42, 22, 1)',
    backgroundColor: 'rgba(218, 42, 22, 0.1)',
  },
];

const WalkingInfoModal = () => {
  return (
    <Modal type={MODAL_TYPE.WALKING_INFO} variant={MODAL_VARIANT.CARD}>
      <Modal.Header title='산책정보' titleType='left-X' />
      <div className='flex flex-col px-5 py-6 gap-3'>
        {WALKING_INFO.map(
          ({ info, description, color, borderColor, backgroundColor }) => (
            <div key={info} className='flex items-center'>
              <div className='flex w-[88px]'>
                <div
                  className={`text-caption1 flex-shrink-0 px-[12px] py-[6px] rounded-full`}
                  style={{
                    color: color,
                    border: `1px solid ${borderColor}`,
                    background: backgroundColor,
                  }}
                >
                  {info}
                </div>
              </div>
              <div className='text-caption1 ps-2'>{description}</div>
            </div>
          ),
        )}
      </div>
    </Modal>
  );
};

export default WalkingInfoModal;
