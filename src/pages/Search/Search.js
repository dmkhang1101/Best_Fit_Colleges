import "./Search.css"
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import Table from "../../components/Table";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const mainRanking = ['Main Ranking 1', 'Main Ranking 2']
const addRanking = ['Additional Ranking 1', 'Additional Ranking 2']
const stateNames = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

function Search(){
    return (
        <div className="search">
            <h1>Welcome to Search Page</h1>
            <div className ="search_input">
                <div className ="search_wrapper">
                    <p className="search_title">Select your Ranking</p>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={mainRanking}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Select Main Ranking" />}
                    />
                    <br/>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={addRanking}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Select Additional Ranking (Optional)" />}
                    />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Weight (0 to 1)" 
                        variant="outlined"
                        sx={{ width: 500 }}
                    />
                    <br/>
                    <Button variant="contained" sx={{ width: 500 }}>Add</Button>

                </div>

                <div className ="search_wrapper">
                    <p className="search_title">Filter Options</p>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={['Urban', 'Suburban', 'Rural']}
                        disableCloseOnSelect
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
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Setting"/>
                        )}
                    />
                    <br/>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={['Private','Public']}
                        disableCloseOnSelect
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
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Private/Public"/>
                        )}
                    />
                    <br/>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={stateNames}
                        disableCloseOnSelect
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
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Location" />
                        )}
                    />
                </div>
            </div>
            <div className = "search_input">
                <Button variant="contained" sx={{ width: 550 }}>Submit</Button>
            </div>
            <Table/>
            <br/>
        </div>
        
    )
}

export default Search;