const graduate = credential => {
  return fullName => {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log("medical graduate:", medicalSchool('Dan Abramov'));
console.log("law graduate:", lawSchool('Ryan Florence'));
