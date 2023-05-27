function calculateStarter(){
  function calculateAge(name, yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;
    return `<p>${name}: ${age}</p>`;
  }

  const name = prompt("Enter your name:");
  const yearOfBirth = prompt("Enter the year of your birth:");

  const ageResult = calculateAge(name, yearOfBirth);
  document.write(ageResult);
}
calculateStarter();