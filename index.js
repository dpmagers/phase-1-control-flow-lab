
function scuberGreetingForFeet(feet) {
  let result 
  if (feet <= 400) {
    return 'This one is on me!'
  }  else if (feet >= 400 && feet <= 2000) {
    return 'That will be twenty bucks.'
  } else if (feet >= 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
 const response = city === 'NYC' ? ('Ok, sounds good.') : ('No go.')
  return response
}


function switchOnCharmFromTip(tip) { 

  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}


// function switchOnCharmFromTip(tip) {

//   switch (tip)  {
//       case 'generous':
//           return 'Thank you so much.';
//       case 'not as generous':
//           return 'Thank you.';
//       default:
//           return 'Bye.';
//   }
// }

// //open swithc
// //should return 






// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });

//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });
// });




























// scuberGreetingForFeet(199)


// function scuberGreetingForFeet(milestone){
//   let result 
//   if (milestone <= 400) {
//     return 'This one is on me!'
//   }
//   else if (milestone > 400 && milestone <= 2000) {
//     return 'That will be twenty bucks.'
//   }
//   else if (milestone <= 2500) {
//     return 'I will gladly take your thirty bucks.'}

// else  {
//   return 'No can do.'
// }
// }





































// function scuberGreetingForFeet(milestone){
//   let result 
//   if (milestone <= 400) {
//     return 'This one is on me!'
//   }
//   else if (milestone > 400 && milestone <= 2000) {
//     return 'That will be twenty bucks.'
//   }
//   else if (milestone <= 2500) {
//     return 'I will gladly take your thirty bucks.'}

// else  {
//   return 'No can do.'
// }
// }

// function ternaryCheckCity(city){
// const whatCity = city === 'NYC' ? ('Ok, sounds good.') : ('No go.');
// return whatCity
// }

// function switchOnCharmFromTip(tip) {

//   switch (tip)  {
//       case 'generous':
//           return 'Thank you so much.';
//       case 'not as generous':
//           return 'Thank you.';
//       default:
//           return 'Bye.';
//   }
// }

// //open swithc
// //should return 