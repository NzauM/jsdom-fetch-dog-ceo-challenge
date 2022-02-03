// console.log('%c HI', 'color: firebrick')
let breeds=[];

function getImages(){
    return( fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    // .then(json=>console.log(json))
    .then(images=>showImages(images))
    )
}    

function showImages(dataRes){
    const imageContainer = document.getElementById('dog-image-container')
    // for (const resp of dataRes.message){
    //     console.log(resp)
    //     const pic = document.createElement('img')
    //     pic.src = resp
    //     imageContainer.appendChild(pic)
    // }
    dataRes.message.forEach(resp => {
        // console.log(resp)
        const pic = document.createElement('img')
        pic.src = resp
        imageContainer.appendChild(pic)
    });
}

function getDogBreeds(){
    const dogs = (fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json()))
    // .then(breeds => console.log(breeds, typeof(breeds)))
    // .then(breeds => console.log(breeds))

    // console.log(dogs => console.log(dogs))
    return dogs
}
function getAllBreeds(){
    return(fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    // .then(breeds => console.log(breeds, typeof(breeds)))
    .then(breeds => listBreeds(breeds))
    )
}

function listBreeds(breeds){
    // XXXXXXXXXXXX.log(breeds.message)
    const breedList = document.getElementById('dog-breeds')
    // let breedss = breeds.message
    // console.log(breedss)
    // console.log(typeof(breedss))
    // console.log(breeds.message)
    for(const breed in breeds.message){
    // for(breed in breeds.message){
        // console.log(breed)
        // console.log(typeof(breed))
        const listItem = document.createElement('li')
        listItem.textContent = breed
        breedList.appendChild(listItem)
    }
    highlightBreed()
    filterBreeds()
    // breeds.message.forEach(breed => {
    //     console.log(breed)
    // })
}

function showFilteredBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');
    // removeChildren(ul);
    ul.innerHTML=""
    breeds.forEach(breed => listBreeds(breed));
  }

function selectBreedsStartingWith(letter) {
    showFilteredBreeds(breeds.filter(breed => breed.startsWith(letter)));
  }
  
function filterBreeds() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
});
}



  function highlightBreed(){
    document.getElementById("dog-breeds").addEventListener("click",function(e) {
        // e.target is our targetted element.
                    // try doing console.log(e.target.nodeName), it will result LI
        if(e.target && e.target.nodeName == "LI") {
            e.target.style.color = "red"
            console.log(e.target.textContent + " was clicked");
            // alert(e.target.textContent + " was clicked");
        }
    });
  }


// function filterBreeds(){
//     const breedList = document.getElementById('dog-breeds')
//     breedList.innerHTML=""
//     const letter = document.getElementById('breed-dropdown').value
//     const allBreeds = getDogBreeds()
//     console.log(allBreeds)
//     for(const breednames in allBreeds.message){
//         for (const mybreed in breednames){
//             console.log("My breed is", mybreed)
//         }
//         // console.log(breednames)
//         // console.log("xxxxxx")
//     }
//     //     if(breed[0] == letter){
//     //         // matchingBreeds.push(breed)
//     //         const listItem = document.createElement('li')
//     //         listItem.textContent = breed
//     //         breedList.appendChild(listItem)
//     //     }
//     // }
//     // console.log("my breeds",matchingBreeds)
    
//     // for(const breed in matchingBreeds){
//     //     const listItem = document.createElement('li')
//     //     listItem.textContent = breed
//     //     breedList.appendChild(listItem)
//     // }
    

// }

    
document.addEventListener('DOMContentLoaded', function() {
    getImages();
    getAllBreeds();
    listBreeds();
    
});
