import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>← página anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>proxima página →</Link>}
    </S.PaginationWrapper>
  )
}

export default Pagination
