import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SelectField from '../../../../components/form-fields/select-field'

const DepartmentSelect = ({
  data,
  label = 'Ortsgruppe',
  size
}) => (
  <SelectField
    label={label}
    name="department"
    validations="isNumeric"
    options={data.departments}
    loading={data.loading}
    prompt="Bitte Ortsgruppe wählen"
    required
    validationError="Bitte Ortsgruppe auswählen"
    size={size}
  />
)

const query = gql`
  query AllDepartments {
    departments {
      id
      name
    }
  }
`

export default graphql(query)(DepartmentSelect)
