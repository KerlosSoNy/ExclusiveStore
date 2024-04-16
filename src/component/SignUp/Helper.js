
export const storeUser = (data)=>{
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.data.user,
            jwt: data.data.jwt,
        })
    )
}
export default function userData(){
    const stringifiedUser = localStorage.getItem("user") || '""';
    return JSON.parse(stringifiedUser || {});
} 