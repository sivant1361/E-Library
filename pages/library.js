import React, { useState, useEffect } from "react";
import Header from "./components/Header";

import { records } from "./data";

import MUIDataTable from "mui-datatables";

const Library = () => {

  const columns = [
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "author",
      label: "Author",
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: () => ({
          style: { textAlign: "left", fontWeight: 900, color: "#007" },
        }),
        setCellProps: () => ({ style: { alignItems: "center" } }),
      },
    },
    {
      name: "genre",
      label: "Genre",
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: () => ({
          style: { textAlign: "left", fontWeight: 900, color: "#007" },
        }),
        setCellProps: () => ({ style: { alignItems: "center" } }),
      },
    },
    {
      name: "date",
      label: "Publish Date",
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: () => ({
          style: { textAlign: "left", fontWeight: 900, color: "#007" },
        }),
        setCellProps: () => ({ style: { alignItems: "center" } }),
      },
    },
  ];

  const options = {
    selectableRows: false,
    filterType: "dropdown",
    responsive: "scroll",
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "1rem" }}>
        <MUIDataTable
          title={""}
          data={records}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default Library;
