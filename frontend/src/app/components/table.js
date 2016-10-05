import React from 'react'
import _ from 'lodash'
import moment from 'moment'

import { dig } from '../lib/utils'

import Icomoon from './icomoon'

const Table = ({
  data,
  recordsKey,
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
      {!data.loading && <TableBody records={records(dig(data, recordsKey), _.keys(columns))} />}
    </table>
  </div>
)

export default Table

const records = (records, fields) => (
  records.map(record => {
    let mappedRecord = {id: record.id}

    _.each(fields, field => {
      const value = dig(record, ...field.split('.'))

      if (value && _.endsWith(field, "_at"))
        mappedRecord[field] = moment.utc(value).local().format("DD.MM.YYYY, HH:mm") + " Uhr"
      else
        mappedRecord[field] = value
    })

    return mappedRecord
  })
)

const TableBody = ({
  records
}) => (
  <tbody>
  {records.map(record => <Row key={record.id} record={record} />)}
  </tbody>
)

const Row = ({
  record
}) => (
  <tr>
    {
      _.values(_.omit(record, ["id"])).map((value, index) => <Cell key={index} value={value} />)
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
