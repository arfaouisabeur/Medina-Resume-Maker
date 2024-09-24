// regex for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    ANY: 'any',
}

// user inputs elements
let firstnameElem = mainForm.firstname,
    middlenameElem = mainForm.middlename,
    lastnameElem = mainForm.lastname,
    linkl = mainForm.linkl,
    designationElem = mainForm.designation,
    addressElem = mainForm.address,
    emailElem = mainForm.email,
    phonenoElem = mainForm.phoneno,
    gitElem = mainForm.git;

// display elements
let nameDsp = document.getElementById('fullname_dsp'),
    linklDsp = document.getElementById('linkl_dsp'),
    phonenoDsp = document.getElementById('phoneno_dsp'),
    emailDsp = document.getElementById('email_dsp'),
    addressDsp = document.getElementById('address_dsp'),
    designationDsp = document.getElementById('designation_dsp'),
    gitDsp = document.getElementById('git_dsp'),
    projectsDsp = document.getElementById('projects_dsp'),
    achievementsDsp = document.getElementById('achievements_dsp'),
    skillsDsp = document.getElementById('skills_dsp'),
    educationsDsp = document.getElementById('educations_dsp'),
    experiencesDsp = document.getElementById('experiences_dsp');
    languagesDsp= document.getElementById('languages_dsp');
// first value is for the attributes and     second one passes the nodelists
    gitDsp.innerHTML=""
    linklDsp.innerHTML=""
const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    // first loop deals with the no of repeaters value
    for(let i = 0; i < elemsDataCount; i++){
        let dataObj = {}; // creating an empty object to fill the data
        // second loop fetches the data for each repeaters value or attributes 
        for(let j = 0; j < elemsAttrsCount; j++){
            // setting the key name for the object and fill it with data
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
}

const getUserInputs = () => {

    // achivements 
    let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
    achievementsDescriptionElem = document.querySelectorAll('.achieve_description');

    // experiences
    let expTitleElem = document.querySelectorAll('.exp_title'),
    expOrganizationElem = document.querySelectorAll('.exp_organization'),
    expLocationElem = document.querySelectorAll('.exp_location'),
    expStartDateElem = document.querySelectorAll('.exp_start_date'),
    expEndDateElem = document.querySelectorAll('.exp_end_date'),
    expDescriptionElem = document.querySelectorAll('.exp_description');

    // education
    let eduSchoolElem = document.querySelectorAll('.edu_school'),
    eduDegreeElem = document.querySelectorAll('.edu_degree'),
    eduCityElem = document.querySelectorAll('.edu_city'),
    eduStartDateElem = document.querySelectorAll('.edu_start_date'),
    eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'),
    eduDescriptionElem = document.querySelectorAll('.edu_description');

    let projTitleElem = document.querySelectorAll('.proj_title'),
    projLinkElem = document.querySelectorAll('.proj_link'),
    projDescriptionElem = document.querySelectorAll('.proj_description');

    let skillT = document.querySelectorAll('.skillt');
    skillD = document.querySelectorAll('.skilld');


    let languageT = document.querySelectorAll('.languaget');
    languageL = document.querySelectorAll('.languagel');

    // event listeners for form validation
    firstnameElem.addEventListener('change', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('change', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('change', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
    phonenoElem.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Phone Number'));
    emailElem.addEventListener('change', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    designationElem.addEventListener('change', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));

    achievementsTitleElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    achievementsDescriptionElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    expTitleElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expLocationElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, "Location")));
    expStartDateElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expEndDateElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expDescriptionElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    eduSchoolElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduDegreeElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduCityElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'City')));
    eduStartDateElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
    eduDescriptionElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    projTitleElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    projLinkElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    skillT.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    skillD.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    languageT.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    languageL.forEach(item => item.addEventListener('change', (e) => validateFormData(e.target, validType.ANY, 'Description')));



    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        git: gitElem.value,
        linkl:linkl.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skillt','skilld'], skillT,skillD),
        languages:fetchValues(['languaget','languagel'], languageT,languageL),
    }
};

