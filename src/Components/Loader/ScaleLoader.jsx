import React from 'react'
import { ScaleLoader } from 'react-spinners';

export default function ScaleLoading() {
  return <>
    <div className="flex flex-col justify-center items-center h-screen">
      <ScaleLoader width={6} color="#3b82f6" />
      <h2 className="text-3xl text-blue-400 mt-2">Loading ...</h2>
    </div>

  </>

}
