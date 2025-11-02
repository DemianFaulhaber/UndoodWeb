import {User, Child, RetPoint} from '../models';

async function readUsers(){
    try {
        const users =  await User.findAll();
        return new Response (JSON.stringify(users), {status: 200});
    } catch (error) {
        return new Response ('Error al leer usuarios', {status: 500, statusText: (error as Error).message});
    }
}

async function readChildren(){
    try {
        const children =  await Child.findAll();
        return new Response (JSON.stringify(children), {status: 200});
    } catch (error) {
        return new Response ('Error al leer niños', {status: 500, statusText: (error as Error).message});
    }
}

async function readRetPoints(){
    try {
        const retPoints =  await RetPoint.findAll();
        return new Response (JSON.stringify(retPoints), {status: 200});
    } catch (error) {
        return new Response ('Error al leer puntos de retiro', {status: 500, statusText: (error as Error).message});
    }
}

export async function GET(req:Request) {
    const url = new URL(req.url);
    const type = url.searchParams.get('type');

    if(type === 'users'){
        return await readUsers();
    } else if(type === 'children'){
        return await readChildren();
    } else if(type === 'retirement_points'){
        return await readRetPoints();
    } else {
        return new Response ('Tipo de lectura inválido', {status: 400});
    }
}