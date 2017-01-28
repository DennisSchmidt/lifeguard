import React from 'react'
import _ from 'lodash'
import moment from 'moment'

import { dig } from '../lib/utils'

import Icomoon from './icomoon'

const Table = ({
  loading,
  items,
  columns,
  size
}) => (
  <div className="table-responsive">
    <table className={`table table-striped table-hover ${size ? `table-${size}` : ''}`}>
      <thead>
      <tr>
        {
          _.values(columns).map((header, index) =>
            <th key={index}>{header}</th>
          )
        }
      </tr>
      </thead>
      {!loading && <TableBody items={computeItems(items, _.keys(columns))} />}
    </table>
  </div>
)

export default Table

const computeItems = (items, fields) => (
  items.map(item => {
    let mappedItem = {id: item.id}

    _.each(fields, field => {
      const value = dig(item, ...field.split('.'))

      if (value && _.endsWith(field, "_at"))
        mappedItem[field] = moment.utc(value).local().format("DD.MM.YYYY, HH:mm") + " Uhr"
      else
        mappedItem[field] = value
    })

    return mappedItem
  })
)

const TableBody = ({
  items
}) => (
  <tbody>
  {items.map(item => <Row key={item.id} item={item} />)}
  </tbody>
)

const Row = ({
  item
}) => (
  <tr>
    {
      _.values(_.omit(item, ["id"])).map((value, index) => <Cell key={index} value={value} />)
    }
  </tr>
)

const Cell = ({
  value
}) => (
  <td>
    {
      _.isBoolean(value)
        ? value ? <Icomoon name="checkmark3" className="text-success" /> : <Icomoon name="cross3" className="text-danger" />
        : value
    }
  </td>
)
