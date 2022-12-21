#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue(`<........................Add Your................
............................To Do List..........>`));
type mytypes={
todo_items:string,
do_again:boolean

};
const list:string[]=[];
let again:boolean=true;
while(again===true){
let todo_entries= await inquirer.prompt([{
    type: "string",
    name: "todo_items",
    message: chalk.yellow("What Do You Want to Add in Your To Do List....?")
},
{

     type:"confirm",
     name:"do_again",
     message:chalk.green("Do You Want To Add More in Your To Do  List....?"),
     default:false

}])

const {todo_items,do_again}=todo_entries;
again=do_again;
list.push(todo_items);
}

if(list.length > 0){
console.log(chalk.cyan(`Items In Your To Do List are:-`));
list.forEach(list => {
    console.log(chalk.cyan(`{${list}}`));
})}
else{
    console.log("You To Do list is Empty");
}