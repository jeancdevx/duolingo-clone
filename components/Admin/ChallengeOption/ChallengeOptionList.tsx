import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField
} from 'react-admin'

const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <NumberField source='id' />
        <TextField source='text' />
        <BooleanField source='correct' />
        <ReferenceField source='challengeId' reference='challenges' />
        <TextField source='imageSrc' />
        <TextField source='audioSrc' />
      </Datagrid>
    </List>
  )
}

export { ChallengeOptionList }
