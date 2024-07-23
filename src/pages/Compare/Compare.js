import './Compare.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Compare(){
    const [expanded1,setExpanded1] = React.useState(true)
    const [expanded2,setExpanded2] = React.useState(false)

    return (
        <div className="compare">
            <h1>Welcome to Compare Page</h1>
            <div className = "compare_wrapper">
                <Accordion expanded={expanded1}>
                    <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header">
                        <div className = "compare_header">
                            <div className = "compare_title">Step 1</div>
                            <Button variant="contained" sx={{ width: 180 }} 
                            onClick = {() => {
                                setExpanded1(false)
                                setExpanded2(true)
                            }}>
                                Next Step
                            </Button>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded2}>
                    <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header">
                        <div className = "compare_header">
                            <div className = "compare_title">Step 2</div>
                            <Button variant="contained" sx={{ width: 180 }}
                            onClick = {() => {
                                setExpanded1(true)
                                setExpanded2(false)
                            }}>
                                Previous Step
                            </Button>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <div className = "compare_submit">
                    <Button variant="contained" sx={{ width: 300, height: 60, fontSize: 23 }} color = "error">Submit</Button>
                </div>

            </div>
        </div>
    )
}

export default Compare;