import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SelectField from '../../../../components/form-fields/select-field'

const DepartmentSelect = ({data}) => (
  <SelectField
    label="Ortsgruppe"
    name="department"
    validations="isNumeric"
    options={data.departments}
    loading={data.loading}
    prompt="Bitte Ortsgruppe wählen"
    required
    validationError="Bitte Ortsgruppe auswählen"
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
