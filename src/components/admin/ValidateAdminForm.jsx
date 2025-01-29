export function validateMovie(values){
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less';
  }

  if (!values.year) {
    errors.year = 'Required';
  } else if (values.year.length != 4) {
    errors.year = 'Must be 4 characters';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  return errors;

}