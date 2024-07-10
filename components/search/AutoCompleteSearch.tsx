"use client";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const AutoCompleteSearch = ({ placeHolder, nameList }: any) => {
  return (
    <Autocomplete
      size="small"
      sx={{ width: 300 }}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={nameList.map((n: any) => n.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeHolder || "Search input"}
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoCompleteSearch;
