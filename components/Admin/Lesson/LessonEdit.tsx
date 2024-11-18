import {
  Edit,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput
} from 'react-admin'

const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='title' validate={[required()]} label='Title' />
        <ReferenceInput source='unitId' reference='units' label='Unit' />
        <TextInput source='order' validate={[required()]} label='Order' />
      </SimpleForm>
    </Edit>
  )
}

export { LessonEdit }
