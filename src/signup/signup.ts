export async function register (name: string, passwd: string, confirmPasswd: string) {
    if (passwd !== confirmPasswd) {
        return "Senhas não conferem"
    }
    let points: number = 0
    if (passwdCheck(passwd, points) < 2) {
        return 'Senha fraca'
    }
    const res: any = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, password: passwd})
    })
    const resJson: any = await res.json()
    console.log(resJson.msg)
    return resJson.msg
}

export function passwdCheck(password: string, points: number) {
    if (password.length >= 8) points++;
    if (/[0-9]/.test(password)) points++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) points++;
    if (/[^a-zA-Z0-9]/.test(password)) points++;
    return points
}