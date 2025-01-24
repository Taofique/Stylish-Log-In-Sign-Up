const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.querySelectorAll(".social-icons .icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const id = icon.id;
    let url = "";

    switch (id) {
      case "google":
        url =
          "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email";
        break;
      case "facebook":
        url =
          "https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email";
        break;
      case "github":
        url =
          "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user";
        break;
      case "linkedin":
        url =
          "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_emailaddress";
        break;
      default:
        console.error("Unknown social login option");
        return;
    }
    window.location.href = url;
  });
});
