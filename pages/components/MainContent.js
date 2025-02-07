import React from 'react';

const MainContent = ({ title, content }) => {
return (
    <article>
        <h2>{title}</h2>
      <center><p>{content}</p></center>
    </article>
);
};

export default MainContent;