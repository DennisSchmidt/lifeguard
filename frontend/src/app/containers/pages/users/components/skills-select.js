import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SelectField from '../../../../components/form-fields/select-field'

const SkillsSelect = ({data}) => (
  <SelectField
    label="Fähigkeiten"
    name="skills"
    validations="isExisty"
    options={data.skills}
    loading={data.loading}
    prompt="Bitte Fähigkeiten wählen"
    multiple
    required
    validationError="Bitte Fähigkeiten auswählen"
  />
)

const query = gql`
  query AllSkills {
    skills {
      id
      name
    }
  }
`

export default graphql(query)(SkillsSelect)
