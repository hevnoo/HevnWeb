//局部混合
//Storage-----------------
export const hunhe={
    data(){
        return{
            
        }
    },
    methods:{
        //封装storage
        set(key,value){
            localStorage.setItem(key,JSON.stringify(value));
        },
        get(key){    
            return JSON.parse(localStorage.getItem(key))
        },
        remove(key){
            localStorage.removeItem(key);
        },
        //
    },
    created(){
        
    }
}
//首页博客分页------------------
export const pages={
    data(){
        return{
            //分页
            pageList:[],
            pageSize:10,
            // currentPage:1,
            currentPage:this.$store.state.search.page_num,
            //
        }
    },
    methods:{
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.$store.commit('search/DOPAGE',this.currentPage);
        },
    }
}
//归档分页------------------
export const pages1={
    data(){
        return{
            //分页
            pageList:[],
            pageSize:10,
            currentPage:this.$store.state.search.page_num1,
            //
        }
    },
    methods:{
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.$store.commit('search/DOPAGE1',this.currentPage);
        },
    }
}

