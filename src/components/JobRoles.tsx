import React from "react";
import { IData } from "../App";

type IRoles = {
  job: IData;
  addFilter: any;
};

const JobRoles: React.FC<IRoles> = (props: IRoles) => {
  const { role, level, tools, languages } = props.job;
  const newRole: string[] = [role, level, ...tools, ...languages];

  const handleFilter = (role: string) => {
    props.addFilter(role);
  };

  return (
    <div className='flex justify-start lg:justify-center items-center text-xs font-bold lg:flex-no-wrap flex-wrap '>
      {newRole.map((role, i) => {
        return (
          <div
            key={i}
            className='text-primary-300 bg-primary-200 ml-3 p-2 rounded lg:mt-0 mt-3 hover:bg-primary-300 hover:text-white cursor-pointer'
            onClick={() => handleFilter(role)}
          >
            <div>{role}</div>
          </div>
        );
      })}
    </div>
  );
};

export default JobRoles;
