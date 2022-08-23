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
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        previousAriaLabel={"previous"}
        pageCount={25}
        marginPagesDisplayed={6}
        onPageChange={Pagination}
        containerClassName={"pagination"} // ページネーションであるulに着くクラス名
        previousClassName={"pagination__previous"} // 「<」のliに着けるクラス名
        nextClassName={"pagination__next"} // 「>」のliに着けるクラス名
        disabledClassName={"pagination__disabled"} // 使用不可の「<,>」に着くクラス名
      />
    </div>
  );
};

export default Pagination;
