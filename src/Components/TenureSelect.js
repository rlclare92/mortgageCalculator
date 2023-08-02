import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MeunItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"> Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        defaultValue={5}
        onChange={handleChange}
      >
        <MeunItem value={5}>5 Years</MeunItem>
        <MeunItem value={10}>10 Years</MeunItem>
        <MeunItem value={15}>15 Years</MeunItem>
        <MeunItem value={20}>20 Years</MeunItem>
        <MeunItem value={25}>25 Years</MeunItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
