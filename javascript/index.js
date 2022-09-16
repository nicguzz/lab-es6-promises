// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks

// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));


// Callback 
// En palabras demasiado coloquiales, es una funcion que se llama dentro de otra funcion. Puede ser en el body, puede ser como argumento/paramtero que es exactamente lo que estaremos haciendo en esta iteracion! 

// Esta funciona, basicamente se va a anidar dentro de la misma funcion por la cantidad de pasos que necesitemos llamar en el archivo de data.js
// **BOILERPLATES**
// getInstruction('mashedPotatoes', 0, (step) => { }, (error) => {console.log(error) });
// Esto es lo que inyectaremos dentro de cada paso que recorra la funcion getInstructions dentro del array de mashedPotatoes que vive en el archivo de data.js
// **BOILERPLATES**
// document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;



// Iteration 1 - using callbacks
// V1 - Using an extra string within data.js
getInstruction('mashedPotatoes', 0, (step) => { 
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction('mashedPotatoes', 1, (step) => { 
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction('mashedPotatoes', 2, (step) => { 
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction('mashedPotatoes', 3, (step) => { 
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction('mashedPotatoes', 4, (step) => { 
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
          getInstruction('mashedPotatoes', 5, (step) => { 
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => {console.log(error) });
        }, (error) => {console.log(error) });
      }, (error) => {console.log(error) });
    }, (error) => {console.log(error) });
  }, (error) => {console.log(error) });
}, (error) => {console.log(error) });

// V2 - Manipulating the DOM to create a new html attribute to add extra
// stringgetInstruction('mashedPotatoes', 0, (step) => { 
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//   getInstruction('mashedPotatoes', 1, (step) => { 
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//     getInstruction('mashedPotatoes', 2, (step) => { 
//       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//       getInstruction('mashedPotatoes', 3, (step) => { 
//         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//         getInstruction('mashedPotatoes', 4, (step) => { 
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready</li>`;
//           document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//         }, (error) => {console.log(error) });
//       }, (error) => {console.log(error) });
//     }, (error) => {console.log(error) });
//   }, (error) => {console.log(error) });
// }, (error) => {console.log(error) });

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 1)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 2)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 3)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 4)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 5)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 6)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  return obtainInstruction('steak', 7)
}).then(step => {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`
  document.querySelector("#steakImg").removeAttribute("hidden");
}).catch((error) => {
  setTimeout(() => {
    document.querySelector('#steak').innerHTML += `<li>${error}</li>`
}, 1000)})


// MI SOLUCION
// obtainInstruction('steak', 0)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);
//   })
//   obtainInstruction('steak', 1)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);
//   })
//   obtainInstruction('steak', 2)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);
//   })
//   obtainInstruction('steak', 3)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);
//   })
//   obtainInstruction('steak', 4)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);
//   })
//   obtainInstruction('steak', 5)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     (error) => console.log(error);})



// XAVI's Solution
// Iteration 2 - using promises
// Esta solucion tiene el approach correcto ya que esta dependiendo de usar promesas en vez de callbacks, pero al no concatenar promesa con promesa basicamente esta usando el principio de las promesas dentro de un callback. 
// Podemos asumir que leer esto es bastante dificil :( 


// obtainInstruction("steak", 0).then((step0) => {
//   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
//   obtainInstruction("steak", 1).then((step1) => {
//     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
//     obtainInstruction("steak", 2).then((step2) => {
//       document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
//       obtainInstruction("steak", 3).then((step3) => {
//         document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
//         obtainInstruction("steak", 4).then((step4) => {
//           document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
//           obtainInstruction("steak", 5).then((step5) => {
//             document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//             obtainInstruction("steak", 6).then((step6) => {
//               document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
//               obtainInstruction("steak", 7).then((step7) => {
//                 document.querySelector(
//                   "#steak"
//                 ).innerHTML += `<li>${step7}</li>`;
//                 document.querySelector(
//                   "#steak"
//                 ).innerHTML += `<li>Stake is ready!</li>`;
//                 document.querySelector("#steakImg").removeAttribute("hidden");
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async/await
async function makeBroccoli() {
  for (let step = 0; step < broccoli.length; step++) {
    await obtainInstruction('broccoli', step)
      .then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      })
      .catch((error) => { console.log(error) })
  }
  await obtainInstruction('broccoli', 7).then(() => {
    document.querySelector("#broccoliImg").removeAttribute("hidden")
  })
}
makeBroccoli()

// Bonus 2 - Promise all

const instructions = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  instructions.push(obtainInstruction('brusselsSprouts', i))
}

Promise.all(instructions).then((instruction) => {
  instruction.forEach(step => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute('hidden')
  })
})











