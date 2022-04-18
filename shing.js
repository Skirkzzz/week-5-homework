
window.localStorage.setItem("shing", "2");
window.localStorage.setItem("egosa", "3");
window.localStorage.setItem("jason", "4");
window.localStorage.setItem("selina", "5");

for (var i = 0; i < localStorage.length; i++){
    
    var initial = localStorage.key(i);
    var score = localStorage.getItem(initial);

    console.log(initial + ": " + score);
}