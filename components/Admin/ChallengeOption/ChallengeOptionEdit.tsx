import {
  BooleanInput,
  Edit,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput
} from 'react-admin'

const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='text' validate={[required()]} label='Text' />
        <BooleanInput source='correct' label='Correct' />
        <ReferenceInput
          source='challengeId'
          reference='challenges'
          label='Challenges'
        />
        <TextInput source='imageSrc' label='Image Src' />
        <TextInput source='audioSrc' label='Audio Src' />
      </SimpleForm>
    </Edit>
  )
}

export { ChallengeOptionEdit }
