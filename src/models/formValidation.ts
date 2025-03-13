import { FormDataType } from "../types";

class FormValidation {
  private formData: FormDataType;
  private users: FormDataType[];
  private scene: string;

  constructor(formData: FormDataType, users: FormDataType[], scene: string) {
    this.formData = formData;
    this.users = users;
    this.scene = scene;
  }

  nameValidationError() {
    if (this.formData.name === null) {
      return "name_required";
    }

    return null;
  }

  isNameValid() {
    return this.nameValidationError() === null;
  }

  emailValidationError() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.formData.email === null) {
      return "email_required";
    }

    if (typeof this.formData.email === "string") {
      if (!emailRegex.test(this.formData.email)) {
        return "email_invalid_format";
      }
    }

    if (this.scene === "sign-up") {
      const isEmailAlreadyInUse = this.users.some(
        (user: FormDataType) => user.email === this.formData.email,
      );

      if (isEmailAlreadyInUse) {
        return "email_in_use";
      }
    }

    if (this.scene === "sign-in") {
      const loginUser = this.users.some(
        (user: FormDataType) => user.email === this.formData.email,
      );

      if (!loginUser) {
        return "email_not_found";
      }
    }

    return null;
  }

  isEmailValid() {
    return this.emailValidationError() === null;
  }

  passwordValidationError() {
    if (this.scene === "sign-in") {
      const loginUser = this.users.find(
        (user: FormDataType) => user.email === this.formData.email,
      );

      if (loginUser) {
        if (loginUser.password !== this.formData.password) {
          return "password_incorrect";
        }
      }
    }

    if (this.formData.password === null) {
      return "password_required";
    }

    if (this.formData.password.length < 6) {
      return "password_characters";
    }

    return null;
  }

  isPasswordValid() {
    return this.passwordValidationError() === null;
  }

  confirmPasswordValidationError() {
    if (this.formData.confirmPassword === null) {
      return "confirm_password_required";
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      return "passwords_no_match";
    }

    return null;
  }

  isConfirmPasswordValid() {
    return this.confirmPasswordValidationError() === null;
  }

  regionValidationError() {
    if (this.formData.region === null) {
      return "region_required";
    }

    return null;
  }

  isRegionValid() {
    return this.regionValidationError() === null;
  }

  subjectValidationError() {
    if (Array.isArray(this.formData.subject)) {
      if (this.formData.subject.length === 0) {
        return "subject_required";
      }
    }

    return null;
  }

  isSubjectValid() {
    return this.subjectValidationError() === null;
  }

  isFormValid() {
    if (this.scene === "sign-in") {
      return this.isEmailValid() && this.isPasswordValid();
    }

    if (this.scene === "sign-up") {
      return (
        this.isNameValid() &&
        this.isEmailValid() &&
        this.isPasswordValid() &&
        this.isConfirmPasswordValid() &&
        this.isRegionValid() &&
        this.isSubjectValid()
      );
    }

    return false;
  }
}

export default FormValidation;
