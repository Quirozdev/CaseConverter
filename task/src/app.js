let upcase = document.getElementById("upper-case");
let lowcase = document.getElementById("lower-case");
let propcase = document.getElementById("proper-case");
let sentcase = document.getElementById("sentence-case");
let textarea = document.querySelector("textarea");
let saveB = document.getElementById("save-text-file");


upcase.addEventListener('click', function () {
    textarea.value = textarea.value.toUpperCase();
});

lowcase.addEventListener('click', function () {
    textarea.value = textarea.value.toLowerCase();
});

propcase.addEventListener('click', function () {
    let arrtext = textarea.value.split(" ");
    for (let i = 0; i < arrtext.length; i++) {
        arrtext[i] = arrtext[i].charAt(0).toUpperCase() + arrtext[i].slice(1).toLowerCase();
       // arrtext[i].replace(arrtext[i].charAt(0).toUpperCase());
    }
    //console.log(arrtext);
    textarea.value = arrtext.join(" ");
});

sentcase.addEventListener('click', function () {
    textarea.value = textarea.value.toLowerCase();
    let arrtext = textarea.value.split(" ");
    for (let i = 0; i < arrtext.length; i++) {
        if (i === 0) {
            arrtext[i] = arrtext[i].charAt(0).toUpperCase() + arrtext[i].slice(1).toLowerCase();
        }
        else if (arrtext[i].charAt(arrtext[i].length - 1) === "." && i + 1 < arrtext.length) {
            arrtext[i + 1] = arrtext[i + 1].charAt(0).toUpperCase() + arrtext[i + 1].slice(1).toLowerCase();
        }
    }
    console.log(arrtext);
    textarea.value = arrtext.join(" ");
});

saveB.addEventListener('click', function () {
    download("text.txt", textarea.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