function validateFormData(elem, elemType, elemName){
    // checking for text string and non empty string
    if(elemType == validType.TEXT){
        if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only text string
    if(elemType == validType.TEXT_EMP){
        if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for email
    if(elemType == validType.EMAIL){
        if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for phone number
    if(elemType == validType.PHONENO){
        if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only empty
    if(elemType == validType.ANY){
        if(elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

// adding the invalid text
function addErrMsg(formElem, formElemName){
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// removing the invalid text 
function removeErrMsg(formElem){
    formElem.nextElementSibling.innerHTML = "";
}
const formatDate = (dateString) => {
    if (!dateString) return "";
    
    let date = new Date(dateString);
    let options = { year: 'numeric', month: 'long' };
    
    return date.toLocaleDateString('en-US', options);
}

const showExperienceData = (experiences, container) => {
    // Check if the experiences array is empty or contains only invalid experiences
    if (!experiences || experiences.length === 0 || experiences.every(exp => !exp.exp_title.trim() && !exp.exp_organization.trim())) {
        container.innerHTML = ""; // Clear the container if no valid experiences
        return;
    }

    container.innerHTML = ""; // Clear the container first

    experiences.forEach(exp => {
        let expItem = document.createElement('div');
        expItem.classList.add('experience-item');

        let expTitleAndOrganization = document.createElement('h3');
        expTitleAndOrganization.innerHTML = `${exp.exp_title || ""} - ${exp.exp_organization || ""}`;
        expTitleAndOrganization.classList.add('exp-title-organization');

        let expDatesAndLocation = document.createElement('p');
        expDatesAndLocation.innerHTML = `<strong>${formatDate(exp.exp_start_date)} – ${formatDate(exp.exp_end_date)} | ${exp.exp_location || ""}</strong>`;
        expDatesAndLocation.classList.add('exp-dates-location');

        let expDescription = document.createElement('span');
        expDescription.innerHTML = exp.exp_description || "";
        expDescription.classList.add('desi');

        expItem.appendChild(expTitleAndOrganization);
        expItem.appendChild(expDatesAndLocation);
        expItem.appendChild(expDescription);

        container.appendChild(expItem);
    });
};

const showAchiData = (achievements, container) => {
    // Check if the achievements array is empty or contains only invalid achievements
    if (!achievements || achievements.length === 0 || achievements.every(achi => !achi.achieve_title.trim())) {
        container.innerHTML = ""; // Clear the container if no valid achievements
        return;
    }

    container.innerHTML = ""; // Clear the container

    achievements.forEach(achi => {
        let achiItem = document.createElement("div");
        achiItem.classList.add("achievement-item");

        let achiTitle = document.createElement("h3");
        achiTitle.innerHTML = achi.achieve_title || "";
        achiTitle.classList.add("achiT");

        let achiDesc = document.createElement("p");
        achiDesc.innerHTML = `<strong>${achi.achieve_description || ""}</strong>`;
        achiDesc.classList.add("achiD");

        achiItem.appendChild(achiTitle);
        achiItem.appendChild(achiDesc);

        container.appendChild(achiItem);
    });
};

const showPorData = (projects, container) => {
    // Check if the projects array is empty or contains only invalid projects
    if (!projects || projects.length === 0 || projects.every(proj => !proj.proj_title.trim())) {
        container.innerHTML = ""; // Clear the container if no valid projects
        return;
    }

    container.innerHTML = ""; // Clear the container

    projects.forEach(pro => {
        let proItem = document.createElement('div');
        proItem.classList.add('pro-item');

        let proT = document.createElement('h3');
        proT.innerHTML = `${pro.proj_title || ""}`;
        proT.classList.add('pro-title');

        let proL = document.createElement('p');
        proL.innerHTML = `<strong><a href="${pro.proj_link || '#'}">LINK Of Project</a></strong>`;
        proL.classList.add('exp-dates-location');

        let proD = document.createElement('span');
        proD.innerHTML = pro.proj_description || "";
        proD.classList.add('desi');

        proItem.appendChild(proT);
        proItem.appendChild(proL);
        proItem.appendChild(proD);

        container.appendChild(proItem);
    });
};

const showEducData = (educations, container) => {
    // Check if the educations array is empty or contains only invalid educations
    if (!educations || educations.length === 0 || educations.every(educ => !educ.edu_degree.trim() && !educ.edu_school.trim())) {
        container.innerHTML = ""; // Clear the container if no valid educations
        return;
    }

    container.innerHTML = ""; // Clear the container first

    educations.forEach(educ => {
        let educItem = document.createElement('div');
        educItem.classList.add('education-item');

        let educTitleAndSchool = document.createElement('h3');
        educTitleAndSchool.innerHTML = `${educ.edu_degree || ""} - ${educ.edu_school || ""}`;
        educTitleAndSchool.classList.add('edu-title-school');

        let educDatesAndCity = document.createElement('p');
        educDatesAndCity.innerHTML = `<strong>${formatDate(educ.edu_start_date)} – ${formatDate(educ.edu_graduation_date)} | ${educ.edu_city || ""}</strong>`;
        educDatesAndCity.classList.add('edu-dates-city');

        let educDescription = document.createElement('span');
        educDescription.innerHTML = educ.edu_description || "";
        educDescription.classList.add('edu-description');

        educItem.appendChild(educTitleAndSchool);
        educItem.appendChild(educDatesAndCity);
        educItem.appendChild(educDescription);

        container.appendChild(educItem);
    });
};

const showLang = (languages, container) => {
    // Check if the languages array is empty or contains only invalid languages
    if (!languages || languages.length === 0 || languages.every(lang => !lang.languaget.trim())) {
        container.innerHTML = ""; // Clear the container if no valid languages
        return;
    }

    container.innerHTML = ""; // Clear the container first

    languages.forEach(lang => {
        let langItem = document.createElement("div");
        langItem.classList.add("langItem");

        let langcont = document.createElement('span');
        langcont.innerHTML = `<strong>${lang.languaget}:</strong>  ${lang.languagel || ""}`;
        langcont.classList.add("langcont");

        langItem.appendChild(langcont);

        container.appendChild(langItem);
    });
};

const showSkillData = (skills, container) => {
    // Check if the skills array is empty or all skills are invalid
    if (!skills || skills.length === 0 || skills.every(skil => !skil.skillt.trim() && !skil.skilld.trim())) {
        container.innerHTML = ''; 
        return; 
    }

    container.innerHTML = '';

    skills.forEach(skil => {
        if (skil.skillt.trim() || skil.skilld.trim()) {
            let skillItem = document.createElement('div');
            skillItem.classList.add("skillItem");

            let skillcont = document.createElement('span');
            skillcont.innerHTML = `<strong>${skil.skillt}:</strong>  ${skil.skilld}`;
            skillcont.classList.add("skillcont");

            skillItem.appendChild(skillcont);
            container.appendChild(skillItem);
        }
    });
}

 



const displayCV = (userData) => {
    nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname || "";
    designationDsp.innerHTML = userData.designation || "";
    emailDsp.innerHTML = userData.email ;
    addressDsp.innerHTML = userData.address || "";
    phonenoDsp.innerHTML =!userData.phoneno ? "" : `(+216) ${userData.phoneno}`;
    gitDsp.innerHTML = !userData.git ? "" : `<a href="${userData.git}" target="_blank" rel="noopener noreferrer">GitHub</a>`;
    linklDsp.innerHTML = !userData.linkl ? "" : `<a href="${userData.linkl}" target="_blank" rel="noopener noreferrer">Linkedin</a>`;
    showExperienceData(userData.experiences, experiencesDsp) || "";
    showEducData(userData.educations, educationsDsp) || "";
    showAchiData(userData.achievements, achievementsDsp) || "";
    showPorData(userData.projects, projectsDsp) || "";
    showSkillData(userData.skills, skillsDsp) || "";
    showLang(userData.languages ,languagesDsp)
}

// generate CV
const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}

function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
    }
}

// print CV
function printCV(){
    window.print();
}