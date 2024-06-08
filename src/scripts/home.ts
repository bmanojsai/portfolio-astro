const emailIcon = document.getElementById("email-icon");
const githubIcon = document.getElementById("github-icon");
const linkedinIcon = document.getElementById("linkedin-icon");

const showDetail = (iconName: "email-icon" | "github-icon" | "linkedin-icon") => {

    const emailDetails = document.getElementById("email-details");
    const githubDetails = document.getElementById("github-details");
    const linkedinDetails = document.getElementById("linkedin-details");

    switch (iconName) {
        case "email-icon":
            emailDetails?.classList.toggle("hidden");
            githubDetails?.classList.add("hidden");
            linkedinDetails?.classList.add("hidden");

            break;
        case "github-icon":
            githubDetails?.classList.toggle("hidden");
            emailDetails?.classList.add("hidden");
            linkedinDetails?.classList.add("hidden");
            break;
        case "linkedin-icon":
            linkedinDetails?.classList.toggle("hidden");
            emailDetails?.classList.add("hidden");
            githubDetails?.classList.add("hidden");
            break;
    }
}

emailIcon?.addEventListener("click", () => showDetail("email-icon"));
githubIcon?.addEventListener("click", () => showDetail("github-icon"));
linkedinIcon?.addEventListener("click", () => showDetail("linkedin-icon"));