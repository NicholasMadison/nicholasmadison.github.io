const addCourseButton = document.getElementById('addCourse');
const coursesDiv = document.getElementById('courses');
const form = document.getElementById('byoForm');

// JavaScript to add and delete course sections dynamically
document.getElementById("addCourse").addEventListener("click", function () {
    // Create a container for the new course fields
    const courseContainer = document.createElement("div");
    courseContainer.classList.add("courseSection");

    // Create Course Title input
    const courseTitleLabel = document.createElement("div");
    courseTitleLabel.textContent = "Course Title";
    const courseTitleInput = document.createElement("input");
    courseTitleInput.type = "text";
    courseTitleInput.name = "courseTitle";
    courseTitleInput.classList.add("courseField");

    // Create Course Description textarea
    const courseDescLabel = document.createElement("div");
    courseDescLabel.textContent = "Course Description";
    const courseDescInput = document.createElement("textarea");
    courseDescInput.name = "courseDescription";
    courseDescInput.rows = 4;
    courseDescInput.cols = 50;

    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button"; // Prevents form submission
    deleteButton.classList.add("deleteButton");
    
    // Add an event listener to delete this course container
    deleteButton.addEventListener("click", function () {
        courseContainer.remove();
    });

    // Append inputs and delete button to the course container
    courseContainer.appendChild(courseTitleLabel);
    courseContainer.appendChild(courseTitleInput);
    courseContainer.appendChild(courseDescLabel);
    courseContainer.appendChild(courseDescInput);
    courseContainer.appendChild(deleteButton);

    // Append the new course container to the form
    document.getElementById("course").appendChild(courseContainer);
});


addCourseButton.addEventListener('click', function() {
    const courseField = document.createElement('div');
    courseField.innerHTML = `
        <input type="text" name="course" class="courseField">
        <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesDiv.appendChild(courseField);

    courseField.querySelector('.deleteCourse').addEventListener('click', function() {
        coursesDiv.removeChild(courseField);
    });
});

function handleFormSubmission() {
   const formData = new FormData(form);
   const image = URL.createObjectURL(formData.get('image'));
    const formResult = document.createElement('div');
    formResult.innerHTML = `
              <ul>
        <figure id="img1">
        <img src="${image}" class="img-ranger-icon center">
        <figcaption> ${formData.get('caption')}</figcaption>
        </figure>
            <li><b>Personal background:</b> ${formData.get('personalBackground')} </li>
            <li><b>Academic background:</b> ${formData.get('academicBackground')}</li>
            <li><b>Background in this subject:</b>  ${formData.get('professionalBackground')}</li>
            <li><b>Primary Computer Platform: </b> ${formData.get('platform')}</li>
            <li><b>Courses I'm Taking and Why: </b> </li>
            <li class="indent"><b>${formData.get('course1')}</b>- ${formData.get('course-description1')}</li>
            <li class="indent"><b>${formData.get('course2')}</b>- ${formData.get('course-description2')}</li>
            <li class="indent"><b>${formData.get('course3')}</b>- ${formData.get('course-description3')}</li>
            <li class="indent"><b>${formData.get('course4')}</b>- ${formData.get('course-description4')}</li>
            <li><b>Funny/Interesting item about yourself:</b> ${formData.get('funnyThing')}</li>
            <li><b>I'd also like to share:</b> ${formData.get('anythingElse')}</li>
          </ul>
    `;
    const courses = formData.getAll('course1').filter((c) =>  c.trim());
    if (courses.length) {
        const courseList = document.createElement('ul');
        courses.forEach((course) => {
            const li = document.createElement('li');
            li.textContent = course;
            courseList.appendChild(li);
        });
        formResult.appendChild(courseList);
       
    }
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Form';
    resetButton.addEventListener('click', () => location.reload());
    form.parentNode.replaceChild(formResult, form);
    formResult.appendChild(resetButton);
}


form.addEventListener('submit',  (event) => {
    event.preventDefault();
       handleFormSubmission();
});
form.addEventListener('reset', function() {
    form.querySelectorAll('[required]').forEach((field) => field.style.border = '');
    document.getElementById('courses').innerHTML = '<input type="text" name="course" class="courseField">';
});