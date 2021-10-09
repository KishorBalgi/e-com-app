import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othSecProps }) => (
      <MenuItem key={id} {...othSecProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
