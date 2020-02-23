import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const Search = ({ classes: { root, iconButton, divider, input }, valueFiltered, handlerChange, handlerSubmit }) => {
  return (
    <Paper component="form" onSubmit={handlerSubmit} className={root}>
      <InputBase className={input} value={valueFiltered} onChange={handlerChange} placeholder="Search courses" />
      <IconButton type="submit" className={iconButton}>
        <SearchIcon />
      </IconButton>
      <Divider className={divider} orientation="vertical" />
      <IconButton color="primary" className={iconButton}>
        <Link to={`/courses/new`}>
          <AddIcon />
        </Link>
      </IconButton>
    </Paper>
  );
};
Search.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    iconButton: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  }
)
};

export default Search;
