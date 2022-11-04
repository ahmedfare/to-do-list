const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } 
  
  
  
  else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = ' <span class="icon-heart"></span>  ';
    eo.target.parentElement.innerHTML += heart;
  
    
  }
  else if (eo.target.className == "icon-heart") {
eo.target.classList.add("dn")
const angry = `<span class="icon-angry2 icon"></span>`
eo.target.parentElement.innerHTML += angry 

  }
  else if (eo.target.className == "icon-star icon")
  {
  eo.target.classList.add("orange")  
  container.prepend(eo.target.parentElement)
  }
  else if (eo.target.className == "icon-star icon orange"){
    eo.target.classList.remove("orange")
    container.append(eo.target.parentElement)
  }
});

button.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
<div class="task">
<span class="icon-star icon"></span>
<p lang="ar"> ${input.value} </p>
<div>
 <span class="icon-trash icon"></span>
 <span class="icon-angry2 icon"></span>
</div>

<!-- <span class="icon-heart"></span> -->

</div>
`;
  container.innerHTML += task;
  input.value = "   "
});
