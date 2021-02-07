import React, { useState, useEffect } from "react";
import { Pagination, Dropdown } from "react-bootstrap";

export default function TablePagination() {
  const articles = [
    { title: "Title1", number: 1, date: "2020-01-03" },
    { title: "Title3", number: 3, date: "2020-02-03" },
    { title: "Title5", number: 2, date: "2020-01-01" },
    { title: "Title2", number: 6, date: "2020-01-03" },
    { title: "Title4", number: 5, date: "2019-05-03" },
    { title: "Title6", number: 1, date: "2020-01-03" },
    { title: "Title7", number: 3, date: "2020-02-03" },
    { title: "Title8", number: 2, date: "2020-01-01" },
    { title: "Title9", number: 6, date: "2020-01-03" },
    { title: "Title10", number: 5, date: "2019-05-03" },
  ];

  const [pageSize, setPageSize] = useState(2);
  const [curPage, setCurPage] = useState(1);
  const [pagedArticles, setPagedArticles] = useState(articles);

  useEffect(() => {
    let curArticles = articles.slice(
      pageSize * (curPage - 1),
      pageSize * curPage
    );
    setPagedArticles(curArticles);
  }, [pageSize, curPage]);

  const renderDropDown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {pageSize} items per page
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setPageSize(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => setPageSize(4)}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => setPageSize(5)}>5</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  const renderTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {pagedArticles.map((article) => (
            <tr key={article.title}>
              <td>{article.title}</td>
              <td>{article.number}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPatination = () => {
    let numPages = Math.ceil(articles.length / pageSize);
    let items = [];
    for (let i = 1; i <= numPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === curPage}
          onClick={() => setCurPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination>{items} </Pagination>;
  };

  return (
    <div>
      {renderDropDown()}
      {renderTable()}
      {renderPatination()}
    </div>
  );
}
