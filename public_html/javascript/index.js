/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var jpdbbaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl;";
var jpdbIML = "/api/iml";
var dBName = "COLLEGE-DB";
var relName = "PROJECT-TABLE";
var connectionToken = "90931709|-31949325877269146|90961171";
$("#projectid").focus();

function resetForm() {
    $('#projectid').val("");
    $('#projectname').val("");
    $('#assignedto').val("");
    $('#assignmentdate').val("");
    $('#deadline').val("");

    $('#empid').focus();
}

function validateData() {
    var projectid, projectname, assignedto, assignmentdate, deadline;
    projectid = $('#projectid').val();
    projectname = $('#projectname').val();
    assignedto = $('#assignedto').val();
    assignmentdate = $('#assignmentdate').val();
    deadline = $('#deadline').val();
    if (projectid === '') {
        alert("Missing: Employee ID");
        $('#projectid').focus();
        return"";
    }
    if (projectname === '') {
        alert("Missing: Employee Name");
        $('#projectname').focus();
        return"";
    }
    if (assignedto === '') {
        alert("Missing: Employee Base Salary");
        $('#assignedto').focus();
        return"";
    }
    if (assignmentdate === '') {
        alert("Missing: House Rent Allowance");
        $('#assignmentdate').focus();
        return"";
    }
    if (deadline === '') {
        alert("Missing: Dearness Allowance");
        $('#deadline').focus();
        return"";
    }
    var jsonStrObj = {
        projectid: projectid,
        projectname: projectname,
        assignedto: assignedto,
        assignmentdate: assignmentdate,
        deadline: deadline

    };
    return JSON.stringify(jsonStrObj);
}
function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === '') {
        return "";
    }
    var putRequest = createPUTRequest(connectionToken, jsonStrObj, dBName, relName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbbaseURL, jpdbIML);
    alert(JSON.stringify(resJsonObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
    $('#projectid').focus();
}


