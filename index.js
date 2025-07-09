const container = document.querySelector(".container")

//Create 16 * 16 div sqaures.
for (let i = 0; i < 16*16; i++){
    const newDiv = document.createElement('div')
    newDiv.style.height = "40px"
    newDiv.style.width = "40px"
    newDiv.style.border = "1px solid black";
    container.append(newDiv)

}