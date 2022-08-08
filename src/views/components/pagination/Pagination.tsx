import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination";

const Pagination: React.FC = (data) => {
  console.log("data");

  return (
    <div>
      {/* ページネーションを置きたい箇所に以下のコンポーネントを配置 */}
      {/* className={styles.root} */}
      <ReactPaginate
        previousAriaLabel={"previous"}
        nextLabel={"next"}
        pageCount={25}
        marginPagesDisplayed={6}
        onPageChange={Pagination}
      />
    </div>
  );
};

export default Pagination;
