import { User, Child } from '../models';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

interface NewUserBody {
    name: string;
    email: string;
    cel?: string;
    company?: string;
    childrenid?: number | string | null;
}

async function addUser(body: NewUserBody) {
    const { name, email, cel, company } = body;
    try {
        const user = await User.create({ name, email, cel, company });
        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        return new Response('Error al agregar usuario', { status: 500, statusText: (error as Error).message });
    }
}

async function asignChildrenToUser(userId: number, childrenId: number[]) {
    try {
        await Child.update(
            { available : true },
            { where: { id: childrenId } }
        );
    } catch (error) {
        return new Response('Error al asignar disponibilidad', { status: 500, statusText: (error as Error).message });
    }
    try {
        await User.update(
            { children: childrenId },
            { where: { id: userId } }
        );
    } catch (error) {
        return new Response('Error al asignar niños al usuario', { status: 500, statusText: (error as Error).message });
    }
    return new Response('Niños asignados correctamente', { status: 200 });
}

async function sendMail(to: string, userName: string, childrenId: number) {
    const html = `<h1>¡Bienvenido a la campaña de Navidad, ${userName}!</h1>
    <p>childrenId: ${childrenId}</p>`;
    try {
        await resend.emails.send({
            from:'info@undoodargentina.com.ar',
            to: to,
            subject: 'Bienvenido a la campaña de Navidad',
            html: html
        });
    } catch (error) {
        console.error('Error al enviar correo:', error);
    }
}

export async function POST(req: Request) {
    const body = await req.json() as NewUserBody;

    if(1 > 2){
        const userResponse = await addUser(body);
        if (userResponse.status !== 201) {
            return userResponse;
        }
        const userData = await userResponse.json() as { idusers: number };
        if (body.childrenid) {
            const childrenIds = Array.isArray(body.childrenid)
                ? body.childrenid.map(id => Number(id))
                : [Number(body.childrenid)];
            const assignResponse = await asignChildrenToUser(userData.idusers, childrenIds);
            if (assignResponse.status !== 200) {
                return assignResponse;
            }
        }
    }

    console.log(body);
    return await sendMail(body.email, body.name, 1);
}