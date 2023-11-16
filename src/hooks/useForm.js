import { useState } from "react";

export const useForm = (initialForm = {}) => {
 const [formState, setFormState] = useState(initialForm);

 const onInputChange = ({ target }) => {
  const { name, value } = target;
  let transformedValue = value;

  if (name === "placa") {
   transformedValue = value.toUpperCase();

   if (/^[a-zA-Z0-9]{3}[a-zA-Z0-9]{3}$/i.test(transformedValue)) {
    transformedValue = transformedValue.replace(
     /^([a-zA-Z0-9]{3})([a-zA-Z0-9]{3})$/i,
     "$1-$2"
    );
   }
  }

  setFormState({
   ...formState,
   [name]: transformedValue,
  });
 };

 const onResetForm = () => {
  setFormState(initialForm);
 };

 return {
  ...formState,
  formState,
  onInputChange,
  onResetForm,
 };
};
