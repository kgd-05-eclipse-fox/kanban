// * Sweetalert2 Toast
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
// * End Of Sweetalert2 Toast

const app = new Vue({
    el: '#app',
    data: {
        display: 'kanban-app',
        user: 'admin@kanban.com',
        kanban: [
            {
                id: 1,
                title: 'Deploy Server FancyTodo',
                description: 'Deploy server ke heroku sebelum melewati deadline',
                status: 0,
                UserId: 'akbarhabiby@hacktiv8.com',
                createdAt: '2020-11-03'
            },
            {
                id: 2,
                title: 'Design Kanban',
                description: 'Design Kanban sebelum mempelajari Vue.js',
                status: 0,
                UserId: 'akbarhabiby@icloud.com',
                createdAt: '2020-11-03'
            },
            {
                id: 3,
                title: 'Setting Server Kanban',
                description: 'Cicil setup server kanban agar tugas cepat selesai',
                status: 0,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 4,
                title: 'Makan bersama anak Hacktiv8',
                description: 'Makan bersama anak Hacktiv8 Kelapa Gading Batch-5 setelah semua tugas selesai',
                status: 1,
                UserId: 'akbarhabiby@hacktiv8.com',
                createdAt: '2020-11-03'
            },
            {
                id: 5,
                title: 'Jalan jalan bersama Farhan',
                description: 'Jalan bersama Farhan untuk refeshing setelah mengerjakan tugas',
                status: 1,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 6,
                title: 'Makan Sushi',
                description: 'Mencari Sushi termurah di kawasan Jakarta',
                status: 1,
                UserId: 'akbarhabiby@icloud.com',
                createdAt: '2020-11-03'
            },
            {
                id: 7,
                title: 'Beli Apple iPhone 12 Pro Max',
                description: 'Membeli HP baru karena kebutuhan dan tertarik akan fitur yang ditawarkan',
                status: 1,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 8,
                title: 'Beli Keychron K8',
                description: 'Beli Keyboard agar ngoding lebih enak dan lebih cepat',
                status: 1,
                UserId: 'akbarhabiby@hacktiv8.com',
                createdAt: '2020-11-03'
            },
            {
                id: 9,
                title: 'Renovasi Kamar',
                description: 'Renovasi Kamar setelah selesai Hacktiv8',
                status: 1,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 10,
                title: 'Develop Client Kanban',
                description: 'Kanban sedang dalam proses develop',
                status: 2,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 11,
                title: 'Develop Server Kanban',
                description: 'Server Kanban sedang dalam proses development oleh tim terkait',
                status: 2,
                UserId: 'akbarhabiby@icloud.com',
                createdAt: '2020-11-03'
            },
            {
                id: 12,
                title: 'Setup Firebase & Heroku',
                description: 'Setup Firebase dan Heroku agar dapat memahami tentang deploy dikemudian hari',
                status: 2,
                UserId: 'akbarhabiby@hacktiv8.com',
                createdAt: '2020-11-03'
            },
            {
                id: 13,
                title: 'Fix Bugs Portofolio-1',
                description: 'Memperbaiki Bugs Portofolio-1 dimana setelah logout sistem menambahkan event listener lagi',
                status: 2,
                UserId: 'admin@kanban.com',
                createdAt: '2020-11-03'
            },
            {
                id: 14,
                title: 'Belajar Untuk LC-1',
                description: 'Belajar untuk LC-1 Week-2 Phase-2 agar mendapatkan nilai maksimal',
                status: 3,
                UserId: 'akbarhabiby@hacktiv8.com',
                createdAt: '2020-11-03'
            }
        ]
    },
    methods: {
        logout() {
            Swal.fire({
                title: 'Good Bye :(',
                text: 'Are you sure want to logout?',
                icon: 'question',
                reverseButtons: true,
                showCancelButton: true,
                focusConfirm: false
            })
                .then(result => {
                    if(result.isConfirmed) {
                        this.display = 'login-page'
                    }
                })
        },
        addTask() {
            Swal.fire({
                title: 'Add Task',
                html: `<input type="text" id="title" class="swal2-input" placeholder="Title">
                <input type="text" id="description" class="swal2-input" placeholder="Description">`,
                confirmButtonText: 'Add',
                showCancelButton: true,
                reverseButtons: true,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all form`)
                    }
                    return { title: title, description: description }
                }
            }).then((result) => {
                Swal.fire(`
                    Title: ${result.value.title}
                    Description: ${result.value.description}
                `)
            })
        },
        editTask(id) {
            const whatToEdit = this.kanban.filter( task => task.id == id)[0]

            Swal.fire({
                title: 'Edit Task',
                html: `<input type="text" id="title" class="swal2-input" placeholder="Title" value="${whatToEdit.title}">
                <input type="text" id="description" class="swal2-input" placeholder="Description" value="${whatToEdit.description}">`,
                confirmButtonText: 'Edit Task',
                showCancelButton: true,
                reverseButtons: true,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all form`)
                    }
                    return { title: title, description: description }
                }
            })
                .then(result => {
                    if(result.isConfirmed) {
                        Toast.fire({
                            icon: 'success',
                            title: 'Successfully Edit Task'
                        })
                    }
                })
        },
        deleteTask(id) {
            const whatToDelete = this.kanban.filter( task => task.id == id)[0]

            Swal.fire({
                title: `Delete Task`,
                text: `Are you sure want to delete task ${whatToDelete.title} ?`,
                icon: `warning`,
                reverseButtons: true,
                showCancelButton: true,
                confirmButtonColor: '#d33',
                focusConfirm: false
            })
                .then(result => {
                    if(result.isConfirmed) {
                        Toast.fire({
                            icon: 'success',
                            title: 'Successfully Delete Task'
                        })
                    }
                })

        }
    },
    computed: {
        backlogs: function() {
            return this.kanban.filter( task => task.status == 0)
        },
        todos: function() {
            return this.kanban.filter( task => task.status == 1)
        },
        developments: function() {
            return this.kanban.filter( task => task.status == 2)
        },
        dones: function() {
            return this.kanban.filter( task => task.status == 3)
        }
    }
})