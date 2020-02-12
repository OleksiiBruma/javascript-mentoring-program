import React from "react";
import PropTypes from "prop-types"
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const Search = ({ classes: { root, iconButton, divider, input } }) => (
  <Paper component="form" className={root}>
    <InputBase className={input} placeholder="Search courses" />
    <IconButton type="submit" className={iconButton}>
      <SearchIcon />
    </IconButton>
    <Divider className={divider} orientation="vertical" />
    <IconButton color="primary" className={iconButton}>
      <AddIcon />
    </IconButton>
  </Paper>
);
Search.propTypes = {
  classes: PropTypes.shape({
    root : PropTypes.string.isRequired, 
    iconButton : PropTypes.string.isRequired, 
    divider : PropTypes.string.isRequired, 
    input : PropTypes.string.isRequired
  })
}

export default Search;
