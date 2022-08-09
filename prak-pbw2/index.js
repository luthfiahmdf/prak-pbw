const {createApp, ref} = Vue;
const App = createApp ({
    setup(){
    const name =ref("");
    const nameUser =ref("");
    const profil =ref("");
    const url ="https://randomuser.me/api/";

    const generateUser =async ()=>{
        const resUser =await axios.get(url);
        nameUser.value=resUser.data.results[0].name.first;
        name.value=resUser.data.results[0].name.last;
        profil.value=resUser.data.results[0].picture.large;
    };
    return{
        generateUser,
        name,
        nameUser,
        profil,

    };
    
    },
});
App.mount("#app");