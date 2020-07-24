import React from "react";

type ILogo = {
  logo: string;
};
const CompanyLogo: React.FC<ILogo> = (props: ILogo) => {
  const { logo } = props;
  return (
    <div className='absolute -mt-5 ml-10 top-0 left-0 lg:relative lg:mt-0 lg:ml-0'>
      <img src={`/${logo}`} alt='company logo' className='lg:w-full w-1/2' />
    </div>
  );
};

export default CompanyLogo;
