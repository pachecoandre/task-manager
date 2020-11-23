require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ccf22515dcce317a519b88c').then((res) => {
//     console.log(res)
//     return Task.countDocuments({completed: false})

// }).then((res) => {
//     console.log(res)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5cd6db8d9019fa1127d5f5bd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

// Create doc:::::::::::

// const doc = { description: 'Install shelves' }

// const createAndSave = async (doc) => {

//     const task = new Task(doc)    
//     return await task.save()
// }

// createAndSave(doc).then((res) => {
//     console.log('Criado:', res)

// }).catch((e) => {
//     console.log(e)
// })