const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

class User{
    static async readAll(){
        const data = await prisma.user.findMany({
            include: {
                blogs: true
            }
        });
        return data;
    }

    static async getUserByUsername(username){
        const user = await prisma.user.findUnique({
            where: {
                email: username
            },
            include: {
                blogs: true
            }
        });

        return user;
    }

    static async getUserById(id){
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            include:{
                blogs: true
            }
        });
        return user;
    }

    static async readOne() {
        const data = await prisma.user.findFirst({
            include: {
                blogs: true
            }
        });

        return data;
    }

    static async create(data){
        const result = await prisma.user.create({
            data:{
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
        return result;
    }
}

module.exports = User;