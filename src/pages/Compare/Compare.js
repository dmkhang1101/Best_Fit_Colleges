import './Compare.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Table from '../../components/table/Table'
import { UserContext } from '../../controllers/User';
import { useNavigate } from 'react-router-dom';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const college_names = ["College A", "Bollege C", "Aollege B"]
const mainRanking = ['Main Ranking 1', 'Main Ranking 2']
const addRanking = ['Additional Ranking 1', 'Additional Ranking 2']

function Compare(){
    const user = React.useContext(UserContext);
    const navigate = useNavigate();

    const [main, setMain] = React.useState("");
    const [add, setAdd] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [expanded1,setExpanded1] = React.useState(true)
    const [expanded2,setExpanded2] = React.useState(false)

    const handleAdd = () => {
        if (main === ""){
            alert("Please select Main Ranking.")
            return
        }
        if (weight === "" || parseFloat(weight) < 0 || parseFloat(weight) > 1){
            alert("Please fill in appropriate Weight.")
            return
        }
        else{
            const curr = user.userData
            curr.push({
                main: main,
                add: add,
                weight: weight,
            })
            user.setUserData([...curr])
        }
    }

    const handleSubmit = () => {
        if (user.compareColleges.length <= 1){
            alert("Please select at least two colleges to compare.")
            return
        }
        if (user.userData.length === 0){
            alert("Please select Main Ranking.")
            return
        }
        else{
            // navigate('Compare_Result')
        }
    }

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
                                if (user.compareColleges.length <= 1){
                                    alert("Please select at least two colleges to compare.")
                                    return
                                }
                                else{
                                    setExpanded1(false)
                                    setExpanded2(true)
                                }
                            }}>
                                Next Step
                            </Button>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className = "step_body">
                            <p className="search_title">Select your Colleges for Comparison</p>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={college_names.sort()}
                                disableCloseOnSelect
                                groupBy={(option) => option[0].toUpperCase()}
                                getOptionLabel={(option) => option}
                                renderOption={(props, option, { selected }) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                    <li key={key} {...optionProps}>
                                        <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                        />
                                        {option}
                                    </li>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Search for Colleges" placeholder="Colleges" />
                                )}
                                onChange = {(e,value) => user.setCompareColleges(value)}
                            />

                            <Grid item xs={12} md={6}>
                                <List dense={false}>
                                {user.compareColleges.map((value) => {
                                    return (
                                        <ListItem className = "compare_list">
                                            <ListItemText primary={value} className = "list_item"/>
                                        </ListItem>
                                    )
                                })}
                                </List>
                            </Grid>

                        </div>
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
                        <div className = "step_body">
                            <p className="search_title">Select your Ranking Criteria</p>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={mainRanking}
                                renderInput={(params) => <TextField {...params} label="Select Main Ranking" />}
                                onChange = {(e,value) => setMain(e.target.innerHTML)}
                            />
                            <br/>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={addRanking}
                                renderInput={(params) => <TextField {...params} label="Select Additional Ranking (Optional)" />}
                                onChange = {(e,value) => setAdd(e.target.innerHTML)}
                            />
                            <br/>
                            <TextField 
                                id="outlined-basic" 
                                label="Weight (0 to 1)" 
                                variant="outlined"
                                onChange = {(e,value) => {
                                    setWeight(e.target.value)
                                }}
                            />
                            <br/>
                            <div className = "button_wrapper">
                                <Button variant="contained" sx={{ width: 300 }} onClick = {handleAdd}>
                                    Add
                                </Button>
                            </div>
                            <br/>
                            <Table/>
                        </div>
                    </AccordionDetails>
                </Accordion>
               
                <div className = "compare_submit">
                    <Button variant="contained" sx={{ width: 300, height: 60, fontSize: 23 }} color = "error" onClick = {handleSubmit}>Submit</Button>
                </div>

            </div>
        </div>
    )
}

export default Compare;