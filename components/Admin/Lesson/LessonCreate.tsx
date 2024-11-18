import {
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput
} from 'react-admin'

const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source='title' validate={[required()]} label='Title' />
        <ReferenceInput source='unitId' reference='units' label='Unit' />
        <TextInput source='order' validate={[required()]} label='Order' />
      </SimpleForm>
    </Create>
  )
}

export { LessonCreate }
