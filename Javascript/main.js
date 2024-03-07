let availableKeywords = [
    'AWS',
    'Ansible',
    'Docker',
    'Jenkins',
    'Linux',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "</ul>" + content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML=''
}

inputBox.addEventListener("input", function() {
    if (inputBox.value.trim() !== "") {
        resultBox.classList.add("show");
    } else {
        resultBox.classList.remove("show");
    }
});

$('.fa-magnifying-glass').on('click', function(){
    let searchValue = inputBox.value.trim().toLowerCase();
    let result = availableKeywords.find(keyword => keyword.toLowerCase() === searchValue);
    if (result) {
        if (searchValue === "docker") {
            window.location.href = "Pages/docker/Documentation.html";
        } else if (searchValue === "aws") {
            window.location.href = "Pages/aws/Documentation.html";
        } else if (searchValue === "jenkins") {
            window.location.href = "Pages/jenkins/Documentation.html";
        } else if (searchValue === "linux") {
            window.location.href = "Pages/linux/Documentation.html";
        } else if (searchValue === "ansible") {
            window.location.href = "Pages/ansible/Documentation.html";
        }
    } else {
        window.location.href = "/Pages/notFound/error.html";
    }
});