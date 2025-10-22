import React from 'react'
import { dataSchema, uiSchema } from '@/common/form/schemas'
import Form from '@/common/form/Form'

const ExampleFormik = () => (
  <Form
    initialValues={{
      name: '',
      email: '',
      dateOfBirth: '',
      favoriteColor: [],
      aboutYourself: '',
      radioGroup: '',
      profileStatus: '',
    }}
    dataSchema={dataSchema}
    uiSchema={uiSchema}
    onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
  />
)

export default ExampleFormik
