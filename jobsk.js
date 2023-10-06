const jobData = [
    { title: "Software Developer", company: "Tech Co.", location: "New York" },
    { title: "UX Designer", company: "Design Studio", location: "San Francisco" },
    { title: "web Developer", company: "Amazon.", location: "New York" },
  ];
  
  function displayJobListings() {
    const jobListings = document.querySelector(".job-listings");
  
    jobData.forEach((job) => {
      const jobListing = document.createElement("div");
      jobListing.classList.add("job-listing");
  
      const title = document.createElement("h2");
      title.textContent = job.title;
  
      const company = document.createElement("p");
      company.textContent = job.company;
  
      const location = document.createElement("p");
      location.textContent = job.location;
  
      const applyButton = document.createElement("button");
      applyButton.classList.add("apply-button");
      applyButton.textContent = "Apply";
  
      jobListing.appendChild(title);
      jobListing.appendChild(company);
      jobListing.appendChild(location);
      jobListing.appendChild(applyButton);
  
      jobListings.appendChild(jobListing);
    });
  }
  
  displayJobListings();