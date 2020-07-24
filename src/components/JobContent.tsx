import React from "react";
import { IData } from "../App";

type IContent = {
  job: IData;
};
const JobContent: React.FC<IContent> = (props: IContent) => {
  const { job } = props;
  return (
    <div className='flex ml-3 flex-col  lg:ml-10 my-3 lg:border-none w-full auto lg:my-0 border-b-2 border-primary-100 '>
      {/* first */}
      <div className='flex flex-wrap items-center sm:flex-no-wrap '>
        <h3 className='text-primary-300 font-bold text-sm'>{job.company}</h3>

        {job.new && (
          <div className='uppercase bg-primary-300 text-white rounded-full text-xs pt-1 px-2 ml-2 text-center mb-1 sm:mb-0'>
            <small>new!</small>
          </div>
        )}

        {job.featured && (
          <div className='uppercase bg-black text-white rounded-full ml-2 text-center text-xs pt-1 px-2  mb-1 sm:mb-0'>
            <small>Featured</small>
          </div>
        )}
      </div>
      {/* second */}
      <div className='mt-1 w-full'>
        <h2 className='text-black text-sm font-bold'>{job.position}</h2>
      </div>

      {/* third */}
      <div className='flex flex-wrap mt-1 text-xs text-gray-500 items-center mb-5  lg:mb-0 sm:flex-no-wrap '>
        <p>{job.postedAt}</p>
        <div className='ml-2 hidden sm:flex'>&middot;</div>
        <p className='ml-2 '>{job.contract ? "Contract" : "Full Time"}</p>
        <div className='ml-2 hidden sm:flex'>&middot;</div>
        <p className='ml-2'>{job.location}</p>
      </div>
    </div>
  );
};

export default JobContent;
