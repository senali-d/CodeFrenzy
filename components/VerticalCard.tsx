import React from 'react'
import { NextPage } from 'next'

type Props = {
  image: string,
  title: string,
  level: string,
  desc: string,
}

const VerticalCard: NextPage<Props> = ({ image, title, level, desc}) => {
  return (
    <>
      <img
        className="object-cover w-full h-full max-h-64 sm:max-h-[190px] rounded-t-lg sm:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </>
  );
};

export default VerticalCard
