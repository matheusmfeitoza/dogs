import React from "react";

const useForm = (type) => {
  // Type of types will be accept on Hook, at moment we will validate only e-mails
  const typesValidation = {
    email: {
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Por favor, informe um e-mail válido!",
    },
    number: {
      regex: /^\d+$/,
      message: "Apenas valores númericos é aceito!",
    },
  };
  // states
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  //Logic
  const onChange = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  };

  const validate = (value) => {
    // Skipping validate for inputs not null
    if (type === false) {
      return true;
    }
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      typesValidation[type] &&
      !typesValidation[type].regex.test(value)
    ) {
      setError(typesValidation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
