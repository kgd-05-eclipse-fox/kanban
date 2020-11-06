<template>
    <nav class="navbar navbar-expand-lg navbar-trello bg-trello">
        <a class="go-home navbar-brand" href="/">Kanban</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="go-home nav-link" href="/" @click.prevent="changePage('kanban-page')">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="add-kanban nav-link" v-b-modal.modal-prevent-closing href="/" @click.prevent="changePage('add-task')">Add Task <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <!-- Logout -->
            <div class="dropdown show">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ user.email }}
                </a>
                <div class="dropdown-menu bg-trello" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/" @click.prevent="logout">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['user'],
        methods: {
            addTask() {
                this.$emit('addTask')
            },
            logout() {
                this.$emit('logout')
            },
            changePage(pageName) {
                this.$emit('changePage', pageName)
            }
        }
    }
</script>