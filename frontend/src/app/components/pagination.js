import React, { Component } from 'react'
import _ from 'lodash'

let lastPage

const Pagination = ({
  current_page,
  next_page,
  prev_page,
  total_pages,
  loadPage,
  className
}) => {
  if (total_pages == 1) return null

  return (
    <ul className={['pagination', 'pagination-separated', 'pagination-xs', className].join(' ')}>
      <PrevPage prevPage={prev_page} onClick={() => loadPage(prev_page)} />

      {_.range(1, total_pages+1).map(page =>
        page <= 1 || page >= total_pages || Math.abs(current_page - page) <= 2
          ? <Page key={page} number={page} currentPage={current_page} onClick={() => loadPage(page)} />
          : <Gap key={page} />
      )}

      <NextPage nextPage={next_page} onClick={() => loadPage(next_page)} />
    </ul>
  )
}

export default Pagination

const Page = ({number, currentPage, onClick}) => {
  lastPage = 'page'
  return (
    <li className={number == currentPage ? 'active' : null}>
      <a onClick={onClick}>{number}</a>
    </li>
  )
}

const Gap = ({}) => {
  if(lastPage == 'truncated') return null
  lastPage = 'truncated'

  return (
    <li className="disabled"><a>...</a></li>
  )
}

const PrevPage = ({prevPage, onClick}) => (
  <li className={prevPage == null ? 'disabled' : null} >
    <a onClick={prevPage == null ? null : onClick} >‹</a>
  </li>
)

const NextPage = ({currentPage, nextPage, onClick}) => (
  <li className={nextPage == null ? 'disabled' : null} >
    <a onClick={nextPage == null ? null : onClick} >›</a>
  </li>
)
