import React, { Component } from 'react'

const TableCount = ({
  current_page,
  total_pages,
  total_count,
  per_page,
  label
}) => (
  <span className="heading-text">
    {startCount(current_page, per_page)} bis {endCount(total_pages, current_page, total_count, per_page)} von <b>{total_count}</b> {label}
  </span>
)

export default TableCount

const startCount = (currentPage, perPage) => (currentPage * perPage) - perPage + 1
const endCount = (totalPages, currentPage, totalCount, perPage) =>
  totalPages == currentPage ? totalCount : currentPage * perPage
