import { Datagrid, List, NumberField, TextField } from 'react-admin'

const CourseList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='imageSrc' />
      </Datagrid>
    </List>
  )
}

export { CourseList }
