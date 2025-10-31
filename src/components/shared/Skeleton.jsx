import React from "react";

function Skeleton() {
  return (
    <div>
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </div>
  );
}

export default Skeleton;
