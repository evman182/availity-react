let id = 0;

export default class MockUpload {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  id = (() => {
    id += 1;
    return id.toString();
  })();

  percentage = 0;

  errorMessage = null;

  status = 'pending';

  onProgress = [];

  onSuccess = [];

  onError = [];

  sendPassword = (password) => {
    if (password) {
      this.success();
    } else {
      this.error('Incorrect password', 'encrypted');
    }
  };

  progress = (amount = 10) => {
    this.percentage = Math.min(Math.max(amount + this.percentage, 0), 100);
    this.errorMessage = null;
    for (const fn of this.onProgress) fn();
    if (this.percentage === 100) {
      for (const fn of this.onSuccess) fn();
    }
  };

  success = () => {
    this.percentage = 100;
    this.errorMessage = null;
    this.status = 'accepted';
    for (const fn of this.onSuccess) fn();
  };

  error = (message = null, status = 'rejected') => {
    this.errorMessage = message;
    this.status = status;
    for (const fn of this.onError) fn();
  };

  reset = () => {
    this.percentage = 0;
    this.errorMessage = null;
    this.status = 'pending';
    this.progress(0);
  };
}
