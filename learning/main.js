let username = document.querySelector(".username");
let userpass = document.querySelector(".userpass");
let submit = document.querySelector(".add");

var inputname;
var inputpass;
let arrayOfuser = [];

//-------------------------add users------------------------------------//
let arrayOfTasks = [];
let arrayOfTaskstwo = [];
let arrayOfTasksthree = [];

var useridthree = "Three";
var useridtwo = "Two";
var userid = "One";
var num = 60;

function addTaskToArray() 
{
  for(let i =1;i<=num;i++)
  {
    userid = "One"+i;
    const task = {
    id: userid,
    pass: 12345,
  };
  arrayOfTasks.push(task);
  }

  for(let i =1;i<=num;i++)
  {
    userid = "Two"+i;
    const task = {
    id: userid,
    pass: 12345,
  };
  arrayOfTaskstwo.push(task);
  }

  for(let i =1;i<=num;i++)
    {
      userid = "Three"+i;
      const task = {
      id: userid,
      pass: 12345,
    };
    arrayOfTasksthree.push(task);
    }

}

addTaskToArray() 
//-------------------------------------------------------------//


//------------------------check user-------------------------------------//
submit.onclick = function () {
	  if (username.value !== "") 
      {
        inputname = username.value;
        inputpass = userpass.value; 
        username.value = ""; 
        userpass.value = "";
        funuser();
      }
};

function funuser()
{
  for(let i =0;i<arrayOfTasks.length;i++)
  {  
   if (inputname == arrayOfTasks[i].id) 
   		{
        const taskuser = 
        {
          id: inputname,
          pass: inputpass,
        };
          arrayOfuser.push(taskuser);
          location.href="learn/index1.html";
   		}
 
  }  

  for(let i =0;i<arrayOfTaskstwo.length;i++)
  {  
   if (inputname == arrayOfTaskstwo[i].id) 
   		{
        const taskuser = 
        {
          id: inputname,
          pass: inputpass,
        };
          arrayOfuser.push(taskuser);
          location.href="learn/index2.html";
   		}
 
  } 

  for(let i =0;i<arrayOfTasksthree.length;i++)
    {  
     if (inputname == arrayOfTasksthree[i].id) 
         {
          const taskuser = 
          {
            id: inputname,
            pass: inputpass,
          };
            arrayOfuser.push(taskuser);
            location.href="learn/index3.html";
         }
   
    } 
  
}