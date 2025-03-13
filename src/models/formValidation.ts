class FormValidation {
  private data;
  private users;
  private scene: string;

  constructor(data: any, users: any, scene: string) {
    this.data = data;
    this.users = users;
    this.scene = scene;
  }

  nameValidationError() {
    if (this.data.name === null) {
      return "name_required";
    }

    return null;
  }

  isNameValid() {
    return this.nameValidationError() === null;
  }

  emailValidationError() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.data.email === null) {
      return "email_required";
    }

    if (!emailRegex.test(this.data.email)) {
      return "email_invalid_format";
    }

    if (this.scene === "sign-up") {
      const isEmailAlreadyInUse = this.users.some(
        (user: any) => user.email === this.data.email,
      );

      if (isEmailAlreadyInUse) {
        return "email_in_use";
      }
    }

    if (this.scene === "sign-in") {
      const loginUser = this.users.some(
        (user: any) => user.email === this.data.email,
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
        (user: any) => user.email === this.data.email,
      );

      if (loginUser) {
        if (loginUser.password !== this.data.password) {
          return "password_incorrect";
        }
      }
    }

    if (this.data.password === null) {
      return "password_required";
    }

    if (this.data.password.length < 6) {
      return "password_characters";
    }

    return null;
  }

  isPasswordValid() {
    return this.passwordValidationError() === null;
  }

  confirmPasswordValidationError() {
    if (this.data.confirmPassword === null) {
      return "confirm_password_required";
    }

    if (this.data.password !== this.data.confirmPassword) {
      return "passwords_no_match";
    }

    return null;
  }

  isConfirmPasswordValid() {
    return this.confirmPasswordValidationError() === null;
  }

  regionValidationError() {
    if (this.data.region === null) {
      return "region_required";
    }

    return null;
  }

  isRegionValid() {
    return this.regionValidationError() === null;
  }

  subjectValidationError() {
    if (this.data.subject.length === 0) {
      return "subject_required";
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
