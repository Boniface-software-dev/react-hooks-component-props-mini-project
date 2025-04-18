import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Optional chaining for bonus feature
  const getReadTime = () => {
    if (minutes === undefined) return null;
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const unit = minutes < 30 ? 5 : 10;
    return emoji.repeat(Math.ceil(minutes / unit)) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small> {/* <--- This is what the test is checking */}
      {minutes !== undefined && (
        <p><em>{getReadTime()}</em></p>
      )}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
