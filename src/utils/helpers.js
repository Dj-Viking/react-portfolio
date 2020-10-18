export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9]{1,15}?\.?[a-zA-Z0-9]{1,15}@[a-z]{3,15}\.[a-z]{3,8}$/g;
  return regex.test(String(email).toLowerCase());
}