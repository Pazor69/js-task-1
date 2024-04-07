
    let numb = document.getElementById("categories").children.length;
    console.log("kategorie: "+numb);
    console.log("");
    const collection = document.getElementById("categories").children;

    

    for(let i=0;i<numb;i++){

    console.log("Kategoria: "+ collection[i].children[0].textContent);

    console.log("Elementy: "+collection[i].children[1].childElementCount);
    
    console.log("");
    }
  