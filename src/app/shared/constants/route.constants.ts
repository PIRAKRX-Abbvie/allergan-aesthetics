export const apiRoutes = {
  recaptcha: {
    getSiteKey: (recaptchaKey:string) => `/embedable/forms/recaptcha/${recaptchaKey}`,
  },
  contact: {
    formPost: () => '/embedable/forms/form-data-global-landing'
  }
}