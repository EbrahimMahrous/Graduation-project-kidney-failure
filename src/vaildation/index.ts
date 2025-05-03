// ** contactMe Validation
export const contactValidation = (contact: {
  firstName: string;
  secondName: string;
  userEmail: string;
  reportMsg: string;
  isAgreed: boolean;
}) => {
  const errors = {
    firstName: "",
    secondName: "",
    userEmail: "",
    reportMsg: "",
    isAgreed: "",
  };
  if (!contact.firstName.trim() || contact.firstName.length < 2) {
    errors.firstName = "الاسم الاول مطلوب";
  }
  if (!contact.secondName.trim() || contact.secondName.length < 2) {
    errors.secondName = "الاسم الثاني مطلوب ويجب أن يكون على الأقل حرفين";
  }
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!contact.userEmail.trim() || !emailRegex.test(contact.userEmail)) {
    errors.userEmail = "يرجى إدخال بريد إلكتروني صحيح";
  }
  if (!contact.reportMsg.trim() || contact.reportMsg.length < 10) {
    errors.reportMsg = "الرسالة يجب أن تكون على الأقل 10 حروف";
  }
  if (!contact.isAgreed) {
    errors.isAgreed = "يجب الموافقة على الشروط والأحكام";
  }
  return errors;
};






// ** signIn Validation
export const signInValidation = (data: {
  userEmail: string;
  password: string;
  rememberMe: boolean;
}) => {
  const errors: {
    userEmail: string;
    password: string;
    rememberMe: string;
  } = {
    userEmail: "",
    password: "",
    rememberMe: "",
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail);
  if (!data.userEmail.trim() || !validEmail) {
    errors.userEmail = "يرجى إدخال بريد إلكتروني صالح";
  }
  if (!data.password.trim() || data.password.length < 8) {
    errors.password = "كلمة المرور يجب ألا تقل عن 8 أحرف";
  }
  errors.rememberMe = "";
  return errors;
};






// ** signUp Validation
export const signUpValidationPage1 = (data: {
  userName: string;
  userId: string;
  userPhoneNumber: string;
}) => {
  const errors: {
    userName: string;
    userId: string;
    userPhoneNumber: string;
  } = {
    userName: "",
    userId: "",
    userPhoneNumber: "",
  };
  if (!data.userName.trim()) {
    errors.userName = "يرجى إدخال الاسم بالكامل";
  }
  if (!data.userId.trim() || data.userId.length !== 14) {
    errors.userId = "يرجى إدخال الرقم القومي بشكل صحيح";
  }
  if (!data.userPhoneNumber.trim() || !/^\d{11}$/.test(data.userPhoneNumber)) {
    errors.userPhoneNumber = "يرجى إدخال رقم الهاتف بشكل صحيح";
  }
  return errors;
};
export const signUpValidationPage2 = (data: {
  userEmail: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: {
    userEmail: string;
    password: string;
    confirmPassword: string;
  } = {
    userEmail: "",
    password: "",
    confirmPassword: "",
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.userEmail);
  if (!data.userEmail.trim() || !validEmail) {
    errors.userEmail = "يرجى إدخال بريد إلكتروني صالح";
  }
  if (!data.password.trim() || data.password.length < 8) {
    errors.password = "كلمة المرور يجب ألا تقل عن 8 أحرف";
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "كلمة المرور غير متطابقة";
  }
  return errors;
};
export const signUpValidationPage3 = (data: {
  chronicDisease: string;
  weight: string;
  height: string;
  followDoctor: string;
  diagnosisDate: string;
  userStage: string;
}) => {
  const errors: {
    chronicDisease: string;
    weight: string;
    height: string;
    followDoctor: string;
    diagnosisDate: string;
    userStage: string;
  } = {
    chronicDisease: "",
    weight: "",
    height: "",
    followDoctor: "",
    diagnosisDate: "",
    userStage: "",
  };
  if (!data.chronicDisease) {
    errors.chronicDisease = "يرجى اختيار الإجابة";
  }
  if (!data.weight.trim() || isNaN(Number(data.weight))) {
    errors.weight = "يرجى إدخال وزنك بشكل صحيح";
  }
  if (!data.height.trim() || isNaN(Number(data.height))) {
    errors.height = "يرجى إدخال طولك بشكل صحيح";
  }
  if (!data.followDoctor) {
    errors.followDoctor = "يرجى اختيار الإجابة";
  }
  if (
    !data.diagnosisDate.trim() ||
    !/\d{4}-\d{2}-\d{2}/.test(data.diagnosisDate)
  ) {
    errors.diagnosisDate = "يرجى إدخال تاريخ التشخيص بشكل صحيح";
  }
  if (!data.userStage.trim()) {
    errors.userStage = "يرجى إدخال حالتك بشكل صحيح";
  }
  return errors;
};






// newPassword Validation
export const validateNewPassword = (newPassword: string) => {
  const errors: { [key: string]: string } = {};
  if (!newPassword) {
    errors.newPassword = "يجب إدخال كلمة مرور جديدة";
  } else if (newPassword.length < 8) {
    errors.newPassword = "يجب أن تكون كلمة المرور على الأقل 8 أحرف";
  }
  return errors;
};
export const validateConfirmPassword = (
  newPassword: string,
  confirmPassword: string
) => {
  const errors: { [key: string]: string } = {};

  if (confirmPassword !== newPassword) {
    errors.confirmPassword = "كلمة المرور غير متطابقة";
  }
  return errors;
};






// forgetPassword Validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};






// ** editPassword Validation
export function validateEditPasswords(
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
): { oldPassword: string; newPassword: string; confirmPassword: string } {
  let errors = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  if (!oldPassword.trim()) {
    errors.oldPassword = "يرجى إدخال كلمة المرور القديمة.";
  }
  if (!newPassword.trim()) {
    errors.newPassword = "يرجى إدخال كلمة المرور الجديدة.";
  } else if (oldPassword === newPassword) {
    errors.newPassword = "كلمة المرور الجديدة يجب أن تختلف عن القديمة.";
  } else if (newPassword.length < 8) {
    errors.newPassword =
      "يجب أن تحتوي كلمة المرور الجديدة على 8 أحرف على الأقل.";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
    errors.newPassword =
      "يجب أن تحتوي كلمة المرور الجديدة على حروف كبيرة وصغيرة وأرقام.";
  }
  if (newPassword !== confirmPassword) {
    errors.confirmPassword = "كلمة المرور وتأكيد كلمة المرور غير متطابقين.";
  }
  return errors;
}
