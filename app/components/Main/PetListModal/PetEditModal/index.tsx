import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import PetInfo from '@/components/PetInfo';
import { useModal } from '@/hooks/view/useModal';
import { petInfoState, unknownBirthdayState } from '@/recoil/Account/atoms';
import { PetData } from '@/types/petData';
import IconAddImg from '@/assets/images/icon-addImg.svg';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import cat from '@/assets/images/profile/cat/cat1x.webp';
import PetDeleteModal from '../PetDeleteModal';
import { updatePet } from '@/apis/petData';
import { usePetInfo } from '@/hooks/queries/usePetInfo';

const PetEditModal = ({ data }: { data?: PetData }) => {
  const { refetch } = usePetInfo();
  if (!data) return;

  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  const setUnknownBirthday = useSetRecoilState(unknownBirthdayState);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { addModal, removeModal } = useModal();

  const handleChangeImage = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = (e) => {
        const result = (e.target as FileReader).result;
        setPreview(result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', String(data.id));
    Object.entries(petInfo).forEach(([key, value]) => {
      if (value === '' || !value) return;
      formData.append(key, String(value));
    });
    if (image !== null) {
      formData.append('file', image);
    }

    const res = await updatePet(formData);
    if (res?.status === 200) {
      refetch();
      return removeModal();
    }
  };

  const imageSource = useMemo(() => {
    const defaultImage = petInfo.petType === '고양이' ? cat.src : dog.src;

    if (preview !== null) return preview;

    return data.imageUrl ? data.imageUrl : defaultImage;
  }, [preview, data.imageUrl, petInfo.petType]);

  useEffect(() => {
    const petInfo = {
      petType: data.petType,
      breed: data.breed,
      name: data.name,
      gender: data.gender,
      neutered: data.neutered,
      birthday: data.birthday,
      adoptionDate: data.adoptionDate,
      weight: data.weight,
    };

    if (data.birthday === '') {
      setUnknownBirthday(true);
    }

    setPetInfo(petInfo);
  }, [data]);

  return (
    <Modal type={MODAL_TYPE.PET_EDIT} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='반려동물 수정' titleType='center' />
      <div className='px-5 pt-10 overflow-y-auto scrollbar-none'>
        <form className='flex justify-center'>
          <label className='relative w-20 h-20 cursor-pointer'>
            <input
              type='file'
              name='profile'
              onChange={(e) => handleChangeImage(e)}
              accept='image/*'
              className='hidden'
            />
            <div className='w-full h-full relative overflow-hidden rounded-full border border-white shadow-level1'>
              <Image
                src={imageSource}
                alt='profile'
                fill
                sizes='100%'
                priority
                className='object-cover'
              />
            </div>
            <IconAddImg className='absolute -right-1 bottom-1 z-10' />
          </label>
        </form>
        <PetInfo
          handleSubmit={handleSubmit}
          submitValue='저장'
          deleteBtn={() => addModal(MODAL_TYPE.PET_DELETE)}
        />
      </div>
      <PetDeleteModal petId={data.id} />
    </Modal>
  );
};

export default PetEditModal;
