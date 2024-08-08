import "./Search.css"
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import Table from "../../components/table/Table.js";
import { UserContext } from '../../controllers/User';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const user = React.useContext(UserContext);

    const [main, setMain] = React.useState("");
    const [add, setAdd] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [setting, setSetting] = React.useState([]);
    const [type, setType] = React.useState([]);
    const [location, setLocation] = React.useState([]);

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
        if (user.userData.length === 0){
            alert("Please select Main Ranking.")
            return
        }
        else{
            user.filters.setting = setting;
            user.filters.type = type;
            user.filters.location = location;
            navigate('../result')
        }
    }

    return (
        <div className="search">
            <h1>Welcome to Search Page.</h1>
            <div className ="search_input">
                <div className ="search_wrapper">
                    <p className="search_title">Select your Ranking Criteria</p>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={mainRanking}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Select Main Ranking" />}
                        onChange = {(e,value) => setMain(e.target.innerHTML)}
                    />
                    <br/>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={addRanking}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Select Additional Ranking (Optional)" />}
                        onChange = {(e,value) => setAdd(e.target.innerHTML)}
                    />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Weight (0 to 1)" 
                        variant="outlined"
                        sx={{ width: 500 }}
                        onChange = {(e,value) => {
                            setWeight(e.target.value)
                        }}
                    />
                    <br/>
                    <Button variant="contained" sx={{ width: 500 }} onClick = {handleAdd}>
                        Add
                    </Button>

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
                        onChange = {(e,value) => setSetting(value)}
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
                        onChange = {(e,value) => setType(value)}
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
                        onChange = {(e,value) => setLocation(value)}
                    />
                </div>
            </div>
            <div className = "search_input">
                <Button variant="contained" sx={{ width: 400 }} onClick = {handleSubmit}>
                    Submit
                </Button>
            </div>
            <Table/>
            <br/>
        </div>
        
    )
}

export default Search;