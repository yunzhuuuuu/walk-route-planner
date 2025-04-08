const user = {
    "question_1": Array.apply(null, Array(6)).map(function (x, _) { return 0; }),
    "question_2": Array.apply(null, Array(3)).map(function (x, _) { return 0; }),
    "question_3": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "question_4": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "question_5": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "question_6": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "question_7": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "question_8": Array.apply(null, Array(2)).map(function (x, _) { return 0; }),
    "feedback": ""
};

function start(element) {
    window.location.href = 'driver_type.html';
}

// Driver type
function commuting() {
    window.location.href = "driver_area.html";
    user.question_1[0] = 1;
  }

  function errands() {
    window.location.href = "driver_area.html";
    user.question_1[1] = 1;
  }

  function leisure() {
    window.location.href = "driver_area.html";
    user.question_1[2] = 1;
  }

  function work() {
    window.location.href = "driver_area.html";
    user.question_1[3] = 1;
  }

  function other() {
    window.location.href = "driver_area.html";
    user.question_1[4] = 1;
  }

  function no_car() {
    window.location.href = "driver_area.html";
    user.question_1[5] = 1;
  }

// Driver area
function urban() {
    window.location.href = "question1.html";
    user.question_2[0] = 1;
  }

  function suburban() {
    window.location.href = "question1.html";
    user.question_2[1] = 1;
  }

  function rural() {
    window.location.href = "question1.html";
    user.question_2[2] = 1;
  }

// Question 1
function q1_option1() {
    window.location.href = 'question2.html'; 
    user.question_3[0] = 1;
}

function q1_option2() {
    window.location.href = 'question2.html'; 
    user.question_3[1] = 1;
}

// Question 2
function q2_option1() {
    window.location.href = 'question3.html';
    user.question_4[0] = 1;
}

function q2_option2() {
    window.location.href = 'question3.html';
    user.question_4[1] = 1;
}

// Question 3
function q3_option1() {
    window.location.href = 'question4.html';
    user.question_5[0] = 1;
}

function q3_option2() {
    window.location.href = 'question4.html';
    user.question_5[1] = 1;
}

// Question 4
function q4_option1() {
    window.location.href = 'question5.html';
    user.question_6[0] = 1;
}

function q4_option2() {
    window.location.href = 'question5.html';
    user.question_6[1] = 1;
}

// Question 5
function q5_option1() {
    window.location.href = 'question6.html';
    user.question_7[0] = 1;
}

function q5_option2() {
    window.location.href = 'question6.html';
    user.question_7[1] = 1;
}

// Question 6
function q6_option1() {
    window.location.href = 'end_page.html';
    user.question_8[0] = 1;
}

function q6_option2() {
    window.location.href = 'end_page.html';
    user.question_8[1] = 1;
}

async function feedback_submit(element) {
    if (event.key === 'Enter') {
        user.feedback = element.value;
        const send = await fetch("http://159.203.167.23:3586/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        console.log("send");
    }
}
