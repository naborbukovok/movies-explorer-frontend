export const isValid = (e, setIsValid) => {
  if (!e.target.validity.valid && (e.target.value.length !== 0)) {
    setIsValid(false);
  } else {
    setIsValid(true);
  }
};

export const ERROR_MESSAGE = "Что-то пошло не так...";
