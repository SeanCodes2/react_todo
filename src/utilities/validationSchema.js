import * as Yup from 'yup'

const toDoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 Characters').required('Required'),
    done: Yup.boolean().required('required'),
    categoryId: Yup.number()
})

const catSchema = Yup.object().shape({
    catName: Yup.string().max(25, '25 Characters Max').required(),
    catDesc: Yup.string().max(100, '100 Character Max')
})

export {toDoSchema, catSchema}