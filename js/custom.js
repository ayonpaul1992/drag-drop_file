const imgBox = document.querySelector(".img_box");
const whiteBoxes = document.getElementsByClassName("white_box");
imgBox.addEventListener('dragstart',(e)=>{
    console.log("Dragstart hasbeen triggered");
    e.target.className += " hold";
    setTimeout(()=>{
        e.target.className = "hide";
    }, 0);
});
imgBox.addEventListener('dragend',(e)=>{
    console.log("Dragend hasbeen triggered");
    e.target.className = "img_box";
});
for(var whiteBox of whiteBoxes){
    whiteBox.addEventListener("dragover",(e)=>{
        e.preventDefault();
        console.log("Dragover hasbeen triggered");
    });   
    whiteBox.addEventListener("dragenter",(e)=>{
        console.log("Dragenter hasbeen triggered");
        e.target.className += " dashed";
    });   
    whiteBox.addEventListener("dragleave",(e)=>{
        console.log("Dragleave hasbeen triggered");
        e.target.className = "white_box";
    });   
    whiteBox.addEventListener("drop",(e)=>{
        console.log("Drop hasbeen triggered");
        e.target.append(imgBox);
    });   
}