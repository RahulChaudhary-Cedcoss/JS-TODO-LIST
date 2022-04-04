var UserInputData = [];

function Add() {
  var InputItems = document.getElementById("new-task").value;

  UserInputData.push(InputItems);
  var input = "<ul>";
//   console.log(typeof InputItems);
  UserInputData.forEach((element, index) => {
    // console.log(index);
    input +="<li>"+element+"<input type='button' onclick='EditRow()' value='Edit'><input type='button' onclick='deleteRow("+index+")' value='del'></li>";
    // input += "<li><input type=checkbox><label>"+element+"</lable><input type=text><button class=edit>Edit</button><button class=delete>Delete</button></li>"
  });
  input += "</ul>";
  document.getElementById("incomplete-tasks").innerHTML = input;
}
function deleteRow(x) {
  UserInputData.splice(x,1)
  var input = "<ul>";
  console.log(typeof InputItems);
  UserInputData.forEach((element, index) => {
    console.log(index);
    input +="<li>"+element+"<input type='button' onclick='EditRow()' value='Edit'><input type='button' onclick='deleteRow("+index+")' value='del'></li>";
  });
  input += "</ul>";
  document.getElementById("incomplete-tasks").innerHTML = input;
  console.log(x);

}
UserInputData.forEach((element) => {
  if (element == x) {
    UserInputData.splice(count, 1);
  }
  count++;
});
