'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { GymType } from '@/types/gymType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddSaveButton = ({ workout }: { workout:GymType}) => {
  const context= useContext(WorkoutContext);
    if (!context) {
        throw new Error(
          "AddPlanButton must be used within WorkoutContext.Provider",
        );
    }
    const { saved, setSaved } = context;
    const handleSaveLater = () => {
        const alreadySaved = saved.find((item) => item.id === workout.id);
        if (alreadySaved) {
            toast.error('This workout is already save to later');
            return;
        }
        setSaved([...saved, workout])
        toast.success('Added to saved to later')
  };
  return (
    <button
      onClick={() => handleSaveLater()}
      className="rounded-md border border-[#343842] px-4 py-2.5 text-[9px] font-bold uppercase text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
    >
      ♡ Save for later
    </button>
  );
};

export default AddSaveButton;