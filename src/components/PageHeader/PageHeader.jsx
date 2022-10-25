import React from "react";

const PageHeader = ({ imageURL, title }) => {
  return (
    <section
      className="banner-area other-page-area"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="container">
        <div className="common-heading">
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};


export default PageHeader;
