import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";
import Header from "./components/Header";

export type IData = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[] | [];
};

const App = (): any => {
  const [jobs, setJobs] = useState<IData[] | []>([]);
  const [attr, setAttr] = useState<string[] | any>([]);
  useEffect(() => {
    setJobs(data);
  }, []);
  const addFilter = (task: string) => {
    setAttr([...attr, task]);

    let newJob;
    newJob = jobs.filter((job) => {
      if (
        job.role === task ||
        job.level === task ||
        job.languages.includes(task) ||
        //@ts-ignore
        job.tools.includes(task)
      ) {
        return job;
      } else {
        return;
      }
    });

    setJobs(newJob);
  };

  const filterJobs = (role: string) => {
    const newRole = attr.filter((attrs: string) => attrs !== role);
    setAttr(newRole);

    //tools
  };

  const clearJobs = () => {
    setAttr([]);
    setJobs(data);
  };

  const getUnique: any = new Set(attr);
  const mapTask = [...getUnique];

  return (
    <div>
      <Header />
      {/* filter */}
      {attr.length > 0 && (
        <div className='flex bg-white shadow-md w-4/5 p-3 rounded text-xs mx-auto -mt-8 justify-between items-center'>
          <div className='flex  flex-wrap mx-3 lg:flex-no-wrap '>
            {mapTask.length > 0 &&
              mapTask.map((role: string) => {
                return (
                  <React.Fragment key={role}>
                    <div className='text-primary-300 bg-primary-200 ml-3 p-2 my-1 rounded-tl rounded-bl sm:my-0'>
                      <div>{role}</div>
                    </div>
                    <div
                      className='bg-primary-300 text-white pt-2 px-2 rounded-tr rounded-br cursor-pointer my-1 hover:bg-black sm:my-0'
                      onClick={() => filterJobs(role)}
                    >
                      X
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div
            className='cursor-pointer underline text-primary-300'
            onClick={clearJobs}
          >
            clear
          </div>
        </div>
      )}
      {/* filter end */}
      <div className='py-10'>
        {jobs.length > 0 &&
          (jobs as IData[]).map((job: IData) => (
            <JobBoard job={job} key={job.id} addFilter={addFilter} />
          ))}
      </div>
    </div>
  );
};

export default App;
