import React, { useState, useEffect } from "react";

export default function SortTable() {
  const articles = [
    { title: "Title1", number: 1, date: "2020-01-03" },
    { title: "Title3", number: 3, date: "2020-02-03" },
    { title: "Title5", number: 2, date: "2020-01-01" },
    { title: "Title2", number: 6, date: "2020-01-03" },
    { title: "Title1", number: 5, date: "2019-05-03" },
  ];

  const [orderedArticle, setOrderedArticle] = useState(articles);
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    if (orderBy == "date") {
      setOrderedArticle(
        articles.sort((a, b) => -Date.parse(a.date) + Date.parse(b.date))
      );
    }
    if (orderBy == "number") {
      setOrderedArticle(articles.sort((a, b) => -a.number + b.number));
    }
  }, [orderBy]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th onClick={() => setOrderBy("number")}>
              Number {orderBy == "number" && "^"}
            </th>
            <th onClick={() => setOrderBy("date")}>
              Date {orderBy == "date" && "^"}
            </th>
          </tr>
        </thead>
        <tbody>
          {orderedArticle.map((article) => (
            <tr key={`${article.title}-${article.number}`}>
              <td>{article.title}</td>
              <td>{article.number}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
