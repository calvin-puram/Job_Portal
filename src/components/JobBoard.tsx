import React from "react";
import { IData } from "../App";
import CompanyLogo from "./CompanyLogo";
import JobContent from "./JobContent";
import JobRoles from "./JobRoles";

type IProps = {
  job: IData;
  key: number;
  addFilter: any;
};
const JobBoard: React.FC<IProps> = (props: IProps) => {
  const { job, addFilter } = props;
  const logo = job.logo.replace("./", "");

  return (
    <div
      className={`flex flex-col justify-between rounded bg-white shadow-md sm:w-4/5 my-8 lg:my-4 mx-auto p-5 lg:flex-row relative w-auto  ${
        job.featured && "border-primary-300 border-l-4"
      }`}
    >
      <div className=' flex '>
        {/* image */}
        <CompanyLogo logo={logo} />

        {/* content */}
        <JobContent job={job} />
      </div>

      {/* tags */}
      <JobRoles job={job} addFilter={addFilter} />
    </div>
  );
};

export default JobBoard;
