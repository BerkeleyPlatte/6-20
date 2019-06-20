function updateLego(id, updatedLego) {
  fetch(`http://localhost:8088/legos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedLego)
  });
}


function createLegoComponent(lego) {
    let el = document.createElement("div")
    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")
    let editBtn = document.createElement("button")
    li.innerHTML = `${lego.creator} made a ${lego.color} thingy with legos!`
    el.appendChild(li)
    editBtn.textContent = "edit"
    deleteBtn.setAttribute("id", `${lego.id}`)
    deleteBtn.btn.textContent = "delete"
    deleteBtn.addEventListener("click", () => {
        deleteLego(lego.id)
        .then( data => {
            getAndDisplayLegos()
        })
    })
    editBtn.addEventListener("click", () => {
        createEditForm(lego)
    })
    el.appendChild(deleteBtn)
    el.appendChild(editBtn)
    return el
}

function createEditForm(legoId) {
    return `
    <input id="lego-editor-${legoId}" name="lego__editor" type="text" value=${lego.creator}/>
    <select type="text" id="lego-color-`
}