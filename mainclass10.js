#!/usr/bin/env node
//  Class 10th onsiet May19,2024(sunday 9-12) , Coding by Naushad Hussain , Github username : (focus2learn)
// Iterface Object with merged array
// import packages
import chalk from "chalk";
import inquirer from "inquirer";
// Assign varibales and Arrays
let new_array = [];
let result_title = "";
let coll_of_emp = [
    {
        emp_id: 2001,
        emp_name: "Muiz Hussain",
        emp_salary: 150000,
        emp_join_date: "jan 2005"
    },
    {
        emp_id: 2002,
        emp_name: "Ahmed Raza",
        emp_salary: 100000,
        emp_join_date: "jan 2006",
        emp_phone: "0333256789",
    },
    {
        emp_id: 2003,
        emp_name: "Moosa Amjad",
        emp_salary: 65000,
        emp_join_date: "feb 2006",
        emp_phone: "0321567889",
    }
];
// let filterbyslary = coll_of_emp.filter((employee)=> employee.emp_salary > 65000);
// let filterbyslary1 = coll_of_emp.filter((employee)=> employee.emp_id == 2002);
// let filterbyslary2= coll_of_emp.filter((employee)=> employee.emp_name.includes("Amjad") );
// console.log(filterbyslary, filterbyslary1, filterbyslary2)
let condition = true;
while (condition) {
    // TASK TO PERFORM AS PER SELECTION
    console.clear();
    console.log(chalk.bold.green("\n\n\n\n\t\t\t........................................................."));
    console.log(chalk.bold.green(chalk.bold.green("\t\t\t\t\tFETCO ~ IDEAL WATER SOLUTIONS")));
    console.log(chalk.bold.green("\t\t\t\t  ( Employee Database Management System )"));
    console.log(chalk.bold.green("\t\t\t.........................................................."));
    console.log("\n\t\t\t\t  Add     Employee Record..........( 1 )");
    console.log("\n\t\t\t\t  Find    Employee Record .........( 2 )");
    console.log("\n\t\t\t\t  Update  Employee Record .........( 3 )");
    console.log("\n\t\t\t\t  Print   Employee Record .........( 4 )");
    console.log("\n\t\t\t\t  Close   Program .................( 5 )");
    console.log(chalk.bold.green("\t\t\t.........................................................."));
    console.log(chalk.bold.green("\t\t\t\t     ( Database Copy-Rights Reserved )"));
    console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
    console.log(chalk.bold.green("\t\t\t..........................................................\n"));
    // get input choice to perform task
    const empdata = await inquirer.prompt([
        {
            name: "opt1",
            type: "number",
            message: chalk.bold.green("\n\t\tEnter Option Number ( 1 - 5 )....."),
        }
    ]);
    // IF condition as per above Task Window
    if (empdata.opt1 === 1) // Task - 1. Add new reocrd 
     {
        result_title = " A D D -- ";
        const empdata2 = await inquirer.prompt([
            {
                name: "empid",
                type: "string",
                message: chalk.bold.green("\n\tEnter New  ID ....."),
            },
            {
                name: "empname",
                type: "string",
                message: chalk.bold.green("\n\tEnter Employee name ....."),
            },
            {
                name: "empsalary",
                type: "string",
                message: chalk.bold.green("\n\tEnter Employee Salary ....."),
            },
            {
                name: "joindate",
                type: "string",
                message: chalk.bold.green("\n\tEnter Joining Date ....."),
            },
            {
                name: "empphone",
                type: "number",
                message: chalk.bold.green("\n\tEnter Enter Employee Contact....."),
            },
        ]);
        // Push Add new record 
        coll_of_emp.push({
            emp_id: empdata2.empid,
            emp_name: empdata2.empname,
            emp_salary: empdata2.empsalary,
            emp_join_date: empdata2.joindate,
            emp_phone: empdata2.empphone,
        });
        console.clear();
        // Display Data from Object after New Record Addition
        console.log(chalk.bold.green("\n\t\t\t.... NEW RECORD ADDITION OUTPUT....    \n"));
        console.log("\n\t\t EMP-ID        EMP-NAME        EMP-SALARY        JOIN-DATE          PHONE ");
        console.log("\t\t ........................................................................... ");
        for (let key in coll_of_emp) {
            console.log("\t\t" + coll_of_emp[key].emp_id, "\t", coll_of_emp[key].emp_name, "     \t", coll_of_emp[key].emp_salary, "     \t", coll_of_emp[key].emp_join_date, "     \t", coll_of_emp[key].emp_phone);
        }
        console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
    }
    // FIND INDIVIDUAL RECORD FROM OBJECT ARRAY....
    else if (empdata.opt1 === 2) // Task - 2. Find a Particular record 
     {
        for (let key in coll_of_emp) {
            console.log("\t\t" + coll_of_emp[key].emp_id);
        }
        const emp_Id = await inquirer.prompt([
            {
                name: "empId1",
                type: "number",
                message: chalk.bold.green("\n\tEnter Employee  ID to Find Record ....."),
            }
        ]);
        console.clear();
        let findreocord = coll_of_emp.find(employee => employee.emp_id === emp_Id.empId1); // FIND FUNCTION
        console.log(chalk.bold.green("\n\n\t\t\t\t.............. FIND RECORD OUTPUT...............    \n"));
        console.log("\n\t\t EMP-ID        EMP-NAME        EMP-SALARY        JOIN-DATE          PHONE ");
        console.log("\t\t ........................................................................... ");
        // Loop for...in to display found record
        for (const key in findreocord) {
            console.log("\t\t  " + findreocord.emp_id, "\t    ", findreocord.emp_name, "     \t", findreocord.emp_salary, "     \t", findreocord.emp_join_date, "     \t", findreocord.emp_phone);
            // Calculate Allowance from Basic Salary...
            let basic_salary = findreocord?.emp_salary;
            let fuel_allow = basic_salary * 5 / 100;
            let med_allow = basic_salary * 20 / 100;
            let gros_salary = basic_salary + fuel_allow + med_allow;
            let leave_dedu = Math.floor(Math.random() * 4000 + 500);
            let net_salary = gros_salary - leave_dedu;
            // Display Employee  Allowances and Net Salary...
            console.log("\n\n\t\t ........................................................................... ");
            console.log("\n\t\t Fuel-Allow   Medical-Allow   Gross-SALARY   Leave-Deduction    Net-Salary ");
            console.log("\t\t ........................................................................... ");
            console.log("\t\t  " + fuel_allow, "\t      ", med_allow, "     \t", gros_salary, "     \t  ", leave_dedu, "     \t ", net_salary);
            console.log("\t\t ........................................................................... ");
            console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
            break; // End of Find RECORD....
        }
    }
    else if (empdata.opt1 === 3) // Task - 3. UPDATE record , Modify and Delete 
     {
        for (let key in coll_of_emp) {
            console.log("\t\t" + coll_of_emp[key].emp_id);
        }
        const update = await inquirer.prompt([
            {
                name: "update1",
                type: "list",
                message: chalk.bold.green("\n\t Select one of the Following Choices ....."),
                choices: ["               MODIFY RECORD ....", "               DELETE RECORD ...."],
            }
        ]);
        console.clear();
        if (update.update1 === "               MODIFY RECORD ....") // MODIFY RECORD FROM OBJECT, CHOICE NO. 1
         {
            for (let key in coll_of_emp) {
                console.log("\t\t" + coll_of_emp[key].emp_id);
            }
            const emp_Id = await inquirer.prompt([
                {
                    name: "empId1",
                    type: "number",
                    message: chalk.bold.green("\n\tEnter Employee  ID to MODIFY Record ....."),
                }
            ]);
            let findreocord = coll_of_emp.find(employee => employee.emp_id === emp_Id.empId1); // FIND FUNCTION
            let findlength = Object.getOwnPropertyNames(findreocord);
            let a = 1;
            for (let obj in findreocord) {
                console.log("\t\t  ", a, "   -", obj);
                ++a;
            }
            const update3 = await inquirer.prompt([
                {
                    name: "opt3",
                    type: "number",
                    message: chalk.bold.green("\n\tWhat You Want to Modify, Enter Number....."),
                }
            ]);
            for (let obj in findreocord) {
                if (update3.opt3 == 1) {
                    const update4 = await inquirer.prompt([
                        {
                            name: "opt4",
                            type: "number",
                            message: chalk.bold.green("\n\tEnter correct ID No ....."),
                        }
                    ]);
                    findreocord.emp_id = update4.opt4;
                    break;
                }
                else if (update3.opt3 == 2) {
                    const update5 = await inquirer.prompt([
                        {
                            name: "opt5",
                            type: "string",
                            message: chalk.bold.green("\n\tEnter correct Name ....."),
                        }
                    ]);
                    findreocord.emp_name = update5.opt5;
                    break;
                }
                else if (update3.opt3 == 3) {
                    const update6 = await inquirer.prompt([
                        {
                            name: "opt6",
                            type: "number",
                            message: chalk.bold.green("\n\tEnter correct Salary ....."),
                        }
                    ]);
                    findreocord.emp_salary = update6.opt6;
                    break;
                }
                else if (update3.opt3 == 4) {
                    const update7 = await inquirer.prompt([
                        {
                            name: "opt7",
                            type: "string",
                            message: chalk.bold.green("\n\tEnter correct Joining Date ....."),
                        }
                    ]);
                    findreocord.emp_join_date = update7.opt7;
                    break;
                }
                else if (update3.opt3 == 5) {
                    const update8 = await inquirer.prompt([
                        {
                            name: "opt8",
                            type: "string",
                            message: chalk.bold.green("\n\tEnter correct phone number ....."),
                        }
                    ]);
                    findreocord.emp_join_date = update8.opt8;
                    break;
                }
            }
            console.log(chalk.bold.green("\n\n\t\t\t\t.........MODIFIED UPDATE RECORD ...............    \n"));
            console.log("\n\t\t EMP-ID        EMP-NAME        EMP-SALARY        JOIN-DATE          PHONE ");
            console.log("\t\t ........................................................................... ");
            // Loop for...in to display found record
            for (const key in findreocord) {
                console.log("\t\t  " + findreocord.emp_id, "\t    ", findreocord.emp_name, "     \t", findreocord.emp_salary, "     \t", findreocord.emp_join_date, "     \t", findreocord.emp_phone);
                console.log("\t\t ........................................................................... ");
                break; // End of Find RECORD....
            }
            console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
        }
        else //  DELETE RECORD FROM OBJECT  CHOICE NO. 3
         {
            for (let key in coll_of_emp) {
                console.log("\n\n\t\t" + coll_of_emp[key].emp_id);
            }
            const del_Id = await inquirer.prompt([
                {
                    name: "delId1",
                    type: "number",
                    message: chalk.bold.green("\n\tEnter   Employee - ID   to DELETE Record ....."),
                }
            ]);
            //  let findreocord = coll_of_emp.find(employee => employee.emp_id === del_Id.delId1) // FIND FUNCTION
            //  let findlength = Object.getOwnPropertyNames(findreocord)
            //  let a = 1
            if (del_Id.delId1 === 2001) {
                const del_confirm = await inquirer.prompt([
                    {
                        name: "del_confirm1",
                        type: "confirm",
                        message: chalk.bold.green("\n\tAre you Sure, Delete this Record....."),
                        default: "false",
                    }
                ]);
                if (del_confirm.del_confirm1 === true) {
                    let del_reocord = coll_of_emp.splice(0, 1);
                    let rest_record1 = coll_of_emp;
                    for (let key of rest_record1) {
                        console.log("\n\t\t  " + key.emp_id, "\t    ", key.emp_name, "     \t", key.emp_salary, "     \t", key.emp_join_date, "     \t", key.emp_phone);
                        console.log("\t\t ........................................................................... ");
                    }
                }
            }
            else if (del_Id.delId1 === 2002) {
                const del_confirm = await inquirer.prompt([
                    {
                        name: "del_confirm1",
                        type: "confirm",
                        message: chalk.bold.green("\n\tAre you Sure, Delete this Record....."),
                        default: "false",
                    }
                ]);
                if (del_confirm.del_confirm1 === true) {
                    let del_reocord = coll_of_emp.splice(1, 1);
                    let rest_record1 = coll_of_emp;
                    for (let key of rest_record1) {
                        console.log("\n\t\t  " + key.emp_id, "\t    ", key.emp_name, "     \t", key.emp_salary, "     \t", key.emp_join_date, "     \t", key.emp_phone);
                        console.log("\t\t ........................................................................... ");
                    }
                    console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
                }
            }
            else {
                const del_confirm = await inquirer.prompt([
                    {
                        name: "del_confirm1",
                        type: "confirm",
                        message: chalk.bold.green("\n\tAre you Sure, Delete this Record....."),
                        default: "false",
                    }
                ]);
                if (del_confirm.del_confirm1 === true) {
                    let del_reocord = coll_of_emp.splice(2, 1);
                    let rest_record1 = coll_of_emp;
                    for (let key of rest_record1) {
                        console.log("\n\t\t  " + key.emp_id, "\t    ", key.emp_name, "     \t", key.emp_salary, "     \t", key.emp_join_date, "     \t", key.emp_phone);
                        console.log("\t\t ........................................................................... ");
                    }
                    console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
                }
            }
        }
    }
    else if (empdata.opt1 === 4) {
        console.clear();
        console.log(chalk.bold.green("\n\n\t\t\t\t.............. ALL EMPLOYEE RECORD OUTPUT...............    \n"));
        console.log("\n\t\t EMP-ID        EMP-NAME        EMP-SALARY        JOIN-DATE          PHONE           Net-Salary");
        console.log("\t\t ............................................................................................... ");
        for (let sal of coll_of_emp) {
            let basic_salary = sal.emp_salary;
            let fuel_allow = basic_salary * 5 / 100;
            let med_allow = basic_salary * 20 / 100;
            let gros_salary = basic_salary + fuel_allow + med_allow;
            let leave_dedu = Math.floor(Math.random() * 4000 + 500);
            let net_salary = gros_salary - leave_dedu;
            console.log("\n\t\t  " + sal.emp_id, "\t    ", sal.emp_name, "     \t", sal.emp_salary, "     \t", sal.emp_join_date, "     \t", sal.emp_phone, "     \t", net_salary);
            console.log("\t\t .................................................................................................. ");
        }
        console.log(chalk.bold.green("\t\t\t\t     ( Github username : (focus2learn) )"));
    }
    else {
        console.clear();
        console.log(chalk.bold.green("\n\n\t\t\t.......................... END OF PROGRAM ...................."));
        console.log(chalk.bold.green("\t\t\t.....................CODING BY Naushad Hussain ............... "));
        console.log(chalk.bold.green("\t\t\t....................Github Username : focus2learn.............. "));
        console.log(chalk.bold.green("\n\n\t\t\t\t     ( Thanks for Using Employee Management Program )"));
    }
    const repeat = await inquirer.prompt({
        name: "repeat1",
        type: "confirm",
        message: "\n\n\t\t Do You want More Transactions........",
        default: false,
    });
    condition = repeat.repeat1;
}
