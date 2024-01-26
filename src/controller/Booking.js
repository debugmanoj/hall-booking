let Hall=[{
   id:1,
    seats:4,
   amenties:"Tv,Washing Machine,Iron box ",
   price:"100 Rs",
   RoomId:"1",
   roomName:"room1",
   bookStatus:false
}]

let bookCustomer=[]

let bookedRooms=[]

let bookedCustomers=[]



const listAllDetails=(req,res)=>{
    try {
        res.status(200).send({
            message:"I am fetched Sucessful",
            
            Hall,bookCustomer,bookedRooms
        })
    } catch (error) {
        
    }
}


//Retrieve Data from booked

let findCustomer=(roomData)=>{
    for(let i=0;i<bookCustomer.length;i++){
        if(roomData.RoomId==bookCustomer[i].RoomId){
            let customerName= bookCustomer[i].customerName
            let Date=bookCustomer[i].Date
            let startTime=bookCustomer[i].startTime
            let endTime=bookCustomer[i].endTime

            let result={
               customerName:customerName,
               Date:Date,
               startTime:startTime,
               endTime:endTime
            }
            return result
        }
    }
}
const bookedRoom=(req,res)=>{
    try {
        Hall.map((val)=>{
            if(val.bookStatus){
                let customer=findCustomer(val)
                let result={
                    
                    roomName:val.roomName,
                    bookStatus:val.bookStatus,
                    customerName:customer.customerName,
                    Date:customer.Date,
                    startTime:customer.startTime,
                    endTime:customer.endTime

                }
                bookedRooms.push(result)
            }
        })
        res.status(200).send({
            message:"I am fetched Sucessful",
            
            bookedRooms
        })
    } catch (error) {
        
    }
}

const addRoom=(req,res)=>{
    try {
        let id = Hall.length?Hall[Hall.length-1].id+1:1

        req.body.id=id
        req.body.roomId=id
 
        Hall.push(req.body)

        res.status(200).send({
            message:"User Added Successfully"
        })
    } catch (error) {
        res.status(500).send({
            message:"Hello I am not added"
        })
    }
}

const bookRoom=(req,res)=>{
    try {
        for(let i=0;i<Hall.length;i++){
            if(Hall[i].id==req.body.RoomId){
                let id = bookCustomer.length?bookCustomer[bookCustomer.length-1].id+1:1
                const date = new Date();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let currentDate = `${day}-${month}-${year}`;
                req.body.Date=currentDate;
                req.body.id=id
                Hall[i].bookStatus=true
                console.log(Hall[i].bookStatus);
                bookCustomer.push(req.body)
            }
            else{
                req.body="No matching Room Id"
            }
        }
        // let id = Hall.length?Hall[Hall.length-1].id+1:1
        // req.body.id=id

        // Hall.push(req.body)

        res.status(200).send({
            message:bookCustomer
        })
    } catch (error) {
        res.status(500).send({
            message:"Hello I am not added"
        })
    }
}
const bookedCustomer=(req,res)=>{
    try {
        res.status(200).send({
            message:"I am fetched Sucessful",
            
            bookCustomer
        })
    } catch (error) {
        
    }
}
export default{
    listAllDetails,
  
    addRoom,
    bookRoom,
    bookedRoom,
    bookedCustomer
}