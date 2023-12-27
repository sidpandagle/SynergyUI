import { apiURL } from '@/constants';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
export default function AddCode({ categoryData, isModalOpen, setIsModalOpen }) {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (formData) => {
        axios.post(apiURL + '/code/', formData)
            .then(function (response) {
                setIsModalOpen(false);
                reset();
                setTimeout(() => {
                    alert('Code added successfully');
                }, 100);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        isModalOpen &&
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                            {/* {JSON.stringify(categoryData)} */}
                                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add Component</h3>
                                    <div className="mt-2">
                                        <div className='mt-4'>
                                            <label for="title" className="block text-xs font-medium text-gray-700"> Title </label>

                                            <input
                                                id="title"
                                                {...register('title')}
                                                placeholder="Title"
                                                className="w-full p-2 mt-1 border border-gray-200 rounded-md shadow-sm outline-none sm:text-sm"
                                            />
                                        </div>
                                        <div className='mt-4'>
                                            <label for="category_id" className="block text-xs font-medium text-gray-700"> Category </label>

                                            <select id="category_id" {...register('category_id')} placeholder="label" className="w-full p-2 mt-1 border border-gray-200 rounded-md shadow-sm outline-none sm:text-sm" >
                                                {
                                                    categoryData.data.map((r, i) => {
                                                        return (
                                                            <option key={i} value={Number(r.id)}>{r.category}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className='mt-4'>
                                            <label for="code" className="block text-xs font-medium text-gray-700"> Code </label>
                                            <textarea
                                                type="textarea"
                                                {...register('code')}
                                                id="code"
                                                placeholder="Code"
                                                className="w-full p-2 mt-1 border border-gray-200 rounded-md shadow-sm outline-none sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit" className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Save</button>
                            <button type="button" className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
