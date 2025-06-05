import prisma from "./prismasetup";

const add = async ()=>{
    const User =await prisma.User.create({
        data:{
            id:"1",
            name:"Rohit",
            email:"rs21rohit@gmail.com",
            password:"123"

        }
    })
}



add()
.catch(e=>
{
    console.log(e)
}
)
  .finally(async () => {
    await prisma.$disconnect()
  })
