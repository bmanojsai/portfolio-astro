//---------------------------------------------------/
//---- To toggle social details in mobile view ------/
//---------------------------------------------------/

const emailIcon = document.getElementById("email-icon");
const githubIcon = document.getElementById("github-icon");
const linkedinIcon = document.getElementById("linkedin-icon");

const showDetail = (
	iconName: "email-icon" | "github-icon" | "linkedin-icon"
) => {
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
};

emailIcon?.addEventListener("click", () => showDetail("email-icon"));
githubIcon?.addEventListener("click", () => showDetail("github-icon"));
linkedinIcon?.addEventListener("click", () => showDetail("linkedin-icon"));

//---------------------------------------------------/
//----------- To submit Contact Us form -------------/
//---------------------------------------------------/

type FormDetails = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const submitContactForm = (e: SubmitEvent) => {
	e.preventDefault();

	const status = document.getElementById("contact-status");

	const form = e.target as HTMLFormElement;
	const formData = new FormData(form);
	const formObject: Record<string, FormDataEntryValue> = Object.fromEntries(
		formData.entries()
	);
	console.log("formObject", formObject);

	const googleFormUrl =
		"https://docs.google.com/forms/d/e/1FAIpQLSfE2lQE-43Reg5zykPuhbXATLBy3rkoR-2_el1Q-Ppzp2RV-w/formResponse";
	const params = new URLSearchParams();

	params.append("entry.471980895", formObject.name as string);
	params.append("entry.2141084136", formObject.email as string);
	params.append("entry.2038803919", formObject.subject as string);
	params.append("entry.183639428", formObject.message as string);

	if (status) status.textContent = "Sending...";
	fetch(googleFormUrl, {
		method: "POST",
		mode: "no-cors",
		body: params,
	})
		.then((response) => {
			console.log("response", response);
			form.reset();
			if (status)
				status.textContent =
					"Thanks for contacting me! I'll get back to you soon.";
		})
		.catch((error) => {
			console.error("Error submitting form:", error);
			if (status)
				status.textContent = "Error sending message. Please try again later.";
		});
};

document
	.getElementById("contactForm")
	?.addEventListener("submit", (e) => submitContactForm(e));
