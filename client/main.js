const app = new Vue({
    el: '#app',
    data: {
        pageName: 'kanbanboard-page',
    },
    methods: {
        changePage(page) {
            this.pageName = page;
        }
    }



    
})