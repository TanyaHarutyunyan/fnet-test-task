class FormValidation {
  private data;
  private users;
  private scene;
  constructor(data: any, users: any, scene: string) {
    this.data = data;
    this.users = users;
    this.scene = scene;
  }

  nameValidation() {
    if (this.data.name === null) {
      return "Name is required";
    }

    return null;
  }

  isNameValid() {
    return this.nameValidation() === null;
  }

  emailValidation() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.data.email === null) {
      return "Email is required";
    }

    if (!emailRegex.test(this.data.email)) {
      return "Invalid email format";
    }

    if (this.scene === "sign-up") {
      const isEmailAlreadyInUse = this.users.some(
        (user: any) => user.email === this.data.email,
      );

      if (isEmailAlreadyInUse) {
        return "Email is already in use";
      }
    }

    if (this.scene === "sign-in") {
      const loginUser = this.users.some(
        (user: any) => user.email === this.data.email,
      );

      if (!loginUser) {
        return "Email not found";
      }
    }

    return null;
  }

  isEmailValid() {
    return this.emailValidation() === null;
  }

  passwordValidation() {
    if (this.scene === "sign-in") {
      const loginUser = this.users.find(
        (user: any) => user.email === this.data.email,
      );

      if (loginUser) {
        if (loginUser.password !== this.data.password) {
          return "Incorrect password";
        }
      }
    }

    if (this.data.password === null) {
      return "Password is required";
    }

    if (this.data.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  }

  isPasswordValid() {
    return this.passwordValidation() === null;
  }

  confirmPasswordValidation() {
    if (this.data.confirmPassword === null) {
      return "Confirm password is required";
    }

    if (this.data.password !== this.data.confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  }

  isConfirmPasswordValid() {
    return this.confirmPasswordValidation() === null;
  }

  regionValidation() {
    if (this.data.region === null) {
      return "Region is required";
    }

    return null;
  }

  isRegionValid() {
    return this.regionValidation() === null;
  }

  subjectValidation() {
    if (this.data.subject.length === 0) {
      return "Subject is required";
    }

    return null;
  }

  isSubjectValid() {
    return this.subjectValidation() === null;
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
