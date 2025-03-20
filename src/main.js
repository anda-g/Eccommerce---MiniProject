function changeTheme() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
}
