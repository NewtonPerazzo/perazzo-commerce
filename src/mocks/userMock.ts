import { IUser } from "@/models/user/user";

export const mockUser: IUser = {
    id: "u1",
    name: "Maria",
    lastName: "Silva",
    createdAt: new Date().toISOString(),
    address: "Rua das Flores, 123 - São Paulo",
    phone: "+55 11 91234-5678",
    email: "maria@example.com",
};