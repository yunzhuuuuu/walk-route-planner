const send = fetch("http://159.203.167.23:3586/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"aaaaaaa": 1}),
});

console.log("send");