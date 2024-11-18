import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField
} from 'react-admin'

const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <NumberField source='id' />
        <TextField source='title' />
        <ReferenceField source='unitId' reference='units' />
        <NumberField source='order' />
      </Datagrid>
    </List>
  )
}

export { LessonList }
