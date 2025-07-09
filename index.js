const container = document.querySelector(".container")
const btn = document.querySelector(".btn")



container.addEventListener("mouseover", e =>
    e.target.classList.add("highlight"))

btn.addEventListener("click", function() {
    let squaresPerSide = parseInt(prompt("How many squares per side?"))
    while(squaresPerSide > 100){
        squaresPerSide = parseInt(prompt(`How many squares per side?
            \nMust be less than 100`))
            
    }
    createGrid(squaresPerSide)
})

function calculateSizing(squaresPerSide){
    //grid is currently 640x640
    return (640/squaresPerSide)
}

function createGrid(squaresPerSide = 16){
    console.log(`Current size: ${squaresPerSide}`)
    //Create 16 * 16 div sqaures.
    container.innerHTML = ''
    for (let i = 0; i < squaresPerSide**2; i++){
        const newDiv = document.createElement('div')
        newDiv.style.height = `${calculateSizing(squaresPerSide)}px`
        newDiv.style.width = `${calculateSizing(squaresPerSide)}px`
        newDiv.style.border = "1px solid black";
        container.append(newDiv)

    }
}

createGrid()