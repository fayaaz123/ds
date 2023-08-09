let name=prompt("please enter ur name: ")
let reg_no=prompt("enter reg no:")
let choice=prompt("enter 1 to get results or 2 to exit")
switch(choice){
    case 1:
        if(reg_no==192111226)
        {
            console.log("doing good")
        }
        else if(reg_no==192111228)
        {
            console.log("trying best")
        }
        else if(reg_no==192111137)
        {
            console.log("new change has observed")
        }
        else
        {
            console.log("id not found")
        }
        break;
        case 2:
            console.log("thank you")
        break;
        default:
        console.log("visit again")
}
