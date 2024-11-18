import {
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin'

const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='question' validate={[required()]} label='Question' />
        <SelectInput
          source='type'
          choices={[
            { id: 'SELECT', name: 'SELECT' },
            { id: 'ASSIST', name: 'ASSIST' }
          ]}
          validate={[required()]}
        />
        <ReferenceInput source='lessonId' reference='lessons' label='Lesson' />
        <TextInput source='order' validate={[required()]} label='Order' />
      </SimpleForm>
    </Edit>
  )
}

export { ChallengeEdit }
