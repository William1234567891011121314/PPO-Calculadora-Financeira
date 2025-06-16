import axios from 'axios';

export default async function register (name: string, passwd: string, confirmPasswd: string) {
    if (passwd !== confirmPasswd) {
        return alert("Senhas não conferem")
    }
    const newUser = {
        name: name,
        password: passwd
    }
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/signup', newUser)
    const resJson = await res.data.json()
    return resJson
};