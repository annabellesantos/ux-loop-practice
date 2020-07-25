/*
    Loops Practice - Part One

    Building an Exercise Routine

    You are going to build a program that can help you keep track of your exercise routine.

    Your routine can be represented by an array of each activity.
    let routine = ["situp", "situp", "situp", "situp", "pushup", "pushup", "pushup", "pushup"];

    Use a while loop to complete every exercise.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: compareArray is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Building a routine

    Given a routine, an exercise, and number of repetitions,
    Add that exercise to your routine for the number of repetitions.

    For example:
    routine = [];
    exercise = "situp";
    numRepetitions = 4;

    You should add four situps to your routine, resulting in a routine like this:
    routine = ["situp", "situp", "situp", "situp"];

    You do not need to return anything, just modify the routine array.

*/

function addExerciseToRoutine(routine, exercise, numRepetitions) {
  // Your Code Here!
  let position = 0;
  while (position < numRepetitions) {
    routine.push(exercise);
    // console.log(routine); ...so useful for debugging omg
    position++;
  }
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
let routineOne = [];
console.log("* Add Situps");
addExerciseToRoutine(routineOne, "situp", 4);
console.log(compareArray(routineOne, ["situp", "situp", "situp", "situp"]));
console.log("* Add single pushup");
addExerciseToRoutine(routineOne, "pushup", 1);
console.log(
  compareArray(routineOne, ["situp", "situp", "situp", "situp", "pushup"])
);
console.log("* Add zero pullups");
addExerciseToRoutine(routineOne, "pullup", 0);
console.log(
  compareArray(routineOne, ["situp", "situp", "situp", "situp", "pushup"])
);

/* ---------------------------------------------------------------------------
    Exercise Two

    Performing your routine

    Create the performRoutine function.
    This function should go through every exercise in a routine and call
    doAction(exercise);
*/
/*
   -------START OF GIVEN CODE - DO NOT EDIT ------------------------------------
   But do read through through this code.  Try to understand what it's doing.
*/

let actionsPerformed = [];
function resetActions() {
  actionsPerformed = [];
}

function doAction(action) {
  console.log(action);
  actionsPerformed.push(action);
}
/*
   -------END OF GIVEN CODE - DO NOT EDIT --------------------------------------
*/
/* 
   -------START OF YOUR CODE----------------------------------------------------
*/

function performRoutine(routine) {
  // Your Code Here!
  let position = 0;
  while (position < routine.length) {
    doAction(routine[position]);
    position++;
  }
}

/* 
   -------TESTS----------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
let routineTwo = [
  "situp",
  "situp",
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
];
console.log("* Perform Routine");
resetActions();
performRoutine(routineTwo);
console.log(compareArray(routineTwo, actionsPerformed));

console.log("* Empty Routine");
routineTwo = [];
resetActions();
performRoutine(routineTwo);
console.log(compareArray(routineTwo, actionsPerformed));

/* ---------------------------------------------------------------------------
    Exercise Three

    positioning the total number of repetitions of an exercise

    Create the positionRepsOfActionInRoutine function.
    
    For a given exercise type, this should position how many times that exercise
    occurs in a routine, returning that number.

    For example:
    let routine = ["situp", "situp", "pushup", "pushup", "situp", "situp"];

    let numSitups = positionRepsOfActionInRoutine(routine, "situp");

    numSitups should be 4, since there are four situps in the routine.

*/

function positionRepsOfActionInRoutine(routine, action) {
  let position = 0;
  // Your Code Here!
  let index = 0;
  while (index < routine.length) {
    if (routine[index] == action) {
      position++;
    }
    index++;
  }

  return position;
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Three-----");
console.log("* position pushups");
let routineThree = [
  "situp",
  "situp",
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
];
console.log(positionRepsOfActionInRoutine(routineThree, "pushup") == 4);

console.log("* position out of order pushups");
routineThree = [
  "situp",
  "pushup",
  "situp",
  "pushup",
  "pullup",
  "pullup",
  "pushup",
  "pushup",
];
console.log(positionRepsOfActionInRoutine(routineThree, "pushup") == 4);

console.log("* position missing crunch");
routineThree = [
  "situp",
  "pushup",
  "situp",
  "pushup",
  "pullup",
  "pullup",
  "pushup",
  "pushup",
];
console.log(positionRepsOfActionInRoutine(routineThree, "crunch") == 0);

/* ---------------------------------------------------------------------------
    Exercise Four

    Remove an exercise from your routine

    Now you have an exercise routine, but you don't really like doing some of the 
    exercises in it.

    Complete the function removeExerciseFromRoutine

    Given an exercise, it should remove all instances of that exercise from the routine.

    The function should not return anything, you should modify the existing routine array.

    For example:

    let routine = ["situp", "pushup", "situp", "pushup", "pullup", "pullup", "pushup", "pushup"];
    removeExerciseFromRoutine(routine, "pushup");

    now routine is equal to ["situp", "situp", "pullup", "pullup"];

    Hint: Use the array.splice() method to remove an item from the item.
    https://www.w3schools.com/jsref/jsref_splice.asp

    Hint2: If you remove an element from the array, the length just got shorter!
    What does this mean for your current index? What does that mean for your loop?
    If your code isn't working, make sure to walk through it with
    the debugger to see what's going wrong.
*/

function removeExerciseFromRoutine(routine, exercise) {
  // Your Code Here!
  let count = 0;
  let numberOfReps = routine.length;
  while (count < routine.length) {
    let indexFinder = routine.indexOf(exercise);
    if (indexFinder > -1) {
      routine.splice(indexFinder, 1);
      numberOfReps--;
      count++;
    } else {
      count++;
    }
  }
}

/* Debugged code for reference, including the console.logs to debug, because this was driving me nuts lol
  let count = 0;
  let numberOfReps = routine.length;
  while (count < routine.length) {
    let indexFinder = routine.indexOf(exercise);
    if (indexFinder > -1) {
      console.log("Found the exercise to remove at position " + indexFinder);
      // if indexFinder finds the exercise to remove...then use splice to remove it
      routine.splice(indexFinder, 1);
      console.log(routine);
      console.log("if Old Number of reps: "+numberOfReps);
      numberOfReps--;
      console.log("if New Number of reps: "+numberOfReps);
      count++;
    } else {
      count++;
      console.log("Else: New Number of reps: "+numberOfReps);
      console.log(routine);
    }
  } */

/*
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

console.log("-----Tests for Exercise Four-----");
console.log("* Remove sequential pushups");
let routineFour = [
  "situp",
  "situp",
  "situp",
  "situp",
  "pushup",
  "pushup",
  "pushup",
  "pushup",
];
removeExerciseFromRoutine(routineFour, "pushup");
console.log(compareArray(routineFour, ["situp", "situp", "situp", "situp"]));

console.log("* Remove non-sequential situps");
routineFour = [
  "situp",
  "pushup",
  "situp",
  "pushup",
  "pullup",
  "situp",
  "pullup",
  "pushup",
  "pushup",
  "situp",
];
removeExerciseFromRoutine(routineFour, "situp");
console.log(
  compareArray(routineFour, [
    "pushup",
    "pushup",
    "pullup",
    "pullup",
    "pushup",
    "pushup",
  ])
);

console.log("* Remove missing jumpingjack");
removeExerciseFromRoutine(routineFour, "jumpingjack");
console.log(
  compareArray(routineFour, [
    "pushup",
    "pushup",
    "pullup",
    "pullup",
    "pushup",
    "pushup",
  ])
);

/*
   -------TEST UTILITIES------------------------------------------------------
   These are utilities for the tests.

   Do not modify anything below this line.

   But read through these and try to understand what they do.
*/
function copyArray(arr) {
  let copy = [];

  if (arr && arr.length > 0) {
    for (let index in arr) {
      copy[index] = arr[index];
    }
  }

  return copy;
}

function compareArray(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length != arr2.length) {
    return false;
  }

  for (let index in arr1) {
    if (arr1[index] != arr2[index]) {
      return false;
    }
  }

  return true;
}
