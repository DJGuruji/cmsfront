import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const AccordionComponent = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion open={open === 1} className=' p-2 ml-3'>
        <AccordionHeader  onClick={() => handleOpen(1)} className='text-md text-blue-700'>Details</AccordionHeader>
        <AccordionBody>
hello       
 </AccordionBody>
      </Accordion>
     
    </>
  );
};

export default AccordionComponent;
