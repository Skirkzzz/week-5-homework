'strict'
// Assemble: Create/select DOM elements
var rootEl = $('#root');
var formEl = $('#new-project-form');
var newProjectBtn = $('#createProjectBtn');

var today = moment();
$("#date-time").text(today.format("MMM Do, YYYY HH:mm:ss"));

// Clock Timer at the Top of the page
setInterval(function() {
    var today = moment();
    $("#date-time").text(today.format("MMM Do, YYYY"));
}, 1000);

var projectList = $('#projectList');

function setFormError(message) {
    $('#project-warning').text(message);
    $('#project-warning').addClass('show');

    setTimeout(function() {
        $('#project-warning').removeClass('show');
    }, 3000);
}

function newProject() {
    var projectName = $('#project-name').val();
    var projectType = $('#project-type').val();
    var hourlyWage = $('#hourly-wage').val();
    var dueDate = $('#due-date').val();

    if (!projectName) {
        setFormError('Please enter a project name.');
        return;
    }

    var daysDue = 26; //dueDate.diff(today, 'days');
    var totalEarned = daysDue * hourlyWage;
    var deleteOption = `<button class="btn btn-danger" onclick="deleteProject(this)">Delete</button>`;
    var newProject = $(`<tr><td>${projectName}</td><td>${projectType}</td><td>${hourlyWage}</td><td>${dueDate}</td><td>${daysDue}</td><td>${totalEarned}</td><td>${deleteOption}</td></tr>`);
    return (newProject);
}

function onCreateNewProject(event) {
    event.preventDefault();
    console.log("onCreateNewProject");

    // Create a new project
    var project = newProject();
    if (!project) {
        return;
    }
    projectList.append(project);

    // Hide the New Project Modal
    $('#projectModal').modal('hide');

    // Reset the form
    resetNewProjectForm();
}

function resetNewProjectForm() {
    $('#project-name').val('');
    $("#project-type").val($("#project-type option:first").val());
    $('#hourly-wage').val('75');
    $('#due-date').val('');
}

function deleteProject(button) {
    $(button).parent().parent().remove();
}

newProjectBtn.on("click", onCreateNewProject);