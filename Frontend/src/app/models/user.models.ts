export interface User{
    nombre: string;
    apellidos: string;
    ciudad: string;
    email: string;
    telefono: string;
    password: string;
    rol: string;
}
export interface UserLogin{
    email: string;
    password: string;
}
