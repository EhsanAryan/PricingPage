import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const CustomAccordion = ({ summary, details, className, summaryClasses, detailsClasses }) => {
    return (
        <Accordion className={className}>
            <AccordionSummary>
                <Typography className={summaryClasses}>
                    {summary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={detailsClasses}>
                   {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default CustomAccordion;
