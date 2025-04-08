function start(element) {
    let user = {
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
    
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'driver_type.html';
}

// Driver type
function commuting() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    console.log(user);
    user.question_1[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";
  }

  function errands() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_1[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";
  }

  function leisure() {
    
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_1[2] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";

  }

  function work() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_1[3] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";

  }

  function other() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_1[4] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";
  }

  function no_car() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_1[5] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "driver_area.html";
  }

// Driver area
function urban() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_2[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "question1.html";
  }

  function suburban() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_2[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "question1.html";

  }

  function rural() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_2[2] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = "question1.html";
  }

// Question 1
function q1_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_3[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question2.html'; 
}

function q1_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_3[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question2.html'; 

}

// Question 2
function q2_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_4[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question3.html';
}

function q2_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_4[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question3.html';
}

// Question 3
function q3_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_5[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question4.html';
}

function q3_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_5[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question4.html';
}

// Question 4
function q4_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_6[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question5.html';
}

function q4_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_6[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question5.html';
}

// Question 5
function q5_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_7[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question6.html';
}

function q5_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_7[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'question6.html';
}

// Question 6
function q6_option1() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_8[0] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'end_page.html';
}

function q6_option2() {
    let user = JSON.parse(window.sessionStorage.getItem("user_data"));
    user.question_8[1] = 1;
    window.sessionStorage.setItem("user_data", JSON.stringify(user));
    window.location.href = 'end_page.html';
}

function feedback_submit(element) {
    event.preventDefault();
    punctuations = `"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~ `.split("");
    if (event.key === 'Enter') {
        let user = JSON.parse(window.sessionStorage.getItem("user_data"));
        user.feedback = element.value;
        console.log(user);
        fetch("http://159.203.167.23:3586/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(() => {
            console.log("saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        }).catch((err) => {
            console.error(err);
        });
        element.parentNode.style.display = "none";
        setTimeout(() => {console.log("heyyy")}, 2000);
    } else {
      if ((event.keyCode >= 48 && event.keyCode <= 57) ||
       (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 97 && event.keyCode <= 122) ||
         (punctuations.includes(event.key))) {
      element.value += event.key;
    }
    if (event.key == 'Backspace') element.value = element.value.slice(0, element.value.length - 1);
  }
}
