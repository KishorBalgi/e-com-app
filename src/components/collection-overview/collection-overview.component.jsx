import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop-data/shop-data.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
