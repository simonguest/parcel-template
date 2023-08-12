let app = document.getElementById("app")

async function init() {
  console.log("Running")
  let textNode = document.createElement("p")
  textNode.innerText = "Build was successful!"
  app?.appendChild(textNode)
}

init()