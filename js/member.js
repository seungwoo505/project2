document.getElementById("signupBtn").addEventListener("click", async () => {
    const data = {
        email : document.getElementById("email").value,
        pw : document.getElementById("pwd").value,
        nickname : document.getElementById("nickname").value
    };
    const response = await axios.post("http://localhost:8080/insertMember", data);

    alert(response.data);
});