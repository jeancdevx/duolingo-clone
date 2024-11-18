import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput
} from 'react-admin'

const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source='id' validate={[required()]} label='ID' />
        <TextInput source='title' validate={[required()]} label='Title' />
        <TextInput
          source='description'
          validate={[required()]}
          label='Description'
        />
        <ReferenceInput source='courseId' reference='courses' label='Course' />
      </SimpleForm>
    </Edit>
  )
}

export { UnitEdit }
