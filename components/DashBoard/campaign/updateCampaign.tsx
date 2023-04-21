/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';
import DateTimePicker from 'react-datetime-picker';
import { IoMdClose } from 'react-icons/io';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import DropdownSelect from '@components/UI/dropdownSelect';
import { useDepartments } from 'hooks/useDepartments';
import { CampaignInput, SelectOption } from 'types';
import { levels } from 'data/levels';
import { schools } from 'data/schools';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCampaign } from 'helpers/adminHelpers';
import { ICampaign } from 'helpers/types';

type CreateCampaignProps = {
  showSuccessMessage: (message: string) => void;
  campaignData: ICampaign | undefined;
};

function UpdateCampaign({
  showSuccessMessage,
  campaignData,
}: CreateCampaignProps) {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [selectedStartDateTime, setSelectedStartDateTime] = useState(
    new Date(campaignData?.startTime as string)
  );
  const [selectedEndDateTime, setSelectedEndDateTime] = useState(
    new Date(campaignData?.endTime as string)
  );

  const { handleModal } = useContext(ModalContext);

  const department = useDepartments(selectedSchool);

  const schoolSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      updateSchoolState(selectedValue?.value as string),
    []
  );

  const departmentSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      setSelectedDepartment(selectedValue?.value as string),
    []
  );

  const levelSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      setSelectedLevel(selectedValue?.value as number),
    []
  );

  function updateSchoolState(selectedValue: string | undefined) {
    setSelectedSchool(selectedValue ?? '');
    setSelectedDepartment('');
  }

  const queryClient = useQueryClient();

  console.log(campaignData);

  const { mutate, isLoading } = useMutation(
    (campaignInputData: CampaignInput) =>
      updateCampaign(campaignInputData, campaignData?._id as string)
  );

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required()
      .min(10, 'campaign name must be atleat 10 character')
      .max(50, 'campaign name must be at most 50 characters'),
    desc: Yup.string()
      .trim()
      .required()
      .min(20, 'description name must be atleat 20 character')
      .max(100, 'description name must be at most 100 characters'),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm(formOptions);

  function submitHandler(campaignData: any) {
    if (
      moment(selectedStartDateTime).toISOString() ===
      moment(selectedEndDateTime).toISOString()
    ) {
      toast.error('start time and end time cannot be the same');
      return;
    }
    const data = {
      ...campaignData,
      startTime: moment(selectedStartDateTime).toISOString(),
      endTime: moment(selectedEndDateTime).toISOString(),
      allowedSchool: selectedSchool,
      allowedDepartment: selectedDepartment,
      allowedLevel: selectedLevel,
    };

    mutate(data, {
      onSuccess(data) {
        queryClient.invalidateQueries(['allCampaigns']);
        showSuccessMessage(data?.message);
        handleModal();
      },
      onError(error: any) {
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el?.message)
          );
        } else {
          toast.error(error?.response?.data);
        }
      },
    });
  }

  const defaultSchool = schools.find(
    (school) => school?.value === campaignData?.allowedSchool
  );

  return (
    <div className="">
      <Toaster />
      <IoMdClose
        className="h-5 w-5 absolute right-5 top-5 text-red-500 cursor-pointer "
        onClick={() => handleModal()}
      />
      <form className="mt-2 md:px-7" onSubmit={handleSubmit(submitHandler)}>
        <div className="lg:flex justify-evenly">
          <div className="mb-6 lg:w-2/5 w-full">
            <label
              htmlFor="lastname"
              className="block  mb-2 text-lg  font-medium text-gray-900 "
            >
              Start Time
            </label>
            <DateTimePicker
              onChange={setSelectedStartDateTime}
              value={selectedStartDateTime}
            />
          </div>
          <div className="mb-6 lg:w-2/5">
            <label
              htmlFor="lastname"
              className="block  mb-2 text-lg  font-medium text-gray-900 "
            >
              End Time
            </label>
            <DateTimePicker
              onChange={setSelectedEndDateTime}
              value={selectedEndDateTime}
            />
          </div>
        </div>
        <div className="md:flex justify-evenly my-3">
          <div className="mb-6 md:w-[20%]">
            <label
              htmlFor="school"
              className="block  mb-2 text-lg  font-medium text-gray-900 "
            >
              Allowed Level
            </label>
            <DropdownSelect
              options={levels}
              onChange={levelSelectHandler}
              height={40}
              defaultValue={levels.find(
                (level) => level?.value === campaignData?.allowedLevel
              )}
            />
          </div>
          <div className="mb-6 md:w-2/6">
            <label
              htmlFor="school"
              className="block  mb-2 text-lg  font-medium text-gray-900 "
            >
              Allowed School
            </label>
            <DropdownSelect
              options={schools}
              onChange={schoolSelectHandler}
              height={40}
              defaultValue={defaultSchool}
            />
          </div>
          <div className="mb-6 md:w-2/6">
            <label
              htmlFor="lastname"
              className="block  mb-2 text-lg  font-medium text-gray-900 "
            >
              Allowed Department
            </label>
            <DropdownSelect
              options={department}
              onChange={departmentSelectHandler}
              height={40}
              defaultValue={useDepartments(defaultSchool?.value as string).find(
                (department) =>
                  department?.value === campaignData?.allowedDepartment
              )}
            />
            {!selectedDepartment && selectedSchool ? (
              <span className="text-sm text-red-500 text-center">
                please select appropriate Department under the school{' '}
                {selectedSchool}
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="md:flex justify-evenly align-middle">
          <div className="mb-6 md:w-2/5">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Name
            </label>
            <textarea
              maxLength={50}
              {...register('name')}
              className=" border border-black text-gray-900 text-sm block w-full p-2.5 rounded-md"
              placeholder="Enter campaign name"
              defaultValue={campaignData?.name}
            />
            <span className="text-sm text-red-500">
              {errors?.name?.message as string}
            </span>
          </div>

          <div className="mb-6 md:w-2/5">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              maxLength={100}
              {...register('desc')}
              className=" border border-black text-gray-900 text-sm block w-full p-2.5 rounded-md"
              placeholder="Enter campaign description"
              defaultValue={campaignData?.desc}
            />
            <span className="text-sm text-red-500">
              {errors?.desc?.message as string}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-indigo-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4 disabled:bg-gray-500 disabled:text-black disabled:ring-0 disabled:border-0"
          disabled={
            !selectedDepartment ||
            !selectedLevel ||
            !selectedSchool ||
            isLoading
              ? true
              : false
          }
        >
          {isLoading ? 'Updating campaign' : 'Update Campaign'}
        </button>
      </form>
    </div>
  );
}

export default UpdateCampaign;
