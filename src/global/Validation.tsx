import {Platform} from 'react-native';

export const UserName =
  /^[a-zA-Z0-9]*[a-zA-Z]*[\@\_\.\$\#\*\]*[0-9]*[a-zA-Z0-9]*[\@\_\.\$\#\*]*[a-zA-Z0-9]*$/;
// export const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\#\&\$\*])/;
export const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// export const Email=/^[a-zA-Z0-9]+[@][a-z]+\.[a-z]\.*[a-z]{2,3}$/

export const Email =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const mobileNo = /\d{13,14}/;
export const mobileRegexWithdesh = /^[0-9-]+$/;
export const otp = /\d/;
export const FirstName = /^[A-Za-z]+$/;
export const Name = /^[A-Za-z\s]+$/;
export const zipCodeRegex = /^\d{5}(-\d{5})?$/;
export const CheckImageUri = Platform.select({
  ios: /^\/Users\//,
  android: /^file:\/\/\//,
});
export const ignoreSpecailchr = /^[a-zA-Z0-9 ]*$/;
export const numberRegex = /^\d+$/;
export const numberRegexWithPoint = /^(\d+\.?\d*|\.\d+)$/;
export const cityRegex = /^[a-zA-z\s]+$/;
export const zipCodePattern = /^\d{5}(-\d{4})?$/;
export const CheckViedoUri = /^file:\/\/\//;
export const urlRegex = /(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/a-zA-Z0-9-._~:?#[\]@!$&'()*+,;=]*)?/;
export const fullName = /^[a-zA-z\s]+$/;

//bank details
export const LinkTest =
  /(http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
export const wwwregex = /www\.\S+/;
export const user = /^[a-zA-Z ]+$/;
// export const user = /[A-Za-z -]{2}/
export const bankAccount = /^[\d ]+$/;
export const code = /^[\dA-Z_ ]{8,12}$/;
export const cardNumber = /^[\d]{1,16}$/;
export const cvv = /^[\d]{1,3}$/;
///  dd/mm/yyyy
export const clearingNumber = /^[\+]?[(]?[0-9]{5}[-\s\.]?[0-9]{4,11}$/;
export const dateValidation =
  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// export const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// export const emailaddress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
