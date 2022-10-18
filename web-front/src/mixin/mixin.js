//局部混合
export const hunhe={
    data(){
        
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

//2
export const hunhe1={
    data(){
        
    }
}