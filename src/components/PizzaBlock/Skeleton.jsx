import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="137" cy="130" r="123" />
    <rect x="162" y="258" rx="0" ry="0" width="1" height="1" />
    <rect x="1" y="307" rx="10" ry="10" width="280" height="72" />
    <rect x="233" y="346" rx="0" ry="0" width="2" height="0" />
    <rect x="3" y="401" rx="9" ry="9" width="120" height="46" />
    <rect x="135" y="401" rx="17" ry="17" width="147" height="46" />
    <rect x="2" y="274" rx="8" ry="8" width="280" height="20" />
  </ContentLoader>
);

export default Skeleton;
